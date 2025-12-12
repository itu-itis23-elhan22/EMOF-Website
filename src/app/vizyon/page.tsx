"use client";

import { useLanguage } from "../i18n/LanguageContext";
import visionTR from "../../locales/tr/vision.json";
import visionEN from "../../locales/en/vision.json";
import PageTransition from "../components/PageTransition";

const visionData = {
  tr: visionTR,
  en: visionEN,
} as const;

export default function VizyonPage() {
  const { lang } = useLanguage();
  const data = visionData[lang];

  return (
        <PageTransition>
    
    <main className="bg-slate-950 text-white min-h-screen">
      {/* HERO / HEADER */}
      <section className="relative py-24 bg-gradient-to-b from-blue-900/40 to-slate-950 overflow-hidden">
        {/* GRID OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] opacity-40"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-6">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
            {data.header.label}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
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
        <div className="grid md:grid-cols-2 gap-12">
          {/* BULLETS */}
          <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
            {data.bullets.map((line: string, idx: number) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* STRATEGIC BOX */}
          <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">
              {data.strategy.title}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {data.strategy.body}
            </p>
          </div>
        </div>

        {/* QUOTE SECTION */}
        <div className="p-10 bg-gradient-to-r from-blue-900/30 to-slate-900/30 rounded-2xl border border-slate-800 backdrop-blur-xl shadow-xl">
          <p className="text-2xl font-semibold text-blue-300 italic">
            {data.quote}
          </p>
        </div>
      </section>
    </main>
        </PageTransition>
    
  );
}
