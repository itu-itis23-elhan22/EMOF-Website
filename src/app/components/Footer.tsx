export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800 mt-20">

      {/* TOP ROW */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + YAZI */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-3 select-none">
            EMOF <span className="text-blue-500">Teknoloji</span>
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            CNC işleme, havacılık ve savunma sanayi için yüksek hassasiyetli parça üretimi.
          </p>
        </div>

        {/* QUICK MENU */}
        <div>
          <h4 className="text-white font-semibold mb-4">Hızlı Menü</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/#hakkimizda" className="hover:text-blue-400 transition">Hakkımızda</a></li>
            <li><a href="/urunler" className="hover:text-blue-400 transition">Ürünler</a></li>
            <li><a href="/haberler" className="hover:text-blue-400 transition">Haberler</a></li>
            <li><a href="/iletisim" className="hover:text-blue-400 transition">İletişim</a></li>
          </ul>
        </div>

        {/* İLETİŞİM */}
        <div>
          <h4 className="text-white font-semibold mb-4">Bize Ulaşın</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              📍 <span>Ankara Uzay & Havacılık Sanayi Bölgesi</span>
            </li>
            <li className="flex items-center gap-2">
              📞 <span>+90 (312) 000 00 00</span>
            </li>
            <li className="flex items-center gap-2">
              ✉️ <span>info@emofteknoloji.com</span>
            </li>
          </ul>
        </div>

        {/* SERTİFİKALAR */}
        <div>
          <h4 className="text-white font-semibold mb-4">Sertifikalar</h4>
          <div className="flex flex-col gap-3 opacity-80">
            <img src="/cert-iso9001.png" alt="ISO 9001" className="w-32" />
            <img src="/cert-as9100.png" alt="AS 9100" className="w-32" />
          </div>
        </div>
      </div>

      {/* SOCIAL & COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 mt-14 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-blue-400 transition">🌐</a>
          <a href="#" className="hover:text-blue-400 transition">📘</a>
          <a href="#" className="hover:text-blue-400 transition">📸</a>
          <a href="#" className="hover:text-blue-400 transition">▶️</a>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} EMOF Teknoloji — Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
}
