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
    slug: "sistema-estacionamiento",
    links: { repo: "https://github.com/juancruzfilippini/sistema_estacionamiento", demo: "" },
    translations: {
      es: {
        title: "Sistema de estacionamiento",
        summary: "Aplicación para gestionar vehículos, abonos y operación diaria de un estacionamiento.",
        problem:
          "Un estacionamiento necesitaba centralizar el registro de vehículos y sus abonos en un único sistema.",
        solution:
          "Se consolidó la gestión de vehículos, propietarios y estados de pago en una plataforma de uso diario.",
        stack: ["Stack no especificado"],
        tags: ["Payments", "CRUD", "Parking"],
        highlights: [
          "Registro centralizado de vehículos y clientes.",
          "Seguimiento del estado de abonos y pagos.",
          "Operación diaria con panel de control y listados.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Sistema de estacionamiento",
            caption: "Captura pendiente del sistema",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Parking management system",
        summary: "Application to manage vehicles, subscriptions, and daily parking operations.",
        problem:
          "A parking business needed a single system to manage vehicles and their recurring payments.",
        solution:
          "Centralized vehicle, owner, and payment status management into a daily operations platform.",
        stack: ["Stack not specified"],
        tags: ["Payments", "CRUD", "Parking"],
        highlights: [
          "Centralized vehicle and customer registry.",
          "Payment and subscription status tracking.",
          "Daily operations dashboard and listings.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Parking management system",
            caption: "Screenshot pending",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
  {
    slug: "rrhh-reloj-biometrico",
    links: { repo: "https://github.com/Luciano-Badilla/rrhh-relojbiometricoHU", demo: "" },
    translations: {
      es: {
        title: "RRHH - Reloj biométrico",
        summary: "Registro y control de asistencia del personal mediante reloj biométrico.",
        problem:
          "RRHH necesitaba consolidar fichajes biométricos para controlar asistencia y novedades.",
        solution:
          "Se integró la información de fichadas biométricas con reportes y vistas de control.",
        stack: ["Stack no especificado"],
        tags: ["RRHH", "Attendance", "Reporting"],
        highlights: [
          "Consolidación de asistencias y fichajes.",
          "Paneles para revisión de novedades.",
          "Reportes para administración de RRHH.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "RRHH reloj biométrico",
            caption: "Captura pendiente del módulo RRHH",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "HR biometric clock",
        summary: "Attendance tracking and control using biometric time clocks.",
        problem:
          "HR teams needed to consolidate biometric punches to track attendance and incidents.",
        solution:
          "Integrated biometric punch data with reporting and oversight dashboards.",
        stack: ["Stack not specified"],
        tags: ["HR", "Attendance", "Reporting"],
        highlights: [
          "Attendance and punch consolidation.",
          "Dashboards to review incidents.",
          "Reports for HR administration.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "HR biometric clock",
            caption: "Screenshot pending",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
  {
    slug: "aulas",
    links: { repo: "https://github.com/juancruzfilippini/aulas", demo: "" },
    translations: {
      es: {
        title: "Gestión de aulas",
        summary: "Organización de aulas y reservas para instituciones educativas.",
        problem:
          "Las instituciones necesitaban ordenar la disponibilidad de aulas y sus asignaciones.",
        solution:
          "Se estructuró un módulo para registrar aulas, responsables y reservas asociadas.",
        stack: ["Stack no especificado"],
        tags: ["Scheduling", "Education", "CRUD"],
        highlights: [
          "Registro de aulas y disponibilidad.",
          "Asignaciones con responsables y horarios.",
          "Vista general para coordinar ocupación.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Gestión de aulas",
            caption: "Captura pendiente del módulo de aulas",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Classroom management",
        summary: "Organizes classrooms and reservations for educational institutions.",
        problem:
          "Institutions needed to manage classroom availability and assignments.",
        solution:
          "Built a module to register classrooms, owners, and related reservations.",
        stack: ["Stack not specified"],
        tags: ["Scheduling", "Education", "CRUD"],
        highlights: [
          "Classroom registry and availability.",
          "Assignments with owners and schedules.",
          "Overview to coordinate occupancy.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Classroom management",
            caption: "Screenshot pending",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
  {
    slug: "presupuestos",
    links: { repo: "https://github.com/juancruzfilippini/presupuestos", demo: "" },
    translations: {
      es: {
        title: "Presupuestos y cotizaciones",
        summary: "Gestión de presupuestos para clientes con seguimiento del estado.",
        problem:
          "Era necesario centralizar la creación y el control de presupuestos para clientes.",
        solution:
          "Se organizó un flujo de presupuestos con datos de clientes, ítems y estados.",
        stack: ["Stack no especificado"],
        tags: ["Sales", "Quotations", "CRUD"],
        highlights: [
          "Registro de clientes y presupuestos asociados.",
          "Detalle de ítems y montos por propuesta.",
          "Seguimiento del estado de cada presupuesto.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Presupuestos",
            caption: "Captura pendiente del flujo de presupuestos",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Budgets and quotations",
        summary: "Quotation management for clients with status tracking.",
        problem:
          "A centralized way to create and track client quotations was needed.",
        solution:
          "Structured a quotation flow with customer data, items, and statuses.",
        stack: ["Stack not specified"],
        tags: ["Sales", "Quotations", "CRUD"],
        highlights: [
          "Customer registry linked to quotations.",
          "Itemized proposals with totals.",
          "Status tracking for each quotation.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Budgets and quotations",
            caption: "Screenshot pending",
            isPlaceholder: true,
          },
        ],
      },
    },
  },
  {
    slug: "ticketera-hu",
    links: { repo: "https://github.com/Luciano-Badilla/ticketeraHU", demo: "" },
    translations: {
      es: {
        title: "Ticketera HU",
        summary: "Sistema de tickets para soporte interno y seguimiento de incidencias.",
        problem:
          "Se requería ordenar solicitudes internas y dar seguimiento a incidencias.",
        solution:
          "Se implementó una ticketera con estados y seguimiento de cada solicitud.",
        stack: ["Stack no especificado"],
        tags: ["Support", "Tickets", "Workflow"],
        highlights: [
          "Registro y seguimiento de incidencias.",
          "Estados para ordenar el flujo de soporte.",
          "Panel para priorizar y resolver solicitudes.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Ticketera HU",
            caption: "Captura pendiente del tablero de tickets",
            isPlaceholder: true,
          },
        ],
      },
      en: {
        title: "Ticketing system HU",
        summary: "Ticketing system for internal support and incident tracking.",
        problem:
          "Internal requests needed to be organized and tracked.",
        solution:
          "Implemented a ticketing workflow with status tracking for each request.",
        stack: ["Stack not specified"],
        tags: ["Support", "Tickets", "Workflow"],
        highlights: [
          "Incident registration and tracking.",
          "Status-driven support workflow.",
          "Dashboard to prioritize and resolve requests.",
        ],
        images: [
          {
            src: "/images/placeholder.svg",
            alt: "Ticketing system HU",
            caption: "Screenshot pending",
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
