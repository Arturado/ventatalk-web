"use server";

import { headers } from "next/headers";
import {
  sanitizeInput,
  checkContactRateLimit,
} from "@/lib/security";

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: bots fill this field, humans don't
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    // Return fake success so bots don't know they were blocked
    return { success: true };
  }

  // Rate limiting by IP
  const headersList = headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "127.0.0.1";

  if (!checkContactRateLimit(ip)) {
    return {
      error: "Has enviado demasiados mensajes. Intenta de nuevo en una hora.",
    };
  }

  // Sanitize all inputs against XSS
  const nombre = sanitizeInput(formData.get("nombre") as string ?? "");
  const empresa = sanitizeInput(formData.get("empresa") as string ?? "");
  const email = sanitizeInput(formData.get("email") as string ?? "");
  const telefono = sanitizeInput(formData.get("telefono") as string ?? "");
  const plan = sanitizeInput(formData.get("plan") as string ?? "");
  const mensaje = sanitizeInput(formData.get("mensaje") as string ?? "");

  if (!nombre || !email || !empresa) {
    return { error: "Por favor completa los campos obligatorios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "El correo electrónico no es válido." };
  }

  // Aquí conectar con tu CRM, email o Slack webhook
  console.log("Nuevo lead:", { nombre, empresa, email, telefono, plan, mensaje });

  return { success: true };
}
