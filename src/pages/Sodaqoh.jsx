import React, { useState } from "react";
import {
  Heart,
  Shield,
  CheckCircle,
  Gift,
  Banknote,
  CreditCard,
  Smartphone,
  QrCode,
  Award,
  Users,
  Target,
  BarChart,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const Sodaqoh = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const donationPackages = [
    {
      title: "Sodaqoh Pendidikan",
      amount: "100.000",
      description: "Mendukung biaya pendidikan santri kurang mampu",
      features: ["Sertifikat Donatur", "Laporan Berkala", "Doa Khusus"],
      recommended: false,
    },
    {
      title: "Wakaf Buku",
      amount: "500.000",
      description: "Menyumbangkan kitab dan buku referensi",
      features: [
        "Plakat Penghargaan",
        "Nama di Perpustakaan",
        "Laporan Tahunan",
      ],
      recommended: true,
    },
    {
      title: "Beasiswa Santri",
      amount: "1.000.000",
      description: "Membiayai pendidikan satu santri selama 1 bulan",
      features: [
        "Sertifikat Wakaf",
        "Progress Report Santri",
        "Kunjungan ke Pondok",
      ],
      recommended: false,
    },
    {
      title: "Renovasi Asrama",
      amount: "5.000.000",
      description: "Kontribusi untuk perbaikan fasilitas asrama",
      features: ["Plakat Donatur", "Nama di Gedung", "Laporan Lengkap"],
      recommended: false,
    },
  ];

  const paymentMethods = [
    { id: "bank", name: "Transfer Bank", icon: Banknote },
    { id: "ewallet", name: "E-Wallet", icon: Smartphone },
    { id: "qris", name: "QRIS", icon: QrCode },
    { id: "credit", name: "Kartu Kredit", icon: CreditCard },
  ];

  const bankAccounts = [
    {
      bank: "Bank Syariah Indonesia",
      account: "777 888 999",
      name: "Yayasan Nurul Yaqin",
    },
    {
      bank: "Bank Mandiri Syariah",
      account: "123 456 789",
      name: "Yayasan Nurul Yaqin",
    },
    {
      bank: "Bank BRI",
      account: "987 654 321",
      name: "Pondok Pesantren Nurul Yaqin",
    },
  ];

  const impactAreas = [
    { area: "Pendidikan Santri", percentage: 40, icon: Users },
    { area: "Fasilitas Pondok", percentage: 25, icon: Gift },
    { area: "Kesejahteraan Guru", percentage: 20, icon: Award },
    { area: "Program Sosial", percentage: 15, icon: Heart },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman donasi
    alert(
      `Terima kasih ${formData.name}! Donasi Anda sebesar Rp ${donationAmount} telah berhasil direkam. Kami akan mengirimkan konfirmasi melalui email.`
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
    setDonationAmount("");
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Sodaqoh & Wakaf
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagi berkah untuk mendukung pendidikan islami generasi penerus
            umat
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Investasi Akhirat yang Tak Pernah Putus
            </h2>
            <p className="text-lg text-gray-600">
              "Sedekah tidak akan mengurangi harta. Tidak ada orang yang
              bersedekah dengan sesuatu kecuali Allah akan menggantikannya."
              (HR. Bukhari). Mari berinvestasi untuk akhirat dengan mendukung
              pendidikan santri-santri penghafal Al-Quran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparan",
                description: "Laporan keuangan tersedia untuk donatur",
                icon: Shield,
              },
              {
                title: "Berkah Terus",
                description: "Pahala terus mengalir walau kita telah tiada",
                icon: Heart,
              },
              {
                title: "Dampak Nyata",
                description: "Langsung menyentuh kebutuhan pendidikan",
                icon: Target,
              },
              {
                title: "Sunnah Nabi",
                description: "Mengikuti teladan Rasulullah dalam berbagi",
                icon: Award,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Paket Donasi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket donasi yang sesuai dengan kemampuan dan niat baik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationPackages.map((pkg, index) => (
              <div
                key={index}
                className={`card relative overflow-hidden ${
                  pkg.recommended ? "border-2 border-accent shadow-xl" : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded-bl-lg">
                    <span className="text-sm font-semibold">REKOMENDASI</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">
                    Rp {pkg.amount}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setDonationAmount(pkg.amount.replace(".", ""))}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.recommended
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "bg-primary text-white hover:bg-primary-light"
                  }`}
                >
                  Pilih Paket Ini
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Area Dampak Donasi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Donasi Anda akan dialokasikan untuk beberapa area berikut
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {impactAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Icon size={20} className="text-primary mr-3" />
                        <span className="font-semibold">{area.area}</span>
                      </div>
                      <span className="font-bold text-primary">
                        {area.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary to-primary-light h-3 rounded-full"
                        style={{ width: `${area.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Donasi Custom</h3>
              <p className="text-gray-600 mb-6">
                Ingin menentukan nominal sendiri? Silahkan masukkan jumlah
                donasi yang Anda inginkan.
              </p>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Jumlah Donasi (Rp)
                </label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Contoh: 50000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Metode Pembayaran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`flex items-center justify-center p-4 rounded-lg border transition-all ${
                          selectedMethod === method.id
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-300 hover:border-primary"
                        }`}
                      >
                        <Icon size={20} className="mr-2" />
                        <span>{method.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Formulir Donasi
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Nama lengkap Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="0812 3456 7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Jumlah Donasi
                  </label>
                  <div className="flex items-center">
                    <span className="bg-white/20 px-4 py-3 rounded-l-lg">
                      Rp
                    </span>
                    <input
                      type="text"
                      value={
                        donationAmount
                          ? new Intl.NumberFormat("id-ID").format(
                              donationAmount
                            )
                          : ""
                      }
                      onChange={(e) =>
                        setDonationAmount(e.target.value.replace(/\D/g, ""))
                      }
                      required
                      className="flex-1 px-4 py-3 rounded-r-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Masukkan jumlah"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Pesan/Pengharapan (Opsional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tulis pesan atau pengharapan untuk santri..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreement"
                  required
                  className="w-5 h-5 mr-3"
                />
                <label htmlFor="agreement" className="text-sm">
                  Saya menyetujui bahwa donasi ini adalah sedekah/sodaqoh/wakaf
                  dan tidak dapat dikembalikan
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
              >
                Lanjutkan Pembayaran
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bank Accounts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Rekening Donasi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transfer langsung ke rekening resmi Pondok Pesantren Nurul Yaqin
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bankAccounts.map((account, index) => (
                <div key={index} className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Banknote className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{account.bank}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-500">
                        No. Rekening:
                      </span>
                      <p className="font-bold text-xl text-primary">
                        {account.account}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Atas Nama:</span>
                      <p className="font-semibold">{account.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 card bg-gray-50">
              <div className="flex items-center mb-6">
                <Shield className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold">Konfirmasi Donasi</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Setelah melakukan transfer, harap konfirmasi melalui salah satu
                cara berikut:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="text-primary mr-3" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">
                      donasi@nurulyaqin.sch.id
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-3" size={20} />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-600">0812 3456 7890</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-3" size={20} />
                  <div>
                    <div className="font-semibold">Kantor</div>
                    <div className="text-gray-600">
                      Jl. Panjaitan Gg. Merak No. 36
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sodaqoh;
