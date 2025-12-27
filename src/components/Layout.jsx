import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Users,
  BookOpen,
  Image,
  HeartHandshake,
  Menu,
  X,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import Logo from "../assets/images/logo.png";
import { FaTiktok } from "react-icons/fa";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Beranda", icon: Home },
    { path: "/tentang", label: "Tentang", icon: Info },
    { path: "/profil", label: "Profil", icon: Users },
    { path: "/program", label: "Program", icon: BookOpen },
    { path: "/asatidz", label: "Asatidz", icon: Users },
    { path: "/galeri", label: "Galeri", icon: Image },
    { path: "/sodaqoh", label: "Sodaqoh", icon: HeartHandshake },
  ];

  const mobileNavItems = [
    { path: "/", label: "Beranda", icon: Home },
    { path: "/tentang", label: "Tentang", icon: Info },
    { path: "/program", label: "Program", icon: BookOpen },
    { path: "/asatidz", label: "Asatidz", icon: Users },
    { path: "/sodaqoh", label: "Sodaqoh", icon: HeartHandshake },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3"
            : "bg-white py-3 md:py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              {/* Logo Container */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                {/* Background circle */}
                <div className="absolute inset-0 bg-white rounded-full shadow-lg"></div>

                {/* Logo Image */}
                <div className="relative z-10 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
                  {Logo ? (
                    <img
                      src={Logo}
                      alt="Logo Pondok Pesantren Nurul Yaqin"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-primary font-bold text-lg md:text-xl lg:text-2xl">
                      ن
                    </span>
                  )}
                </div>
              </div>

              {/* Text hanya tampil di tablet dan desktop */}
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary leading-tight">
                  Nurul Yaqin
                </h1>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                  Pondok Pesantren Modern
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 transition-colors duration-300 text-sm xl:text-base ${
                      location.pathname === item.path
                        ? "text-primary font-semibold"
                        : "text-dark hover:text-primary"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <Link
                to="/kontak"
                className="ml-4 px-4 py-2 border-2 border-primary text-primary rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
              >
                Kontak
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20 lg:pt-24">{children}</main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 z-40 shadow-lg">
        <div className="flex justify-around">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-gray-500"
                }`}
              >
                <Icon size={22} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-dark text-white mt-20 lg:mt-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src={Logo}
                    alt="Logo Pondok Pesantren Nurul Yaqin"
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">Nurul Yaqin</h2>
                  <p className="text-sm text-gray-400">
                    Pondok Pesantren Modern
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                Mencetak generasi Islam <em>high class</em> dan{" "}
                <em>limited edition</em>
                dengan kesadaran ilahiah.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/username"
                  className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook size={16} className="md:w-5 md:h-5" />
                </a>

                <a
                  href="https://instagram.com/pondok_nurul_yaqin"
                  className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram size={16} className="md:w-5 md:h-5" />
                </a>

                <a
                  href="https://youtube.com/@NurulYaqinChannel77"
                  className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Youtube size={16} className="md:w-5 md:h-5" />
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@tafakkur.ilahiyyah"
                  className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <FaTiktok className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-6">Menu Cepat</h3>
              <ul className="space-y-3">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-6">Kontak Kami</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin
                    className="text-accent mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-300 text-sm md:text-base">
                    Jl. Panjaitan Gg. Merak No. 36 RT 06 RW 02, Tamansari,
                    Bondowoso
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-accent" size={16} />
                  <span className="text-gray-300 text-sm md:text-base">
                    +62 8122-0336-418
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-accent" size={16} />
                  <span className="text-gray-300 text-sm md:text-base">
                    info@nurulyaqin.sch.id
                  </span>
                </li>
              </ul>
            </div>

            {/* Sodaqoh Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-6">
                Sodaqoh & Donasi
              </h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                Dukung pendidikan islami dengan berdonasi untuk pengembangan
                pesantren.
              </p>
              <Link
                to="/sodaqoh"
                className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-br from-primary to-primary-light text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm md:text-base"
              >
                Donasi Sekarang
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Pondok Pesantren Nurul Yaqin.
              Semua hak dilindungi.
            </p>
            <p className="mt-2">Berdiri sejak 17 Februari 2018</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
