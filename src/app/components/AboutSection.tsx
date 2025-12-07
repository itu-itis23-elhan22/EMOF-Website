export default function AboutSection() {
  return (
    <section
      id="hakkimizda"
      className="w-full pt-32 pb-32 bg-slate-900 text-white"
    >
      {/* Başlık */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide text-blue-400">
          HAKKIMIZDA
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          EMOF Teknoloji, havacılık ve savunma sanayii için yüksek hassasiyetli
          CNC üretim süreçlerinde uzmanlaşmış bir mühendislik şirketidir. 
          Yenilikçi üretim teknikleri ve güçlü mühendislik altyapısı ile 
          müşterilerimize güvenilir, kaliteli ve sürdürülebilir çözümler sunuyoruz.
        </p>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">

        <div>
          <div className="text-5xl font-bold text-blue-500">50+</div>
          <div className="mt-2 text-gray-300">Çalışan Sayısı</div>
        </div>

        <div>
          <div className="text-5xl font-bold text-blue-500">250,000+</div>
          <div className="mt-2 text-gray-300">Yıllık Üretim Kapasitesi</div>
        </div>

        <div>
          <div className="text-5xl font-bold text-blue-500">5,000 m²</div>
          <div className="mt-2 text-gray-300">Tesis Alanı</div>
        </div>

        <div>
          <div className="text-5xl font-bold text-blue-500">12</div>
          <div className="mt-2 text-gray-300">Aktif Program</div>
        </div>

      </div>

      {/* Alt paragraf + Resim */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

        {/* Örnek Resim */}
        <img
          src="/factory.jpg"
          alt="factory"
          className="rounded-lg shadow-lg"
        />

        {/* Metin */}
        <p className="text-gray-300 leading-relaxed text-lg">
          Modern üretim makineleri, yetkin mühendis ekibi ve kalite odaklı süreç 
          yönetimi sayesinde EMOF Teknoloji, havacılık sektörünün ihtiyaç duyduğu 
          yüksek hassasiyetli parçaları güvenilir şekilde üretmektedir. 
          Tasarımdan prototipe, seri üretimden kalite kontrol süreçlerine kadar 
          tüm adımlarda mükemmellik yaklaşımını benimseyerek sektörde güçlü bir 
          çözüm ortağı konumu elde ettik.
        </p>
      </div>
    </section>
  );
}
