export default function VizyonPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* HERO / HEADER */}
      <section className="relative py-24 bg-gradient-to-b from-blue-900/40 to-slate-950 overflow-hidden">

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] opacity-40"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-6">
          <p className="text-xs tracking-[0.35em] text-blue-400 uppercase">VİZYONUMUZ</p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Geleceğe Yön Veren  
            <span className="text-blue-400"> Havacılık Teknolojileri</span>
          </h1>

          <p className="text-slate-300 max-w-2xl text-lg">
            EMOF Teknoloji olarak hedefimiz; milli havacılık sanayisine yüksek hassasiyetli üretim çözümleri sunarak
            uçuş güvenliği, sürdürülebilirlik ve yenilikçilik alanlarında dünya çapında örnek bir şirket olmaktır.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-14">

        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
            <p>• Türkiye'nin havacılık üretim teknolojilerinde stratejik çözüm ortağı olmak</p>
            <p>• Yüksek hassasiyetli CNC üretim kapasitesini global havacılık standartlarına taşımak</p>
            <p>• AS9100 ve uluslararası sertifikasyonlarla uyumlu üretim kültürünü genişletmek</p>
            <p>• Ar-Ge yatırımlarıyla yeni nesil titanyum ve kompozit işleme teknolojileri geliştirmek</p>
            <p>• Dijital dönüşüm ve endüstri 4.0 altyapılarını üretimin tüm aşamalarında yaygınlaştırmak</p>
          </div>

          <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Stratejik Yaklaşım</h3>
            <p className="text-slate-300 leading-relaxed">
              EMOF Teknoloji, tüm operasyonlarında güvenilirlik, mühendislik disiplini ve kalite kültürünü merkeze alarak
              yerli havacılık ekosisteminde uzun vadeli değer yaratmayı hedeflemektedir.
            </p>
          </div>

        </div>

        {/* QUOTE SECTION */}
        <div className="p-10 bg-gradient-to-r from-blue-900/30 to-slate-900/30 rounded-2xl border border-slate-800 backdrop-blur-xl shadow-xl">
          <p className="text-2xl font-semibold text-blue-300 italic">
            “Güvenilir üretim, güçlü mühendislik ve sürekli gelişim ile geleceğin havacılık teknolojilerini inşa ediyoruz.”
          </p>
        </div>

      </section>
    </main>
  );
}
