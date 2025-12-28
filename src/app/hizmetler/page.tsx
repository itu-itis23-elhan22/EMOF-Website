"use client";

import { useLanguage } from "../i18n/LanguageContext";
import trData from "../../locales/tr/services.json";
import enData from "../../locales/en/services.json";
import PageTransition from "../components/PageTransition";

export default function ServicesPage() {
    const { lang } = useLanguage();
    const data = lang === "tr" ? trData : enData;

    return (
        <PageTransition>
            <main className="bg-slate-950 text-white min-h-screen py-24 px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                    {/* HEADER */}
                    <section className="space-y-4 text-center md:text-left">
                        <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
                            {data.header.label}
                        </p>

                        <h1 className="text-4xl md:text-5xl font-extrabold">
                            {data.header.title}
                        </h1>

                        <p className="text-slate-300 text-sm md:text-base max-w-3xl">
                            {data.header.subtitle}
                        </p>
                    </section>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* SERVICES LIST */}
                        <section className="space-y-10">
                            {data.services.map((service: any, index: number) => (
                                <div key={index} className="group">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
                                        {service.sector}
                                    </h2>
                                    <ul className="space-y-3 pl-5 border-l-2 border-slate-800 ml-1 group-hover:border-blue-500/50 transition-colors duration-300">
                                        {service.items.map((item: string, i: number) => (
                                            <li key={i} className="text-slate-300 hover:text-blue-300 transition-colors">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        {/* R&D SECTION */}
                        <section className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm self-start sticky top-32">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
                                {data.rd.title}
                            </h2>

                            <div className="space-y-6">
                                {data.rd.items.map((item: string, index: number) => (
                                    <div key={index} className="flex gap-4 items-start p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all hover:translate-x-2">
                                        <span className="text-blue-400 text-xl font-bold">›</span>
                                        <p className="text-slate-200 leading-relaxed font-medium">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Line */}
                            <div className="mt-12 opacity-30 flex justify-end">
                                <div className="w-24 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full" />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </PageTransition>
    );
}
