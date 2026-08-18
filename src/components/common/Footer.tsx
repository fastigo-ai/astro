import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const programs = [
    { name: "Garbhadhan Sanskar", to: "/features/garbh-dhan" },
    { name: "Beej Sanskar", to: "/features/beej-sanskar" },
    { name: "Garbh Sanskar (9 Months)", to: "/features/garbh-sanskar" },
    { name: "Baal Sanskar", to: "/features/baal-sanskar" },
    { name: "Infant Care", to: "/features/infant-care" },
    { name: "Mindful Parenting", to: "/features/parenting" },
    { name: "Bhavishya Phal", to: "/features/bhavishya-fal" },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Our Expert Team", to: "/team" },
    { name: "All Courses & Features", to: "/features" },
    { name: "Mother Testimonials", to: "/testimonial" },
    { name: "Vedic Blog & Guides", to: "/blog" },
    { name: "Contact & Support", to: "/contact" },
  ];

  return (
    <footer className="w-full relative z-20 border-t border-pink-200/70 bg-gradient-to-b from-pink-50 via-[#FFF8FC] to-[#FFF1F6] text-[#475569]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group">
              <img
                src="/images/logo.png"
                alt="Astro Baby Logo"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm leading-relaxed text-[#475569] font-normal pr-4">
              Astro Baby bridges sacred ancient Vedic Garbhadhan Sanskar traditions with modern
              medical science, empowering expecting parents for healthy, conscious, and divine
              childbirth.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white border border-pink-200/80 shadow-xs flex items-center justify-center text-[#172554] hover:text-white hover:bg-[#F45B8A] hover:border-[#F45B8A] transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-pink-200/80 shadow-xs flex items-center justify-center text-[#172554] hover:text-white hover:bg-[#F45B8A] hover:border-[#F45B8A] transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white border border-pink-200/80 shadow-xs flex items-center justify-center text-[#172554] hover:text-white hover:bg-[#F45B8A] hover:border-[#F45B8A] transition-all duration-300 hover:scale-110"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sacred Programs (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-[#172554] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F45B8A]" />
              Sacred Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="text-sm text-[#475569] hover:text-[#F45B8A] transition-colors flex items-center gap-1.5 group font-normal"
                  >
                    <span className="text-[#F45B8A] opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-[#172554] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              Explore
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="text-sm text-[#475569] hover:text-[#F45B8A] transition-colors flex items-center gap-1.5 group font-normal"
                  >
                    <span className="text-[#F45B8A] opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & App Download (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-[#172554] tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EA3484] ring-4 ring-pink-100" />
              Get in Touch
            </h3>

            <div className="space-y-2.5">
              <a
                href="tel:+919018567465"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/95 hover:bg-white border border-pink-100/90 shadow-2xs hover:shadow-md hover:border-pink-300 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 text-[#EA3484] flex items-center justify-center shrink-0 group-hover:bg-[#EA3484] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Call Us
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors">
                    +91 9018567465
                  </div>
                </div>
              </a>

              <a
                href="mailto:contact@astrobaby.org"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/95 hover:bg-white border border-pink-100/90 shadow-2xs hover:shadow-md hover:border-pink-300 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 text-[#EA3484] flex items-center justify-center shrink-0 group-hover:bg-[#EA3484] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Email Support
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors break-all">
                    contact@astrobaby.org
                  </div>
                </div>
              </a>
            </div>

            {/* App Store / Google Play quick buttons */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-[#172554] uppercase tracking-wider mb-2.5">
                Download App
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-105 transition-transform duration-300 shadow-2xs hover:shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src="/images/google-play-badge.png"
                    alt="Google Play"
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://apple.co/3iEfg7K"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-105 transition-transform duration-300 shadow-2xs hover:shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src="/images/app-store-badge.png"
                    alt="App Store"
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — Deep Royal Navy matching Navbar Top Bar */}
      <div className="bg-[#172554] text-white/80 py-5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-amber-300">✨</span>
            <span>© {currentYear} Astro Baby Garbhadhan Sanskar. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            <Link to="/about-us" className="hover:text-white transition-colors">
              About
            </Link>
            <span>•</span>
            <Link to="/features" className="hover:text-white transition-colors">
              Courses
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy & Terms
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
