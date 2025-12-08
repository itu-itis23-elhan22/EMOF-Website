export default function HaberlerPage() {
  const news = [
    {
      title: "EMOF Teknoloji, Yeni CNC Üretim Hattını Devreye Aldı",
      date: "12 Ocak 2025",
      desc: "Havacılık sektörüne yönelik yüksek hassasiyetli üretim kapasitesi artırıldı.",
      img: "/news1.jpg",
    },
    {
      title: "ISO 9001 & ISO 45001 Sertifikasyon Süreci Tamamlandı",
      date: "05 Aralık 2024",
      desc: "Kalite yönetimi ve iş güvenliği alanında uluslararası standartlara uyum sağlandı.",
      img: "/news2.jpg",
    },
    {
      title: "Yeni Ar-Ge Projesi TÜBİTAK Tarafından Desteklendi",
      date: "20 Kasım 2024",
      desc: "Havacılık yapısal parçaları için gelişmiş titanyum alaşımlar üzerine çalışmalar başladı.",
      img: "/news3.jpg",
    },
  ];

  return (
    <main className="bg-slate-950 min-h-screen py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <header className="text-center space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400">HABERLER</p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Son Gelişmeler & Duyurular
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            EMOF Teknoloji olarak üretim, sertifikasyon ve Ar-Ge süreçlerimizdeki tüm yenilikleri buradan takip edebilirsiniz.
          </p>
        </header>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {news.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 rounded-2xl border border-slate-800 overflow-hidden shadow-lg transition hover:shadow-blue-500/30 hover:border-blue-500/70 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="h-48 bg-slate-800">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <p className="text-blue-400 text-xs tracking-widest">{item.date}</p>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm">{item.desc}</p>

                <button className="mt-4 text-blue-400 font-semibold hover:text-blue-300 transition">
                  Haberin Detayı →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
