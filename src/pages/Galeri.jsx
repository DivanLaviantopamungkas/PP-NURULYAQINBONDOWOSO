import React, { useState } from "react";
import {
  Search,
  Filter,
  X,
  ZoomIn,
  Users,
  BookOpen,
  Award,
  Heart,
} from "lucide-react";
import Belajar from "../assets/images/gmb1.jpeg";
import Kegiatan from "../assets/images/gmb4.jpeg";
import Kegiatan2 from "../assets/images/gmb7.jpeg";
import Keagamaan from "../assets/images/gmb2.jpeg";
import Keagamaan2 from "../assets/images/gmb3.jpeg";
import Keagamaan3 from "../assets/images/gmb5.jpeg";
import Keagamaan4 from "../assets/images/gmb6.jpeg";
import Fasilitas from "../assets/images/fslt1.jpeg";
import Fasilitas2 from "../assets/images/fslt2.jpeg";
import Fasilitas3 from "../assets/images/fstl3.jpeg";
import Fasilitas4 from "../assets/images/fstl4.jpeg";
import Fasilitas5 from "../assets/images/dpur1.jpeg";
import Fasilitas6 from "../assets/images/dpur2.jpeg";

const Galeri = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", label: "Semua", icon: Filter },
    { id: "learning", label: "Proses Belajar", icon: BookOpen },
    { id: "activities", label: "Kegiatan", icon: Award },
    { id: "religious", label: "Keagamaan", icon: Heart },
    { id: "facility", label: "Fasilitas", icon: Users },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "learning",
      title: "Belajar Kitab Kuning",
      description:
        "Santri sedang mempelajari kitab kuning dengan metode sorogan",
      image: Belajar,
    },
    {
      id: 2,
      category: "religious",
      title: "Shalat Berjamaah",
      description: "Kegiatan shalat berjamaah di mushalla pondok",
      image: Keagamaan,
    },
    {
      id: 3,
      category: "religious",
      title: "Kajian Agama",
      description: "Sesi kajian agama Islam bersama ustadz",
      image: Keagamaan2,
    },
    {
      id: 4,
      category: "activities",
      title: "Kegiatan Ngaji",
      description: "Santri sedang mengikuti kegiatan ngaji bersama",
      image: Kegiatan,
    },
    {
      id: 5,
      category: "religious",
      title: "Pembacaan Al-Quran",
      description: "Santri membaca Al-Quran dengan tartil",
      image: Keagamaan3,
    },
    {
      id: 6,
      category: "religious",
      title: "Shalat Berjamaah Santri",
      description: "Aktivitas shalat berjamaah di lingkungan pesantren",
      image: Keagamaan4,
    },
    {
      id: 7,
      category: "activities",
      title: "Foto Bersama Santri",
      description: "Kegiatan dokumentasi foto bersama seluruh santri",
      image: Kegiatan2,
    },
    {
      id: 8,
      category: "facility",
      title: "Fasilitas Pondok 1",
      description: "Salah satu fasilitas yang tersedia di pondok pesantren",
      image: Fasilitas,
    },
    {
      id: 9,
      category: "facility",
      title: "Fasilitas Pondok 2",
      description: "Fasilitas pendukung kegiatan belajar mengajar",
      image: Fasilitas2,
    },
    {
      id: 10,
      category: "facility",
      title: "Fasilitas Pondok 3",
      description: "Ruang kegiatan santri di pondok pesantren",
      image: Fasilitas3,
    },
    {
      id: 11,
      category: "facility",
      title: "Fasilitas Pondok 4",
      description: "Area pendukung aktivitas santri sehari-hari",
      image: Fasilitas4,
    },
    {
      id: 12,
      category: "facility",
      title: "Dapur Pondok 1",
      description: "Area dapur untuk persiapan makanan santri",
      image: Fasilitas5,
    },
    {
      id: 13,
      category: "facility",
      title: "Dapur Pondok 2",
      description: "Fasilitas dapur bersama untuk kebutuhan santri",
      image: Fasilitas6,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Galeri Aktivitas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi kegiatan sehari-hari dan momen berharga di Pondok
            Pesantren Nurul Yaqin
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari foto atau kegiatan..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full transition-all ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon size={16} className="mr-2" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-end text-sm">
                      <span className="flex items-center bg-white/20 px-3 py-1 rounded-full">
                        <ZoomIn size={14} className="mr-1" />
                        Lihat
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                    {categories.find((cat) => cat.id === item.category)?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Filter size={64} className="mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                Tidak ada foto ditemukan
              </h3>
              <p className="text-gray-500">
                Coba pilih kategori lain atau kata kunci berbeda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Foto Dokumentasi", value: "500+", icon: Award },
              { label: "Kategori Album", value: "5", icon: Filter },
              { label: "Tahun Berdiri", value: "2018", icon: BookOpen },
              { label: "Kegiatan Rutin", value: "50+", icon: Heart },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600">{selectedImage.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                    {
                      categories.find(
                        (cat) => cat.id === selectedImage.category
                      )?.label
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  const currentIndex = filteredItems.findIndex(
                    (item) => item.id === selectedImage.id
                  );
                  const prevIndex =
                    currentIndex > 0
                      ? currentIndex - 1
                      : filteredItems.length - 1;
                  setSelectedImage(filteredItems[prevIndex]);
                }}
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Sebelumnya
              </button>
              <button
                onClick={() => {
                  const currentIndex = filteredItems.findIndex(
                    (item) => item.id === selectedImage.id
                  );
                  const nextIndex =
                    currentIndex < filteredItems.length - 1
                      ? currentIndex + 1
                      : 0;
                  setSelectedImage(filteredItems[nextIndex]);
                }}
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;
