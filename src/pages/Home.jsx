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

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="text-white" size={32} />
        </div> */}
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
