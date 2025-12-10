"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Çoklu JSON dosyalarını import ediyoruz
import navbarTR from "../../locales/tr/navbar.json";
import heroTR from "../../locales/tr/hero.json";
import homeTR from "../../locales/tr/home.json";

import navbarEN from "../../locales/en/navbar.json";
import heroEN from "../../locales/en/hero.json";
import homeEN from "../../locales/en/home.json";

// Dil tipi
type Lang = "tr" | "en";

// Tüm JSON'ları tek birleştirilmiş obje hâline getiriyoruz
const dictionaries = {
  tr: {
    navbar: navbarTR,
    hero: heroTR,
    home: homeTR,
  },
  en: {
    navbar: navbarEN,
    hero: heroEN,
    home: homeEN,
  },
} as const;

type Dictionary = typeof dictionaries.tr;

interface LanguageContextValue {
  lang: Lang;
  t: (key: string) => string;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

// "a.b.c" gibi path'leri objeden okuyan yardımcı fonksiyon
function getNested(obj: any, path: string) {
  return path.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return acc[part];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  // İlk açılışta localStorage kontrolü
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored === "tr" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  const setLang = (value: Lang) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", value);
    }
  };

  const t = (key: string): string => {
    const dict: Dictionary = dictionaries[lang];

    // nested lookup (örn: "navbar.tabs.corporate")
    const nested = getNested(dict, key);
    if (typeof nested === "string") return nested;

    // fallback olarak flat lookup dene
    const flat = (dict as any)[key];
    if (typeof flat === "string") return flat;

    // hiç bulunamazsa key'i aynı döndür
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
