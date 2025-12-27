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
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const Sodaqoh = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    package: "",
  });

  // Nomor WhatsApp Pondok Pesantren
  const PONDOK_WHATSAPP = "6281220336418";

  const donationPackages = [
    {
      title: "Sodaqoh Pendidikan",
      amount: "100000",
      description: "Mendukung biaya pendidikan santri kurang mampu",
      features: ["Sertifikat Donatur", "Laporan Berkala", "Doa Khusus"],
      recommended: false,
    },
    {
      title: "Wakaf Buku",
      amount: "500000",
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
      amount: "1000000",
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
      amount: "5000000",
      description: "Kontribusi untuk perbaikan fasilitas asrama",
      features: ["Plakat Donatur", "Nama di Gedung", "Laporan Lengkap"],
      recommended: false,
    },
  ];

  const paymentMethods = [
    {
      id: "bank",
      name: "Transfer Bank",
      icon: Banknote,
      details: "Transfer ke rekening resmi pondok",
    },
    {
      id: "qris",
      name: "QRIS",
      icon: QrCode,
      details: "Scan QR code untuk pembayaran",
    },
    {
      id: "ewallet",
      name: "E-Wallet",
      icon: Smartphone,
      details: "DANA, OVO, GoPay, ShopeePay",
    },
  ];

  const bankAccounts = [
    {
      bank: "Bank BRI",
      account: "6194 0101 6458 533",
      name: "Holid Batsal",
      code: "BRI",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectPackage = (pkgTitle, pkgAmount) => {
    setDonationAmount(pkgAmount);
    setFormData((prev) => ({
      ...prev,
      package: pkgTitle,
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID").format(amount);
  };

  const generateWhatsAppMessage = () => {
    const selectedPayment = paymentMethods.find((m) => m.id === selectedMethod);
    const selectedPackage = donationPackages.find(
      (p) => p.amount === donationAmount
    );

    const message = `*KONFIRMASI DONASI - PONDOK PESANTREN NURUL YAQIN*

*Data Donatur:*
👤 Nama: ${formData.name}
📧 Email: ${formData.email}
📱 Telepon: ${formData.phone}

*Detail Donasi:*
💰 Jumlah: Rp ${formatCurrency(donationAmount)}
📦 Paket: ${selectedPackage ? selectedPackage.title : "Custom"}
💳 Metode: ${selectedPayment ? selectedPayment.name : "Transfer Bank"}

💌 Pesan: ${formData.message || "-"}

*Konfirmasi Pembayaran:*
✅ Saya telah melakukan transfer donasi
✅ Data yang diisi sudah benar
✅ Donasi ini adalah sedekah/sodaqoh/wakaf

*Mohon konfirmasi penerimaan donasi.*
*Jazakumullah khairan katsiran.*`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!donationAmount) {
      alert("Mohon masukkan jumlah donasi terlebih dahulu");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Mohon lengkapi data diri Anda");
      return;
    }

    // Generate WhatsApp URL
    const whatsappUrl = `https://wa.me/${PONDOK_WHATSAPP}?text=${generateWhatsAppMessage()}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        package: "",
      });
      setDonationAmount("");
      setSelectedMethod("bank");

      // Show success message
      alert(
        "Terima kasih! Formulir donasi telah disimpan. Halaman WhatsApp akan terbuka untuk konfirmasi."
      );
    }, 2000);
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
                className={`card relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  pkg.recommended ? "border-2 border-accent shadow-lg" : ""
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
                    Rp {formatCurrency(pkg.amount)}
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
                  onClick={() => handleSelectPackage(pkg.title, pkg.amount)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    donationAmount === pkg.amount
                      ? "bg-accent text-white"
                      : pkg.recommended
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {donationAmount === pkg.amount ? "✓ Dipilih" : "Pilih Paket"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form & Payment Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Payment Methods */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <CreditCard className="text-primary mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Metode Pembayaran</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="flex items-center">
                          <div
                            className={`p-3 rounded-lg mr-4 ${
                              selectedMethod === method.id
                                ? "bg-primary/10"
                                : "bg-gray-100"
                            }`}
                          >
                            <Icon
                              className={
                                selectedMethod === method.id
                                  ? "text-primary"
                                  : "text-gray-600"
                              }
                              size={20}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <span className="font-bold">{method.name}</span>
                              {selectedMethod === method.id && (
                                <CheckCircle
                                  className="text-green-500"
                                  size={20}
                                />
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {method.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bank Accounts */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4 flex items-center">
                    <Banknote className="mr-2" size={20} />
                    Rekening Resmi Pondok
                  </h4>
                  <div className="space-y-3">
                    {bankAccounts.map((account, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{account.bank}</span>
                          <span className="text-sm text-gray-500">
                            {account.code}
                          </span>
                        </div>
                        <div className="mt-2">
                          <p className="text-primary font-bold text-lg">
                            {account.account}
                          </p>
                          <p className="text-sm text-gray-600">
                            a.n. {account.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Donation Form */}
              <div className="card bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center mb-6">
                  <MessageCircle className="text-primary mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Formulir Donasi</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Display */}
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Jumlah Donasi:</span>
                      <span className="text-2xl font-bold text-primary">
                        {donationAmount
                          ? `Rp ${formatCurrency(donationAmount)}`
                          : "-"}
                      </span>
                    </div>
                    {formData.package && (
                      <div className="mt-2 text-sm text-gray-600">
                        Paket:{" "}
                        <span className="font-semibold">
                          {formData.package}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Nomor WhatsApp *
                    </label>
                    <div className="flex">
                      <span className="bg-gray-100 px-4 py-3 rounded-l-lg border border-gray-300 border-r-0">
                        +62
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="812 3456 7890"
                      />
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
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tulis pesan atau doa untuk santri..."
                    ></textarea>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="text-yellow-600 mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-yellow-800 mb-2">
                          Proses Konfirmasi
                        </p>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>1. Isi formulir di atas</li>
                          <li>2. Klik tombol "Kirim via WhatsApp"</li>
                          <li>3. Konfirmasi akan dikirim ke WhatsApp Pondok</li>
                          <li>4. Admin akan memverifikasi donasi Anda</li>
                          <li>5. Anda akan menerima konfirmasi via WhatsApp</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreement"
                      required
                      className="w-5 h-5 mr-3 mt-1"
                    />
                    <label htmlFor="agreement" className="text-sm">
                      Saya menyetujui bahwa donasi ini adalah
                      sedekah/sodaqoh/wakaf dan tidak dapat dikembalikan. Data
                      yang saya berikan adalah benar.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mx-auto max-w-md"
                    disabled={
                      !donationAmount ||
                      !formData.name ||
                      !formData.email ||
                      !formData.phone
                    }
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Kirim Konfirmasi via WhatsApp</span>
                  </button>

                  <div className="text-center text-sm text-gray-600">
                    <div className="grid grid-cols-1 sm:flex sm:items-center sm:justify-center sm:gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <Phone size={16} className="shrink-0" />
                        <span className="sm:hidden">
                          Konfirmasi akan dikirim ke:
                        </span>
                      </div>
                      <div>
                        <span className="hidden sm:inline">
                          Konfirmasi akan dikirim ke:{" "}
                        </span>
                        <span className="font-medium whitespace-nowrap">
                          +62 812-2033-6418
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-bold">Informasi Konfirmasi</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-4">
                    Tata Cara Konfirmasi:
                  </h4>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        1
                      </span>
                      <span>Lakukan transfer ke rekening yang dipilih</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        2
                      </span>
                      <span>Isi formulir donasi dengan lengkap</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        3
                      </span>
                      <span>Klik tombol "Kirim via WhatsApp"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        4
                      </span>
                      <span>WhatsApp akan terbuka dengan pesan konfirmasi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        5
                      </span>
                      <span>Kirim pesan dan tunggu verifikasi dari admin</span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4">
                    Kontak Admin Donasi:
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <Phone className="text-primary mr-3" size={20} />
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <a
                          href={`https://wa.me/${PONDOK_WHATSAPP}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          +62 812-2033-6418
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <Mail className="text-primary mr-3" size={20} />
                      <div>
                        <div className="font-semibold">Email</div>
                        <a
                          href="mailto:donasi@nurulyaqin.sch.id"
                          className="text-primary hover:underline"
                        >
                          donasi@nurulyaqin.sch.id
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <Clock className="text-primary mr-3" size={20} />
                      <div>
                        <div className="font-semibold">Jam Operasional</div>
                        <div className="text-gray-600">
                          Senin - Jumat: 08:00 - 16:00 WIB
                        </div>
                      </div>
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
