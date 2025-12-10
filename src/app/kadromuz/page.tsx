"use client";

import { useLanguage } from "../i18n/LanguageContext";
import teamTR from "../../locales/tr/team.json";
import teamEN from "../../locales/en/team.json";

const teamData = {
  tr: teamTR,
  en: teamEN,
} as const;

export default function KadromuzPage() {
  const { lang } = useLanguage();
  const data = teamData[lang];

  return (
    <main className="bg-slate-950 min-h-screen py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER */}
        <section className="space-y-5">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
            {data.header.label}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            {data.header.titleMain}
            <span className="text-blue-400">
              {data.header.titleHighlight}
            </span>
          </h1>

          <p className="text-slate-300 max-w-3xl text-sm md:text-base">
            {data.header.intro}
          </p>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.stats.map((item) => (
            <div
              key={item.label}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 text-center shadow-lg"
            >
              <p className="text-3xl md:text-4xl font-bold text-blue-400">
                {item.value}
              </p>
              <p className="text-xs mt-2 text-slate-300 tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* TEAMS GRID */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            {data.teamsTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.teams.map((team) => (
              <div
                key={team.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 shadow-xl hover:border-blue-500/70 hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {team.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {team.desc}
                </p>
                <ul className="text-slate-200 text-sm space-y-1 list-disc list-inside">
                  {team.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
