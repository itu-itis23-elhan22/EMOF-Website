"use client";

import Link from "next/link";
import { FaCogs } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

const products = [
  {
    name: "Uçak Gövde Parçaları",
    code: "AERO-STRUCT",
    desc: "Havacılık standartlarında işlenmiş gövde ve konstrüksiyon bileşenleri.",
  },
  {
    name: "Titanyum Bağlantı Elemanları",
    code: "TI-FAST",
    desc: "Yüksek mukavemetli, korozyona dayanıklı bağlantı çözümleri.",
  },
  {
    name: "CNC İşlenmiş Prototipler",
    code: "CNC-PROT",
    desc: "Düşük adetli, yüksek hassasiyetli prototip üretimi.",
  },
  {
    name: "Motor Bileşenleri",
    code: "ENG-PARTS",
    desc: "Isıl yüke dayanıklı hassas motor bileşenleri.",
  },
];

export default function ProductsPreview() {
  const { t } = useLanguage();

  return (
    <section
      id="urunler-onizleme"
      className="bg-slate-950 border-y border-slate-800 py-16 md:py-20 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Başlık + buton */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400">
              {t("home.productsPreview.label")}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              {t("home.productsPreview.title")}
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-sm md:text-base">
              {t("home.productsPreview.description")}
            </p>
          </div>

          <Link
            href="/urunler"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/30 transition"
          >
            {t("home.productsPreview.cta")}
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Kayan bar */}
        <div className="relative overflow-hidden">
          {/* sol/sağ gölge */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="flex gap-6 w-[200%] animate-marquee">
            {[...products, ...products].map((product, idx) => (
              <div
                key={idx}
                className="min-w-[230px] max-w-xs bg-slate-900/80 border border-slate-800 rounded-2xl px-5 py-4 shadow-lg hover:-translate-y-1 hover:border-blue-500/70 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/40">
                    <FaCogs className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-widest text-blue-300/80">
                      {product.code}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobilde altta buton */}
        <div className="md:hidden text-center">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/30 transition"
          >
            {t("home.productsPreview.cta")}
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
