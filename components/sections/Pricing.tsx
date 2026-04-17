import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$29.900",
    period: "/mes",
    description: "Para negocios que están comenzando con la automatización de ventas.",
    cta: "Empezar gratis",
    highlight: false,
    features: [
      "1 canal (WhatsApp o Web Chat)",
      "Hasta 500 conversaciones/mes",
      "Catálogo de hasta 50 productos",
      "CRM básico con historial",
      "Reportes mensuales",
      "Soporte por email",
    ],
    notIncluded: [
      "Follow-ups automáticos",
      "Pipeline de ventas",
      "Múltiples agentes",
    ],
  },
  {
    name: "Pro",
    price: "$59.900",
    period: "/mes",
    description: "Para PYMEs en crecimiento que quieren automatizar su proceso de ventas completo.",
    cta: "Empezar con Pro",
    highlight: true,
    badge: "Más popular",
    features: [
      "2 canales (WhatsApp + Web Chat)",
      "Conversaciones ilimitadas",
      "Catálogo ilimitado de productos",
      "CRM completo con pipeline",
      "Follow-ups automáticos",
      "Reportes en tiempo real",
      "Soporte prioritario por chat",
      "Integración con Google Sheets",
    ],
    notIncluded: [
      "API personalizada",
    ],
  },
  {
    name: "Business",
    price: "$99.900",
    period: "/mes",
    description: "Para empresas que necesitan personalización total y soporte dedicado.",
    cta: "Contactar ventas",
    highlight: false,
    features: [
      "Canales ilimitados",
      "Conversaciones ilimitadas",
      "Catálogo ilimitado",
      "CRM avanzado con automatizaciones",
      "Follow-ups y campañas masivas",
      "API REST completa",
      "Múltiples usuarios y roles",
      "Agente personalizado con tu marca",
      "Integración con sistemas propios",
      "Soporte dedicado 24/7",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Precios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Planes simples y transparentes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sin costos ocultos, sin contratos anuales forzosos. Cancela cuando quieras.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border-2 transition-shadow duration-300 ${
                plan.highlight
                  ? "border-brand-primary bg-brand-text text-white shadow-2xl shadow-brand-primary/20 scale-105"
                  : "border-sky-100 bg-white hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-cta text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-brand-text"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-brand-text"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-sky-200" : "text-slate-400"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-sky-200" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <Link
                href="/#contacto"
                className={`block text-center font-semibold py-3 rounded-xl mb-8 transition-colors duration-200 cursor-pointer ${
                  plan.highlight
                    ? "bg-brand-cta text-white hover:bg-orange-600"
                    : "bg-brand-bg text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-brand-secondary" : "text-brand-primary"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-sky-100" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm opacity-40">
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className={plan.highlight ? "text-sky-200" : "text-slate-400"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ strip */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 text-sm">
            Todos los precios son en pesos chilenos (CLP) e incluyen IVA.{" "}
            <Link href="/pricing" className="text-brand-primary font-medium hover:underline cursor-pointer">
              Ver comparación completa de planes
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
