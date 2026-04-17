import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precios — Planes Starter, Pro y Business",
  description:
    "Conoce todos los planes de VentaTalk. Starter desde $29.900/mes, Pro $59.900/mes, Business $99.900/mes. Sin contratos anuales.",
};

const plans = [
  {
    name: "Starter",
    price: "$29.900",
    description: "Para negocios que están comenzando con la automatización de ventas.",
    highlight: false,
    features: {
      "Canales": "1 canal (WhatsApp o Web Chat)",
      "Conversaciones": "500 / mes",
      "Productos en catálogo": "Hasta 50",
      "CRM": "Básico",
      "Follow-ups automáticos": false,
      "Pipeline de ventas": false,
      "Múltiples usuarios": false,
      "Reportes": "Mensuales",
      "API REST": false,
      "Soporte": "Email (48h)",
      "Onboarding": "Guía de inicio",
    },
  },
  {
    name: "Pro",
    price: "$59.900",
    description: "Para PYMEs en crecimiento con proceso de ventas completo.",
    highlight: true,
    badge: "Más popular",
    features: {
      "Canales": "WhatsApp + Web Chat",
      "Conversaciones": "Ilimitadas",
      "Productos en catálogo": "Ilimitados",
      "CRM": "Completo con pipeline",
      "Follow-ups automáticos": true,
      "Pipeline de ventas": true,
      "Múltiples usuarios": "Hasta 5",
      "Reportes": "Tiempo real",
      "API REST": false,
      "Soporte": "Chat prioritario (4h)",
      "Onboarding": "Sesión 1:1",
    },
  },
  {
    name: "Business",
    price: "$99.900",
    description: "Para empresas con necesidades de personalización y escala.",
    highlight: false,
    features: {
      "Canales": "Ilimitados",
      "Conversaciones": "Ilimitadas",
      "Productos en catálogo": "Ilimitados",
      "CRM": "Avanzado + automatizaciones",
      "Follow-ups automáticos": true,
      "Pipeline de ventas": true,
      "Múltiples usuarios": "Ilimitados",
      "Reportes": "Custom + exportación",
      "API REST": true,
      "Soporte": "Dedicado 24/7",
      "Onboarding": "Implementación guiada",
    },
  },
];

const featureKeys = [
  "Canales",
  "Conversaciones",
  "Productos en catálogo",
  "CRM",
  "Follow-ups automáticos",
  "Pipeline de ventas",
  "Múltiples usuarios",
  "Reportes",
  "API REST",
  "Soporte",
  "Onboarding",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-bg pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <span className="inline-block bg-sky-100 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Precios
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text mb-4">
          Planes simples y transparentes
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Elige el plan que se adapte a tu negocio. Cambia o cancela cuando quieras.
        </p>
      </div>

      {/* Plan cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border-2 ${
                plan.highlight
                  ? "border-brand-primary bg-brand-text text-white shadow-2xl"
                  : "border-sky-100 bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-cta text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h2 className={`text-2xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-brand-text"}`}>
                {plan.name}
              </h2>
              <div className="flex items-end gap-1 mb-3">
                <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-brand-text"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlight ? "text-sky-300" : "text-slate-400"}`}>/mes</span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-sky-200" : "text-slate-500"}`}>{plan.description}</p>
              <Link
                href="/#contacto"
                className={`block text-center font-semibold py-3 rounded-xl transition-colors duration-200 cursor-pointer ${
                  plan.highlight
                    ? "bg-brand-cta text-white hover:bg-orange-600"
                    : "bg-brand-bg text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white"
                }`}
              >
                {plan.name === "Business" ? "Contactar ventas" : "Empezar ahora"}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-3xl border border-sky-100 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-sky-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400 w-1/3">
                    Característica
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-6 py-4 text-center text-sm font-bold ${
                        plan.highlight ? "text-brand-primary" : "text-brand-text"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((key, i) => (
                  <tr
                    key={key}
                    className={i % 2 === 0 ? "bg-white" : "bg-sky-50/40"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-brand-text">{key}</td>
                    {plans.map((plan) => {
                      const val = plan.features[key as keyof typeof plan.features];
                      return (
                        <td key={plan.name} className="px-6 py-4 text-center text-sm text-slate-600">
                          {val === true ? (
                            <svg className="w-5 h-5 text-brand-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : val === false ? (
                            <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          ) : (
                            <span>{val as string}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto pb-16">
          <h2 className="text-2xl font-bold text-brand-text text-center mb-10">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Puedo cambiar de plan en cualquier momento?",
                a: "Sí, puedes hacer upgrade o downgrade en cualquier momento desde tu panel. Los cambios se aplican en el próximo ciclo de facturación.",
              },
              {
                q: "¿Se requiere contrato anual?",
                a: "No. Todos los planes son mensuales y puedes cancelar cuando quieras, sin penalidades.",
              },
              {
                q: "¿Qué pasa si supero el límite de conversaciones en Starter?",
                a: "Te notificamos cuando te acerques al límite y puedes hacer upgrade al plan Pro sin perder ningún dato.",
              },
              {
                q: "¿Los precios incluyen IVA?",
                a: "Sí, todos los precios mostrados incluyen IVA (19%) y están expresados en pesos chilenos.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-sky-100">
                <h3 className="font-semibold text-brand-text mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
