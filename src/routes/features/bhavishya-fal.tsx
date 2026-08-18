import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass,
  Sparkles,
  Check,
  Star,
  ArrowRight,
  BookOpen,
  UserCheck,
  Calendar,
  Layers,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const SERVICES = [
  {
    id: "kundli-falit",
    title: "Kundli + Falit Report",
    subTitle: "Detailed Astrological Life Predictions",
    price: "₹3,500",
    img: "/images/features/monthly_calendar.png",
    badge: "Comprehensive",
    badgeColor: "bg-pink-50 text-[#EA3484] border-pink-200",
    desc: "Complete Vedic Janam Kundali preparation along with thorough planetary analysis, Dasha timelines, and personalized remedy guides for your child's auspicious future.",
    features: [
      "Full Vedic Janam Kundali (Birth Chart Generation)",
      "Planetary Strengths & Nakshatra Personality Traits",
      "Mahadasha & Antardasha Life Timeline Analysis",
      "Auspicious Career, Health & Education Guidance",
      "Customized Vedic Shanti & Gemstone Guidance",
      "Downloadable Comprehensive PDF Life Report",
    ],
  },
  {
    id: "consultation",
    title: "Astrologer Consultation",
    subTitle: "Live 1-on-1 Astrologer Session",
    price: "₹3,100",
    img: "/images/features/isht_mantra.jpg",
    badge: "Direct 1-on-1",
    badgeColor: "bg-pink-50 text-[#EA3484] border-pink-200",
    desc: "Direct live audio/video consultation with senior Vedic astrologers to ask specific questions about your newborn, naming syllables, and parenting alignment.",
    features: [
      "30-Minute Live 1-on-1 Astrologer Session",
      "Naming Syllable & Auspicious Muhurat Clarifications",
      "Personalized Q&A on Child Health & Education",
      "Immediate Vedic Solutions & Remedies",
      "Follow-up Guidance via Astro Baby Chat",
    ],
  },
];

export default function BhavishyaFalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5FF] via-white to-[#FFF6FA] text-slate-800 font-sans selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner Section with Text Overlay ── */}
      <section className="relative z-10">
        <motion.div
          className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex items-center"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background Banner Image */}
          <img
            src="/images/baal_bhavish_banner.jpg"
            alt="Astro Baby Bhavishya Fal"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Contrast Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/50 to-transparent sm:bg-gradient-to-l sm:from-slate-950/95 sm:via-slate-950/75 sm:to-transparent" />
          <div className="absolute inset-0 bg-slate-950/30 sm:bg-transparent" />

          {/* Banner Content Overlay (Right-Aligned) */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-16 w-full flex justify-end">
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-semibold mb-4 shadow-sm"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Compass className="h-4 w-4 text-pink-300" />
                Astro Baby • Vedic Astrological Guidance • Starting ₹3,100
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Bhavishya Phal
                <span className="text-pink-300 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-1.5">
                  Astrological Predictions & Consultations
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl font-normal drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Unlocking your child's natural planetary strengths, innate talents, and life
                potentials through precise Vedic Janam Kundali analysis and scholar consultations.
              </motion.p>

              {/* Action Buttons & Highlights */}
              <motion.div
                className="flex flex-wrap items-center gap-3 pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Book Consultation (₹3,100)
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-white/85 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  Janam Kundali • Falit Report • Live Astrologer
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2 Service Cards Section ── */}
      <section className="py-16 md:py-24 bg-white/95 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#EA3484]" /> 2 Dedicated Service Packages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A3A6C] leading-[1.2] tracking-tight mb-4">
              Choose Your Astrological Consultation
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              Authentic Vedic calculations prepared by renowned astrologers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-gradient-to-br from-pink-50/30 via-white to-rose-50/20 rounded-[32px] p-7 sm:p-8 border border-pink-100/90 shadow-[0_15px_45px_rgba(23,37,84,0.06)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Thematic Image Header */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 border border-white shadow-sm">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border bg-white/95 backdrop-blur-md ${srv.badgeColor}`}
                      >
                        {srv.badge}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 bg-slate-900/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-semibold text-pink-200 uppercase tracking-wide drop-shadow">
                        {srv.subTitle}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#172554] group-hover:text-[#EA3484] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#EA3484] uppercase tracking-wide mt-0.5">
                    {srv.subTitle}
                  </p>

                  {/* Price */}
                  <div className="mt-4 pb-4 border-b border-pink-100">
                    <span className="text-3xl sm:text-4xl font-bold text-[#172554] tracking-tight">
                      {srv.price}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#475569] font-normal">
                    {srv.desc}
                  </p>

                  {/* Inclusions */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-semibold text-[#172554] uppercase tracking-wider">
                      Service Inclusions:
                    </p>
                    <ul className="space-y-2">
                      {srv.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] font-normal"
                        >
                          <Check className="w-4 h-4 text-[#EA3484] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_4px_18px_rgba(244,91,138,0.28)] hover:shadow-[0_8px_24px_rgba(244,91,138,0.4)]"
                  >
                    <span>Book {srv.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <AppDownloadSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
