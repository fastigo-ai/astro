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
import Footer from "@/components/common/Footer";

const CORE_SANSKARS = [
  {
    title: "Namkaran Sanskar",
    subTitle: "Sacred Naming Ceremony",
    img: "/images/features/isht_mantra.jpg",
    desc: "Auspicious naming based on astrological nakshatra syllables and planetary alignments to establish a powerful, positive identity.",
  },
  {
    title: "Nishkraman Sanskar",
    subTitle: "First Outdoor Exploration",
    img: "/images/features/sandhya_prarthana.jpg",
    desc: "Sacred ceremony when the infant is first introduced to open air, sun (Surya Darshan), and the five natural elements (Pancha Mahabhuta).",
  },
  {
    title: "Karnavedha Sanskar",
    subTitle: "Ear Piercing & Neural Acuity",
    img: "/images/features/sankalp_poojan.jpg",
    desc: "Ancient acupuncture and sensory enhancement tradition performed with holy mantras to stimulate auditory and intellectual neural pathways.",
  },
  {
    title: "Annaprashan Sanskar",
    subTitle: "First Blessed Solid Food",
    img: "/images/features/nutritionist_session.jpg",
    desc: "The sacred first offering of blessed solid satvik food (kheer/grains), invoking the blessings of Devi Annapurna for lifelong health and digestion.",
  },
];

const ADDITIONAL_FEATURES = [
  { text: "Moral & Inspirational Bedtime Audio Stories", img: "/images/features/library.jpg" },
  { text: "Cognitive Brain Sharpening Puzzles & Memory Games", img: "/images/features/brainopedia.jpg" },
  { text: "Sanskrit Shloka & Peace Mantra Recitation Guides", img: "/images/features/vaidic_mantra_vrushti.jpg" },
  { text: "Early Character & Virtue Building (Sanskar Sutras)", img: "/images/features/garbhsanskar_sutra.jpg" },
];

export default function BaalSanskarPage() {
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
            src="/images/baal_sanskar_banner.png"
            alt="Astro Baby Baal Sanskar"
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
                <Baby className="h-4 w-4 text-pink-300" />
                Astro Baby • Early Childhood Development • ₹6,000
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Baal Sanskar
                <span className="text-pink-300 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-1.5">
                  Childhood Growth & Values
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl font-normal drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Nurturing positive virtues, cognitive sharpness, and emotional security through the 4 sacred early childhood Vedic sanskars.
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
                  Enroll Now (₹6,000)
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-white/85 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  4 Vedic Sanskars • Bedtime Stories • Brain Puzzles
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. The 4 Core Childhood Sanskars ── */}
      <section className="py-16 md:py-24 bg-white/95 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#EA3484]" /> 4 Sacred Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A3A6C] leading-[1.2] tracking-tight mb-4">
              The 4 Core Childhood Sanskars
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              Guided step-by-step by our senior Vaidic Brahmins with personalized muhurats and auspicious rituals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CORE_SANSKARS.map((s, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-50/30 via-white to-rose-50/20 rounded-[30px] p-6 sm:p-7 border border-pink-100/90 shadow-[0_10px_35px_rgba(23,37,84,0.04)] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Thematic Image Header */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 border border-white shadow-sm">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#EA3484] bg-white/95 backdrop-blur-md border border-pink-200 px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                        Sanskar 0{idx + 1}
                      </span>
                      <Award className="w-5 h-5 text-white drop-shadow" />
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-semibold text-pink-200 uppercase tracking-wide drop-shadow">
                        {s.subTitle}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#172554] group-hover:text-[#EA3484] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#EA3484] uppercase tracking-wide mt-0.5">
                    {s.subTitle}
                  </p>

                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#475569] font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#172554]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#EA3484]" />
                    <span>Live Brahmin Guidance & Muhurat</span>
                  </div>
                  <a
                    href="/contact-us"
                    className="text-[#EA3484] hover:text-[#d94d7a] flex items-center gap-1 font-semibold"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Inclusions List with Thematic Visuals */}
          <div className="bg-gradient-to-r from-pink-50/60 via-white to-rose-50/40 rounded-[28px] p-8 border border-pink-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#172554] mb-6">
              Additional Developmental Inclusions (Included in ₹6,000):
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {ADDITIONAL_FEATURES.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-pink-100/80 shadow-2xs hover:shadow-xs transition-shadow">
                  <img src={feat.img} alt={feat.text} className="w-12 h-12 rounded-xl object-cover shrink-0 border border-pink-50" />
                  <div className="flex items-center gap-2 text-sm text-[#475569] font-normal">
                    <Check className="w-4 h-4 text-[#EA3484] shrink-0" />
                    <span>{feat.text}</span>
                  </div>
                </div>
              ))}
            </div>
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
