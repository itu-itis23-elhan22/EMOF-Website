"use client";

import { useState } from "react";
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
  const [selectedRef, setSelectedRef] = useState<any | null>(null);

  return (
    <PageTransition>
      <main className="bg-slate-950 min-h-screen py-24 px-6 text-white relative">
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

          {/* REFERENCES LIST (Interactive) */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {data.referencesTitle}
            </h2>
            <div className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                {data.referencesList?.map((ref: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                    onClick={() => setSelectedRef(ref)}
                    title={lang === 'tr' ? 'Detay için tıklayın' : 'Click for details'}
                  >
                    <div className="h-24 w-full relative flex items-center justify-center bg-white/5 rounded-xl p-4 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105 group-hover:ring-2 ring-blue-500/50">
                      <img
                        src={ref.image}
                        alt={ref.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerText = ref.name;
                          e.currentTarget.parentElement!.classList.add('text-white', 'font-bold', 'text-center');
                        }}
                      />
                    </div>
                    <span className="mt-3 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {lang === 'tr' ? 'Detay için tıklayın' : 'Click for details'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* MODAL */}
        {selectedRef && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedRef(null)}
          >
            <div
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedRef(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-xl"
              >
                ✕
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-32 w-full bg-white/5 rounded-xl flex items-center justify-center p-6">
                  <img
                    src={selectedRef.image}
                    alt={selectedRef.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerText = selectedRef.name;
                      e.currentTarget.parentElement!.classList.add('text-white', 'font-bold', 'text-4xl');
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedRef.name}
                  </h3>
                  <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4" />
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {selectedRef.description || (lang === 'tr' ? "Detaylı bilgi bulunmamaktadır." : "No detailed info available.")}
                  </p>
                </div>

                <button
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-slate-300 transition-colors border border-slate-700"
                  onClick={() => setSelectedRef(null)}
                >
                  {lang === 'tr' ? 'Kapat' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  );
}
