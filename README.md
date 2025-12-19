# Portfolio de Juan Cruz

Portfolio personal construido con Next.js (App Router), TypeScript y Tailwind listo para desplegar en Vercel. Incluye páginas de inicio, proyectos, detalle por caso, sobre mí y contacto, tomando como base la experiencia real en Laravel, Node.js/Express, MySQL y operación en Linux.

## Estructura

- `src/app` - Rutas de la App Router (`/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`).
- `src/components` - Componentes reutilizables (Navbar, Footer, ProjectCard, Tag, Section, ButtonLink, proveedor de idioma).
- `src/data/projects.ts` - Fuente de datos estática bilingüe para proyectos destacados.
- `src/data/translations.ts` - Copia de textos para español/inglés.
- `public/images/placeholder.svg` - Placeholder para capturas hasta contar con imágenes reales.

## Ejecutar en local

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## Lint

```bash
npm run lint
```

## Despliegue en Vercel

1. Crear un proyecto en [Vercel](https://vercel.com/) y conectar este repositorio.
2. No requiere variables de entorno ni base de datos: el contenido es estático.
3. Usar el comando por defecto de Vercel (`npm run build`).
4. Confirmar que la carpeta de salida es `.next` (config por defecto de Next.js).

## Agregar o editar proyectos

1. Abrir `src/data/projects.ts`.
2. Cada entrada tiene estructura bilingüe:
   - `slug` y `links` comunes.
   - `translations.es` y `translations.en` con `title`, `summary`, `problem`, `solution`, `stack`, `tags`, `highlights`, `images`.
3. Las capturas pueden usar `public/images/placeholder.svg` hasta contar con imágenes reales (marcar `isPlaceholder: true`).
4. Si agregás links o capturas, el detalle `/projects/[slug]` los mostrará automáticamente en ambos idiomas.

## Cambio de idioma

- El switch ES/EN se encuentra en la barra de navegación y persiste la preferencia en `localStorage`.
- Los textos globales se editan en `src/data/translations.ts`.

## Fuente de los proyectos

El repositorio no incluye otros paquetes ni monorepo. Los proyectos cargados en `src/data/projects.ts` reflejan la experiencia descrita en el contexto del perfil (cobranzas mensuales en Laravel, gestión de turnos con Node/Express + Zod, ABM marcas-modelos en Laravel con AJAX, y soporte operativo MySQL/Linux).
