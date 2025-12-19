import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Proyectos | Juan Cruz",
  description: "Sistemas y APIs construidos con Laravel, Node.js y MySQL, listos para operación en producción.",
  openGraph: {
    title: "Proyectos | Juan Cruz",
    description: "Sistemas y APIs construidos con Laravel, Node.js y MySQL, listos para operación en producción.",
    type: "website",
    url: "https://example.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
