import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Baby,
  Sparkles,
  Check,
  BookOpen,
  ArrowRight,
  Sun,
  ShieldCheck,
  Award,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const CORE_SANSKARS = [
  {
    title: "Namkaran Sanskar",
    subTitle: "Sacred Naming Ceremony",
    desc: "Auspicious naming based on astrological nakshatra syllables and planetary alignments to establish a powerful, positive identity.",
  },
  {
    title: "Nishkraman Sanskar",
    subTitle: "First Outdoor Exploration",
    desc: "Sacred ceremony when the infant is first introduced to open air, sun (Surya Darshan), and the five natural elements (Pancha Mahabhuta).",
  },
  {
    title: "Karnavedha Sanskar",
    subTitle: "Ear Piercing & Neural Acuity",
    desc: "Ancient acupuncture and sensory enhancement tradition performed with holy mantras to stimulate auditory and intellectual neural pathways.",
  },
  {
    title: "Annaprashan Sanskar",
    subTitle: "First Blessed Solid Food",
    desc: "The sacred first offering of blessed solid satvik food (kheer/grains), invoking the blessings of Devi Annapurna for lifelong health and digestion.",
  },
];

const ADDITIONAL_FEATURES = [
  "Moral & Inspirational Bedtime Audio Stories",
  "Cognitive Brain Sharpening Puzzles & Memory Games",
  "Sanskrit Shloka & Peace Mantra Recitation Guides",
  "Early Character & Virtue Building (Sanskar Sutras)",
];

export default function BaalSanskarPage() {
  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-blue-600 border border-blue-200/80 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Baby className="h-3.5 w-3.5" />
            <span>Early Childhood Development • ₹6,000</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#172554] leading-[1.15] font-['DM_Serif_Display',Georgia,serif] tracking-tight">
            Baal Sanskar —{" "}
            <span className="bg-gradient-to-r from-[#172554] via-blue-600 to-[#F45B8A] bg-clip-text text-transparent">
              Childhood Growth Program
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-['Manrope',sans-serif]">
            Nurturing positive virtues, cognitive sharpness, and emotional security through the 4 sacred early childhood Vedic sanskars.
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
            <span className="text-[#172554] font-bold">Baal Sanskar</span>
          </div>

          {/* Pricing Highlight Box */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-blue-200 shadow-md flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium block">All-Inclusive Program Fee</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#172554]">₹6,000</span>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#172554] hover:bg-[#1e3a8a] text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
              >
                Enroll Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Sacred Sanskars Grid ── */}
      <section className="py-16 md:py-24 bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> 4 Sacred Milestones
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554]">
              The 4 Core Childhood Sanskars
            </h2>
            <p className="text-sm md:text-base text-[#475569] font-['Manrope',sans-serif]">
              Guided step-by-step by our senior Vaidic Brahmins with personalized muhurats and auspicious rituals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {CORE_SANSKARS.map((s, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50/30 via-white to-sky-50/20 rounded-[30px] p-7 sm:p-8 border border-blue-100/90 shadow-[0_10px_35px_rgba(23,37,84,0.04)] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      Sanskar 0{idx + 1}
                    </span>
                    <Award className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#172554] group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mt-0.5">
                    {s.subTitle}
                  </p>

                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#475569] font-['Manrope',sans-serif]">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#172554]">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Live Brahmin Guidance & Muhurat</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Inclusions List */}
          <div className="bg-gradient-to-r from-blue-50/60 via-white to-sky-50/40 rounded-[28px] p-8 border border-blue-100">
            <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#172554] mb-4">
              Additional Developmental Inclusions (Included in ₹6,000):
            </h3>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {ADDITIONAL_FEATURES.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2.5 text-sm text-[#475569] font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
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
