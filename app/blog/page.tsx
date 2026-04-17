import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Recursos y Consejos de Ventas",
  description:
    "Artículos, guías y consejos para PYMEs latinoamericanas sobre ventas, automatización y atención al cliente con IA.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-brand-bg pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text mb-4">
            Recursos para vender más
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Guías, consejos y casos de éxito para PYMEs que quieren crecer con IA.
          </p>
        </div>

        {/* Coming soon state */}
        <div className="bg-white rounded-3xl border border-sky-100 p-16 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-brand-text mb-3">Artículos en camino</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Estamos preparando contenido de valor sobre ventas con IA, automatización y casos de éxito de PYMEs latinoamericanas.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark transition-colors cursor-pointer"
          >
            Avisarme cuando publiquen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
