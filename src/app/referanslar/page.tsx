export default function ReferanslarPage() {
  const sectors = [
    {
      title: "Ticari Havacılık",
      desc: "Yolcu uçakları için gövde, bağlantı ve yapısal destek parçaları.",
    },
    {
      title: "Savunma & Uzay",
      desc: "İHA, helikopter ve uydu platformları için hassas işlenmiş bileşenler.",
    },
    {
      title: "Endüstriyel Makina",
      desc: "Yüksek dayanımlı mekanik sistemler için motor ve gövde elemanları.",
    },
  ];

  const projects = [
    {
      name: "Yapısal Bağlantı Elemanları",
      detail:
        "Alüminyum ve titanyumdan üretilen, havacılık standardı bağlantı ve bracket parçaları.",
    },
    {
      name: "Motor Destek Bileşenleri",
      detail:
        "Yüksek sıcaklık ve mekanik yüke dayanıklı, CNC işlenmiş motor komponentleri.",
    },
    {
      name: "Prototip Gövde Panelleri",
      detail:
        "Yeni platformlar için düşük adetli, yüksek hassasiyetli gövde prototip parçaları.",
    },
  ];

  const stats = [
    { label: "Tamamlanan Proje", value: "80+" },
    { label: "Teslim Edilen Parça", value: "5.000+" },
    { label: "Zamanında Teslimat", value: "%98" },
    { label: "Uluslararası Standart", value: "AS9100 & ISO" },
  ];

  return (
    <main className="bg-slate-950 min-h-screen py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER */}
        <section className="space-y-5">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
            REFERANSLAR
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Güvenilir İş Ortaklıkları ve Proje Deneyimi
          </h1>

          <p className="text-slate-300 max-w-3xl text-sm md:text-base">
            EMOF Teknoloji, havacılık ve savunma sanayii başta olmak üzere birçok
            sektörde yüksek hassasiyetli üretim çözümleri sunmaktadır. Aşağıda,
            hizmet verdiğimiz başlıca alanlar ve örnek proje tipleri yer almaktadır.
          </p>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
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

        {/* SECTORS */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Hizmet Verdiğimiz Alanlar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 shadow-xl"
              >
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  {sector.title}
                </h3>
                <p className="text-slate-300 text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT TYPES */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Örnek Parça & Proje Tipleri</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.name}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 shadow-xl"
              >
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  {p.name}
                </h3>
                <p className="text-slate-300 text-sm">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
