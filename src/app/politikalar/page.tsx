export default function PolitikalarPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* HEADER */}
      <section className="relative py-24 bg-gradient-to-b from-blue-900/40 to-slate-950">

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-6">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">KALİTE POLİTİKALARIMIZ</p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Uluslararası Standartlarda  
            <span className="text-blue-400"> Havacılık Üretimi</span>
          </h1>

          <p className="text-slate-300 max-w-2xl text-lg">
            EMOF Teknoloji, üretiminin her aşamasında uçuş güvenliğini, kaliteyi ve iş güvenliğini öncelik olarak benimser.
            Tüm süreçlerimiz AS9100, ISO 9001 ve ISO 45001 standartlarıyla uyumludur.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-14">

        <div className="space-y-8">

          <div className="p-8 bg-slate-900/60 border border-slate-700 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-3">• Kalite Yönetim Sistemi</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Üretim süreçlerimiz AS9100 kalite standardına göre tasarlanmış olup,
              parça izlenebilirliği, proses kontrolü ve dokümantasyon yönetimi en üst seviyede yürütülür.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 border border-slate-700 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-3">• İş Güvenliği & Çevre Politikası</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tüm operasyonlarımızda çalışan sağlığı, çevre güvenliği ve yasal uyumluluk temel önceliktir.
              Sürdürülebilir üretim prensipleriyle hareket ederiz.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 border border-slate-700 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-3">• Sürekli Gelişim</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              EMOF Teknoloji, her yıl Ar-Ge ve modernizasyon yatırımlarını artırarak kalite ve üretim verimliliğini
              sürekli olarak geliştirir.
            </p>
          </div>

        </div>

        {/* Global Standards */}
        <div className="p-10 bg-gradient-to-r from-slate-900/20 to-blue-900/20 rounded-2xl border border-blue-900/40 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-300">Uygulanan Standartlar</h3>

          <ul className="text-slate-300 text-lg space-y-1 text-center">
            <li>AS9100 Rev.D Havacılık Kalite Standardı</li>
            <li>ISO 9001:2015 Kalite Yönetim Sistemi</li>
            <li>ISO 45001 İş Sağlığı ve Güvenliği</li>
            <li>Havacılık tedarik zinciri gereksinimleri</li>
          </ul>
        </div>

      </section>
    </main>
  );
}
