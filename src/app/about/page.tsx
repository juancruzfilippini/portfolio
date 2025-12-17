import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Sobre mí | Juan Cruz",
  description:
    "Tecnico Universitario en Programación especializado en Laravel, Node.js/Express, MySQL y operación de sistemas Linux.",
  openGraph: {
    title: "Sobre mí | Juan Cruz",
    description:
      "Tecnico Universitario en Programación especializado en Laravel, Node.js/Express, MySQL y operación de sistemas Linux.",
    url: "https://example.com/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
