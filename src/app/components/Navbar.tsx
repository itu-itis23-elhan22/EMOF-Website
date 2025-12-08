"use client";

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

  // Route değişince tüm menüleri kapat
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md shadow-lg select-none"
      onMouseLeave={() => setOpenMenu(null)} // sadece nav'dan çıkınca kapat
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* LOGO */}
       <Link href="/" className="text-3xl font-extrabold tracking-wide flex items-center gap-2">

  <span className="flex text-white">
    <span className="animate-letter-1">E</span>
    <span className="animate-letter-2">M</span>
    <span className="animate-letter-3">O</span>
    <span className="animate-letter-4">F</span>
  </span>

  <span className="text-blue-500">Teknoloji</span>
</Link>


        {/* MENU */}
        <div className="flex items-center gap-10 text-white font-medium">
          {/* ---------------- KURUMSAL ---------------- */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu("kurumsal")}
          >
            <button className="hover:text-blue-400 transition text-lg tracking-wide">
              KURUMSAL
            </button>

            {/* underline: sadece hover ile kontrol */}
            <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />

            {/* Mega menu */}
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
              <div className="grid grid-cols-4 gap-10">
                {/* HAKKIMIZDA */}
                <Link
                  href="/#hakkimizda"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-6 py-6 transition-all duration-300
                 bg-slate-900/40 border-slate-700
                 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaHome className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
                    HAKKIMIZDA
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">EMOF</p>
                </Link>

                {/* VİZYONUMUZ */}
                <Link
                  href="/vizyon"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-6 py-6 transition-all duration-300
                 bg-slate-900/40 border-slate-700
                 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaFlag className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
                    VİZYONUMUZ
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    Gelecek hedeflerimiz
                  </p>
                </Link>

                {/* POLİTİKALARIMIZ */}
                <Link
                  href="/politikalar"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-6 py-6 transition-all duration-300
                 bg-slate-900/40 border-slate-700
                 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaFileAlt className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
                    POLİTİKALARIMIZ
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    Kalite & Havacılık politikalarımız
                  </p>
                </Link>

                {/* ⭐ REFERANSLAR */}
                <Link
                  href="/referanslar"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-6 py-6 transition-all duration-300
                 bg-slate-900/40 border-slate-700
                 hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaHandshake className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
                    REFERANSLAR
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    Projeler & iş ortaklarımız
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* ---------------- ÜRÜNLERİMİZ ---------------- */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu("urunler")}
          >
            <button className="hover:text-blue-400 transition text-lg tracking-wide">
              ÜRÜNLERİMİZ
            </button>

            {/* underline: sadece hover ile kontrol */}
            <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />

            {/* Mega menu */}
            <div
              className={`
                absolute left-1/2 -translate-x-1/2
                mt-2 pt-4
                w-[900px] bg-slate-900 text-white shadow-xl rounded-md py-10 px-10
                transition-all duration-300 ease-out
                ${
                  openMenu === "urunler"
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 translate-y-3 pointer-events-none"
                }
              `}
            >
              <div className="grid grid-cols-3 gap-10">
                <Link
                  href="/urunler"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-6 py-6 transition-all duration-300
                             bg-slate-900/40 border-slate-700
                             hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaCogs className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
                    ÜRÜNLER
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    CNC üretim portföyümüz
                  </p>
                </Link>

                <Link
                  href="/sertifikalar"
                  onClick={() => setOpenMenu(null)}
                  className="group block text-center rounded-xl border px-6 py-6 transition-all duration-300
                             bg-slate-900/40 border-slate-700
                             hover:bg-slate-800 hover:border-blue-500 hover:scale-[1.05] hover:shadow-xl"
                >
                  <FaCertificate className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
                    SERTİFİKALAR
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    Kalite yönetim belgelerimiz
                  </p>
                </Link>

                <div className="group block text-center rounded-xl border px-6 py-6 bg-slate-900/40 border-slate-700 opacity-40">
                  <FaCogs className="text-5xl mx-auto text-slate-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-500">
                    YAKINDA
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm">
                    Yeni kategori eklenecek
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HABERLER */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu(null)} // başka menü açıksa kapat
          >
            <Link
              href="/haberler"
              className="hover:text-blue-400 transition text-lg tracking-wide"
            >
              HABERLER
            </Link>
            <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
          </div>

          {/* KADROMUZ */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu(null)}
          >
            <Link
              href="/kadromuz"
              className="hover:text-blue-400 transition text-lg tracking-wide"
            >
              KADROMUZ
            </Link>
            <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
          </div>

          {/* İLETİŞİM */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu(null)}
          >
            <Link
              href="/iletisim"
              className="hover:text-blue-400 transition text-lg tracking-wide"
            >
              İLETİŞİM
            </Link>
            <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
          </div>

          {/* LANG */}
          <div className="flex items-center gap-2 text-lg">
            <Link href="/?lang=tr" className="hover:text-blue-400">
              TR
            </Link>
            <span>|</span>
            <Link href="/?lang=en" className="hover:text-blue-400">
              EN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
