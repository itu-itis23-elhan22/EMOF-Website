"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import tr from "../../locales/tr.json";
import en from "../../locales/en.json";

type Lang = "tr" | "en";
type Messages = typeof tr;

const dictionaries: Record<Lang, Messages> = {
  tr,
  en,
};

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
  // default TR
  const [lang, setLangState] = useState<Lang>("tr");

  // İlk açılışta: sadece localStorage'daki değeri dikkate al
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored === "tr" || stored === "en") {
      setLangState(stored);
    }
    // stored yoksa zaten "tr" olarak kalıyor
  }, []);

  const setLang = (value: Lang) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", value);
    }
  };

  const t = (key: string): string => {
    const dict = dictionaries[lang] ?? dictionaries.tr;

    // 1) Önce nested key dene: "navbar.corporate" → dict.navbar.corporate
    const nested = getNested(dict, key);
    if (typeof nested === "string") return nested;

    // 2) Olmazsa flat key dene: dict["navbar.corporate"]
    const flat = (dict as any)[key];
    if (typeof flat === "string") return flat;

    // 3) Hiçbiri yoksa key'i aynen döndür
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
