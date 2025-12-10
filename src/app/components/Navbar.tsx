"use client";
import { useLanguage } from "../i18n/LanguageContext";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaFlag,
  FaFileAlt,
  FaCogs,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { lang, t, setLang } = useLanguage();

  // ⭐ MOBILE MENU STATE EKLENDİ
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md shadow-lg select-none"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide flex items-center gap-2"
        >
          <span className="flex text-white">
            <span className="animate-letter-1">E</span>
            <span className="animate-letter-2">M</span>
            <span className="animate-letter-3">O</span>
            <span className="animate-letter-4">F</span>
          </span>

          <span
            className="
              bg-gradient-to-r
              from-blue-400 via-blue-500 to-cyan-400
              bg-clip-text text-transparent
            "
          >
            {t("navbar.tabs.main-name")}
          </span>            
        </Link>

        {/* ⭐ MOBILE MENU BUTONU — SADECE MOBİLDE GÖRÜNÜR */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* MENU (DESKTOP) — ⭐ Mobilde gizlendi */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          
          {/* ---------------- KURUMSAL ---------------- */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu("kurumsal")}
          >
            <button className="hover:text-blue-400 transition text-lg tracking-wide">
              {t("navbar.tabs.corporate")}
            </button>

            <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />

            {/* Mega menu */}
            <div
              className={`
                absolute left-1/2 -translate-x-1/2
                mt-2 pt-4
                w-[1000px] bg-slate-900 text-white shadow-xl rounded-md py-10 px-10
                transition-all duration-300 ease-out
                ${
                  openMenu === "kurumsal"
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 translate-y-3 pointer-events-none"
                }
              `}
            >
              <div className="grid grid-cols-3 gap-8">

                {/* KABİLİYETLERİMİZ */}
                <Link
                  href="/kabiliyetler"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-8 py-8 transition-all bg-slate-900/40 border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaCogs className="text-6xl mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-bold">{t("navbar.corporate.cards.capabilities.title")}</h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {t("navbar.corporate.cards.capabilities.subtitle")}
                  </p>
                </Link>

                {/* VİZYONUMUZ */}
                <Link
                  href="/vizyon"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-8 py-8 transition-all bg-slate-900/40 border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaFlag className="text-6xl mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-bold">{t("navbar.corporate.cards.vision.title")}</h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {t("navbar.corporate.cards.vision.subtitle")}
                  </p>
                </Link>

                {/* POLİTİKALAR */}
                <Link
                  href="/politikalar"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-8 py-8 transition-all bg-slate-900/40 border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaFileAlt className="text-6xl mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-bold">
                    {t("navbar.corporate.cards.policies.title")}
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {t("navbar.corporate.cards.policies.subtitle")}
                  </p>
                </Link>

              </div>
            </div>
          </div>

          {/* ---------------- ÜRÜNLER ---------------- */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu("urunler")}
          >
            <button className="hover:text-blue-400 transition text-lg tracking-wide">
              {t("navbar.tabs.products")}
            </button>

            <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />

            {/* Mega menu */}
            <div
              className={`
                absolute left-1/2 -translate-x-1/2
                mt-2 pt-4
                w-[1000px] bg-slate-900 text-white shadow-xl rounded-md py-10 px-10
                transition-all duration-300 ease-out
                ${
                  openMenu === "urunler"
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 translate-y-3 pointer-events-none"
                }
              `}
            >
              <div className="grid grid-cols-3 gap-8">
                
                {/* ÜRÜNLER */}
                <Link
                  href="/urunler"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-8 py-8 bg-slate-900/40 border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl transition-all"
                >
                  <FaCogs className="text-6xl mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-bold">
                    {t("navbar.productsMenu.cards.products.title")}
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {t("navbar.productsMenu.cards.products.subtitle")}
                  </p>
                </Link>

                {/* SERTİFİKALAR */}
                <Link
                  href="/sertifikalar"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-8 py-8 bg-slate-900/40 border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl transition-all"
                >
                  <FaCertificate className="text-6xl mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-bold">
                    {t("navbar.productsMenu.cards.certificates.title")}
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {t("navbar.productsMenu.cards.certificates.subtitle")}
                  </p>
                </Link>

                {/* REFERANSLAR */}
                <Link
                  href="/referanslar"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-8 py-8 bg-slate-900/40 border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl transition-all"
                >
                  <FaHandshake className="text-6xl mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-bold">
                    {t("navbar.corporate.cards.references.title")}
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {t("navbar.corporate.cards.references.subtitle")}
                  </p>
                </Link>
             
              </div>
            </div>
          </div>

          {/* HABERLER */}
          <Link href="/haberler" className="hover:text-blue-400 text-lg">
            {t("navbar.tabs.news")}
          </Link>

          {/* KADROMUZ */}
          <Link href="/kadromuz" className="hover:text-blue-400 text-lg">
            {t("navbar.tabs.team")}
          </Link>

          {/* İLETİŞİM */}
          <Link href="/iletisim" className="hover:text-blue-400 text-lg">
            {t("navbar.tabs.contact")}
          </Link>

          {/* LANG */}
          <div className="flex items-center gap-2 text-lg">
            <button
              onClick={() => setLang("tr")}
              className={`${lang === "tr" ? "text-blue-400 font-semibold" : ""}`}
            >
              TR
            </button>
            <span>|</span>
            <button
              onClick={() => setLang("en")}
              className={`${lang === "en" ? "text-blue-400 font-semibold" : ""}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ MOBILE MENU PANEL — SADECE MOBİLDE AÇILIR */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 text-white px-8 py-6 space-y-6 border-t border-slate-700">

          <Link href="/kabiliyetler" onClick={() => setMobileOpen(false)} className="block text-lg">
            {t("navbar.corporate.cards.capabilities.title")}
          </Link>

          <Link href="/vizyon" onClick={() => setMobileOpen(false)} className="block text-lg">
            {t("navbar.corporate.cards.vision.title")}
          </Link>

          <Link href="/politikalar" onClick={() => setMobileOpen(false)} className="block text-lg">
            {t("navbar.corporate.cards.policies.title")}
          </Link>

          <Link href="/urunler" onClick={() => setMobileOpen(false)} className="block text-lg">
            {t("navbar.productsMenu.cards.products.title")}
          </Link>

          <Link href="/haberler" onClick={() => setMobileOpen(false)} className="block text-lg">
            {t("navbar.tabs.news")}
          </Link>

          <Link href="/kadromuz" onClick={() => setMobileOpen(false)} className="block text-lg">
            {t("navbar.tabs.team")}
          </Link>

          <Link href="/iletisim" onClick={() => setMobileOpen(false)} className="block text-lg">
            {t("navbar.tabs.contact")}
          </Link>

          <div className="flex gap-4 text-lg pt-4 border-t border-slate-700">
            <button
              onClick={() => setLang("tr")}
              className={`hover:text-blue-400 transition ${
                lang === "tr" ? "text-blue-400 font-semibold" : ""
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`hover:text-blue-400 transition ${
                lang === "en" ? "text-blue-400 font-semibold" : ""
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}