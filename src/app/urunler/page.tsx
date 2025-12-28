"use client";

import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import productsTR from "../../locales/tr/products.json";
import productsEN from "../../locales/en/products.json";
import { FaTimes } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const productsData = {
  tr: productsTR,
  en: productsEN,
} as const;

export default function ProductsPage() {
  const { lang } = useLanguage();
  const data = productsData[lang];
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <PageTransition>
      <main className="bg-slate-950 text-white min-h-screen py-24 px-6 relative">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((p: any) => (
              <div
                key={p.code}
                onClick={() => setSelectedProduct(p)}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:border-blue-500/50 hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-64 bg-white/5 relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      e.currentTarget.parentElement!.innerHTML = `<div class="text-center p-4"><span class="text-slate-500 text-xs">Görsel Yüklenmedi</span></div>`;
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">
                      {p.code}
                    </span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                      İncele / View
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 bg-black flex items-center justify-center bg-white/5">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-[60vh] md:max-h-full w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Modal Details */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6 bg-slate-900">
                <div>
                  <span className="text-blue-400 text-xs tracking-widest uppercase font-bold border border-blue-400/30 px-2 py-1 rounded">
                    {selectedProduct.code}
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-4">
                    {selectedProduct.name}
                  </h2>
                </div>

                <p className="text-slate-300 text-base leading-relaxed border-l-4 border-blue-500 pl-4 py-1">
                  {selectedProduct.desc}
                </p>

                <div className="pt-6 border-t border-slate-800">
                  <p className="text-sm text-slate-500 italic">
                    {lang === 'tr' ? 'Detaylı bilgi için bizimle iletişime geçebilirsiniz.' : 'Contact us for more details.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  );
}
