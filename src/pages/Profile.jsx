import React from "react";
import {
  MapPin,
  Calendar,
  Users,
  Building,
  BookOpen,
  GraduationCap,
  Award,
  BarChart,
} from "lucide-react";
import { useAnimation } from "../hooks/useAnimation";

const Profil = () => {
  const { ref: dataRef, inView: dataInView } = useAnimation();

  const profileData = {
    yayasan: {
      nama: "NURUL YAQIN",
      pimpinan: "Dr. Holid Batsal, S.H, M.Pd.I",
      berdiri: "17 Februari 2018",
      akta: "AKTA NOMOR 61, 16 Februari 2016",
      npwp: "94.958.749.7-656.000",
    },
    pondok: {
      nama: "Nurul Yaqin",
      pimpinan: "Dr. Holid Batsal, S.H, M.Pd.I",
      mulaiOperasi: "17 Februari 2018",
      alamat: "Jl. Panjaitan Gg. Merak No. 36 RT 06 RW 02 Tamansari Bondowoso",
    },
    statistik: {
      santriMukim: 57,
      santriTidakMukim: 36,
      asrama: 4,
      mushalla: "136 m²",
      ustadz: 7,
    },
  };

  const kitab = [
    { bidang: "TAUHID", kitab: ["Aqidatul Awwam", "Jawahirul Kalamiyah"] },
    { bidang: "FIQIH", kitab: ["Sullamut Taufiq", "Safinatun Najah"] },
    { bidang: "AKHLAQ", kitab: ["Taisirul Kholaq", "Kitaabul Hikam"] },
    { bidang: "SEJARAH", kitab: ["Hulashoh Nurul Yaqin"] },
    { bidang: "ALAT", kitab: ["Jurmiyah, Amtsilatut Tasrif"] },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Profil Pondok
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identitas lengkap dan data statistik Pondok Pesantren Nurul Yaqin
          </p>
        </div>
      </section>

      {/* Data Yayasan & Pondok */}
      <section ref={dataRef} className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 ${
              dataInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Yayasan */}
            <div className="card p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Building className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                  Identitas Yayasan
                </h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    Nama Yayasan:
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base break-words">
                    {profileData.yayasan.nama}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    Pimpinan:
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base break-words">
                    {profileData.yayasan.pimpinan}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    Berdiri:
                  </div>
                  <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <Calendar
                      size={14}
                      className="mr-1 sm:mr-2 flex-shrink-0"
                    />
                    <span className="break-words">
                      {profileData.yayasan.berdiri}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    Akta Notaris:
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base break-words">
                    {profileData.yayasan.akta}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    NPWP:
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base break-words font-mono">
                    {profileData.yayasan.npwp}
                  </div>
                </div>
              </div>
            </div>

            {/* Pondok */}
            <div className="card p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                  Identitas Pondok
                </h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    Nama Pondok:
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base break-words">
                    {profileData.pondok.nama}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    Pimpinan Pondok:
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base break-words">
                    {profileData.pondok.pimpinan}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0">
                    Mulai Operasi:
                  </div>
                  <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <Calendar
                      size={14}
                      className="mr-1 sm:mr-2 flex-shrink-0"
                    />
                    <span className="break-words">
                      {profileData.pondok.mulaiOperasi}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3 p-3 bg-light-beige/50 rounded-lg">
                  <div className="font-semibold text-gray-700 text-sm sm:text-base w-full sm:w-32 md:w-40 flex-shrink-0 pt-0.5">
                    Alamat Lengkap:
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base break-words leading-relaxed">
                    {profileData.pondok.alamat}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Data Statistik
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(profileData.statistik).map(
              ([key, value], index) => (
                <div key={key} className="card text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 uppercase">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Kitab yang Diajarkan */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Kitab yang Diajarkan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kurikulum pembelajaran ilmu-ilmu Islam klasik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitab.map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-bold">{item.bidang}</h3>
                </div>
                <ul className="space-y-2">
                  {item.kitab.map((kitabName, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {kitabName}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profil;
