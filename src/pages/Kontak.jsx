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

    // Simulasi pengiriman data
    await new Promise((resolve) => setTimeout(resolve, 1500));

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
      details: ["(0331) 234-5678", "+62 812-3456-7890 (WhatsApp)"],
      link: "https://wa.me/6281234567890",
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
      color: "bg-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/nurulyaqinpesantren",
      color: "bg-pink-600",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/@nurulyaqinpesantren",
      color: "bg-red-600",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara mendaftar santri baru?",
      answer:
        "Pendaftaran santri baru dibuka setiap tahun ajaran baru. Silakan hubungi admin untuk informasi lengkap.",
    },
    {
      question: "Apa saja persyaratan pendaftaran?",
      answer:
        "Persyaratan meliputi: fotokopi akta kelahiran, KK, rapor terakhir, surat keterangan sehat, dan pas foto 3x4.",
    },
    {
      question: "Berapa biaya pendidikan di pondok?",
      answer:
        "Biaya pendidikan dapat dilihat di brosur atau langsung konsultasi dengan bagian administrasi.",
    },
    {
      question: "Apakah ada program beasiswa?",
      answer:
        "Ya, tersedia program beasiswa untuk santri berprestasi dan kurang mampu.",
    },
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
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami untuk
            informasi lebih lanjut.
          </p>
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
                  className="card text-center hover:shadow-2xl transition-shadow duration-300"
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
                      className="inline-block mt-4 text-primary hover:text-primary-light font-semibold"
                    >
                      Lihat di peta →
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
              <h2 className="text-3xl font-bold mb-2">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-600">
                    Terima kasih telah menghubungi kami. Tim kami akan segera
                    merespons pesan Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        <User size={16} className="inline mr-2" />
                        Nama Lengkap
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
                        Email
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
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="0812 3456 7890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        <MessageSquare size={16} className="inline mr-2" />
                        Subjek
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Contoh: Pendaftaran Santri"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-br from-primary to-primary-light text-white hover:shadow-xl hover:-translate-y-1"
                    }`}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send size={20} className="inline mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
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
                <div className="mt-6 flex items-center">
                  <MapPin className="text-primary mr-3" size={20} />
                  <p className="text-gray-600">
                    Jl. Panjaitan Gg. Merak No. 36, Tamansari, Bondowoso
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-6">Ikuti Kami</h3>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 px-6 py-3 rounded-lg text-white ${social.color} hover:opacity-90 transition-opacity`}
                      >
                        <Icon size={20} />
                        <span className="font-semibold">{social.name}</span>
                      </a>
                    );
                  })}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kunjungi Pondok Kami
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Jadwalkan kunjungan ke Pondok Pesantren Nurul Yaqin untuk melihat
            langsung kegiatan belajar mengajar dan fasilitas kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
              </svg>
              Jadwalkan via WhatsApp
            </a>
            <a
              href="tel:+623312345678"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone size={24} className="mr-3" />
              Telepon Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
