export type Language = "es" | "en";

export const LANGUAGES: Language[] = ["es", "en"];

export const getDefaultLanguage = (): Language => {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("lang");
  if (stored === "en" || stored === "es") {
    return stored;
  }
  const navigatorLang = window.navigator.language.toLowerCase();
  return navigatorLang.startsWith("en") ? "en" : "es";
};
