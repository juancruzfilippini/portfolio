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

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  links: ProjectLink;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "parking-cobranzas",
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
    links: {
      repo: "",
      demo: "",
    },
    images: [
      {
        src: "/images/placeholder.svg",
        alt: "Pantallas del sistema de estacionamiento",
        caption: "TODO: Reemplazar con captura real del panel de cobranzas",
        isPlaceholder: true,
      },
    ],
  },
  {
    slug: "gestion-turnos",
    title: "Gestión de horarios y turnos operativos",
    summary: "Asignación inmediata de turnos con persistencia en tablas shifts, schedule y schedule_staff.",
    problem:
      "Los equipos necesitaban cargar y confirmar turnos sin demoras ni doble asignación.",
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
    links: {
      repo: "",
      demo: "",
    },
    images: [
      {
        src: "/images/placeholder.svg",
        alt: "Dashboard de turnos",
        caption: "TODO: Agregar captura de la agenda y asignaciones",
        isPlaceholder: true,
      },
    ],
  },
  {
    slug: "marcas-modelos",
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
    links: {
      repo: "",
      demo: "",
    },
    images: [
      {
        src: "/images/placeholder.svg",
        alt: "Gestión de marcas y modelos",
        caption: "TODO: Incluir captura del flujo de autocompletado",
        isPlaceholder: true,
      },
    ],
  },
  {
    slug: "operacion-mysql",
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
    links: {
      repo: "",
      demo: "",
    },
    images: [
      {
        src: "/images/placeholder.svg",
        alt: "Operación y monitoreo",
        caption: "TODO: Añadir gráfica o captura de monitoreo de conexiones",
        isPlaceholder: true,
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
