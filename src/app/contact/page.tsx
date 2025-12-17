import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contacto | Juan Cruz",
  description: "Conectemos para discutir tu próximo proyecto o revisar un incidente en producción.",
  openGraph: {
    title: "Contacto | Juan Cruz",
    description: "Conectemos para discutir tu próximo proyecto o revisar un incidente en producción.",
    url: "https://example.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
