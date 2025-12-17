import Link from "next/link";
import type { Project } from "@/data/projects";
import ButtonLink from "./ButtonLink";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.summary}</p>
        </div>
        <Link href={`/projects/${project.slug}`} className="text-cyan-200 hover:text-white" aria-label={project.title}>
          →
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={`/projects/${project.slug}`} variant="secondary">
          Ver detalle
        </ButtonLink>
        <ButtonLink href={project.links.repo || "#"} variant="ghost" disabled={!project.links.repo}>
          Repositorio
        </ButtonLink>
      </div>
    </article>
  );
}
