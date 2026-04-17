"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-sky-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </div>
            <span
              className={`font-bold text-xl transition-colors duration-300 ${
                scrolled ? "text-brand-text" : "text-white"
              }`}
            >
              VentaTalk
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "/#canales", label: "Canales" },
              { href: "/#features", label: "Funciones" },
              { href: "/pricing", label: "Precios" },
              { href: "/blog", label: "Blog" },
              { href: "/docs", label: "Docs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-primary cursor-pointer ${
                  scrolled ? "text-brand-text" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contacto"
              className="text-sm font-medium text-brand-primary border border-brand-primary px-4 py-2 rounded-lg hover:bg-brand-primary hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Hablar con ventas
            </Link>
            <Link
              href="/#contacto"
              className="text-sm font-semibold bg-brand-cta text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 cursor-pointer"
            >
              Probar gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg cursor-pointer ${
              scrolled ? "text-brand-text" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-sky-100 py-4 space-y-2">
            {[
              { href: "/#canales", label: "Canales" },
              { href: "/#features", label: "Funciones" },
              { href: "/pricing", label: "Precios" },
              { href: "/blog", label: "Blog" },
              { href: "/docs", label: "Docs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-brand-text hover:text-brand-primary hover:bg-sky-50 rounded-lg cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2 flex flex-col gap-2">
              <Link
                href="/#contacto"
                className="text-center text-sm font-medium text-brand-primary border border-brand-primary px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Hablar con ventas
              </Link>
              <Link
                href="/#contacto"
                className="text-center text-sm font-semibold bg-brand-cta text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Probar gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
