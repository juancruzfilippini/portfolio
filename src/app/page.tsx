"use client";

import { useMemo } from "react";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import Tag from "@/components/Tag";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const featuredProjects = useMemo(() => getProjects(lang).slice(0, 3), [lang]);

  return (
    <div className="space-y-12">
      <section className="glass-panel relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-200">
              <span className="rounded-full bg-white/10 px-3 py-1">{t.hero.role}</span>
              <span>{t.hero.badgeMeta}</span>
            </div>
            <h1 className="text-3xl leading-tight sm:text-4xl">Juan Cruz</h1>
            <p className="max-w-2xl text-lg text-slate-400 sm:text-xl">{t.hero.description}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="primary">
                {t.hero.ctaProjects}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                {t.hero.ctaContact}
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost">
                {t.hero.ctaAbout}
              </ButtonLink>
            </div>
          </div>
          <div className="grid w-full max-w-md gap-4 rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 text-sm text-slate-400 sm:max-w-sm">
            {t.hero.highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-slate-800/60 bg-white/5 px-4 py-3"
              >
                <span className="text-white">{item.label}</span>
                <Tag>{item.tag}</Tag>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="projects"
        title={t.home.featuredTitle}
        subtitle={t.home.featuredSubtitle}
        actions={
          <ButtonLink href="/projects" variant="secondary">
            {t.home.viewAll}
          </ButtonLink>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section title={t.home.approachTitle} subtitle={t.home.approachSubtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.home.approach.map((item) => (
            <div key={item.title} className="glass-panel space-y-2">
              <h3 className="text-lg text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
