import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Home,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

import { FaTiktok } from "react-icons/fa";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Nomor WhatsApp Pondok Pesantren
  const PONDOK_WHATSAPP = "6281220336418";
  const PONDOK_PHONE = "6281220336418";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate WhatsApp message
    const whatsappMessage = `*KONTAK PESAN DARI WEBSITE PONDOK PESANTREN NURUL YAQIN*

*Data Pengirim:*
👤 Nama: ${formData.name}
📧 Email: ${formData.email}
📱 Telepon: ${formData.phone}

*Detail Pesan:*
📌 Subjek: ${formData.subject}
💬 Pesan: ${formData.message}

*Tanggal:* ${new Date().toLocaleString("id-ID")}
    
*Mohon untuk ditindaklanjuti.*
*Salam hormat,*`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${PONDOK_WHATSAPP}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Simulasi delay untuk UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form setelah 3 detik
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: [
        "Jl. Panjaitan Gg. Merak No. 36",
        "RT 06 RW 02, Tamansari",
        "Bondowoso, Jawa Timur",
      ],
      link: "https://maps.google.com/?q=Pondok+Pesantren+Nurul+Yaqin+Bondowoso",
    },
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: ["+62 812-2033-6418 (WhatsApp)", "Senin - Jumat: 07:00 - 17:00"],
      link: `https://wa.me/${PONDOK_WHATSAPP}`,
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nurulyaqin.sch.id", "administrasi@nurulyaqin.sch.id"],
      link: "mailto:info@nurulyaqin.sch.id",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 07:00 - 17:00 WIB",
        "Sabtu: 07:00 - 15:00 WIB",
        "Minggu: Libur",
      ],
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/nurulyaqinpesantren",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/pondok_nurul_yaqin",
      color:
        "bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/@NurulYaqinChannel77",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: FaTiktok,
      name: "TikTok",
      url: "https://tiktok.com/@tafakkur.ilahiyyah",
      color: "bg-black hover:bg-gray-800",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara mendaftar santri baru?",
      answer:
        "Pendaftaran santri baru dibuka setiap tahun ajaran baru. Silakan hubungi admin via WhatsApp untuk informasi lengkap.",
    },
    {
      question: "Apa saja persyaratan pendaftaran?",
      answer:
        "Persyaratan meliputi: fotokopi akta kelahiran, KK, rapor terakhir, surat keterangan sehat, dan pas foto 3x4.",
    },
    {
      question: "Berapa biaya pendidikan di pondok?",
      answer:
        "Biaya pendidikan dapat dilihat di brosur atau langsung konsultasi dengan bagian administrasi via WhatsApp.",
    },
    {
      question: "Apakah ada program beasiswa?",
      answer:
        "Ya, tersedia program beasiswa untuk santri berprestasi dan kurang mampu.",
    },
  ];

  const popularSubjects = [
    "Pendaftaran Santri Baru",
    "Informasi Biaya Pendidikan",
    "Program Beasiswa",
    "Kunjungan Pondok",
    "Kerjasama",
    "Lainnya",
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami via WhatsApp untuk respon cepat. Kami siap membantu
            Anda 24/7.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={`https://wa.me/${PONDOK_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
              </svg>
              Chat via WhatsApp (+62 812-2033-6418)
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="card text-center hover:shadow-2xl transition-shadow duration-300 hover:translate-y-[-5px]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.link && (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block mt-4 px-4 py-2 rounded-lg font-semibold transition-colors ${
                        info.isWhatsApp
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-primary text-white hover:bg-primary-light"
                      }`}
                    >
                      {info.isWhatsApp
                        ? "Chat Sekarang"
                        : info.title === "Alamat"
                        ? "Lihat di Maps"
                        : "Kirim Email"}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-primary mr-3" size={28} />
                <div>
                  <h2 className="text-3xl font-bold">
                    Kirim Pesan via WhatsApp
                  </h2>
                  <p className="text-gray-600">
                    Pesan akan langsung dikirim ke WhatsApp admin pondok
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    WhatsApp Terbuka!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    WhatsApp telah terbuka dengan pesan Anda. Tinggal klik kirim
                    untuk mengirim ke admin pondok.
                  </p>
                  <p className="text-sm text-gray-500">
                    Nomor tujuan: +62 812-2033-6418
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        <User size={16} className="inline mr-2" />
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
                        <Mail size={16} className="inline mr-2" />
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        <Phone size={16} className="inline mr-2" />
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
                          placeholder="812 2033 6418"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        <MessageSquare size={16} className="inline mr-2" />
                        Subjek Pesan *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Pilih subjek...</option>
                        {popularSubjects.map((subject, idx) => (
                          <option key={idx} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      {!formData.subject && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {popularSubjects.slice(0, 3).map((subject, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, subject }))
                              }
                              className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full"
                            >
                              {subject}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Detail Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tulis pesan lengkap Anda di sini..."
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-2">
                      Pesan ini akan dikirim langsung ke WhatsApp admin pondok
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start">
                      <MessageSquare
                        className="text-blue-600 mr-3 mt-1"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold text-blue-800 mb-1">
                          Proses Pengiriman:
                        </p>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>1. Isi formulir di atas</li>
                          <li>2. Klik "Buka WhatsApp"</li>
                          <li>3. WhatsApp akan terbuka dengan pesan terisi</li>
                          <li>4. Klik kirim untuk mengirim ke admin pondok</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-xl hover:-translate-y-1"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Membuka WhatsApp...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6 mr-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                        </svg>
                        Buka WhatsApp dan Kirim Pesan
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Pesan akan dikirim ke: <strong>+62 812-2033-6418</strong>
                  </p>
                </form>
              )}
            </div>

            {/* Map & Location */}
            <div className="space-y-8">
              {/* Map */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-6">Lokasi Kami</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.7159302342263!2d113.83177077483765!3d-8.112305291932218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd151e2f8b1e733%3A0x47c5a1e00e72f9d8!2sJl.%20Panjaitan%2C%20Tamansari%2C%20Kec.%20Bondowoso%2C%20Kabupaten%20Bondowoso%2C%20Jawa%20Timur%2068215!5e0!3m2!1sid!2sid!4v1648342345678"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Pondok Pesantren Nurul Yaqin"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-primary mr-3" size={20} />
                    <p className="text-gray-600">
                      Jl. Panjaitan Gg. Merak No. 36, Tamansari, Bondowoso
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Pondok+Pesantren+Nurul+Yaqin+Bondowoso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-light font-semibold"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-6">
                  Ikuti Media Sosial Kami
                </h3>
                <p className="text-gray-600 mb-6">
                  Ikuti perkembangan terbaru kegiatan pondok di media sosial
                  kami:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center space-x-3 px-4 py-4 rounded-lg text-white ${social.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                      >
                        <Icon size={20} />
                        <span className="font-semibold">{social.name}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Quick Contact */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-lg mb-4">Kontak Cepat:</h4>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${PONDOK_WHATSAPP}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <Phone className="text-green-600 mr-3" size={20} />
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-gray-600">+62 812-2033-6418</div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@nurulyaqin.sch.id"
                      className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <Mail className="text-blue-600 mr-3" size={20} />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-600">
                          info@nurulyaqin.sch.id
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pertanyaan Umum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beberapa pertanyaan yang sering diajukan oleh calon wali santri
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="card hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                  <div className="mt-4">
                    <a
                      href={`https://wa.me/${PONDOK_WHATSAPP}?text=Saya ingin bertanya tentang: ${encodeURIComponent(
                        faq.question
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary-light font-semibold"
                    >
                      <MessageSquare size={16} className="mr-2" />
                      Tanya via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami Sekarang
            </h2>
            <p className="text-xl mb-10">
              Untuk respon cepat, hubungi kami langsung via WhatsApp. Admin kami
              siap membantu 24/7.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href={`https://wa.me/${PONDOK_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-green-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <svg
                  className="w-7 h-7 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                </svg>
                Chat via WhatsApp
              </a>
              <a
                href={`tel:${PONDOK_PHONE}`}
                className="inline-flex items-center justify-center px-8 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Phone size={28} className="mr-3" />
                Telepon Sekarang
              </a>
            </div>

            <p className="mt-8 text-green-100">
              Respon cepat via WhatsApp: <strong>+62 812-2033-6418</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
