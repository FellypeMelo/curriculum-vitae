import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { TRANSLATIONS, type Language, type TranslationSchema } from "../data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt";

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    if (urlLang === "en" || urlLang === "pt") {
      return urlLang;
    }

    const saved = localStorage.getItem("app_lang");
    if (saved === "en" || saved === "pt") {
      return saved;
    }

    if (navigator.language && navigator.language.toLowerCase().startsWith("en")) {
      return "en";
    }
  } catch {
    /* ignore */
  }

  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem("app_lang", next);
      document.documentElement.lang = next === "en" ? "en" : "pt-BR";
      document.title =
        next === "en"
          ? "FELLYPE MELO // SOFTWARE ENGINEER & AI · B.S. ADS · FAETERJ-RIO"
          : "FELLYPE MELO // SOFTWARE ENGINEER & IA · ADS · FAETERJ-RIO";

      // Sync URL parameter cleanly without page reload
      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.history.replaceState({}, "", url.toString());
    } catch {
      /* ignore */
    }
  };

  const toggleLang = () => {
    setLang(lang === "pt" ? "en" : "pt");
  };

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.title =
      lang === "en"
        ? "FELLYPE MELO // SOFTWARE ENGINEER & AI · B.S. ADS · FAETERJ-RIO"
        : "FELLYPE MELO // SOFTWARE ENGINEER & IA · ADS · FAETERJ-RIO";
  }, [lang]);

  const value: LanguageContextType = {
    lang,
    setLang,
    toggleLang,
    t: TRANSLATIONS[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
