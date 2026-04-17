import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentación — Guías de integración y API",
  description:
    "Documentación técnica de VentaTalk. Guías de integración con WhatsApp Business API, widget Web Chat, API REST y más.",
};

const docCategories = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Inicio rápido",
    description: "Configura tu primer agente en menos de 10 minutos.",
    items: ["Crear cuenta", "Configurar WhatsApp", "Subir catálogo", "Primer mensaje"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web Chat Widget",
    description: "Instala el chat en tu sitio web con una sola línea.",
    items: ["Instalación básica", "Personalización", "Eventos y callbacks", "Seguridad"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "API REST",
    description: "Integra VentaTalk con tus sistemas propios.",
    items: ["Autenticación", "Endpoints", "Webhooks", "Ejemplos de código"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Catálogo y Productos",
    description: "Gestiona tu catálogo de productos desde la API o panel.",
    items: ["Formato de catálogo", "Importación masiva", "Variantes y stock", "Imágenes"],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-brand-bg pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Documentación
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text mb-4">
            Todo lo que necesitas saber
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Guías, referencias de API y ejemplos para integrar VentaTalk en tu negocio.
          </p>
        </div>

        {/* Categories preview */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {docCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 border border-sky-100 hover:border-brand-primary hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sky-50 text-brand-primary rounded-xl flex items-center justify-center">
                  {cat.icon}
                </div>
                <h2 className="font-bold text-brand-text">{cat.title}</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">{cat.description}</p>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="bg-brand-text rounded-3xl p-10 text-center text-white">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Documentación completa en preparación</h2>
          <p className="text-sky-200 mb-6 max-w-lg mx-auto">
            Estamos escribiendo guías detalladas para cada integración. Mientras tanto, nuestro equipo puede ayudarte directamente.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Hablar con soporte técnico
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
