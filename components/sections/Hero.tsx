import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-text via-brand-dark to-sky-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-sky-200 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Nuevo: Integración nativa con WhatsApp Business API
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance mb-6">
              Tu agente IA de ventas,{" "}
              <span className="text-brand-secondary">disponible 24/7</span>
            </h1>

            <p className="text-lg sm:text-xl text-sky-100 leading-relaxed mb-8 max-w-lg">
              VentaTalk atiende a tus clientes por WhatsApp y Web Chat, gestiona tu catálogo, hace seguimientos automáticos y cierra ventas mientras tú duermes.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-orange-600 transition-colors duration-200 cursor-pointer text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Empezar en WhatsApp
              </Link>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium px-6 py-3.5 rounded-xl hover:bg-white/20 transition-colors duration-200 cursor-pointer text-base"
              >
                Ver demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "+500", label: "PYMEs activas" },
                { value: "98%", label: "Tasa respuesta" },
                { value: "3x", label: "Más conversiones" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sky-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Chat preview */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                {/* WhatsApp header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">VentaTalk Bot</p>
                    <p className="text-green-300 text-xs">En línea · IA activa</p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[320px]">
                  <ChatBubble
                    text="Hola! Me interesa el modelo X200, ¿tienen stock?"
                    isUser
                  />
                  <ChatBubble
                    text="¡Hola! Sí, tenemos el X200 disponible en negro y blanco. ¿Te envío las especificaciones y precio?"
                    isUser={false}
                  />
                  <ChatBubble text="Sí, por favor!" isUser />
                  <ChatBubble
                    text="Perfecto. El X200 está a $299.990. Incluye garantía de 1 año. ¿Te interesa reservar una unidad hoy? Tenemos solo 3 en stock."
                    isUser={false}
                  />
                  <div className="flex gap-2">
                    <button className="bg-brand-primary text-white text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-brand-dark transition-colors">
                      Reservar ahora
                    </button>
                    <button className="bg-white text-gray-600 text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                      Ver más opciones
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-cta text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                IA en tiempo real
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-brand-text text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-sky-100">
                Respuesta en &lt;2 segundos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#F0F9FF" />
        </svg>
      </div>
    </section>
  );
}

function ChatBubble({ text, isUser }: { text: string; isUser: boolean }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
          isUser
            ? "bg-[#DCF8C6] text-gray-800 rounded-br-sm"
            : "bg-white text-gray-800 rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
