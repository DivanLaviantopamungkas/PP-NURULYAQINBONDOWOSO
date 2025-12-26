import React from "react";
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Clock,
  Target,
  CheckCircle,
  Brain,
  Heart,
  Shield,
  Star,
} from "lucide-react";

const Program = () => {
  const programUtama = [
    {
      icon: BookOpen,
      title: "Program Tahfidz Quran",
      description: "Menghafal Al-Quran dengan metode yang mudah dan efektif",
      target: "Target 5-30 Juz",
      duration: "Program 3-6 Tahun",
      features: [
        "Metode Mutqin",
        "Murajaah Rutin",
        "Setoran Harian",
        "Tes Periodik",
      ],
    },
    {
      icon: GraduationCap,
      title: "Pendidikan Formal",
      description: "Kurikulum nasional terintegrasi nilai Islam",
      target: "MI & MTs",
      duration: "Program 6 Tahun",
      features: [
        "Kurikulum Nasional Plus",
        "Laboratorium Lengkap",
        "Bimbingan Belajar",
        "Ektrakurikuler",
      ],
    },
    {
      icon: Users,
      title: "Madrasah Diniyah",
      description: "Pendidikan ilmu-ilmu Islam klasik",
      target: "Kitab Kuning",
      duration: "Program Berjenjang",
      features: [
        "Kitab Standar Pesantren",
        "Sorogan & Bandongan",
        "Bahasa Arab Aktif",
        "Praktek Ibadah",
      ],
    },
    {
      icon: Award,
      title: "Pengembangan Diri",
      description: "Pengembangan bakat dan karakter santri",
      target: "Santri Berprestasi",
      duration: "Program Kontinu",
      features: [
        "Kepemimpinan",
        "Olahraga & Seni",
        "Kewirausahaan",
        "IT & Digital",
      ],
    },
    {
      icon: Brain,
      title: "Tafakkur Kesadaran Ilahiyyah",
      description: "Program penguatan spiritual dan kesadaran ketuhanan",
      target: "Santri Semua Tingkat",
      duration: "Program Kontinu",
      features: [
        "Tadabbur Al-Quran",
        "Muhasabah Diri",
        "Kajian Tauhid",
        "Pembinaan Ruhiyah",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-800">
            Program Pendidikan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kurikulum lengkap yang mengintegrasikan ilmu agama, ilmu umum, dan
            pembinaan karakter
          </p>
        </div>
      </section>

      {/* Program Utama */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Program Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program pendidikan komprehensif untuk pengembangan santri secara
              holistik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {programUtama.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {program.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Target size={16} className="mr-2" />
                      <span>{program.target}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-2" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">
                      Fitur Program:
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle
                            size={14}
                            className="text-green-500 mr-2"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kitab yang Diajarkan */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Kitab yang Diajarkan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kurikulum pembelajaran ilmu-ilmu Islam klasik dengan kitab standar
              pesantren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                kategori: "TAUHID",
                kitab: ["Aqidatul Awwam", "Jawahirul Kalamiyah"],
              },
              {
                kategori: "FIQIH",
                kitab: ["Sullamut Taufiq", "Safinatun Najah"],
              },
              {
                kategori: "AKHLAQ",
                kitab: ["Taisirul Kholaq", "Kitaabul Hikam"],
              },
              {
                kategori: "SEJARAH",
                kitab: ["Hulashoh Nurul Yaqin"],
              },
              {
                kategori: "NAHWU SHARAF",
                kitab: ["Jurmiyah", "Amtsilatut Tasrif"],
              },
              {
                kategori: "BAHASA ARAB",
                kitab: ["Al-Arabiyah Baina Yadaik", "Durusul Lughah"],
              },
            ].map((kategori, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">
                    {kategori.kategori}
                  </h3>
                </div>

                <div className="space-y-4">
                  {kategori.kitab.map((kitab, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{kitab}</h4>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Dipelajari
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metode Pembelajaran */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Metode Pembelajaran
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pendekatan pendidikan yang mengutamakan internalisasi nilai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Metode Integratif",
                description:
                  "Mengintegrasikan nilai-nilai Islam dalam semua mata pelajaran",
                steps: ["Pemahaman", "Pengamalan", "Penghayatan", "Pemaknaan"],
              },
              {
                icon: Users,
                title: "Sistem Mentoring",
                description: "Pendampingan individual oleh ustadz/ustadzah",
                steps: [
                  "Bimbingan Individual",
                  "Konseling Rutin",
                  "Evaluasi Berkala",
                  "Rapor Perkembangan",
                ],
              },
              {
                icon: Heart,
                title: "Pendidikan Karakter",
                description:
                  "Internalisasi nilai-nilai islam dalam kehidupan sehari-hari",
                steps: ["Keteladanan", "Pembiasaan", "Penguatan", "Refleksi"],
              },
              {
                icon: Shield,
                title: "Disiplin Positif",
                description: "Sistem disiplin yang membangun tanggung jawab",
                steps: [
                  "Aturan Jelas",
                  "Konsistensi",
                  "Reward System",
                  "Pembinaan",
                ],
              },
            ].map((metode, index) => {
              const Icon = metode.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {metode.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {metode.description}
                  </p>

                  <div className="space-y-3">
                    {metode.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
