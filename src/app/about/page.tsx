import type { Metadata } from "next";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "Sobre mí | Juan Cruz",
  description:
    "Staff Software Engineer especializado en Laravel, Node.js/Express, MySQL y operación de sistemas Linux.",
  openGraph: {
    title: "Sobre mí | Juan Cruz",
    description:
      "Staff Software Engineer especializado en Laravel, Node.js/Express, MySQL y operación de sistemas Linux.",
    url: "https://example.com/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <Section
      title="Sobre mí"
      subtitle="Desarrollo productos end-to-end: modelado de negocio, APIs, interfaces operativas y soporte en producción."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-panel space-y-3 lg:col-span-2">
          <h3 className="text-lg font-semibold text-white">Resumen</h3>
          <p className="text-slate-400">
            Soy un desarrollador con experiencia real construyendo sistemas en Laravel y Node.js/Express, siempre pegado al negocio:
            cobranzas recurrentes, agendas operativas y catálogos vivos. He desplegado en servidores Linux por SSH, ajustado pools de
            conexión y diagnosticado incidentes de MySQL.
          </p>
          <p className="text-slate-400">
            Disfruto aterrizar requerimientos en modelos claros, con validaciones y feedback inmediato para quienes operan las
            herramientas. También acompaño la operación: reviso logs, puertos y procesos, y dejo recomendaciones para que el software
            siga funcionando después de la entrega.
          </p>
        </div>

        <div className="glass-panel space-y-3">
          <h3 className="text-lg font-semibold text-white">Stack y fortalezas</h3>
          <div className="flex flex-wrap gap-2">
            {["Laravel", "Node.js/Express", "Zod", "MySQL", "Blade", "Tailwind", "Linux", "SSH deploys"].map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-400">
            <li>Modelado de dominios con relaciones complejas (M:N, estados, tarifas).</li>
            <li>Validaciones en backend con Zod y control de errores desde la API.</li>
            <li>Interacciones sin recargar: modales, autocompletado y feedback inmediato.</li>
            <li>Tuning de pools (HikariCP) y desbloqueo de hosts MySQL cuando max_connect_errors golpea.</li>
            <li>Deploys en Linux por SSH y diagnóstico de procesos/puertos en incidentes.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
