import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  GraduationCap,
  Award,
  ChevronDown,
  Clock,
  UserCheck,
  Building,
} from "lucide-react";
import { useAnimation } from "../hooks/useAnimation";
import HeroBg from "../assets/images/gmb7.jpeg";
import PondokImg from "../assets/images/gmb4.jpeg";

const Home = () => {
  const { ref, inView } = useAnimation();

  const programs = [
    {
      icon: BookOpen,
      title: "Kitab Kuning",
      description:
        "Pembelajaran ilmu-ilmu islam klasik dengan kitab standar pesantren salaf.",
      features: [
        "Tauhid: Aqidatul Awwam",
        "Fiqih: Sullamut Taufiq",
        "Akhlak: Taisirul Kholaq",
      ],
    },
    {
      icon: GraduationCap,
      title: "Pendidikan Formal",
      description:
        "Integrasi dengan kurikulum pendidikan formal tingkat MI dan MTs.",
      features: [
        "Mata Pelajaran Umum",
        "Kurikulum Nasional",
        "Pendidikan Berkarakter",
      ],
    },
    {
      icon: Users,
      title: "Bimbingan & Konseling",
      description:
        "Program pendukung untuk pengembangan santri secara holistik.",
      features: [
        "Bimbingan Belajar",
        "Konseling Psikologi",
        "Pengembangan Bakat",
      ],
    },
    {
      icon: Award,
      title: "Ekstrakurikuler",
      description:
        "Pengembangan bakat dan minat santri melalui berbagai kegiatan.",
      features: ["Olahraga & Seni", "Kepemimpinan", "Kewirausahaan"],
    },
  ];

  const features = [
    { number: "01", title: "Pembinaan Akhlak", icon: UserCheck },
    { number: "02", title: "Disiplin Positif", icon: Clock },
    { number: "03", title: "Prestasi Akademik", icon: Award },
    { number: "04", title: "Lingkungan Islami", icon: Building },
    { number: "05", title: "Guru Berkompeten", icon: Users },
    { number: "06", title: "Fasilitas Lengkap", icon: Building },
  ];

  useEffect(() => {
    // Hero parallax effect
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".hero-parallax");
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
        <div
          className="hero-parallax absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Mencetak Generasi Islam{" "}
              <span className="text-accent">High Class</span> &{" "}
              <span className="text-accent">Limited Edition</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 animate-fade-in-up animation-delay-200">
              Pondok Pesantren Nurul Yaqin berdedikasi untuk mengembangkan
              potensi generasi Islam melalui pendidikan integrative yang
              memadukan nilai-nilai Islam dengan sistem pendidikan formal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link to="/profil" className="btn-primary">
                Profil Pondok
              </Link>
              <Link
                to="/program"
                className="btn-secondary !text-white !border-white hover:!bg-white/10"
              >
                Program Pendidikan
              </Link>
            </div>
          </div>
        </div>

        {/* Panah dengan ukuran responsif */}
        {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <ChevronDown className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </div> */}
      </section>

      {/* Video Profil Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Kajian Rutin Kyai & Ustadz
              </h2>
              <p className="text-gray-600 text-lg">
                Simak kajian-kajian terbaru dari Kyai dan Ustadz di channel
                YouTube resmi pondok kami
              </p>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl bg-gray-100">
              {/* Thumbnail placeholder sebelum video dimuat */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Memuat video kajian...</p>
                </div>
              </div>

              {/* Video Kajian Terbaru */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9Sb_eCBiT2I"
                title="Kajian Pondok Pesantren Nurul Yaqin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Video Description */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-8">
                Channel YouTube kami berisi kajian-kajian rutin dari Kyai dan
                Ustadz yang membahas berbagai ilmu agama, tafsir Al-Quran,
                hadits, fiqih, dan pembinaan akhlak untuk santri dan masyarakat
                umum.
              </p>

              {/* Jarak ditambah di sini */}
              <div className="inline-flex items-center space-x-6 mb-8">
                <span className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Kajian Rutin Mingguan
                </span>
                <span className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Update Setiap Minggu
                </span>
              </div>

              {/* Jarak ditambah di sini juga */}
              <div className="mb-6">
                <a
                  href="https://www.youtube.com/@NurulYaqinChannel77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Subscribe untuk Kajian Terbaru
                </a>
              </div>

              <p className="text-sm text-gray-500">
                Jangan lupa aktifkan notifikasi untuk tidak ketinggalan kajian
                terbaru!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Tentang Pondok Pesantren Nurul Yaqin</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berawal dari keinginan wali santri, berkembang menjadi lembaga
              pendidikan yang konsen mengembangkan potensi generasi Islam
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={ref}
              className={`space-y-6 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-bold text-primary">
                Latar Belakang
              </h3>
              <p className="text-lg text-gray-600">
                Pondok Pesantren Nurul Yaqin didirikan pada 17 Februari 2018
                dengan dana swadaya dari para simpatisan dan calon wali santri.
                Berawal dari rumah tinggal pengasuh yang direhab menjadi lantai
                dua, kini telah berkembang dengan asrama santri putra dan putri.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="card">
                  <div className="w-14 h-14 bg-light-beige rounded-full flex items-center justify-center mb-4">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Visi</h4>
                  <p className="text-gray-600">
                    Mewujudkan insan yang memiliki <em>kesadaran ilahiah</em>{" "}
                    untuk mengembalikan esensi nilai-nilai mulia agama.
                  </p>
                </div>

                <div className="card">
                  <div className="w-14 h-14 bg-light-beige rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Misi</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Mencetak generasi Islam high class dan limited edition
                    </li>
                    <li>
                      • Mengembangkan model internalisasi nilai-nilai Islam
                      integrative
                    </li>
                    <li>• Membentuk santri dengan kesadaran ruhani</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`relative ${
                inView ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={PondokImg}
                  alt="Pondok Pesantren Nurul Yaqin"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Program Pendidikan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kurikulum integrative yang menginternalisasikan nilai-nilai Islam
              dalam seluruh aspek pembelajaran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-500">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-light-beige">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Keunggulan Pondok</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai yang membedakan pendidikan di Pondok Pesantren Nurul
              Yaqin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card relative overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                    {feature.number}
                  </div>
                  <div className="w-14 h-14 bg-light-beige rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">
                    Pendidikan karakter islami yang intensif untuk membentuk
                    pribadi santri yang berakhlak mulia dalam kehidupan
                    sehari-hari.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Daftarkan putra-putri Anda di Pondok Pesantren Nurul Yaqin untuk
            mendapatkan pendidikan terbaik yang mengintegrasikan nilai-nilai
            Islam dengan sistem pendidikan formal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontak"
              className="btn-primary !bg-white !text-primary hover:!bg-gray-100"
            >
              Hubungi Kami
            </Link>
            <Link
              to="/program"
              className="btn-secondary !border-white !text-white hover:!bg-white/10"
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
