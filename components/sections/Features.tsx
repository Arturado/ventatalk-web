const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Catálogo inteligente propio",
    description:
      "Sube tu catálogo de productos con fotos, precios y variantes. El agente IA conoce cada detalle y responde consultas con precisión.",
    badge: "IA generativa",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "CRM integrado",
    description:
      "Cada conversación queda registrada. Ve el historial completo de cada cliente, sus preferencias y el estado de sus compras.",
    badge: "Gestión de clientes",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Follow-ups automáticos",
    description:
      "El agente recuerda a los clientes que dejaron el carrito abandonado, les envía recordatorios y ofertas personalizadas en el momento justo.",
    badge: "Automatización",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Pipeline de ventas visual",
    description:
      "Visualiza todas tus oportunidades de venta en un tablero Kanban. Arrastra, filtra y prioriza leads con un solo clic.",
    badge: "Ventas",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Respuestas instantáneas",
    description:
      "El agente responde en menos de 2 segundos, las 24 horas del día, los 7 días de la semana. Sin esperas, sin pérdida de clientes.",
    badge: "Velocidad",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Reportes y analytics",
    description:
      "Métricas claras: conversaciones, tasa de conversión, productos más consultados, horarios de mayor demanda y mucho más.",
    badge: "Insights",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Todo lo que necesitas para vender más
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            VentaTalk combina IA conversacional, gestión de clientes y automatización en una sola plataforma diseñada para PYMEs.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 border border-sky-100 hover:border-brand-primary hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-sky-50 group-hover:bg-brand-primary group-hover:text-white text-brand-primary rounded-xl flex items-center justify-center transition-colors duration-300">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold text-brand-primary bg-sky-50 px-2.5 py-1 rounded-full">
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-text mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-gradient-to-r from-brand-text to-brand-dark rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">¿Quieres ver todo esto en acción?</h3>
            <p className="text-sky-200">Agenda una demo de 20 minutos sin compromiso.</p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 bg-brand-cta text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Agendar demo gratis
          </a>
        </div>
      </div>
    </section>
  );
}
