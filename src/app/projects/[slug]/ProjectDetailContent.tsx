"use client";

import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Tag from "@/components/Tag";
import { getProjectBySlug } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

interface ProjectDetailContentProps {
  slug: string;
}

export default function ProjectDetailContent({ slug }: ProjectDetailContentProps) {
  const { lang, t } = useLanguage();
  const project = getProjectBySlug(slug, lang);

  if (!project) {
    return (
      <article className="glass-panel">
        <p className="text-slate-200">{t.projectDetail.notFound}</p>
      </article>
    );
  }

  return (
    <article className="space-y-10">
      <header className="glass-panel space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{project.title}</h1>
          <p className="max-w-3xl text-lg text-slate-400">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={project.links.repo || "#"} variant="secondary" disabled={!project.links.repo}>
            {t.projectDetail.repository}
          </ButtonLink>
          <ButtonLink href={project.links.demo || "#"} variant="ghost" disabled={!project.links.demo}>
            {t.projectDetail.demo}
          </ButtonLink>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section className="glass-panel space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.projectDetail.problem}</h2>
            <p className="text-slate-400">{project.problem}</p>
          </section>
          <section className="glass-panel space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.projectDetail.solution}</h2>
            <p className="text-slate-400">{project.solution}</p>
          </section>
          <section className="glass-panel space-y-4">
            <h2 className="text-xl font-semibold text-white">{t.projectDetail.highlights}</h2>
            <ul className="grid gap-3 text-slate-400">
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
            <h3 className="text-lg font-semibold text-white">{t.projectDetail.stack}</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </section>
          <section className="glass-panel space-y-3">
            <h3 className="text-lg font-semibold text-white">{t.projectDetail.links}</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <div className="flex items-center justify-between rounded-lg border border-slate-800/60 px-3 py-2">
                <span>{t.projectDetail.repository}</span>
                {project.links.repo ? (
                  <ButtonLink href={project.links.repo} variant="ghost">
                    {t.projectDetail.repository}
                  </ButtonLink>
                ) : (
                  <span className="text-slate-400">{t.projectDetail.unavailable}</span>
                )}
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-800/60 px-3 py-2">
                <span>{t.projectDetail.demo}</span>
                {project.links.demo ? (
                  <ButtonLink href={project.links.demo} variant="ghost">
                    {t.projectDetail.demo}
                  </ButtonLink>
                ) : (
                  <span className="text-slate-400">{t.projectDetail.unavailable}</span>
                )}
              </div>
            </div>
          </section>
          <section className="glass-panel space-y-4">
            <h3 className="text-lg font-semibold text-white">{t.projectDetail.captures}</h3>
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
                  <figcaption className="text-xs text-slate-400">
                    {image.caption}
                    {image.isPlaceholder ? ` · ${t.projectDetail.todoCapture}` : null}
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
