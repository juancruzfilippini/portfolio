import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import Tag from "@/components/Tag";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="glass-panel relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-200">
              <span className="rounded-full bg-white/10 px-3 py-1">Staff Software Engineer</span>
              <span>Laravel · Node.js · MySQL</span>
            </div>
            <h1 className="text-3xl leading-tight sm:text-4xl">Juan Cruz</h1>
            <p className="max-w-2xl text-lg text-muted sm:text-xl">
              Construyo sistemas web y APIs con foco en reglas de negocio, datos consistentes y operación en producción.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="primary">
                Ver proyectos
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contacto
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost">
                Sobre mí
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 text-sm text-muted">
            <div className="flex items-center justify-between rounded-lg border border-slate-800/60 bg-white/5 px-4 py-3">
              <span className="text-white">Cobranzas recurrentes</span>
              <Tag>Payments</Tag>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-slate-800/60 bg-white/5 px-4 py-3">
              <span className="text-white">Validación de APIs</span>
              <Tag>Zod</Tag>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-slate-800/60 bg-white/5 px-4 py-3">
              <span className="text-white">Diagnóstico en Linux</span>
              <Tag>DevOps</Tag>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="projects"
        title="Proyectos destacados"
        subtitle="Casos reales construidos con Laravel, Node.js y MySQL, priorizando reglas de negocio y operación estable."
        actions={<ButtonLink href="/projects" variant="secondary">Ver todos</ButtonLink>}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        title="Enfoque"
        subtitle="Combino desarrollo backend, UX práctica y diagnóstico de producción para entregar software que se sostiene en el tiempo."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass-panel space-y-2">
            <h3 className="text-lg text-white">Reglas de negocio primero</h3>
            <p className="text-sm text-muted">Estados claros, validaciones y modelos relacionales que reflejan el negocio (pagos mensuales, agendas, catálogos).</p>
          </div>
          <div className="glass-panel space-y-2">
            <h3 className="text-lg text-white">UX sin fricción</h3>
            <p className="text-sm text-muted">Altas y ediciones sin recargar, feedback inmediato y flujos diseñados junto a usuarios operativos.</p>
          </div>
          <div className="glass-panel space-y-2">
            <h3 className="text-lg text-white">Operación y soporte</h3>
            <p className="text-sm text-muted">Monitoreo, tuning de pools y resolución de incidentes MySQL/servidor para mantener la plataforma estable.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
