"use client";

import { useLanguage } from "../i18n/LanguageContext";
import newsTR from "../../locales/tr/news.json";
import newsEN from "../../locales/en/news.json";

const newsData = {
  tr: newsTR,
  en: newsEN,
} as const;

export default function HaberlerPage() {
  const { lang } = useLanguage();
  const data = newsData[lang];

  return (
    <main className="bg-slate-950 min-h-screen py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER */}
        <header className="text-center space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400">
            {data.header.label}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {data.header.title}
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            {data.header.intro}
          </p>
        </header>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 rounded-2xl border border-slate-800 overflow-hidden shadow-lg transition hover:shadow-blue-500/30 hover:border-blue-500/70 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="h-48 bg-slate-800">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <p className="text-blue-400 text-xs tracking-widest">
                  {item.date}
                </p>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm">
                  {item.desc}
                </p>

                <button className="mt-4 text-blue-400 font-semibold hover:text-blue-300 transition">
                  {data.detailLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
