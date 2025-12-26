import React from 'react';
import { 
  MapPin, Calendar, Users, Building, 
  BookOpen, GraduationCap, Award, BarChart
} from 'lucide-react';
import { useAnimation } from '../hooks/useAnimation';

const Profil = () => {
  const { ref: dataRef, inView: dataInView } = useAnimation();

  const profileData = {
    yayasan: {
      nama: 'NURUL YAQIN',
      pimpinan: 'Dr. Holid Batsal, S.H, M.Pd.I',
      berdiri: '17 Februari 2018',
      akta: 'AKTA NOMOR 61, 16 Februari 2016',
      npwp: '94.958.749.7-656.000'
    },
    pondok: {
      nama: 'Nurul Yaqin',
      pimpinan: 'Dr. Holid Batsal, S.H, M.Pd.I',
      mulaiOperasi: '17 Februari 2018',
      alamat: 'Jl. Panjaitan Gg. Merak No. 36 RT 06 RW 02 Tamansari Bondowoso'
    },
    statistik: {
      santriMukim: 57,
      santriTidakMukim: 36,
      asrama: 4,
      mushalla: '136 m²',
      ustadz: 7
    }
  };

  const kitab = [
    { bidang: 'TAUHID', kitab: ['Aqidatul Awwam', 'Jawahirul Kalamiyah'] },
    { bidang: 'FIQIH', kitab: ['Sullamut Taufiq', 'Safinatun Najah'] },
    { bidang: 'AKHLAQ', kitab: ['Taisirul Kholaq', 'Kitaabul Hikam'] },
    { bidang: 'SEJARAH', kitab: ['Hulashoh Nurul Yaqin'] },
    { bidang: 'ALAT', kitab: ['Jurmiyah, Amtsilatut Tasrif'] }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Profil Pondok</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identitas lengkap dan data statistik Pondok Pesantren Nurul Yaqin
          </p>
        </div>
      </section>

      {/* Data Yayasan & Pondok */}
      <section ref={dataRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${dataInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Yayasan */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Building className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Identitas Yayasan</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Nama Yayasan:</div>
                  <div className="text-gray-700">{profileData.yayasan.nama}</div>
                </div>
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Pimpinan:</div>
                  <div className="text-gray-700">{profileData.yayasan.pimpinan}</div>
                </div>
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Berdiri:</div>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2" />
                    {profileData.yayasan.berdiri}
                  </div>
                </div>
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Akta Notaris:</div>
                  <div className="text-gray-700">{profileData.yayasan.akta}</div>
                </div>
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">NPWP:</div>
                  <div className="text-gray-700">{profileData.yayasan.npwp}</div>
                </div>
              </div>
            </div>

            {/* Pondok */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Identitas Pondok</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Nama Pondok:</div>
                  <div className="text-gray-700">{profileData.pondok.nama}</div>
                </div>
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Pimpinan Pondok:</div>
                  <div className="text-gray-700">{profileData.pondok.pimpinan}</div>
                </div>
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Mulai Operasi:</div>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2" />
                    {profileData.pondok.mulaiOperasi}
                  </div>
                </div>
                <div className="flex items-center p-3 bg-light-beige rounded-lg">
                  <div className="font-semibold w-40">Alamat Lengkap:</div>
                  <div className="text-gray-700">{profileData.pondok.alamat}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Data Statistik</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(profileData.statistik).map(([key, value], index) => (
              <div key={key} className="card text-center">
                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                <div className="text-sm text-gray-600 uppercase">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
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