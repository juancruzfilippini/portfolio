"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES, getDefaultLanguage } from "@/lib/i18n";
import { translations, type Translations } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => (typeof window === "undefined" ? "es" : getDefaultLanguage()));

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLanguage = useCallback((value: Language) => {
    setLang(value);
  }, []);

  const toggleLanguage = useCallback(() => {
    const currentIndex = LANGUAGES.indexOf(lang);
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
    setLanguage(LANGUAGES[nextIndex]);
  }, [lang, setLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, toggleLanguage, setLanguage, t: translations[lang] }),
    [lang, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
