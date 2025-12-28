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

          {/* MAKİNE PARKI */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {data.machinesTitle}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.machines.map((m: any) => (
                <div
                  key={m.name}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl group hover:border-blue-500/50 transition-colors"
                >
                  {/* MACHINE IMAGE CONTAINER */}
                  <div className="h-48 bg-white/5 relative overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback placeholder if image not found
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800');
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-500 text-sm">Görsel Yüklenmedi / No Image</span>`;
                      }}
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-300">
                        {m.name}
                      </h3>
                      <p className="text-slate-400 text-sm font-mono mt-1">
                        {m.type}
                      </p>
                    </div>

                    <div className="border-t border-slate-800 pt-3">
                      <p className="text-slate-300 text-xs uppercase tracking-wide opacity-70 mb-1">
                        Kapasite / Capacity
                      </p>
                      <p className="text-slate-200 text-sm font-medium">
                        {m.travel}
                      </p>
                    </div>

                    <p className="text-slate-400 text-sm pt-2">
                      {m.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
