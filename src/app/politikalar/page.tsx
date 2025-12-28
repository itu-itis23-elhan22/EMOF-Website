"use client";

import { useLanguage } from "../i18n/LanguageContext";
import policiesTR from "../../locales/tr/policies.json";
import policiesEN from "../../locales/en/policies.json";
import PageTransition from "../components/PageTransition";

const policiesData = {
  tr: policiesTR,
  en: policiesEN,
} as const;

export default function PolitikalarPage() {
  const { lang } = useLanguage();
  const data = policiesData[lang];

  return (
    <PageTransition>

      <main className="bg-slate-950 text-white min-h-screen">
        {/* HEADER */}
        <section className="relative py-24 bg-gradient-to-b from-blue-900/40 to-slate-950">
          {/* GRID OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-6">
            <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
              {data.header.label}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              {data.header.titleMain}
              <span className="text-blue-400">
                {data.header.titleHighlight}
              </span>
            </h1>

            <p className="text-slate-300 max-w-2xl text-lg">
              {data.header.intro}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 py-20 space-y-14">
          <div className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <ul className="space-y-6 relative z-10">
              {(data as any).policyItems?.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="text-blue-400 text-xl mt-1">➤</span>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Standards */}
          <div className="p-10 bg-gradient-to-r from-slate-900/20 to-blue-900/20 rounded-2xl border border-blue-900/40 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-300">
              {data.standards.title}
            </h3>

            <ul className="text-slate-300 text-lg space-y-1 text-center">
              {data.standards.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </PageTransition>

  );
}
