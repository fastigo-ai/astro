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

const SERVICES = [
  {
    id: "kundli-falit",
    title: "Kundli + Falit Report",
    subTitle: "Detailed Astrological Life Predictions",
    price: "₹3,500",
    badge: "Comprehensive",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
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
    badge: "Direct 1-on-1",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
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
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-indigo-700 border border-indigo-200/80 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Compass className="h-3.5 w-3.5" />
            <span>Vedic Astrological Guidance • Starting ₹3,100</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#172554] leading-[1.15] font-['DM_Serif_Display',Georgia,serif] tracking-tight">
            Bhavishya Fal —{" "}
            <span className="bg-gradient-to-r from-[#172554] via-indigo-600 to-[#F45B8A] bg-clip-text text-transparent">
              Astrological Services
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-['Manrope',sans-serif]">
            Unlocking your child's natural planetary strengths, innate talents, and life potentials through precise Vedic Janam Kundali analysis and scholar consultations.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link to="/features" className="hover:text-[#F45B8A] transition-colors">
              Courses
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#172554] font-bold">Bhavishya Fal</span>
          </div>
        </div>
      </section>

      {/* ── 2 Service Cards Section ── */}
      <section className="py-16 md:py-24 bg-white/95">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> 2 Dedicated Service Packages
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554]">
              Choose Your Astrological Consultation
            </h2>
            <p className="text-sm md:text-base text-[#475569] font-['Manrope',sans-serif]">
              Authentic Vedic calculations prepared by renowned astrologers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-gradient-to-br from-indigo-50/25 via-white to-purple-50/20 rounded-[32px] p-8 sm:p-9 border border-indigo-100 shadow-[0_15px_45px_rgba(23,37,84,0.06)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${srv.badgeColor}`}>
                      {srv.badge}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl font-normal text-[#172554] group-hover:text-indigo-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mt-0.5">
                    {srv.subTitle}
                  </p>

                  {/* Price */}
                  <div className="mt-4 pb-4 border-b border-indigo-100">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight">
                      {srv.price}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#475569] font-['Manrope',sans-serif]">
                    {srv.desc}
                  </p>

                  {/* Inclusions */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-bold text-[#172554] uppercase tracking-wider">
                      Service Inclusions:
                    </p>
                    <ul className="space-y-2">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                          <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
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
                    className="w-full py-3.5 rounded-full bg-[#172554] hover:bg-indigo-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
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
      <footer className="bg-[#172554] text-white/80 py-10 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          © {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
