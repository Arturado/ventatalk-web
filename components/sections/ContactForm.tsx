"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-brand-cta text-white font-semibold py-3.5 rounded-xl hover:bg-orange-600 transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Enviando...
        </>
      ) : (
        "Solicitar demo gratuita"
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <section id="contacto" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="inline-block bg-sky-100 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
              Empecemos a vender más juntos
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Cuéntanos sobre tu negocio y te mostraremos cómo VentaTalk puede multiplicar tus ventas. Sin compromiso, sin tarjeta de crédito.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Demo en 24 horas",
                  desc: "Te contactamos al día siguiente hábil para coordinar.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "14 días de prueba gratis",
                  desc: "Acceso completo sin pagar nada.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Onboarding personalizado",
                  desc: "Te ayudamos a configurar tu catálogo y primer agente.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-sky-100 p-8">
            {state.success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-500 text-sm">
                  Te contactaremos a la brevedad para coordinar tu demo. ¡Gracias!
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                {/* Honeypot: hidden from humans, filled by bots */}
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
                >
                  <label htmlFor="website">Sitio web (no llenar)</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-brand-text mb-1.5">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-brand-text text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-brand-text mb-1.5">
                      Empresa <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-brand-text text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1.5">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@empresa.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-brand-text text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-brand-text mb-1.5">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+56 9 1234 5678"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-brand-text text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-brand-text mb-1.5">
                    Plan de interés
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition bg-white cursor-pointer"
                  >
                    <option value="">Selecciona un plan...</option>
                    <option value="starter">Starter — $29.900/mes</option>
                    <option value="pro">Pro — $59.900/mes</option>
                    <option value="business">Business — $99.900/mes</option>
                    <option value="no-se">No lo tengo claro aún</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-brand-text mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-brand-text text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition resize-none"
                  />
                </div>

                {state.error && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                    {state.error}
                  </p>
                )}

                <SubmitButton />

                <p className="text-xs text-slate-400 text-center">
                  Al enviar aceptas nuestra{" "}
                  <a href="/privacidad" className="text-brand-primary hover:underline cursor-pointer">
                    política de privacidad
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
