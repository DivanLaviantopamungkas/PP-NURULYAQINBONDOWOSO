import React, { useState, useRef } from "react";
import {
  Search,
  Filter,
  X,
  ZoomIn,
  Users,
  BookOpen,
  Award,
  Heart,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

// Import gambar
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

// Import video dari assets
import Hafalan from "../assets/videos/hafalan1.mp4";
import Hafalan2 from "../assets/videos/falan2.mp4";
import MakanSantri from "../assets/videos/makanbareng.mp4";

const Galeri = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemType, setItemType] = useState(null); // 'image' atau 'video'
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  // Update categories
  const categories = [
    { id: "all", label: "Semua", icon: Filter },
    { id: "learning", label: "Proses Belajar", icon: BookOpen },
    { id: "activities", label: "Kegiatan", icon: Award },
    { id: "religious", label: "Keagamaan", icon: Heart },
    { id: "facility", label: "Fasilitas", icon: Users },
  ];

  // Data gallery items (gambar)
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "learning",
      title: "Belajar Kitab Kuning",
      description:
        "Santri sedang mempelajari kitab kuning dengan metode sorogan",
      image: Belajar,
    },
    {
      id: 2,
      type: "image",
      category: "religious",
      title: "Shalat Berjamaah",
      description: "Kegiatan shalat berjamaah di mushalla pondok",
      image: Keagamaan,
    },
    {
      id: 3,
      type: "image",
      category: "religious",
      title: "Kajian Agama",
      description: "Sesi kajian agama Islam bersama ustadz",
      image: Keagamaan2,
    },
    {
      id: 4,
      type: "image",
      category: "activities",
      title: "Kegiatan Ngaji",
      description: "Santri sedang mengikuti kegiatan ngaji bersama",
      image: Kegiatan,
    },
    {
      id: 5,
      type: "image",
      category: "religious",
      title: "Pembacaan Al-Quran",
      description: "Santri membaca Al-Quran dengan tartil",
      image: Keagamaan3,
    },
    {
      id: 6,
      type: "image",
      category: "religious",
      title: "Shalat Berjamaah Santri",
      description: "Aktivitas shalat berjamaah di lingkungan pesantren",
      image: Keagamaan4,
    },
    {
      id: 7,
      type: "image",
      category: "activities",
      title: "Foto Bersama Santri",
      description: "Kegiatan dokumentasi foto bersama seluruh santri",
      image: Kegiatan2,
    },
    {
      id: 8,
      type: "image",
      category: "facility",
      title: "Fasilitas Pondok 1",
      description: "Salah satu fasilitas yang tersedia di pondok pesantren",
      image: Fasilitas,
    },
    {
      id: 9,
      type: "image",
      category: "facility",
      title: "Fasilitas Pondok 2",
      description: "Fasilitas pendukung kegiatan belajar mengajar",
      image: Fasilitas2,
    },
    {
      id: 10,
      type: "image",
      category: "facility",
      title: "Fasilitas Pondok 3",
      description: "Ruang kegiatan santri di pondok pesantren",
      image: Fasilitas3,
    },
    {
      id: 11,
      type: "image",
      category: "facility",
      title: "Fasilitas Pondok 4",
      description: "Area pendukung aktivitas santri sehari-hari",
      image: Fasilitas4,
    },
    {
      id: 12,
      type: "image",
      category: "facility",
      title: "Dapur Pondok 1",
      description: "Area dapur untuk persiapan makanan santri",
      image: Fasilitas5,
    },
    {
      id: 13,
      type: "image",
      category: "facility",
      title: "Dapur Pondok 2",
      description: "Fasilitas dapur bersama untuk kebutuhan santri",
      image: Fasilitas6,
    },
  ];

  // Data video items
  const videoItems = [
    {
      id: 14,
      type: "video",
      category: "learning",
      title: "Proses Hafalan Al-Quran",
      description: "Santri sedang menghafal Al-Quran dengan metode muraja'ah",
      thumbnail: Belajar, // Gunakan gambar belajar sebagai thumbnail
      video: Hafalan,
      duration: "01:30",
    },
    {
      id: 15,
      type: "video",
      category: "learning",
      title: "Sesi Hafalan Bersama",
      description: "Kegiatan hafalan Al-Quran bersama ustadz pembimbing",
      thumbnail: Kegiatan, // Gunakan gambar kegiatan sebagai thumbnail
      video: Hafalan2,
      duration: "02:15",
    },
    {
      id: 16,
      type: "video",
      category: "activities",
      title: "Makan Bersama Santri",
      description: "Kegiatan makan bersama di pondok pesantren",
      thumbnail: Kegiatan2, // Gunakan gambar kegiatan sebagai thumbnail
      video: MakanSantri,
      duration: "01:45",
    },
  ];

  // Gabungkan semua item
  const allItems = [...galleryItems, ...videoItems];

  const filteredItems =
    selectedCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  // Fungsi untuk kontrol video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
                placeholder="Cari foto atau video..."
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
                onClick={() => {
                  setSelectedItem(item);
                  setItemType(item.type);
                  setIsPlaying(item.type === "video");
                }}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.image || item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay untuk video */}
                  {item.type === "video" && (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Play
                            size={32}
                            className="text-white ml-1"
                            fill="white"
                          />
                        </div>
                      </div>
                      {/* Video badge */}
                      <div className="absolute top-4 right-4 bg-primary/90 text-white px-2 py-1 rounded text-xs font-semibold">
                        VIDEO
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {item.duration}
                      </div>
                    </>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center">
                    {item.type === "video" && (
                      <Play size={12} className="mr-1" />
                    )}
                    {categories.find((cat) => cat.id === item.category)?.label}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-end text-sm">
                      <span className="flex items-center bg-white/20 px-3 py-1 rounded-full">
                        {item.type === "video" ? (
                          <>
                            <Play size={14} className="mr-1" />
                            Putar Video
                          </>
                        ) : (
                          <>
                            <ZoomIn size={14} className="mr-1" />
                            Lihat Foto
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Filter size={64} className="mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                Tidak ada konten ditemukan
              </h3>
              <p className="text-gray-500">
                Coba pilih kategori lain atau kata kunci berbeda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics - Diupdate dengan total video */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Total Foto", value: galleryItems.length, icon: Award },
              { label: "Total Video", value: videoItems.length, icon: Play },
              { label: "Kategori", value: categories.length - 1, icon: Filter }, // -1 untuk exclude "all"
              { label: "Aktivitas", value: "50+", icon: Heart },
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
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => {
                setSelectedItem(null);
                setItemType(null);
                setIsPlaying(true);
                setIsMuted(false);
              }}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="bg-black rounded-2xl overflow-hidden">
              {itemType === "image" ? (
                // Tampilan untuk gambar
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              ) : (
                // Tampilan untuk video
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={selectedItem.video}
                    className="w-full max-h-[70vh] object-contain"
                    autoPlay
                    controls={false}
                    loop
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />

                  {/* Custom Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <button
                          onClick={togglePlayPause}
                          className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          {isPlaying ? (
                            <Pause
                              size={20}
                              className="text-white md:w-6 md:h-6"
                            />
                          ) : (
                            <Play
                              size={20}
                              className="text-white ml-1 md:w-6 md:h-6"
                              fill="white"
                            />
                          )}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          {isMuted ? (
                            <VolumeX
                              size={16}
                              className="text-white md:w-5 md:h-5"
                            />
                          ) : (
                            <Volume2
                              size={16}
                              className="text-white md:w-5 md:h-5"
                            />
                          )}
                        </button>

                        <span className="text-white text-xs md:text-sm font-medium">
                          {selectedItem.duration}
                        </span>
                      </div>

                      <div className="hidden md:block text-white text-sm opacity-80">
                        Klik ikon untuk mengontrol video
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4 md:p-6 bg-white">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {selectedItem.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-xs md:text-sm font-semibold flex items-center">
                      {selectedItem.type === "video" && (
                        <Play size={12} className="mr-1" />
                      )}
                      {
                        categories.find(
                          (cat) => cat.id === selectedItem.category
                        )?.label
                      }
                    </span>
                    {selectedItem.type === "video" && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        Video
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(
                      (item) => item.id === selectedItem.id
                    );
                    const prevIndex =
                      currentIndex > 0
                        ? currentIndex - 1
                        : filteredItems.length - 1;
                    const prevItem = filteredItems[prevIndex];
                    setSelectedItem(prevItem);
                    setItemType(prevItem.type);
                    setIsPlaying(prevItem.type === "video");
                  }}
                  className="px-4 py-2 md:px-6 md:py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center text-sm md:text-base"
                >
                  <Play size={16} className="mr-2 rotate-180" />
                  Sebelumnya
                </button>
                <button
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(
                      (item) => item.id === selectedItem.id
                    );
                    const nextIndex =
                      currentIndex < filteredItems.length - 1
                        ? currentIndex + 1
                        : 0;
                    const nextItem = filteredItems[nextIndex];
                    setSelectedItem(nextItem);
                    setItemType(nextItem.type);
                    setIsPlaying(nextItem.type === "video");
                  }}
                  className="px-4 py-2 md:px-6 md:py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center text-sm md:text-base"
                >
                  Selanjutnya
                  <Play size={16} className="ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;
