"use client";

import { useLanguage } from "../i18n/LanguageContext";
import contactTR from "../../locales/tr/contact.json";
import contactEN from "../../locales/en/contact.json";

const contactData = {
  tr: contactTR,
  en: contactEN, // Şimdilik EN de TR ile aynı; ileride en/contact.json ekleyince burayı değiştirirsin
} as const;

export default function IletisimPage() {
  const { lang } = useLanguage();
  const data = contactData[lang];

  return (
    <main className="bg-slate-950 min-h-screen py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* ---------------------------------------- */}
        {/* HEADER */}
        {/* ---------------------------------------- */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-xs tracking-[0.3em] text-blue-400">
            {data.header.label}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {data.header.title}
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            {data.header.intro}
          </p>
        </div>

        {/* ---------------------------------------- */}
        {/* CONTACT INFO CARDS */}
        {/* ---------------------------------------- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {/* ADDRESS */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              {data.cards.address.title}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {data.cards.address.company}
              <br />{data.cards.address.line1}
              <br />{data.cards.address.line2}
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              {data.cards.phone.title}
            </h2>
            <p className="text-slate-300 mb-3">
              {data.cards.phone.number}
            </p>

            <a
              href={data.cards.phone.whatsappUrl}
              className="inline-block mt-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-sm transition"
              target="_blank"
            >
              {data.cards.phone.whatsappLabel}
            </a>
          </div>

          {/* EMAIL & HOURS */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              {data.cards.email.title}
            </h2>
            <p className="text-slate-300 mb-4">
              {data.cards.email.address}
            </p>

            <h3 className="font-bold text-blue-400 mb-2">
              {data.cards.email.workingHoursTitle}
            </h3>
            <p className="text-slate-300 text-sm">
              {data.cards.email.workingHoursLines[0]}
              <br />{data.cards.email.workingHoursLines[1]}
            </p>
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* CONTACT FORM */}
        {/* ---------------------------------------- */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-10 shadow-xl mb-24">
          <h2 className="text-2xl font-bold mb-6">
            {data.form.title}
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={data.form.fields.name}
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none"
            />

            <input
              type="email"
              placeholder={data.form.fields.email}
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none"
            />

            <input
              type="text"
              placeholder={data.form.fields.subject}
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none md:col-span-2"
            />

            <textarea
              placeholder={data.form.fields.message}
              rows={6}
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-blue-500/40"
            >
              {data.form.submit}
            </button>
          </form>
        </div>

        {/* ---------------------------------------- */}
        {/* GOOGLE MAPS */}
        {/* ---------------------------------------- */}
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src={data.map.src}
            width="100%"
            height="100%"
            loading="lazy"
            className="filter grayscale contrast-125 brightness-90"
          ></iframe>
        </div>

      </div>
    </main>
  );
}
