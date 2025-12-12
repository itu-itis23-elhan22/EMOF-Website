"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

import footerTR from "../../locales/tr/footer.json";
import footerEN from "../../locales/en/footer.json";

const footerData = {
  tr: footerTR,
  en: footerEN,
} as const;

export default function Footer() {
  const { lang } = useLanguage();
  const data = footerData[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800 mt-20">
      {/* TOP ROW */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LOGO + YAZI */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-3 select-none">
            {data.brand.name} <span className="bg-gradient-to-r
              from-blue-400 via-blue-500 to-cyan-400
              bg-clip-text text-transparent">{data.brand.highlight}</span>
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {data.brand.description}
          </p>
        </div>

        {/* QUICK MENU */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {data.quickMenu.title}
          </h4>
          <ul className="space-y-2 text-sm">
            {data.quickMenu.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue-400 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İLETİŞİM */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {data.contact.title}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              📍 <span>{data.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              📞 <span>{data.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              ✉️ <span>{data.contact.email}</span>
            </li>
          </ul>
        </div>

        {/* SERTİFİKALAR */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {data.certificates.title}
          </h4>
          <div className="flex flex-col gap-3 opacity-80">
            {data.certificates.items.map((cert) => (
              <img
                key={cert.src}
                src={cert.src}
                alt={cert.alt}
                className="w-32"
              />
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL & COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 mt-14 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-xl">
          {data.social.icons.map((icon, idx) => (
            <a
              key={idx}
              href={icon.href}
              className="hover:text-blue-400 transition"
              aria-label={icon.label}
            >
              {icon.symbol}
            </a>
          ))}
        </div>

        <p className="text-sm text-slate-500">
          © {year} {data.copyright.text}
        </p>
      </div>
    </footer>
  );
}
