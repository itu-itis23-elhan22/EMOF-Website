"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

import previewTR from "../../locales/tr/productPreview.json";
import previewEN from "../../locales/en/productPreview.json";

import productsTR from "../../locales/tr/products.json";
import productsEN from "../../locales/en/products.json";

const previewData = {
  tr: previewTR,
  en: previewEN,
} as const;

const productsData = {
  tr: productsTR,
  en: productsEN,
} as const;

export default function ProductsPreview() {
  const { lang } = useLanguage();
  const titleData = previewData[lang];
  const itemsData = productsData[lang].items;

  return (
    <section
      id="urunler-onizleme"
      className="bg-slate-950 border-y border-slate-800 py-16 md:py-20 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400">
              {titleData.label}
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              {titleData.title}
            </h2>

            <p className="mt-3 text-slate-300 max-w-2xl text-sm md:text-base">
              {titleData.description}
            </p>
          </div>

          <Link
            href="/urunler"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/30 transition"
          >
            {titleData.cta}
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* SLIDING MARQUEE */}
        <div className="relative overflow-hidden">
          {/* Shadows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="flex gap-6 w-[200%] animate-marquee hover:pause">
            {[...itemsData, ...itemsData].map((product, idx) => (
              <div
                key={`${product.code}-${idx}`}
                className="min-w-[280px] w-72 bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-1 hover:border-blue-500/70 transition-all duration-300"
              >
                {/* Mini Image */}
                <div className="h-40 bg-white/5 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-500 text-xs">Görsel Yok</span>`;
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                    <span className="text-[9px] font-bold tracking-widest text-blue-400 uppercase">
                      {product.code}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-center">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/30 transition"
          >
            {titleData.cta}
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
