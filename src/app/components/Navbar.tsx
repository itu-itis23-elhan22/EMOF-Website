"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaFlag, FaFileAlt, FaCogs, FaCertificate } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-3xl font-extrabold text-white tracking-wide">
          EMOF <span className="text-blue-500">Teknoloji</span>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-10 text-white font-medium">

          {/* ---------------- KURUMSAL ---------------- */}
          <div className="relative group">
  <button className="hover:text-blue-400 transition text-lg tracking-wide">
    KURUMSAL
  </button>

  <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>

  {/* Mega menu */}
  <div
  className="
    absolute left-1/2 -translate-x-1/2 
    invisible opacity-0 translate-y-3
    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300 ease-out
    mt-2 pt-4
    w-[900px] bg-slate-900 text-white shadow-xl rounded-md py-10 px-10
  "
>
    <div className="grid grid-cols-3 gap-10">

      <a href="#hakkimizda" className="group block text-center">
        <FaHome className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
        <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
          HAKKIMIZDA
        </h3>
        <p className="mt-2 text-gray-300 text-sm">
          EMOF 
        </p>
      </a>

      <a href="#vizyon" className="group block text-center">
        <FaFlag className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
        <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
          VİZYONUMUZ
        </h3>
        <p className="mt-2 text-gray-300 text-sm">
          Gelecek hedeflerimiz
        </p>
      </a>

      <a href="#politikalar" className="group block text-center">
        <FaFileAlt className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
        <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
          POLİTİKALARIMIZ
        </h3>
        <p className="mt-2 text-gray-300 text-sm">
          Kalite & Havacılık politikalarımız
        </p>
      </a>

    </div>
  </div>
</div>


          {/* ---------------- ÜRÜNLERİMİZ ---------------- */}
          <div className="relative group">
  <button className="hover:text-blue-400 transition text-lg tracking-wide">
    ÜRÜNLERİMİZ
  </button>

  <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>

  {/* Mega menu */}
  <div
    className="
      absolute left-1/2 -translate-x-1/2 
      invisible opacity-0 translate-y-3
      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 ease-out
      mt-2 pt-4
      w-[900px] bg-slate-900 text-white shadow-xl rounded-md py-10 px-10
    "
  >
    <div className="grid grid-cols-3 gap-10">

      <a href="/urunler" className="group block text-center">
        <FaCogs className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
        <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
          ÜRÜNLER
        </h3>
        <p className="mt-2 text-gray-300 text-sm">
          CNC üretim portföyümüz
        </p>
      </a>

      <a href="/sertifikalar" className="group block text-center">
        <FaCertificate className="text-5xl mx-auto text-blue-500 group-hover:scale-110 transition" />
        <h3 className="mt-4 text-xl font-bold group-hover:text-blue-400 transition">
          SERTİFİKALAR
        </h3>
        <p className="mt-2 text-gray-300 text-sm">
          Kalite yönetim belgelerimiz
        </p>
      </a>

      <div className="group block text-center opacity-40">
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
          <Link href="/haberler" className="hover:text-blue-400 transition text-lg tracking-wide">
            HABERLER
          </Link>

          {/* İLETİŞİM */}
          <Link href="/iletisim" className="hover:text-blue-400 transition text-lg tracking-wide">
            İLETİŞİM
          </Link>

          {/* LANG */}
          <div className="flex items-center gap-2 text-lg">
            <Link href="/?lang=tr" className="hover:text-blue-400">TR</Link>
            <span>|</span>
            <Link href="/?lang=en" className="hover:text-blue-400">EN</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
