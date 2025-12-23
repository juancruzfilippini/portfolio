import type { Language } from "@/lib/i18n";

export type Translations = {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    role: string;
    description: string;
    badgeMeta: string;
    ctaProjects: string;
    ctaContact: string;
    ctaAbout: string;
    highlights: { label: string; tag: string }[];
  };
  home: {
    featuredTitle: string;
    featuredSubtitle: string;
    approachTitle: string;
    approachSubtitle: string;
    approach: { title: string; description: string }[];
    viewAll: string;
  };
  projects: {
    title: string;
    subtitle: string;
    detail: string;
    repository: string;
  };
  projectDetail: {
    problem: string;
    solution: string;
    highlights: string;
    stack: string;
    links: string;
    repository: string;
    demo: string;
    unavailable: string;
    captures: string;
    todoCapture: string;
    notFound: string;
  };
  about: {
    title: string;
    subtitle: string;
    overviewTitle: string;
    experienceTitle: string;
    skillsTitle: string;
    overview: string[];
    experience: string[];
    skills: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    note: string;
    directHeading: string;
    emailLabel: string;
    mailtoCta: string;
    socialHeading: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    helper: string;
  };
  footer: {
    rights: string;
    projects: string;
    about: string;
    contact: string;
  };
  common: {
    viewDetail: string;
    viewProject: string;
    repo: string;
  };
};

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      role: "Tecnico Universitario en Programación",
      description:
        "Construyo sistemas web y APIs con foco en reglas de negocio, datos consistentes y operación en producción.",
      badgeMeta: "Laravel · Node.js · MySQL",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contacto",
      ctaAbout: "Sobre mí",
      highlights: [
        { label: "Cobranzas recurrentes", tag: "Payments" },
        { label: "Validación de APIs", tag: "Zod" },
        { label: "Diagnóstico en Linux", tag: "DevOps" },
      ],
    },
    home: {
      featuredTitle: "Proyectos destacados",
      featuredSubtitle:
        "Casos reales construidos con Laravel, Node.js y MySQL, priorizando reglas de negocio y operación estable.",
      approachTitle: "Enfoque",
      approachSubtitle:
        "Combino desarrollo backend, UX práctica y diagnóstico de producción para entregar software que se sostiene en el tiempo.",
      approach: [
        {
          title: "Reglas de negocio primero",
          description:
            "Estados claros, validaciones y modelos relacionales que reflejan el negocio (pagos mensuales, agendas, catálogos).",
        },
        {
          title: "UX sin fricción",
          description: "Altas y ediciones sin recargar, feedback inmediato y flujos diseñados junto a usuarios operativos.",
        },
        {
          title: "Operación y soporte",
          description:
            "Monitoreo, tuning de pools y resolución de incidentes MySQL/servidor para mantener la plataforma estable.",
        },
      ],
      viewAll: "Ver todos",
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Sistemas y APIs centrados en reglas de negocio, validación rigurosa y operación en producción.",
      detail: "Ver detalle",
      repository: "Repositorio",
    },
    projectDetail: {
      problem: "Problema",
      solution: "Solución",
      highlights: "Highlights técnicos",
      stack: "Stack",
      links: "Enlaces",
      repository: "Repositorio",
      demo: "Demo",
      unavailable: "No disponible",
      captures: "Capturas",
      todoCapture: "TODO: reemplazar con captura real",
      notFound: "Proyecto no encontrado",
    },
    about: {
      title: "Sobre mí",
      subtitle: "Perfil técnico enfocado en resolver problemas reales con software mantenible.",
      overviewTitle: "Resumen",
      experienceTitle: "",
      skillsTitle: "Stack y fortalezas",
      overview: [
        "Tecnico Universitario en Programación con experiencia en backend y operación de sistemas web.",
        "He construido y mantenido aplicaciones en Laravel, Node.js/Express y MySQL, incluyendo despliegues en Linux por SSH.",
        "Me enfoco en reglas de negocio claras, validaciones consistentes y diagnósticos de producción cuando algo falla.",
        "Actualmente me encuentro trabajando como Analista Programador en NECTA. Manejando grandes bases de datos y utilizando tecnologias como Java, PHP, JavaScript, React, Laravel y NodeJS.",
      ],
      experience: [
      ],
      skills: [
        "Laravel (MVC, Eloquent, Blade)",
        "Node.js/Express + Zod", "MySQL", "Diagnóstico en Linux", "Deploy por SSH", "UX pragmática",
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Escribime para colaborar en nuevos proyectos o diagnosticar sistemas en producción.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar",
      },
      note: "El formulario abre tu cliente de correo con el mensaje listo para enviar.",
      directHeading: "También podés contactarme",
      emailLabel: "Correo directo: juancruzfilippini@gmail.com",
      mailtoCta: "Abrir cliente de correo",
      socialHeading: "Más formas de contacto",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      helper:
        "",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    common: {
      viewDetail: "Ver detalle",
      viewProject: "Ver proyectos",
      repo: "Repositorio",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      role: "University Technician in Programming",
      description:
        "I build web systems and APIs focused on business rules, consistent data, and production-ready operations.",
      badgeMeta: "Laravel · Node.js · MySQL",
      ctaProjects: "View projects",
      ctaContact: "Contact",
      ctaAbout: "About me",
      highlights: [
        { label: "Recurring billing", tag: "Payments" },
        { label: "API validation", tag: "Zod" },
        { label: "Linux diagnosis", tag: "DevOps" },
      ],
    },
    home: {
      featuredTitle: "Featured projects",
      featuredSubtitle:
        "Real cases built with Laravel, Node.js, and MySQL, prioritizing business rules and stable operations.",
      approachTitle: "Approach",
      approachSubtitle:
        "I blend backend development, pragmatic UX, and production diagnostics to deliver software that lasts.",
      approach: [
        {
          title: "Business rules first",
          description:
            "Clear states, validations, and relational models that reflect the business (monthly payments, schedules, catalogs).",
        },
        {
          title: "Low-friction UX",
          description: "Creates and edits without reloads, instant feedback, and flows designed with operational users.",
        },
        {
          title: "Operations & support",
          description: "Monitoring, pool tuning, and MySQL/server incident resolution to keep platforms stable.",
        },
      ],
      viewAll: "View all",
    },
    projects: {
      title: "Projects",
      subtitle: "Systems and APIs centered on business rules, strong validation, and production readiness.",
      detail: "View details",
      repository: "Repository",
    },
    projectDetail: {
      problem: "Problem",
      solution: "Solution",
      highlights: "Technical highlights",
      stack: "Stack",
      links: "Links",
      repository: "Repository",
      demo: "Demo",
      unavailable: "Not available",
      captures: "Captures",
      todoCapture: "TODO: replace with real screenshot",
      notFound: "Project not found",
    },
    about: {
      title: "About",
      subtitle: "Technical profile focused on solving real problems with maintainable software.",
      overviewTitle: "Overview",
      experienceTitle: "",
      skillsTitle: "Stack & strengths",
      overview: [
        "Tecnico Universitario en Programación with experience in backend and operating web systems.",
        "I have built and maintained Laravel, Node.js/Express, and MySQL applications, including SSH deployments to Linux.",
        "I focus on clear business rules, consistent validations, and production diagnostics when things break.",
        "I am currently working as a Programmer Analyst at NECTA. I manage large databases and use technologies such as Java, PHP, JavaScript, React, Laravel, and NodeJS.",
      ],
      experience: [
      ],
      skills: [
        "Laravel (MVC, Eloquent, Blade)",
        "Node.js/Express + Zod", "MySQL", "Linux diagnostics", "SSH deploys", "Pragmatic UX",
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Reach out to collaborate on new projects or troubleshoot production systems.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send",
      },
      note: "The form opens your email client with the message ready to send.",
      directHeading: "You can also reach me here",
      emailLabel: "Direct email: juancruzfilippini@gmail.com",
      mailtoCta: "Open email client",
      socialHeading: "More ways to connect",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      helper:
        "",
    },
    footer: {
      rights: "All rights reserved.",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    common: {
      viewDetail: "View details",
      viewProject: "View projects",
      repo: "Repository",
    },
  },
};
