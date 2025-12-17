import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import Tag from "@/components/Tag";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  const title = `${project.title} | Juan Cruz`;
  const description = project.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://example.com/projects/${project.slug}`,
      type: "article",
      tags: project.tags,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <header className="glass-panel space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{project.title}</h1>
          <p className="max-w-3xl text-lg text-muted">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={project.links.repo || "#"} variant="secondary" disabled={!project.links.repo}>
            Repositorio
          </ButtonLink>
          <ButtonLink href={project.links.demo || "#"} variant="ghost" disabled={!project.links.demo}>
            Demo
          </ButtonLink>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section className="glass-panel space-y-3">
            <h2 className="text-xl font-semibold text-white">Problema</h2>
            <p className="text-muted">{project.problem}</p>
          </section>
          <section className="glass-panel space-y-3">
            <h2 className="text-xl font-semibold text-white">Solución</h2>
            <p className="text-muted">{project.solution}</p>
          </section>
          <section className="glass-panel space-y-4">
            <h2 className="text-xl font-semibold text-white">Highlights técnicos</h2>
            <ul className="grid gap-3 text-muted">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="glass-panel space-y-3">
            <h3 className="text-lg font-semibold text-white">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </section>
          <section className="glass-panel space-y-3">
            <h3 className="text-lg font-semibold text-white">Enlaces</h3>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <div className="flex items-center justify-between rounded-lg border border-slate-800/60 px-3 py-2">
                <span>Repositorio</span>
                {project.links.repo ? (
                  <ButtonLink href={project.links.repo} variant="ghost">
                    Abrir
                  </ButtonLink>
                ) : (
                  <span className="text-muted">No disponible</span>
                )}
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-800/60 px-3 py-2">
                <span>Demo</span>
                {project.links.demo ? (
                  <ButtonLink href={project.links.demo} variant="ghost">
                    Abrir
                  </ButtonLink>
                ) : (
                  <span className="text-muted">No disponible</span>
                )}
              </div>
            </div>
          </section>
          <section className="glass-panel space-y-4">
            <h3 className="text-lg font-semibold text-white">Capturas</h3>
            <div className="space-y-3">
              {project.images.map((image) => (
                <figure key={image.alt} className="space-y-2">
                  <div className="overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={500}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-muted">
                    {image.caption}
                    {image.isPlaceholder ? " · TODO: reemplazar con captura real" : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </article>
  );
}
