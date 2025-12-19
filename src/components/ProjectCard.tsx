"use client";

import type { LocalizedProject } from "@/data/projects";
import ButtonLink from "./ButtonLink";
import Tag from "./Tag";
import { useLanguage } from "@/components/LanguageProvider";

interface ProjectCardProps {
  project: LocalizedProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article className="glass-panel flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-400">{project.summary}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={project.links.repo || "#"} variant="ghost" disabled={!project.links.repo}>
          {t.common.repo}
        </ButtonLink>
      </div>
    </article>
  );
}
