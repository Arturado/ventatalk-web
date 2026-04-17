export default function Channels() {
  return (
    <section id="canales" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Canales de atención
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Vende donde están tus clientes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un solo agente IA, dos canales poderosos. Atiende consultas, envía catálogos y cierra ventas sin intervención humana.
          </p>
        </div>

        {/* Channels grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* WhatsApp */}
          <div className="group relative bg-gradient-to-br from-[#075E54] to-[#128C7E] rounded-3xl p-8 text-white overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-3">WhatsApp Business</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                Conecta con la plataforma de mensajería más usada en Latinoamérica. Tu agente IA responde, cotiza y vende directamente desde el chat.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Integración oficial con WhatsApp Business API",
                  "Envío de catálogo interactivo con imágenes",
                  "Confirmación de pedidos y pagos por chat",
                  "Notificaciones proactivas y seguimientos",
                  "Múltiples agentes humanos como respaldo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-green-100">
                    <svg className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer">
                Conectar WhatsApp
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Web Chat */}
          <div className="group relative bg-gradient-to-br from-brand-text to-brand-dark rounded-3xl p-8 text-white overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-3">Web Chat Embebible</h3>
              <p className="text-sky-200 mb-6 leading-relaxed">
                Instala un widget de chat en tu sitio web con una sola línea de código. Tu agente IA atiende a los visitantes y los convierte en clientes.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Widget personalizable con tus colores y marca",
                  "Instalación en 1 línea de código JavaScript",
                  "Compatible con cualquier CMS o framework",
                  "Captura de leads con formulario inteligente",
                  "Historial de conversaciones en tu CRM",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-sky-200">
                    <svg className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Code snippet */}
              <div className="bg-black/30 rounded-xl p-3 mb-6 font-mono text-xs text-green-300 overflow-x-auto">
                <span className="text-gray-400">&lt;script</span>{" "}
                <span className="text-yellow-300">src</span>
                <span className="text-gray-400">=</span>
                <span className="text-green-300">&quot;ventatalk.js&quot;</span>{" "}
                <span className="text-yellow-300">data-key</span>
                <span className="text-gray-400">=</span>
                <span className="text-green-300">&quot;tu-api-key&quot;</span>
                <span className="text-gray-400">&gt;&lt;/script&gt;</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer">
                Instalar widget
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 bg-sky-50 rounded-2xl px-8 py-5 flex flex-wrap gap-6 justify-center items-center">
          {[
            { icon: "🔒", text: "Datos cifrados end-to-end" },
            { icon: "⚡", text: "Uptime 99.9% garantizado" },
            { icon: "🌎", text: "Servidores en Latinoamérica" },
            { icon: "🛡️", text: "Cumple con GDPR y Ley 19.628" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-brand-text font-medium">
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
