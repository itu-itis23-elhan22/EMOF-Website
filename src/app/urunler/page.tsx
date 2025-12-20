"use client";

import { useLanguage } from "../i18n/LanguageContext";
import productsTR from "../../locales/tr/products.json";
import productsEN from "../../locales/en/products.json";
import { FaCogs } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const productsData = {
  tr: productsTR,
  en: productsEN,
} as const;

export default function ProductsPage() {
  const { lang } = useLanguage();
  const data = productsData[lang];

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
            {data.header.intro}
          </p>
        </section>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((p) => (
            <div
              key={p.code}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:border-blue-500/70 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/50">
                  <FaCogs className="text-blue-400" />
                </div>
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-white">
                    {p.name}
                  </h2>
                  <p className="text-[11px] uppercase tracking-widest text-blue-300/80">
                    {p.code}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
        </PageTransition>
    
  );
}
