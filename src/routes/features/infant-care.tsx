import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Check,
  UserCheck,
  Utensils,
  Activity,
  Heart,
  Compass,
  ArrowRight,
  Clock,
  Award,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const INFANT_CARE_SERVICES = [
  {
    icon: UserCheck,
    title: "Personal Parenting Coach",
    subTitle: "Dedicated Mentor",
    desc: "1-on-1 guidance from a certified parenting expert to assist you through newborn crying patterns, sleep regression, and emotional bonding.",
  },
  {
    icon: Utensils,
    title: "Custom Diet Plans",
    subTitle: "Maternal & Infant Nutrition",
    desc: "Personalized satvik post-partum nutrition charts designed to enhance breastmilk quality, boost recovery, and nourish your newborn.",
  },
  {
    icon: Activity,
    title: "Daily Live Yoga Classes",
    subTitle: "Postnatal Recovery Yoga",
    desc: "Gentle daily live yoga and pelvic floor rehabilitation classes led by instructors specialized in postnatal healing and vitality.",
  },
  {
    icon: Heart,
    title: "Lactation Coach",
    subTitle: "Breastfeeding Mastery",
    desc: "Expert lactation support to resolve latching issues, posture concerns, milk supply optimization, and weaning transitions.",
  },
  {
    icon: Compass,
    title: "Astrology Support",
    subTitle: "Newborn Astrological Care",
    desc: "Personalized planetary timing guidance for newborn milestones, naming syllables, and auspicious rituals for health and longevity.",
  },
];

export default function InfantCarePage() {
  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-teal-700 border border-teal-200/80 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Newborn Wellness Protocol • ₹5,000</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#172554] leading-[1.15] font-['DM_Serif_Display',Georgia,serif] tracking-tight">
            Infant Care —{" "}
            <span className="bg-gradient-to-r from-[#172554] via-teal-600 to-[#F45B8A] bg-clip-text text-transparent">
              Newborn Wellness & Guidance
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-['Manrope',sans-serif]">
            Comprehensive pediatrician-backed wellness, personal lactation coach, custom diet plans, and daily live classes for your baby's crucial first months.
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
            <span className="text-[#172554] font-bold">Infant Care</span>
          </div>

          {/* Pricing Highlight Box */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-teal-200 shadow-md flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium block">All-Inclusive Program Fee</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#172554]">₹5,000</span>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
              >
                Enroll Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Core Pillars Grid ── */}
      <section className="py-16 md:py-24 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200/80 bg-teal-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-700 backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> 5 Dedicated Support Pillars
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554]">
              Included in the Infant Care Program (₹5,000)
            </h2>
            <p className="text-sm md:text-base text-[#475569] font-['Manrope',sans-serif]">
              Personalized pediatrician, lactation, yoga, and astrology guidance for a joyful newborn journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {INFANT_CARE_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[28px] p-6 sm:p-7 border border-teal-100/90 shadow-[0_10px_35px_rgba(23,37,84,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#172554] group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mt-0.5">
                      {item.subTitle}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#475569] font-['Manrope',sans-serif]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#172554]">
                    <Check className="w-3.5 h-3.5 text-teal-600" />
                    <span>Included in ₹5,000 Program</span>
                  </div>
                </div>
              );
            })}
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
