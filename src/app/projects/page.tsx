import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

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
  return (
    <Section
      title="Proyectos"
      subtitle="Casos seleccionados con foco en reglas de negocio, validaciones y soporte operativo."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
