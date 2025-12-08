

import { FaCogs } from "react-icons/fa";

const products = [
  {
    name: "Uçak Gövde Parçaları",
    code: "AERO-STRUCT",
    desc: "Gövde ve konstrüksiyon bileşenleri için yüksek hassasiyetli CNC işleme.",
  },
  {
    name: "Titanyum Bağlantı Elemanları",
    code: "TI-FAST",
    desc: "Hafif ve yüksek mukavemetli titanyum bağlantı elemanları.",
  },
  {
    name: "CNC İşlenmiş Prototipler",
    code: "CNC-PROT",
    desc: "Ar-Ge projeleri için düşük adetli, hızlı prototip üretimi.",
  },
  {
    name: "Motor Bileşenleri",
    code: "ENG-PARTS",
    desc: "Isıl ve mekanik yüke dayanıklı motor parçaları.",
  },
  {
    name: "Kabuk & Braket Parçalar",
    code: "BRKT-SHELL",
    desc: "Montaj braketleri ve destek elemanları.",
  },
  {
    name: "Özel Proje Parçaları",
    code: "CUSTOM",
    desc: "Müşteri çizimlerine göre özel parça üretimi.",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-slate-950 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <header className="space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400">
            ÜRÜNLERİMİZ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            CNC & Havacılık Parça Portföyü
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base">
            EMOF Teknoloji, uçak yapıları, motor bileşenleri ve özel proje
            parçaları dahil olmak üzere geniş bir ürün yelpazesi sunar.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.code}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:border-blue-500/70 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/50">
                  <FaCogs className="text-blue-400" />
                </div>
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-white">
                    {p.name}
                  </h2>
                  <p className="text-[11px] uppercase tracking-widest text-blue-300/80">
                    {p.code}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
