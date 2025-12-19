"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-12 flex flex-col gap-4 border-t border-slate-800/50 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-slate-400">© {new Date().getFullYear()} Juan Cruz. {t.footer.rights}</p>
      <div className="flex flex-wrap items-center gap-3">
        <Link href="mailto:juancruzfilippini@gmail.com" className="hover:text-white">
          juancruzfilippini@gmail.com
        </Link>
        <span className="text-slate-700">•</span>
        <Link href="/projects" className="hover:text-white">
          {t.footer.projects}
        </Link>
        <span className="text-slate-700">•</span>
        <Link href="/about" className="hover:text-white">
          {t.footer.about}
        </Link>
        <span className="text-slate-700">•</span>
        <Link href="/contact" className="hover:text-white">
          {t.footer.contact}
        </Link>
      </div>
    </footer>
  );
}
