"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/components/LanguageProvider";

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
}

export default function ButtonLink({ variant = "primary", disabled = false, className = "", ...props }: ButtonLinkProps) {
  const { t } = useLanguage();
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants: Record<typeof variant, string> = {
    primary: "bg-cyan-400 text-slate-900 hover:bg-cyan-300 focus-visible:outline-cyan-200",
    secondary: "border border-slate-700 text-white hover:border-cyan-300 hover:text-cyan-100 focus-visible:outline-cyan-200",
    ghost: "text-slate-400 hover:text-white",
  };

  if (disabled) {
    return (
      <span
        className={`${baseClasses} cursor-not-allowed border border-dashed border-slate-700 text-slate-400 opacity-70 ${className}`}
      >
        {t.projectDetail.unavailable}
      </span>
    );
  }

  return <Link {...props} className={`${baseClasses} ${variants[variant]} ${className}`} />;
}
