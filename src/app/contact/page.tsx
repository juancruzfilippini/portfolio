import type { Metadata } from "next";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Contacto | Juan Cruz",
  description: "Conectemos para discutir tu próximo proyecto o revisar un incidente en producción.",
  openGraph: {
    title: "Contacto | Juan Cruz",
    description: "Conectemos para discutir tu próximo proyecto o revisar un incidente en producción.",
    url: "https://example.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Section
      title="Contacto"
      subtitle="Contame qué estás construyendo o qué problema querés resolver. Respondo en menos de 24 hs."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <form
          className="glass-panel space-y-4"
          action="mailto:juan.cruz@example.com"
          method="POST"
          encType="text/plain"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-white">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-slate-800/60 bg-slate-900/50 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-800/60 bg-slate-900/50 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-white">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-slate-800/60 bg-slate-900/50 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>
          <p className="text-xs text-muted">
            Este formulario usa mailto y no guarda datos en servidor. Si preferís, escribime directo.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Enviar
          </button>
        </form>

        <div className="glass-panel space-y-3">
          <h3 className="text-lg font-semibold text-white">También podés contactarme</h3>
          <p className="text-muted">Correo directo: juan.cruz@example.com</p>
          <ButtonLink href="mailto:juan.cruz@example.com" variant="secondary">
            Abrir cliente de correo
          </ButtonLink>
          <p className="text-muted text-sm">
            Incluí contexto del proyecto, tecnologías usadas y urgencia. Si es un incidente de base de datos, agrega logs y métrica
            de conexiones para acelerar el diagnóstico.
          </p>
        </div>
      </div>
    </Section>
  );
}
