"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-white/5 px-4 py-3 shadow-lg shadow-cyan-500/10 backdrop-blur sm:px-6">
      <Link href="/" className="text-lg font-semibold tracking-tight text-white">
        Juan Cruz
      </Link>
      <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 sm:gap-3">
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
    </header>
  );
}
