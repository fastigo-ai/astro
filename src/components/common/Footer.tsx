import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const sacredPrograms = [
    { name: t("programs.garbhadhan.title", "Garbhadhan Sanskar"), to: "/features/garbh-dhan" },
    { name: t("programs.beejSanskar.title", "Beej Sanskar"), to: "/features/beej-sanskar" },
    { name: t("programs.garbhSanskar.title", "Garbh Sanskar"), to: "/features/garbh-sanskar" },
    { name: t("programs.baalSanskar.title", "Baal Sanskar"), to: "/features/baal-sanskar" },
    { name: t("programs.infantCare.title", "Infant Care"), to: "/features/infant-care" },
    { name: t("programs.parenting.title", "Mindful Parenting"), to: "/features/parenting" },
    { name: t("programs.bhavishyaPhal.title", "Bhavishya Phal"), to: "/features/bhavishya-fal" },
    { name: t("featuresSection.viewAll", "View All Programs"), to: "/features" },
  ];

  const resourceHubs = [
    { name: t("resources.garbhSanskar.title", "Garbh Sanskar Hub"), to: "/garbh-sanskar" },
    { name: t("resources.pregnancy.title", "Pregnancy Care Hub"), to: "/pregnancy" },
    { name: t("resources.howTo.title", "How-To Guides Hub"), to: "/how-to" },
    { name: "Scientific Evidence Hub", to: "/scientific-evidence" },
    { name: "Vedic Mantras & Music", to: "/garbh-sanskar/garbh-sanskar-mantra" },
    { name: "Trimester Care Guide", to: "/garbh-sanskar/first-trimester" },
    { name: "Garbh Sanskar at Home", to: "/how-to/how-to-do-garbh-sanskar-at-home" },
  ];

  const exploreLinks = [
    { name: t("nav.home", "Home"), to: "/" },
    { name: t("nav.aboutUs", "About Us"), to: "/about-us" },
    { name: t("nav.testimonials", "Testimonials"), to: "/testimonial" },
    { name: t("nav.blog", "Vedic Blog"), to: "/blog" },
    { name: t("nav.contact", "Contact Us"), to: "/contact" },
    { name: "Newsletter", to: "/newsletter" },
  ];

  return (
    <footer className="w-full relative z-20 border-t border-pink-200/70 bg-gradient-to-b from-pink-50 via-[#FFF8FC] to-[#FFF1F6] text-[#475569]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6 sm:gap-8 lg:gap-6">
          {/* 1. Brand Column (4 cols on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="inline-block group">
              <img
                src="/images/logo.png"
                alt="Astro Baby Logo"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-[#475569] font-normal max-w-md sm:max-w-none sm:pr-4">
              {t("footer.description", "Astro Baby bridges sacred ancient Vedic Garbhadhan Sanskar traditions with modern medical science, empowering expecting parents for healthy, conscious, and divine childbirth.")}
            </p>

            {/* Social Links (Centered on mobile) */}
            <div className="pt-1 flex items-center justify-center sm:justify-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-pink-200/80 shadow-xs flex items-center justify-center text-[#172554] hover:text-white hover:bg-[#F45B8A] hover:border-[#F45B8A] transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-pink-200/80 shadow-xs flex items-center justify-center text-[#172554] hover:text-white hover:bg-[#F45B8A] hover:border-[#F45B8A] transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-pink-200/80 shadow-xs flex items-center justify-center text-[#172554] hover:text-white hover:bg-[#F45B8A] hover:border-[#F45B8A] transition-all duration-300 hover:scale-110"
              >
                <FaYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* 2. Sacred Programs Column (2.5 cols on lg) */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-[#172554] flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F45B8A] shrink-0" />
              <span>Sacred Programs</span>
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {sacredPrograms.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="text-xs sm:text-[13px] text-[#475569] hover:text-[#F45B8A] transition-colors flex items-center gap-1 group font-normal leading-snug"
                  >
                    <span className="text-[#F45B8A] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
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

          {/* 3. Resources & Guides Column (2.5 cols on lg) */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-[#172554] flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              <span>Resources & Hubs</span>
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {resourceHubs.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="text-xs sm:text-[13px] text-[#475569] hover:text-[#F45B8A] transition-colors flex items-center gap-1 group font-normal leading-snug"
                  >
                    <span className="text-[#F45B8A] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
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

          {/* 4. Explore & Company Column (2 cols on lg) */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-[#172554] flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0" />
              <span>Explore</span>
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {exploreLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="text-xs sm:text-[13px] text-[#475569] hover:text-[#F45B8A] transition-colors flex items-center gap-1 group font-normal leading-snug"
                  >
                    <span className="text-[#F45B8A] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
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

          {/* 5. Contact & App Download (Full width on mobile, 3 cols on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-4 text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-bold text-[#172554] flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Get in Touch</span>
            </h3>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-2.5 max-w-sm mx-auto sm:mx-0">
                <a
                  href="tel:+919716091296"
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 hover:bg-white border border-pink-100/90 shadow-2xs hover:shadow-md hover:border-pink-300 transition-all duration-300 group text-left"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 text-[#EA3484] flex items-center justify-center shrink-0 group-hover:bg-[#EA3484] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-2xs">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {t("footer.callUs", "Call Us")}
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors">
                      +91 9716091296
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:contact@astrobaby.org"
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 hover:bg-white border border-pink-100/90 shadow-2xs hover:shadow-md hover:border-pink-300 transition-all duration-300 group text-left"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 text-[#EA3484] flex items-center justify-center shrink-0 group-hover:bg-[#EA3484] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-2xs">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {t("footer.emailSupport", "Email Support")}
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors break-all">
                      contact@astrobaby.org
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Flat+number+5,+block+B,+pocket+3,+sector+G+2+and+G+6,+Narela,+Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 hover:bg-white border border-pink-100/90 shadow-2xs hover:shadow-md hover:border-pink-300 transition-all duration-300 group text-left"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 text-[#EA3484] flex items-center justify-center shrink-0 group-hover:bg-[#EA3484] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {t("footer.officeAddress", "Office Address")}
                    </div>
                    <div className="text-xs sm:text-[12px] font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors leading-snug">
                      Flat 5, Block B, Pkt 3, Sec G2 & G6, Narela, Delhi
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Playstore & App Store centered on mobile */}
            <div className="pt-1 flex flex-col items-center sm:items-start">
              <div className="text-[11px] font-bold text-[#172554] uppercase tracking-wider mb-2.5 text-center sm:text-left">
                {t("footer.downloadApp", "Download App")}
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-105 transition-transform duration-300 shadow-2xs hover:shadow-md rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    loading="lazy"
                    decoding="async"
                    className="h-10 sm:h-10.5 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://apple.co/3iEfg7K"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-105 transition-transform duration-300 shadow-2xs hover:shadow-md rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src="/images/app-store-badge.png"
                    alt="Download on App Store"
                    loading="lazy"
                    decoding="async"
                    className="h-10 sm:h-10.5 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — Deep Royal Navy matching Navbar Top Bar */}
      <div className="bg-[#172554] text-white/80 pt-5 pb-20 sm:pb-5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>{t("footer.allRightsReserved", { year: currentYear, defaultValue: `© ${currentYear} Astro Baby Garbhadhan Sanskar. All rights reserved.` })}</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-white/70">
            <Link to="/about-us" className="hover:text-white transition-colors">
              {t("nav.aboutUs", "About")}
            </Link>
            <span>•</span>
            <Link to="/features" className="hover:text-white transition-colors">
              {t("nav.programs", "Courses")}
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              {t("footer.privacyTerms", "Privacy & Terms")}
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              {t("footer.support", "Support")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
