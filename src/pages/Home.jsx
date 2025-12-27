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
      </section>

      {/* Video Profil Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                Kajian Rutin Kyai & Ustadz
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
                Channel YouTube ini fokus pada Tafakkur diri, serta bimbingan
                ruhani menuju kesadaran Ilahiyyah para santri dan masyarakat
                umum dengan metode dzikir Qalbu (Huu-Allah)
              </p>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              {/* Thumbnail placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm md:text-base">
                    Memuat video kajian...
                  </p>
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
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-gray-600 text-sm sm:text-base mb-6 md:mb-8 px-2 sm:px-0">
                Channel YouTube kami berisi kajian-kajian rutin dari Kyai dan
                Ustadz yang membahas berbagai ilmu agama, tafsir Al-Quran,
                hadits, fiqih, dan pembinaan akhlak untuk santri dan masyarakat
                umum.
              </p>

              {/* Features */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 md:mb-8">
                <span className="flex items-center text-gray-600 text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Kajian Rutin Mingguan
                </span>
                <span className="flex items-center text-gray-600 text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Update Setiap Minggu
                </span>
              </div>

              {/* Subscribe Button */}
              <div className="mb-4 md:mb-6">
                <a
                  href="https://www.youtube.com/@NurulYaqinChannel77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 sm:px-5 sm:py-3 bg-red-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-red-700 transition-colors active:scale-95"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Subscribe untuk Kajian Terbaru
                </a>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 px-4">
                Jangan lupa aktifkan notifikasi untuk tidak ketinggalan kajian
                terbaru!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="section-title text-center mb-10 md:mb-12 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Tentang Pondok Pesantren Nurul Yaqin
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4 sm:px-0">
              Berawal dari keinginan wali santri, berkembang menjadi lembaga
              pendidikan yang konsen mengembangkan potensi generasi Islam
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              ref={ref}
              className={`space-y-4 md:space-y-6 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                Latar Belakang
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Pondok Pesantren Nurul Yaqin didirikan pada 17 Februari 2018
                dengan dana swadaya dari para simpatisan dan calon wali santri.
                Berawal dari rumah tinggal pengasuh yang direhab menjadi lantai
                dua, kini telah berkembang dengan asrama santri putra dan putri.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                {/* Visi Card */}
                <div className="card p-4 md:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-light-beige rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <Award className="text-primary w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-gray-800">
                    Visi
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    Mewujudkan insan yang memiliki{" "}
                    <em className="text-primary font-semibold">
                      kesadaran ilahiah
                    </em>{" "}
                    untuk mengembalikan esensi nilai-nilai mulia agama.
                  </p>
                </div>

                {/* Misi Card */}
                <div className="card p-4 md:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-light-beige rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <GraduationCap className="text-primary w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-gray-800">
                    Misi
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Mencetak generasi Islam high class dan limited edition
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Mengembangkan model internalisasi nilai-nilai Islam
                        integrative
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Membentuk santri dengan kesadaran ruhani</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`relative order-first lg:order-last ${
                inView ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              <div className="relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl">
                <img
                  src={PondokImg}
                  alt="Pondok Pesantren Nurul Yaqin"
                  className="w-full h-auto aspect-[4/3] md:aspect-[3/2] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-3 md:border-4 border-accent rounded-lg md:rounded-xl"></div>
              </div>

              {/* Optional: Add decorative element for mobile */}
              <div className="mt-4 md:mt-0">
                <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left italic">
                  Pesantren yang terus berkembang dengan visi dan misi yang
                  jelas
                </p>
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
