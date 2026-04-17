"use server";

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nombre = formData.get("nombre") as string;
  const empresa = formData.get("empresa") as string;
  const email = formData.get("email") as string;
  const telefono = formData.get("telefono") as string;
  const plan = formData.get("plan") as string;
  const mensaje = formData.get("mensaje") as string;

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
