"use client";
import { useLanguage } from "../i18n/LanguageContext";

import { useEffect, useState } from "react";
import Image from "next/image";

// Bu değişken componentin DIŞINDA, module seviyesinde.
// Sayfa yenilenmeden (full refresh olmadan) değerini korur.
let heroAnimationPlayed = false;

// ---------------- TYPES ----------------
type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

type MousePos = { x: number; y: number };

// ---------------------------------------
export default function Hero() {
  // Animasyon daha önce bu sekmede oynatıldı mı?
  const [hasPlayed, setHasPlayed] = useState(heroAnimationPlayed);
  const { t } = useLanguage();

  // Animasyon state'leri
  const [stage, setStage] = useState(0);
  const [showText, setShowText] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });

  const planeStages = [
    { src: "/1.png", duration: 1000 },
    { src: "/2.png", duration: 1000 },
    { src: "/3.png", duration: 1000 },
    { src: "/4.png", duration: 1000 },
    { src: "/5.png", duration: 0 },
  ];

  // Generate particles
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // İlk mount olduğunda: daha önce oynatılmışsa direkt sona geç
  useEffect(() => {
    if (heroAnimationPlayed) {
      setStage(planeStages.length - 1);
      setShowText(true);
      setHasPlayed(true);
    } else {
      // İlk kez bu sekmede açılıyorsa animasyon normal şekilde başlasın
      setHasPlayed(false);
      setStage(0);
    }
  }, []);

  // Animasyon akışı (sadece hasPlayed = false iken çalışır)
  useEffect(() => {
    if (hasPlayed) return;

    if (stage < planeStages.length - 1) {
      const timer = setTimeout(() => {
        setStage((prev) => prev + 1);
      }, planeStages[stage].duration);

      return () => clearTimeout(timer);
    }

    if (stage === planeStages.length - 1) {
      const textTimer = setTimeout(() => {
        setShowText(true);
        heroAnimationPlayed = true; // ✅ Bu sekmede bir daha oynatılmayacak
        setHasPlayed(true);
      }, 600);

      return () => clearTimeout(textTimer);
    }
  }, [stage, hasPlayed, planeStages]);

  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden select-none">
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      {/* Animated Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
          }}
        />
      ))}

      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse"
          style={{ animationDelay: "75ms" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "300ms" }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 transition-transform duration-700"
        style={{
          transform: `rotate(45deg) translate(${mousePos.x * 0.5}px, ${
            mousePos.y * 0.5
          }px)`,
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-cyan-400/20 transition-transform duration-700"
        style={{
          transform: `rotate(12deg) translate(${mousePos.x * -0.3}px, ${
            mousePos.y * -0.3
          }px)`,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Plane Drawing Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center">
          {planeStages.map((planeStage, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === stage
                  ? "opacity-100 scale-100"
                  : index < stage
                  ? "opacity-0 scale-95"
                  : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={planeStage.src}
                alt={`Plane stage ${index + 1}`}
                width={800}
                height={500}
                className={`object-contain drop-shadow-2xl ${
                  index === stage && !hasPlayed ? "animate-drawPlane" : ""
                }`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80 transition-opacity duration-1000 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 px-4">
        <div
          className={`text-center space-y-6 transition-all duration-1000 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
            {t("hero.titleLeft")}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("hero.titleRight")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            {t("hero.subtitle")}
          </p>

          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500" />
          </div>

          {/* Feature Badges with Hover Effects */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[t("hero.badge1"), t("hero.badge2"), t("hero.badge3")].map(
              (badge, i) => (
                <span
                  key={i}
                  className="group relative px-4 py-2 bg-blue-500/10 border border-cyan-400/30 rounded-full text-sm text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400/60 hover:scale-110 cursor-default overflow-hidden"
                >
                  <span className="relative z-10">{badge}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </span>
              )
            )}
          </div>

          <div className="pt-6">
            <a
              href="#hakkimizda"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl hover:scale-105"
            >
              <span>{t("hero.cta")}</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}
