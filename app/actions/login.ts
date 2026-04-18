"use server";

import { headers } from "next/headers";
import {
  sanitizeInput,
  checkLoginAllowed,
  recordFailedLogin,
  resetLoginAttempts,
} from "@/lib/security";

export type LoginFormState = {
  success?: boolean;
  error?: string;
  minutesLeft?: number;
};

// Replace with real credential lookup (DB, Auth provider, etc.)
const DEMO_EMAIL = "admin@ventatalk.com";
const DEMO_PASSWORD = "demo1234";

export async function submitLogin(
  _prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const headersList = headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "127.0.0.1";

  // Check if IP is blocked
  const { allowed, minutesLeft } = checkLoginAllowed(ip);
  if (!allowed) {
    return {
      error: `Demasiados intentos fallidos. Intenta de nuevo en ${minutesLeft} minuto${minutesLeft === 1 ? "" : "s"}.`,
      minutesLeft,
    };
  }

  // Sanitize inputs
  const email = sanitizeInput(formData.get("email") as string ?? "");
  const password = sanitizeInput(formData.get("password") as string ?? "");

  if (!email || !password) {
    return { error: "Completa todos los campos." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "El correo electrónico no es válido." };
  }

  // Validate credentials (replace with real auth logic)
  const valid = email === DEMO_EMAIL && password === DEMO_PASSWORD;

  if (!valid) {
    recordFailedLogin(ip);
    return { error: "Credenciales incorrectas." };
  }

  resetLoginAttempts(ip);
  return { success: true };
}
