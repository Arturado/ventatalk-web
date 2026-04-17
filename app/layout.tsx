import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "VentaTalk — Agente IA de Ventas para WhatsApp y Web Chat",
    template: "%s | VentaTalk",
  },
  description:
    "VentaTalk es el agente IA de ventas para PYMEs latinoamericanas. Atiende clientes 24/7 por WhatsApp y Web Chat, gestiona tu catálogo, hace seguimientos automáticos y cierra más ventas.",
  keywords: [
    "agente IA ventas",
    "chatbot WhatsApp ventas",
    "CRM PYME",
    "automatización ventas",
    "whatsapp business API",
    "ventas automáticas",
    "chat IA ventas",
    "SaaS latinoamerica",
  ],
  authors: [{ name: "VentaTalk" }],
  creator: "VentaTalk",
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: "https://ventatalk.io",
    siteName: "VentaTalk",
    title: "VentaTalk — Agente IA de Ventas para WhatsApp y Web Chat",
    description:
      "Atiende clientes 24/7, gestiona tu catálogo y cierra más ventas con IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VentaTalk — Agente IA de Ventas",
    description: "Atiende clientes 24/7 por WhatsApp y Web Chat con IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
