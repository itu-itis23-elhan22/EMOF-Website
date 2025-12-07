"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/plane-outline.png",  // 1. çizim görüntü
    "/plane-real.png",     // 2. gerçek fotoğraf
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 saniyede bir geçiş

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      {/* BACKGROUND CLOUDS (opsiyonel) */}
      <div className="absolute inset-0 bg-[url('/clouds-bg.jpg')] bg-cover bg-center opacity-20"></div>

      {/* IMAGE FADE LAYER */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt="airplane"
            fill
            className={`
              object-contain transition-opacity duration-[2500ms]
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
            priority
          />
        ))}
      </div>

      {/* OVERLAY DARK */}
      <div className="absolute inset-0 bg-slate-900/40"></div>

      {/* TEXT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-xl">
          EMOF <span className="text-blue-500">Teknoloji</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4 tracking-wide">
          CNC & Havacılık Üretim Teknolojileri
        </p>

        <a
          href="#hakkimizda"
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-2xl"
        >
          Bizi Tanıyın
        </a>
      </div>
    </section>
  );
}
