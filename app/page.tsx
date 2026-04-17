import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Channels from "@/components/sections/Channels";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "VentaTalk — Agente IA de Ventas para WhatsApp y Web Chat",
  description:
    "Automatiza tus ventas con IA. VentaTalk atiende clientes 24/7 por WhatsApp y Web Chat, gestiona tu catálogo y cierra más ventas para tu PYME.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Channels />
      <Features />
      <Pricing />
      <ContactForm />
    </>
  );
}
