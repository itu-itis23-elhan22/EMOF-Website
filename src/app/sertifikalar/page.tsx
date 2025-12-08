import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    name: "ISO 9001:2015",
    desc: "Kalite yönetim sistemi sertifikası.",
  },
  {
    name: "AS9100",
    desc: "Havacılık ve uzay sanayii için kalite yönetim standardı.",
  },
  {
    name: "ISO 14001",
    desc: "Çevre yönetim sistemi sertifikası.",
  },
  {
    name: "ISO 45001",
    desc: "İş sağlığı ve güvenliği yönetim sistemi sertifikası.",
  },
];

export default function CertificatesPage() {
  return (
    <main className="bg-slate-950 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <header className="space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400">
            SERTİFİKALAR
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Kalite & Havacılık Sertifikalarımız
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base">
            EMOF Teknoloji, uluslararası standartlara uygun üretim yapan ve
            sektör gerekliliklerini karşılayan kalite yönetim sistemlerine
            sahiptir.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <div
              key={c.name}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:border-blue-500/70 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/50">
                  <FaCertificate className="text-blue-400" />
                </div>
                <h2 className="text-base md:text-lg font-semibold text-white">
                  {c.name}
                </h2>
              </div>
              <p className="text-sm text-slate-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
