import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectEntry, projects } from "@/data/projects";
import ProjectDetailContent from "./ProjectDetailContent";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const { slug } = params;
  const project = getProjectEntry(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  const content = project.translations.es;
  const title = `${content.title} | Juan Cruz Filippini`;
  const description = content.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://example.com/projects/${project.slug}`,
      type: "article",
      tags: content.tags,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectEntry(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent slug={slug} />;
}
