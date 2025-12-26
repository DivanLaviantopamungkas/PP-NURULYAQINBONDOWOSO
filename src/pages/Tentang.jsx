import React from "react";
import {
  Target,
  Eye,
  Users,
  BookOpen,
  Award,
  Heart,
  Clock,
  Star,
} from "lucide-react";
import { useAnimation } from "../hooks/useAnimation";

const Tentang = () => {
  const { ref: visiRef, inView: visiInView } = useAnimation();
  const { ref: sejarahRef, inView: sejarahInView } = useAnimation();

  const values = [
    {
      icon: Heart,
      title: "Ikhlas",
      description: "Semua amal dilandasi keikhlasan karena Allah",
    },
    {
      icon: BookOpen,
      title: "Ilmu",
      description: "Menuntut ilmu sebagai ibadah utama",
    },
    {
      icon: Users,
      title: "Ukhuwah",
      description: "Membangun persaudaraan islamiyah",
    },
    {
      icon: Award,
      title: "Amal Sholeh",
      description: "Mengamalkan ilmu untuk kemaslahatan umat",
    },
    {
      icon: Clock,
      title: "Disiplin",
      description: "Menjaga waktu dan komitmen",
    },
    {
      icon: Star,
      title: "Kualitas",
      description: "Memberikan yang terbaik dalam segala hal",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Tentang Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mengenal lebih dekat sejarah, visi, misi, dan nilai-nilai Pondok
            Pesantren Nurul Yaqin
          </p>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={sejarahRef}
            className={`max-w-4xl mx-auto ${
              sejarahInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Sejarah Berdiri
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-600 mb-6">
                Pondok Pesantren Nurul Yaqin didirikan pada{" "}
                <strong>17 Februari 2018</strong> dengan dana swadaya dari para
                simpatisan dan calon wali santri.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Berawal dari rumah tinggal pengasuh yang direhab menjadi lantai
                dua, kini telah berkembang dengan asrama santri putra dan putri,
                meski dengan keterbatasan lahan yang hingga ada bangunan yang
                berdiri di atas sungai untuk asrama putri, dapur pondok, dan
                kamar mandi.
              </p>
              <p className="text-lg text-gray-600">
                Saat ini problem utama bangsa Indonesia adalah kesadaran
                bertuhan yang mulai memudar. Dengan kesadaran ilahiah seorang
                manusia akan memahami status dirinya di hadapan Allah dan
                Rasul-Nya dan akan mengerti tugas dan tanggung jawabnya di alam
                semesta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div
            ref={visiRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
              visiInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Visi */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-primary">Visi</h3>
              </div>
              <p className="text-lg text-gray-600">
                Mewujudkan insan yang memiliki{" "}
                <strong>kesadaran ilahiah</strong> untuk mengembalikan esensi
                nilai-nilai mulia agama dalam kehidupan berbangsa.
              </p>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Tujuan:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span>
                      Membentuk generasi yang memahami hakikat keberadaannya di
                      dunia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span>Mengembangkan potensi santri secara optimal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span>
                      Menjadi lembaga pendidikan unggulan yang berkontribusi
                      bagi umat
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Misi */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mr-4">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-primary">Misi</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai
                Islam dalam seluruh aspek pembelajaran untuk mencetak generasi{" "}
                <em>high class</em> dan <em>limited edition</em>.
              </p>
              <div className="space-y-4">
                {[
                  "Mencetak generasi Islam high class dan limited edition",
                  "Mengembangkan model internalisasi nilai-nilai Islam integrative",
                  "Mengintegrasikan nilai-nilai Islam dengan sistem pendidikan formal",
                  "Membentuk santri dengan kesadaran ruhani dan kepekaan sosial",
                  "Menjalin kemitraan dengan orang tua dan masyarakat",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-light-beige rounded-lg"
                  >
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Nilai-nilai Pondok</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi pedoman dalam seluruh aktivitas
              pendidikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card text-center group hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filosofi Pendidikan */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Filosofi Pendidikan
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8">
              "Visi misi mulia Pondok Pesantren Nurul Yaqin akan tercapai
              apabila dilakukan dengan model internalisasi nilai-nilai Islam
              integrative."
            </p>
            <p className="text-lg">
              Sebuah model yang mengintegrasikan nilai-nilai Islam dengan sistem
              Pendidikan formal, melalui pemahaman, pengamalan, penghayatan, dan
              pemaknaan. Menginternalisasikan nilai-nilai Islam dalam diri
              santri sehingga menjadi pola pikir dan <em>the way of life</em>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
