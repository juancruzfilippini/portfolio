"use client";

import { useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsContent() {
  const { t, lang } = useLanguage();
  const localizedProjects = useMemo(() => getProjects(lang), [lang]);

  return (
    <Section title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {localizedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
