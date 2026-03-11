import { useState } from "react";
import { useNavigate } from "react-router-dom";
const packages = [
  {
    id: "basic",
    nama: "Paket Basic",
    harga: "Rp 50.000",
    kuota: "10 GB",
    masa: "30 hari",
    kecepatan: "10 Mbps",
    tag: null,
    fitur: [
      "10 GB kuota utama",
      "Akses semua aplikasi",
      "Masa aktif 30 hari",
      "Layanan 24/7",
    ],
  },
  {
    id: "premium",
    nama: "Paket Premium",
    harga: "Rp 150.000",
    kuota: "50 GB",
    masa: "30 hari",
    kecepatan: "50 Mbps",
    tag: "Terpopuler",
    fitur: [
      "50 GB kuota utama",
      "10 GB kuota malam",
      "Akses semua aplikasi",
      "Masa aktif 30 hari",
      "Prioritas jaringan",
      "Layanan 24/7",
    ],
  },
  {
    id: "vip",
    nama: "Paket VIP",
    harga: "Rp 300.000",
    kuota: "Unlimited",
    masa: "30 hari",
    kecepatan: "100 Mbps",
    tag: "Terbaik",
    fitur: [
      "Kuota unlimited",
      "Kecepatan hingga 100 Mbps",
      "Akses semua aplikasi",
      "Masa aktif 30 hari",
      "Jaringan prioritas VIP",
      "Support dedicated",
      "Gratis roaming nasional",
    ],
  },
];
const promos = [
  {
    label: "FLASH SALE",
    title: "Hemat 30% untuk Paket Premium",
    desc: "Hanya sampai akhir bulan ini. Jangan sampai kehabisan!",
    accent: "bg-amber-400 text-zinc-950",
    bg: "bg-gradient-to-br from-amber-950/40 to-zinc-900",
    border: "border-amber-800/40",
  },
  {
    label: "REFERRAL",
    title: "Ajak Teman, Dapat Bonus 5 GB",
    desc: "Bagikan kode referral kamu dan nikmati bonus kuota setiap bulan.",
    accent: "bg-sky-400 text-zinc-950",
    bg: "bg-gradient-to-br from-sky-950/40 to-zinc-900",
    border: "border-sky-800/40",
  },
  {
    label: "LOYALITAS",
    title: "Pelanggan Setia Dapat Cashback",
    desc: "Perpanjang paket 3 bulan berturut-turut, cashback otomatis masuk dompet digital.",
    accent: "bg-emerald-400 text-zinc-950",
    bg: "bg-gradient-to-br from-emerald-950/40 to-zinc-900",
    border: "border-emerald-800/40",
  },
];
const testimonials = [
  {
    nama: "Rina S.",
    kota: "Jakarta",
    bintang: 5,
    pesan:
      "Sinyal kenceng banget, streaming lancar tanpa buffering. Paket Premium pilihan terbaik!",
  },
  {
    nama: "Dito A.",
    kota: "Surabaya",
    bintang: 5,
    pesan:
      "Harga terjangkau, kuota besar. Sudah 2 tahun pakai dan gak pernah kecewa.",
  },
  {
    nama: "Maya P.",
    kota: "Bandung",
    bintang: 4,
    pesan:
      "Pelayanan customer service responsif dan ramah. Masalah langsung diselesaikan.",
  },
];
const faqs = [
  {
    q: "Berapa lama aktivasi setelah pembelian?",
    a: "Paket aktif dalam hitungan menit setelah pembayaran berhasil dikonfirmasi.",
  },
  {
    q: "Apakah kuota bisa dipindahkan ke bulan berikutnya?",
    a: "Kuota yang tidak terpakai tidak dapat dipindahkan. Sisa kuota hangus di akhir masa aktif.",
  },
  {
    q: "Bagaimana cara cek sisa kuota?",
    a: "Kamu bisa cek sisa kuota melalui aplikasi MyData atau ketik *888# di ponselmu.",
  },
  {
    q: "Apakah ada biaya tambahan?",
    a: "Tidak ada biaya tersembunyi. Harga yang tertera sudah termasuk semua layanan yang disebutkan.",
  },
];
const MenuCustomerPage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [promoIdx, setPromoIdx] = useState(0);
  const handleSelectPackage = (namaPaket: string) => {
    navigate("/customerpackagepurchase", {
      state: { selectedPackage: namaPaket },
    });
  };
  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-zinc-950 text-zinc-100"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .fu-0 { animation: fadeUp 0.5s 0.0s ease both; }
        .fu-1 { animation: fadeUp 0.5s 0.1s ease both; }
        .fu-2 { animation: fadeUp 0.5s 0.2s ease both; }
        .fu-3 { animation: fadeUp 0.5s 0.3s ease both; }
        .fu-4 { animation: fadeUp 0.5s 0.4s ease both; }
        .fu-5 { animation: fadeUp 0.5s 0.5s ease both; }
        .card-hover { transition: border-color 0.2s, transform 0.2s; }
        .card-hover:hover { border-color: rgb(161 161 170); transform: translateY(-3px); }
        .ticker-wrap { overflow: hidden; white-space: nowrap; }
        .ticker-inner { display: inline-block; animation: ticker 20s linear infinite; }
      `}</style>
      {}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 bg-zinc-950/90 backdrop-blur z-40">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="#09090b" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-white">DataNet</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500 hidden sm:block">
            Halo, Pelanggan 👋
          </span>
          <button
            onClick={() => navigate("/login")}
            className="text-xs text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-3 py-1.5 rounded-lg transition"
          >
            Keluar
          </button>
        </div>
      </nav>
      {}
      <section className="px-6 py-16 max-w-2xl mx-auto fu-0">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
          Paket Internet Terbaik
        </p>
        <h1 className="text-4xl font-bold text-white leading-tight mb-4">
          Internet Cepat,
          <br />
          Harga Bersahabat.
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
          Nikmati koneksi internet stabil untuk kerja, belajar, dan hiburan.
          Pilih paket yang sesuai kebutuhanmu — aktif dalam hitungan menit.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          {["Tanpa kontrak", "Aktif instan", "Support 24/7"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span className="text-zinc-400 text-xs">{t}</span>
            </div>
          ))}
        </div>
      </section>
      {}
      <div className="border-y border-zinc-800 bg-zinc-900/40 fu-1">
        <div className="max-w-2xl mx-auto px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { angka: "2 Juta+", label: "Pelanggan Aktif" },
            { angka: "500+", label: "Kota Terjangkau" },
            { angka: "99.9%", label: "Uptime Jaringan" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xl font-medium text-white"
              >
                {s.angka}
              </p>
              <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      {}
      <section className="px-6 py-10 max-w-2xl mx-auto fu-2">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">
          Promo Spesial
        </p>
        <div
          className={`rounded-2xl border p-6 transition-all duration-500 ${promos[promoIdx].bg} ${promos[promoIdx].border}`}
        >
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-md ${promos[promoIdx].accent}`}
          >
            {promos[promoIdx].label}
          </span>
          <h3 className="text-lg font-semibold text-white mt-3 mb-1">
            {promos[promoIdx].title}
          </h3>
          <p className="text-sm text-zinc-400">{promos[promoIdx].desc}</p>
        </div>
        <div className="flex gap-2 mt-3 justify-center">
          {promos.map((_, i) => (
            <button
              key={i}
              onClick={() => setPromoIdx(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === promoIdx ? "bg-white" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </section>
      {}
      <section className="px-6 pb-10 max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-1 fu-2">
          Pilih Paket
        </p>
        <h2 className="text-2xl font-semibold text-white mb-6 fu-3">
          Paket Internet Kami
        </h2>
        <div className="flex flex-col gap-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`fu-${
                i + 3
              } card-hover relative border border-zinc-800 rounded-2xl p-6 bg-zinc-900/50 cursor-pointer`}
              onClick={() => handleSelectPackage(pkg.nama)}
            >
              {pkg.tag && (
                <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full bg-white text-zinc-950 font-semibold">
                  {pkg.tag}
                </span>
              )}
              <div className="mb-4">
                <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-1">
                  {pkg.nama}
                </p>
                <p
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-2xl font-medium text-white"
                >
                  {pkg.harga}
                  <span className="text-sm text-zinc-500 font-normal">
                    {" "}
                    / bulan
                  </span>
                </p>
              </div>
              <div className="border-t border-zinc-800 my-4" />
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[
                  { label: "Kuota", val: pkg.kuota },
                  { label: "Masa Aktif", val: pkg.masa },
                  { label: "Kecepatan", val: pkg.kecepatan },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xs text-zinc-600 mb-1">{s.label}</p>
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-sm text-zinc-100"
                    >
                      {s.val}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                {pkg.fitur.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="text-emerald-400 text-xs">✓</span>
                    <span className="text-xs text-zinc-400">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-end">
                <span className="text-xs text-zinc-400 hover:text-white transition flex items-center gap-1">
                  Beli sekarang
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6H10M10 6L7 3M10 6L7 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="border-t border-zinc-800 px-6 py-12 max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-1">
          Keunggulan
        </p>
        <h2 className="text-2xl font-semibold text-white mb-8">
          Kenapa Pilih DataNet?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: "⚡",
              title: "Kecepatan Tinggi",
              desc: "Jaringan 4G/5G dengan teknologi terkini untuk streaming dan gaming tanpa gangguan.",
            },
            {
              icon: "🔒",
              title: "Aman & Terpercaya",
              desc: "Enkripsi data end-to-end. Privasi kamu terjaga setiap saat.",
            },
            {
              icon: "🌍",
              title: "Jangkauan Luas",
              desc: "Tersedia di 500+ kota di seluruh Indonesia, termasuk pelosok daerah.",
            },
            {
              icon: "🎧",
              title: "Support 24/7",
              desc: "Tim customer service siap membantu kapan saja melalui chat, telepon, atau email.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <p className="text-sm font-medium text-white mb-1">
                {item.title}
              </p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="border-t border-zinc-800 px-6 py-12 max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-1">
          Testimoni
        </p>
        <h2 className="text-2xl font-semibold text-white mb-8">
          Kata Pelanggan Kami
        </h2>
        <div className="flex flex-col gap-4">
          {testimonials.map((t) => (
            <div
              key={t.nama}
              className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.bintang)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xs">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                "{t.pesan}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-300">
                  {t.nama[0]}
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-200">{t.nama}</p>
                  <p className="text-xs text-zinc-600">{t.kota}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="border-t border-zinc-800 px-6 py-12 max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-1">
          FAQ
        </p>
        <h2 className="text-2xl font-semibold text-white mb-8">
          Pertanyaan Umum
        </h2>
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/30"
            >
              <button
                className="w-full px-5 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-sm text-zinc-100 font-medium pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-zinc-500 text-xs flex-shrink-0 transition-transform duration-200 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="px-6 pb-12 max-w-2xl mx-auto">
        <div className="border border-zinc-700 rounded-2xl p-8 bg-zinc-900 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-2">
            Mulai Sekarang
          </p>
          <h3 className="text-xl font-semibold text-white mb-2">
            Siap untuk internet yang lebih cepat?
          </h3>
          <p className="text-sm text-zinc-400 mb-6">
            Pilih paket di atas dan aktif dalam hitungan menit.
          </p>
          <button
            onClick={() => handleSelectPackage("Paket Premium")}
            className="bg-white hover:bg-zinc-100 text-zinc-950 font-medium text-sm px-8 py-3 rounded-xl transition"
          >
            Mulai dengan Paket Premium
          </button>
        </div>
      </section>
      {}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="#09090b" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-zinc-400">DataNet</span>
          </div>
          <div className="flex gap-6">
            {["Syarat & Ketentuan", "Privasi", "Hubungi Kami"].map((l) => (
              <button
                key={l}
                className="text-xs text-zinc-600 hover:text-zinc-400 transition"
              >
                {l}
              </button>
            ))}
          </div>
          <p className="text-xs text-zinc-700">© 2025 DataNet</p>
        </div>
      </footer>
    </div>
  );
};
export default MenuCustomerPage;
