export default function KadromuzPage() {
  const stats = [
    { label: "Toplam Çalışan", value: "54" },
    { label: "Mühendis", value: "18" },
    { label: "Teknisyen / Operatör", value: "26" },
    { label: "Kalite & Destek", value: "10" },
  ];

  const teams = [
    {
      title: "Yönetim & Planlama",
      desc: "Şirket stratejisi, proje yönetimi ve üretim planlamasından sorumlu ekip.",
      roles: [
        "Genel Müdür",
        "Operasyon Yöneticisi",
        "Üretim Planlama Uzmanları",
      ],
    },
    {
      title: "Mühendislik",
      desc: "CNC işleme yöntemleri, proses tasarımı ve teknik dokümantasyon ekibi.",
      roles: [
        "Makine Mühendisleri",
        "Havacılık Mühendisleri",
        "Proses / İmalat Mühendisleri",
        "Ar-Ge Mühendisleri",
      ],
    },
    {
      title: "Üretim & Operasyon",
      desc: "CNC tezgahlarının işletilmesi, programlama ve saha uygulamaları.",
      roles: [
        "CNC Operatörleri",
        "Takım Ayarcılar",
        "Tezgah Programcıları",
      ],
    },
    {
      title: "Kalite & Sertifikasyon",
      desc: "AS9100 ve havacılık gerekliliklerine uygun kalite yönetim süreçleri.",
      roles: [
        "Kalite Kontrol Uzmanları",
        "CMM Operatörleri",
        "Dokümantasyon / Sertifikasyon",
      ],
    },
    {
      title: "Lojistik & Depo",
      desc: "Malzeme giriş-çıkışı, stok yönetimi ve sevkiyat organizasyonu.",
      roles: [
        "Lojistik Sorumluları",
        "Depo Görevlileri",
      ],
    },
    {
      title: "Destek & İdari",
      desc: "İnsan kaynakları, finans ve idari operasyonlar.",
      roles: [
        "İK Uzmanları",
        "Finans / Muhasebe",
        "İdari İşler",
      ],
    },
  ];

  return (
    <main className="bg-slate-950 min-h-screen py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <section className="space-y-5">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">
            KADROMUZ
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Uzman Ekibimizle  
            <span className="text-blue-400"> Havacılık Üretimine Güç Katıyoruz</span>
          </h1>

          <p className="text-slate-300 max-w-3xl text-sm md:text-base">
            EMOF Teknoloji; mühendislik, üretim, kalite ve destek birimlerinden oluşan
            disiplinli ve deneyimli bir ekip yapısına sahiptir. Her çalışanımız, havacılık
            standartlarına uygun üretim hedefiyle hareket eder.
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

        {/* TEAMS GRID */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ekip Yapımız
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team) => (
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
