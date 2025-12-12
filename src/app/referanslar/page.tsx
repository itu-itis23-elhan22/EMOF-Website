"use client";

import { useLanguage } from "../i18n/LanguageContext";
import referencesTR from "../../locales/tr/references.json";
import referencesEN from "../../locales/en/references.json";
import PageTransition from "../components/PageTransition";

const referencesData = {
  tr: referencesTR,
  en: referencesEN,
} as const;

export default function ReferanslarPage() {
  const { lang } = useLanguage();
  const data = referencesData[lang];

  return (
        <PageTransition>
    
    <main className="bg-slate-950 min-h-screen py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER */}
        <section className="space-y-5">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
            {data.header.label}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            {data.header.title}
          </h1>

          <p className="text-slate-300 max-w-3xl text-sm md:text-base">
            {data.header.intro}
          </p>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.stats.map((item) => (
            <div
              key={item.label}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 text-center shadow-lg"
            >
              <p className="text-3xl md:text-4xl font-bold text-blue-400">
                {item.value}
              </p>
              <p className="text-xs mt-2 text-slate-300 tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* SECTORS */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {data.sectorsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.sectors.map((sector) => (
              <div
                key={sector.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 shadow-xl"
              >
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  {sector.title}
                </h3>
                <p className="text-slate-300 text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT TYPES */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {data.projectsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.projects.map((p) => (
              <div
                key={p.name}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 shadow-xl"
              >
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  {p.name}
                </h3>
                <p className="text-slate-300 text-sm">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
        </PageTransition>
    
  );
}
