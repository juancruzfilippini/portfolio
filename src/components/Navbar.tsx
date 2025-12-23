"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLanguage, t } = useLanguage();
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800/60 bg-white/5 px-4 py-3 shadow-lg shadow-cyan-500/10 backdrop-blur sm:flex-nowrap sm:px-6">
      <Link href="/" className="text-lg font-semibold tracking-tight text-white">
        Juan Cruz Filippini
      </Link>
      <div className="flex flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-400 sm:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 transition-colors hover:text-white ${
                  isActive ? "bg-white/10 text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={toggleLanguage}
          className="rounded-full border border-slate-800/60 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          aria-label="Toggle language"
          aria-pressed={lang === "en"}
        >
          {lang === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      </div>
    </header>
  );
}
