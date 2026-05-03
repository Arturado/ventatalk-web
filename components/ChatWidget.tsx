"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: number;
}

const STORAGE_KEY_MESSAGES = "ventatalk_chat_messages";
const STORAGE_KEY_SESSION = "ventatalk_session_id";
const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "bot",
  text: "¡Hola! 👋 Soy el asistente de VentaTalk. Puedo contarte sobre nuestros planes, funcionalidades o resolver cualquier duda. ¿En qué te puedo ayudar?",
  timestamp: Date.now(),
};

function generateId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [hasOpened, setHasOpened] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load persisted data
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY_MESSAGES);
    const storedSession = localStorage.getItem(STORAGE_KEY_SESSION);

    if (stored) {
      try {
        const parsed: Message[] = JSON.parse(stored);
        setMessages(parsed);
        setHasOpened(true);
      } catch {
        // ignore parse errors
      }
    }
    if (storedSession) {
      setSessionId(storedSession);
    }
  }, []);

  // Persist messages
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const open = useCallback(() => {
    setIsOpen(true);
    setUnreadCount(0);

    if (!hasOpened) {
      setHasOpened(true);
      setMessages([WELCOME_MESSAGE]);
    }
  }, [hasOpened]);

  const close = useCallback(() => setIsOpen(false), []);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    let sid = sessionId;
    if (!sid) {
      sid = generateId();
      setSessionId(sid);
      localStorage.setItem(STORAGE_KEY_SESSION, sid);
    }

    const userMsg: Message = {
      id: generateId(),
      role: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://api.ventatalk.com"}/api/v1/chat/widget`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, session_id: sid }),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const botText: string =
        data.message || data.response || data.text || "Sin respuesta.";

      const botMsg: Message = {
        id: generateId(),
        role: "bot",
        text: botText,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);

      if (!isOpen) {
        setUnreadCount((c) => c + 1);
      }
    } catch {
      const errorMsg: Message = {
        id: generateId(),
        role: "bot",
        text: "Ups, hubo un problema. Intenta de nuevo.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMsg]);

      if (!isOpen) {
        setUnreadCount((c) => c + 1);
      }
    } finally {
      setIsTyping(false);
    }
  }, [input, isTyping, sessionId, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed z-50 flex flex-col bg-white shadow-2xl transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
          bottom-0 right-0 w-full h-full
          sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[520px] sm:rounded-2xl`}
        style={{ transformOrigin: "bottom right" }}
        role="dialog"
        aria-label="Chat VentaTalk"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl bg-[#2563EB] text-white flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2563EB]">
                <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">Asistente VentaTalk</p>
              <p className="flex items-center gap-1 text-xs text-blue-100">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
                En línea
              </p>
            </div>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Cerrar chat"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed break-words
                  ${msg.role === "user"
                    ? "bg-[#2563EB] text-white rounded-br-sm"
                    : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-3 border-t border-gray-100 bg-white flex-shrink-0 sm:rounded-b-2xl">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-2.5 text-sm bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition-all placeholder-gray-400"
            disabled={isTyping}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2563EB] text-white flex-shrink-0 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Enviar mensaje"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={isOpen ? close : open}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,99,235,0.5)] hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
          </svg>
        </span>

        {/* Unread badge */}
        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>
    </>
  );
}
