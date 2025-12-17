import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-4 border-t border-slate-800/50 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-slate-400">© {new Date().getFullYear()} Juan Cruz. Portfolio desplegable en Vercel.</p>
      <div className="flex flex-wrap items-center gap-3">
        <Link href="mailto:juan.cruz@example.com" className="hover:text-white">
          juan.cruz@example.com
        </Link>
        <span className="text-slate-700">•</span>
        <Link href="/projects" className="hover:text-white">
          Proyectos
        </Link>
        <span className="text-slate-700">•</span>
        <Link href="/about" className="hover:text-white">
          Sobre mí
        </Link>
      </div>
    </footer>
  );
}
