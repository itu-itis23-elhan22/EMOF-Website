"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

import trData from "../../locales/tr/capabilities.json";
import enData from "../../locales/en/capabilities.json";
import PageTransition from "../components/PageTransition";

export default function KabiliyetlerPage() {
  const { lang } = useLanguage();
  const data = lang === "tr" ? trData : enData;

  return (
        <PageTransition>
    
    <main className="bg-slate-950 text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER */}
        <section className="space-y-4 text-center md:text-left">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
            {data.header.label}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            {data.header.title}
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl">
            {data.header.subtitle}
          </p>

          <p className="text-slate-400 text-sm md:text-base max-w-3xl">
            {data.summary.description}
          </p>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.stats.map((item: any) => (
            <div
              key={item.label}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 text-center shadow-lg"
            >
              <p className="text-2xl md:text-3xl font-bold text-blue-400">
                {item.value}
              </p>
              <p className="text-xs mt-2 text-slate-300 tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* 2 KOLON – İŞLEME + KALİTE */}
        <section className="grid md:grid-cols-2 gap-10">
          {/* CNC İşleme */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              {data.sections.machining.title}
            </h2>
            <ul className="space-y-2 text-slate-300 text-sm md:text-base list-disc list-inside">
              {data.sections.machining.items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Ölçüm & Kalite */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              {data.sections.quality.title}
            </h2>
            <ul className="space-y-2 text-slate-300 text-sm md:text-base list-disc list-inside">
              {data.sections.quality.items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* MALZEME / UYGULAMA ALANLARI */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            {data.sections.materials.title}
          </h2>
          <ul className="space-y-2 text-slate-300 text-sm md:text-base list-disc list-inside">
            {data.sections.materials.items.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* MAKİNE PARKI */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {data.machinesTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.machines.map((m: any) => (
              <div
                key={m.name}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 shadow-xl"
              >
                <h3 className="text-lg font-semibold text-blue-300 mb-1">
                  {m.name}
                </h3>
                <p className="text-slate-300 text-sm mb-2">{m.type}</p>
                <p className="text-slate-400 text-xs mb-3">{m.travel}</p>
                <p className="text-slate-300 text-sm">{m.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA – TEKLİF / İLETİŞİM */}
        <section className="mt-6 p-8 bg-gradient-to-r from-blue-900/30 to-slate-900/30 rounded-2xl border border-blue-900/40 shadow-xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {data.cta.title}
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-5 max-w-3xl">
            {data.cta.text}
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition"
          >
            {data.cta.button}
            <span className="text-lg">→</span>
          </Link>
        </section>
      </div>
    </main>
        </PageTransition>
    
  );
}
