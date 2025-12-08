export default function IletisimPage() {
  return (
    <main className="bg-slate-950 min-h-screen py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* ---------------------------------------- */}
        {/* HEADER */}
        {/* ---------------------------------------- */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-xs tracking-[0.3em] text-blue-400">
            İLETİŞİM
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Bizimle İletişime Geçin
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            EMOF Teknoloji olarak tüm soru ve taleplerinizi memnuniyetle karşılıyoruz.
            Aşağıdaki kanallardan bize ulaşabilir veya formu doldurabilirsiniz.
          </p>
        </div>

        {/* ---------------------------------------- */}
        {/* CONTACT INFO CARDS */}
        {/* ---------------------------------------- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {/* ADDRESS */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition">
            <h2 className="text-xl font-bold mb-4 text-blue-400">📍 Adres</h2>
            <p className="text-slate-300 leading-relaxed">
              EMOF Teknoloji  
              <br /> Ankara Uzay & Havacılık Sanayi Bölgesi
              <br /> Türkiye
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition">
            <h2 className="text-xl font-bold mb-4 text-blue-400">☎️ Telefon</h2>
            <p className="text-slate-300 mb-3">
              +90 (312) 000 00 00
            </p>

            <a
              href="https://wa.me/905300000000"
              className="inline-block mt-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-sm transition"
              target="_blank"
            >
              WhatsApp ile iletişime geç
            </a>
          </div>

          {/* EMAIL & HOURS */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition">
            <h2 className="text-xl font-bold mb-4 text-blue-400">✉️ E-posta</h2>
            <p className="text-slate-300 mb-4">info@emofteknoloji.com</p>

            <h3 className="font-bold text-blue-400 mb-2">Çalışma Saatleri</h3>
            <p className="text-slate-300 text-sm">
              Pazartesi – Cuma  
              <br /> 09:00 – 18:00
            </p>
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* CONTACT FORM */}
        {/* ---------------------------------------- */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-10 shadow-xl mb-24">
          <h2 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Adınız"
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none"
            />

            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none"
            />

            <input
              type="text"
              placeholder="Konu"
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none md:col-span-2"
            />

            <textarea
              placeholder="Mesajınız"
              rows={6}
              className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-blue-500 focus:ring-2 outline-none md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-blue-500/40"
            >
              Gönder
            </button>
          </form>
        </div>

        {/* ---------------------------------------- */}
        {/* GOOGLE MAPS */}
        {/* ---------------------------------------- */}
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.876389978393!2d32.8597414!3d39.9333634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f5cef2b3c4b%3A0x5c6a6e58f35b706e!2sAnkara!5e0!3m2!1str!2str!4v1700000000000"
            width="100%"
            height="100%"
            loading="lazy"
            className="filter grayscale contrast-125 brightness-90"
          ></iframe>
        </div>

      </div>
    </main>
  );
}
