import React from "react";
import {
  User,
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Users,
  Star,
  Briefcase,
  Globe,
  Phone,
  Mail,
  Heart,
} from "lucide-react";
import { useAnimation } from "../hooks/useAnimation";
import Pendiri from "../assets/images/guru.jpeg";

const Asatidz = () => {
  const { ref: pendiriRef, inView: pendiriInView } = useAnimation();

  const asatidzData = [
    {
      nama: "Dr. Holid Batsal, S.H, M.Pd.I",
      jabatan: "Pimpinan Pondok Pesantren",
      pendidikan: "S3 PAI Interdisipliner UIN Maulana Malik Ibrahim Malang",
      spesialisasi: ["Hukum", "Pendidikan Islam", "Pemikiran Islam"],
      pengalaman: [
        "Dosen IAI At-Taqwa Bondowoso",
        "Pengasuh PP. Nurul Qur'an 1991-2005",
      ],
      kontak: "holid.batsal@nurulyaqin.sch.id",
    },
    {
      nama: "Necktar Firdaus al-Kautsar, S.Psi",
      jabatan: "Ustadzah - Psikologi",
      pendidikan: "S1 Psikologi UIN Maulana Malik Ibrahim Malang",
      spesialisasi: [
        "Psikologi Pendidikan",
        "Konseling Santri",
        "Pengembangan Karakter",
      ],
      pengalaman: [
        "Bimbingan Konseling Santri",
        "Pengembangan Program Karakter",
      ],
      kontak: "necktarf@nurulyaqin.sch.id",
    },
    {
      nama: "Thariqatul Faizeh, M.Ag",
      jabatan: "Ustadzah - Ilmu Al-Qur'an",
      pendidikan: "S2 Ilmu Al-Qur'an dan Tafsir UIN Sunan Kalijaga Yogyakarta",
      spesialisasi: ["Tahfidz Quran", "Ilmu Tafsir", "Bahasa Arab"],
      pengalaman: ["Pengajar Tahfidz Quran", "Pengajar Tafsir Al-Qur'an"],
      kontak: "thariqatul@nurulyaqin.sch.id",
    },
    {
      nama: "Ubaidillah Amin, S.T",
      jabatan: "Ustadz - Teknik Sipil",
      pendidikan: "S1 Teknik Sipil Universitas Jember",
      spesialisasi: ["Matematika", "IPA", "Keterampilan Teknik"],
      pengalaman: ["Pengajar Matematika & IPA", "Pembina Keterampilan Teknik"],
      kontak: "ubaidillah@nurulyaqin.sch.id",
    },
    {
      nama: "Akhmad Ghasi Pathollah, M.Pd.I",
      jabatan: "Ustadz - Pendidikan Islam",
      pendidikan: "S2 Pendidikan Islam IAI Nurul Jadid",
      spesialisasi: ["Fiqih", "Akhlak", "Metodologi Pengajaran"],
      pengalaman: ["Pengajar Fiqih & Akhlak", "Pengembangan Kurikulum"],
      kontak: "ghasi@nurulyaqin.sch.id",
    },
    {
      nama: "Muhammad Arief Hidayatullah Putra, S.Psi",
      jabatan: "Ustadz - Psikologi",
      pendidikan: "S1 Psikologi UIN Maulana Malik Ibrahim Malang",
      spesialisasi: [
        "Psikologi Remaja",
        "Bimbingan Karir",
        "Assesment Psikologi",
      ],
      pengalaman: ["Konseling Individual", "Bimbingan Karir Santri"],
      kontak: "arief@nurulyaqin.sch.id",
    },
    {
      nama: "Muhammad Hamim, S.Pd.I",
      jabatan: "Ustadz - Pendidikan Agama Islam",
      pendidikan: "S1 PAI UNUJA, Alumni Pondok Pesantren Sidogiri",
      spesialisasi: ["Nahwu Sharaf", "Sejarah Islam", "Pendidikan Agama"],
      pengalaman: ["Pengajar Nahwu Sharaf", "Pengajar Sejarah Islam"],
      kontak: "hamim@nurulyaqin.sch.id",
    },
    {
      nama: "Eka Setiawati",
      jabatan: "Ustadzah - Administrasi",
      pendidikan: "D1 Komputer STT Nurul Jadid",
      spesialisasi: [
        "Administrasi Pendidikan",
        "Teknologi Informasi",
        "Kearsipan",
      ],
      pengalaman: ["Administrasi Pondok", "Pengelolaan Data Santri"],
      kontak: "eka@nurulyaqin.sch.id",
    },
  ];

  const riwayatPendidikanPendiri = [
    { jenjang: "SD", institusi: "SDN Dandang I", tahun: "1991" },
    { jenjang: "MTs", institusi: "MTs NU", tahun: "1994" },
    { jenjang: "MA", institusi: "MA NU (IPS)", tahun: "1997" },
    {
      jenjang: "S1",
      institusi: "Ilmu Hukum STIH Zainul Hasan Kraksaan",
      tahun: "2004",
    },
    {
      jenjang: "S2",
      institusi: "Pemikiran Pendidikan Islam IAIN Jember",
      tahun: "2013",
    },
    {
      jenjang: "S3",
      institusi: "PAI Interdisipliner UIN Maulana Malik Ibrahim Malang",
      tahun: "2021",
    },
    {
      jenjang: "Pesantren",
      institusi: "PP. Nurul Qur'an Patokan Kraksaan",
      tahun: "1991-2005",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Profil Asatidz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tenaga pendidik yang kompeten dan berdedikasi di Pondok Pesantren
            Nurul Yaqin
          </p>
        </div>
      </section>

      {/* Pendiri */}
      <section ref={pendiriRef} className="py-20">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-6xl mx-auto ${
              pendiriInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <img
                    src={Pendiri}
                    alt="Dr. Holid Batsal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Dr. Holid Batsal, S.H, M.Pd.I
                  </h2>
                  <p className="text-xl mb-6 text-white/90">
                    Pendiri & Pimpinan Pondok Pesantren Nurul Yaqin
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center">
                      <MapPin size={20} className="mr-3" />
                      <span>Probolinggo, 01 Maret 1979</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={20} className="mr-3" />
                      <span>Dosen IAI At-Taqwa Bondowoso</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap size={20} className="mr-3" />
                      <span>Pengasuh PP. Nurul Qur'an (1991-2005)</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={20} className="mr-3" />
                      <span>Pendiri Yayasan Nurul Yaqin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Riwayat Pendidikan Pendiri */}
            <div className="card mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Riwayat Pendidikan Pendiri
              </h3>
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent hidden md:block"></div>

                <div className="space-y-8">
                  {riwayatPendidikanPendiri.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col md:flex-row items-center ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-full md:w-5/12 ${
                          index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                        }`}
                      >
                        <div className="card !p-6">
                          <h4 className="text-lg font-bold text-primary mb-2">
                            {item.jenjang}
                          </h4>
                          <p className="text-gray-600 mb-2">{item.institusi}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={16} className="mr-2" />
                            <span>{item.tahun}</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center my-4 md:my-0 relative z-10">
                        <GraduationCap size={24} />
                      </div>

                      <div className="hidden md:block w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tim Asatidz */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Tim Asatidz & Ustadzah</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengajar yang berdedikasi dan kompeten di bidangnya masing-masing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {asatidzData.slice(1).map((asatidz, index) => (
              <div
                key={index}
                className="card group hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <User size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{asatidz.nama}</h3>
                  <p className="text-primary font-semibold mb-4">
                    {asatidz.jabatan}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      Pendidikan
                    </h4>
                    <p className="text-sm text-gray-600">
                      {asatidz.pendidikan}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      Spesialisasi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {asatidz.spesialisasi.map((spesialis, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                        >
                          {spesialis}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      Pengalaman
                    </h4>
                    <ul className="space-y-1">
                      {asatidz.pengalaman.map((pengalaman, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <Star
                            size={12}
                            className="text-accent mr-2 mt-1 flex-shrink-0"
                          />
                          {pengalaman}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail size={16} className="mr-2" />
                      <span>{asatidz.kontak}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofi Pengajaran */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Filosofi Pengajaran</h2>
            <p className="text-xl text-gray-600 mb-8">
              "Seorang guru bukan hanya sekadar pengajar, melainkan juga
              pendidik, pembimbing, dan teladan bagi santri."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Keteladanan",
                  description: "Menjadi contoh dalam perkataan dan perbuatan",
                  icon: Users,
                },
                {
                  title: "Kasih Sayang",
                  description: "Mendidik dengan hati penuh cinta dan perhatian",
                  icon: Heart,
                },
                {
                  title: "Professionalisme",
                  description: "Menguasai ilmu dan metode pengajaran",
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
        </div>
      </section>
    </div>
  );
};

export default Asatidz;
