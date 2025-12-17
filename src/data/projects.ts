import type { Language } from "@/lib/i18n";

export type ProjectLink = {
  repo?: string;
  demo?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
};

export type LocalizedProjectContent = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  images: ProjectImage[];
};

export type ProjectEntry = {
  slug: string;
  translations: Record<Language, LocalizedProjectContent>;
  links: ProjectLink;
};

export type LocalizedProject = LocalizedProjectContent & {
  slug: string;
  links: ProjectLink;
};

export const projects: ProjectEntry[] = [
  {
    slug: "parking-cobranzas",
    links: { repo: "", demo: "" },
    translations: {
      es: {
        title: "Sistema de estacionamiento con cobranzas mensuales",
        summary: "Automatización de cuotas y estados de pago para abonados de estacionamiento.",
        problem:
          "El estacionamiento necesitaba controlar abonos mensuales y cortar la morosidad sin depender de tareas manuales.",
        solution:
          "Se modelaron estados automáticos (pending, debtor, paid), tarifas por vehículo y la relación muchos-a-muchos entre dueños y vehículos para facturar y regularizar pagos.",
        stack: ["Laravel", "Eloquent", "Blade", "MySQL"],
        tags: ["Payments", "CRUD", "Relaciones M:N", "Laravel"],
        highlights: [
          "Estados que rotan cada mes (pending → debtor → paid) según fechas de corte y pagos registrados.",
          "Tarifas configurables por vehículo, con cálculo de adeudos y control de vigencias.",
          "Dueños con múltiples vehículos y vehículos compartidos entre dueños, manteniendo histórico.",
          "Panel CRUD con modales Blade y validaciones server-side para evitar inconsistencias.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Pantallas del sistema de estacionamiento",
            caption: "TODO: Reemplazar con captura real del panel de cobranzas",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Monthly parking billing system",
        summary: "Automates monthly dues and payment states for parking subscribers.",
        problem:
          "The parking lot needed to control monthly subscriptions and curb delinquency without manual follow-ups.",
        solution:
          "Modeled automatic states (pending, debtor, paid), per-vehicle rates, and the many-to-many owner/vehicle relationship to invoice and regularize payments.",
        stack: ["Laravel", "Eloquent", "Blade", "MySQL"],
        tags: ["Payments", "CRUD", "Many-to-many", "Laravel"],
        highlights: [
          "Monthly state rotation (pending → debtor → paid) based on cutoff dates and recorded payments.",
          "Configurable rates per vehicle with debt calculation and validity control.",
          "Owners with multiple vehicles and shared vehicles across owners while keeping history.",
          "CRUD panel with Blade modals and server-side validations to prevent inconsistencies.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Parking billing console",
            caption: "TODO: Replace with an actual billing console screenshot",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
  {
    slug: "gestion-turnos",
    links: { repo: "", demo: "" },
    translations: {
      es: {
        title: "Gestión de horarios y turnos operativos",
        summary: "Asignación inmediata de turnos con persistencia en tablas shifts, schedule y schedule_staff.",
        problem: "Los equipos necesitaban cargar y confirmar turnos sin demoras ni doble asignación.",
        solution:
          "Se diseñó un flujo de guardado inmediato en tablas de agenda, con validaciones de solapamientos y actualización instantánea para el personal.",
        stack: ["Node.js", "Express", "Zod", "MySQL"],
        tags: ["Scheduling", "CRUD", "Validation"],
        highlights: [
          "Persistencia inmediata en tablas shifts, schedule y schedule_staff al guardar un cambio.",
          "Validación de payloads con Zod para evitar solapes y datos incompletos.",
          "API REST con control de concurrencia ligera para mantener la agenda consistente.",
          "Vistas con feedback inmediato para staff y supervisores.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Dashboard de turnos",
            caption: "TODO: Agregar captura de la agenda y asignaciones",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Scheduling and shift management",
        summary: "Immediate shift assignments persisted across shifts, schedule, and schedule_staff tables.",
        problem: "Teams needed to load and confirm shifts without delays or double booking.",
        solution:
          "Designed an immediate save flow across agenda tables with overlap validation and instant updates for staff.",
        stack: ["Node.js", "Express", "Zod", "MySQL"],
        tags: ["Scheduling", "CRUD", "Validation"],
        highlights: [
          "Instant persistence to shifts, schedule, and schedule_staff tables on every save.",
          "Payload validation with Zod to avoid overlaps and incomplete records.",
          "REST API with lightweight concurrency control to keep the schedule consistent.",
          "UI with immediate feedback for staff and supervisors.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Shift scheduling dashboard",
            caption: "TODO: Add a capture of the schedule and assignments",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
  {
    slug: "marcas-modelos",
    links: { repo: "", demo: "" },
    translations: {
      es: {
        title: "Gestión de marcas y modelos con autocompletado",
        summary: "ABM de marcas y modelos con creación en vivo y búsqueda incremental.",
        problem:
          "El catálogo de vehículos crecía y requería alta rápida sin recargar la página, con búsquedas fluidas.",
        solution:
          "Se implementaron listados jerárquicos y un input con autocompletado que permite dar de alta nuevas marcas y modelos vía AJAX.",
        stack: ["Laravel", "Blade", "AJAX", "MySQL"],
        tags: ["CRUD", "UX", "Autocomplete"],
        highlights: [
          "Listado maestro-detalle: marcas y sus modelos en una misma vista.",
          "Autocompletado de marcas con alta inline y persistencia sin recargar.",
          "Modales para crear y editar modelos, con validaciones y mensajes inmediatos.",
          "Endpoints ligeros para búsqueda incremental y uso desde JavaScript.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Gestión de marcas y modelos",
            caption: "TODO: Incluir captura del flujo de autocompletado",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Brand and model management with autocomplete",
        summary: "CRUD for brands and models with live creation and incremental search.",
        problem:
          "The vehicle catalog kept growing and needed fast creation without page reloads plus smooth searching.",
        solution:
          "Implemented hierarchical listings and an autocomplete input that allows creating new brands and models via AJAX.",
        stack: ["Laravel", "Blade", "AJAX", "MySQL"],
        tags: ["CRUD", "UX", "Autocomplete"],
        highlights: [
          "Master-detail view: brands and their models in a single screen.",
          "Brand autocomplete with inline creation and persistence without reloads.",
          "Modals to create and edit models with validations and immediate feedback.",
          "Lightweight endpoints for incremental search consumed from JavaScript.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Brand and model management UI",
            caption: "TODO: Add a capture of the autocomplete flow",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
  {
    slug: "operacion-mysql",
    links: { repo: "", demo: "" },
    translations: {
      es: {
        title: "Operación y diagnóstico de aplicaciones en MySQL/Linux",
        summary: "Soporte productivo para apps Java/Spring, Laravel y Node, con tuning de pools y mitigación de incidentes MySQL.",
        problem:
          "Incidentes recurrentes por conexiones bloqueadas, timeouts y saturación de recursos en servidores Linux.",
        solution:
          "Monitoreo de procesos/puertos, ajustes de HikariCP y desbloqueo de hosts afectados por max_connect_errors, además de análisis de logs para aislar fallas.",
        stack: ["Linux", "MySQL", "HikariCP", "Java", "Laravel", "Node.js"],
        tags: ["DevOps", "Reliability", "Incident Response"],
        highlights: [
          "Diagnóstico de pools HikariCP y ajuste de conexiones máximas según capacidad del servidor.",
          "Desbloqueo de hosts afectados por max_connect_errors y endurecimiento de parámetros de red.",
          "Revisión de logs de aplicación y sistema para encontrar procesos colgados o puertos en uso.",
          "Plan de acción para incidentes repetitivos y seguimiento post-mortem ligero.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Operación y monitoreo",
            caption: "TODO: Añadir gráfica o captura de monitoreo de conexiones",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Operations and MySQL/Linux troubleshooting",
        summary:
          "Production support for Java/Spring, Laravel, and Node apps with pool tuning and MySQL incident mitigation.",
        problem:
          "Recurring incidents due to blocked connections, timeouts, and resource saturation on Linux servers.",
        solution:
          "Monitoring processes/ports, tuning HikariCP, and unlocking hosts affected by max_connect_errors, plus log analysis to isolate failures.",
        stack: ["Linux", "MySQL", "HikariCP", "Java", "Laravel", "Node.js"],
        tags: ["DevOps", "Reliability", "Incident Response"],
        highlights: [
          "Diagnosed HikariCP pools and adjusted max connections according to server capacity.",
          "Unlocked hosts affected by max_connect_errors and hardened network parameters.",
          "Reviewed app and system logs to find stuck processes or ports in use.",
          "Action plan for recurring incidents with lightweight postmortem follow-up.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Operations and monitoring",
            caption: "TODO: Add a chart or screenshot showing connection monitoring",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
];

export const getProjects = (lang: Language): LocalizedProject[] =>
  projects.map((project) => ({ ...project.translations[lang], slug: project.slug, links: project.links }));

export const getProjectBySlug = (slug: string, lang: Language): LocalizedProject | undefined =>
  projects
    .filter((project) => project.slug === slug)
    .map((project) => ({ ...project.translations[lang], slug: project.slug, links: project.links }))
    .at(0);

export const getProjectEntry = (slug: string) => projects.find((project) => project.slug === slug);
