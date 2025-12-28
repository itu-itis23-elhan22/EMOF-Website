"use client";

import { useLanguage } from "../i18n/LanguageContext";
import CountUp from "../components/CountUp";

export default function AboutSection() {
  const { t } = useLanguage();

  // "50+" / "250,000+" / "5,000 m²" gibi stringlerden
  // sayıyı ve son ekini ( + , m² vb.) ayırmak için helper
  const parseValue = (raw: string) => {
    // Sadece rakam, . ve , kalsın
    const numericPart = raw.replace(/[^\d.,]/g, "");

    // Virgülleri at, noktayı olduğu gibi bırak (gerekirse)
    const cleaned = numericPart.replace(/,/g, "");

    const num = parseFloat(cleaned || "0");

    // Rakamları ve ayraçları sil, kalan her şey suffix
    const suffix = raw.replace(/[\d.,]/g, "").trim(); // "+", "m²" vb.

    return { num, suffix };
  };

  const employeesRaw = t("home.about.stats.employees.value");
  const capacityRaw = t("home.about.stats.capacity.value");
  const facilityRaw = t("home.about.stats.facility.value");
  const programsRaw = t("home.about.stats.programs.value");

  const employees = parseValue(employeesRaw);
  const capacity = parseValue(capacityRaw);
  const facility = parseValue(facilityRaw);
  const programs = parseValue(programsRaw);

  return (
    <section
      id="hakkimizda"
      className="w-full pt-32 pb-32 bg-slate-900 text-white"
    >
      {/* Başlık */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide text-blue-400">
          {t("home.about.title")}
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          {t("home.about.intro")}
        </p>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
        {/* ÇALIŞAN SAYISI */}
        <div>
          <div className="text-5xl font-bold text-blue-500">
            <CountUp
              from={0}
              to={employees.num}
              separator=","
              direction="up"
              duration={0.1}
            />
            {employees.suffix && <span>{employees.suffix}</span>}
          </div>
          <div className="mt-2 text-gray-300">
            {t("home.about.stats.employees.label")}
          </div>
        </div>

        {/* YILLIK ÜRETİM KAPASİTESİ */}
        <div>
          <div className="text-5xl font-bold text-blue-500">
            <CountUp
              from={0}
              to={capacity.num}
              separator=","
              direction="up"
              duration={0.1}
            />
            {capacity.suffix && <span>{capacity.suffix}</span>}
          </div>
          <div className="mt-2 text-gray-300">
            {t("home.about.stats.capacity.label")}
          </div>
        </div>

        {/* TESİS ALANI */}
        <div>
          <div className="text-5xl font-bold text-blue-500">
            <CountUp
              from={0}
              to={facility.num}
              separator=","
              direction="up"
              duration={0.1}
            />
            {facility.suffix && <span> {facility.suffix}</span>}
          </div>
          <div className="mt-2 text-gray-300">
            {t("home.about.stats.facility.label")}
          </div>
        </div>

        {/* AKTİF PROGRAM */}
        <div>
          <div className="text-5xl font-bold text-blue-500">
            <CountUp
              from={0}
              to={programs.num}
              separator=","
              direction="up"
              duration={0.5}
            />
            {programs.suffix && <span>{programs.suffix}</span>}
          </div>
          <div className="mt-2 text-gray-300">
            {t("home.about.stats.programs.label")}
          </div>
        </div>
      </div>

      {/* Alt paragraf + Resim */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* Şirket Görseli */}
        <img
          src="/emof-poster.png"
          alt="EMOF Teknoloji"
          className="rounded-lg shadow-2xl w-full md:w-[60%] mx-auto hover:scale-105 transition-transform duration-500"
        />

        {/* Metin */}
        <p className="text-gray-300 leading-relaxed text-lg text-center md:text-left">
          {t("home.about.body")}
        </p>
      </div>
    </section>
  );
}
