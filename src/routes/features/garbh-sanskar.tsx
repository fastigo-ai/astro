import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sun,
  Sparkles,
  Check,
  Crown,
  Heart,
  ChevronRight,
  ShieldCheck,
  Activity,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

// ── 3 Premium Pricing Plans (English Only) ──
const PRICING_PLANS = [
  {
    id: "silver",
    name: "Silver Plan",
    price: "₹5,000",
    period: "Complete 9-Month Care",
    tagline: "Essential Vedic Sanskars & foundational mantra guidance.",
    isPopular: false,
    badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
    buttonClass: "bg-[#172554] hover:bg-[#1e3a8a] text-white",
    features: [
      "Sankalp Pooja (Live Vedic Initiation)",
      "Punsavan Sanskar (3rd Month Ritual)",
      "Simantonnayana Sanskar (8th Month Ritual)",
      "Isht Mantra (Personalized Astrological Chant)",
      "Special Expert Guidance Sessions",
      "Daily Sandhya Prarthana Access",
      "Community Discussion Forum",
    ],
  },
  {
    id: "diamond",
    name: "Diamond Plan",
    price: "₹25,000",
    period: "All-Inclusive 9-Month Premium",
    tagline: "Our flagship end-to-end Vedic & obstetric prenatal mastery.",
    isPopular: true,
    badgeColor: "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-sm",
    buttonClass: "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-lg shadow-[#F45B8A]/30 hover:scale-102",
    features: [
      "Sankalp Poojan (Live Personalized Ceremony)",
      "Punsavan Sanskar (Live Vedic Ceremony)",
      "Simantonnayana Sanskar (Live Vedic Ceremony)",
      "Meditation & Deep Mindfulness",
      "Isht Mantra (Astrological Calculation)",
      "Yoga Sessions (Trimester-specific Prenatal Yoga)",
      "Garbh Sanskar Music (Classical Raga Therapy)",
      "Jeevan Sutra (Live Life Mentoring)",
      "Vedic Mantra Vrushti (High-definition Chants)",
      "Yoga Nidra Sessions (Deep Restorative Sleep)",
      "Garbh Samvad (Mother-Baby Daily Guide)",
      "Garbh Kalyan Prarthana (Womb Protection Chants)",
      "Diet Guidance (Satvik Ayurvedic Nutrition)",
      "Daily Evening Sandhya Prarthana",
      "Garbh Sanskar Sutras & Wisdom",
      "Vishnu Sahasranam Recitations",
      "Special Festive Ritual Sessions",
      "Sang Muskayen (Interactive Bonding Games)",
      "Brainopedia (Fetal Brain Puzzles)",
      "Nutritionist Live Sessions",
      "Mentoring & Emotional Support",
      "Medi-Mitra (Doctor On-Call Guide)",
      "Vedic Audio & Story Library",
      "Live Q&A Sessions with Experts",
      "Baby Kick Counter (In-App Tool)",
      "Weight Gain Tracker (In-App Tool)",
    ],
  },
  {
    id: "gold",
    name: "Gold Plan",
    price: "₹11,000",
    period: "Standard 9-Month Comprehensive",
    tagline: "Comprehensive balance of Vedic rituals and digital trackers.",
    isPopular: false,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    buttonClass: "bg-[#172554] hover:bg-[#1e3a8a] text-white",
    features: [
      "Sankalp Pooja (Live Vedic Initiation)",
      "Punsavan Sanskar (3rd Month Ritual)",
      "Simantonnayana Sanskar (8th Month Ritual)",
      "Supraj Santaanotpatti Havan (Monthly)",
      "Meditation & Relaxation",
      "Isht Mantra (Astrological Calculation)",
      "Live Expert Q&A Sessions",
      "Yoga Sessions (Live Instructor)",
      "Baby Kick Counter (In-App Tool)",
      "Weight Gain Tracker (In-App Tool)",
      "Monthly Activity Calendar",
      "Garbh Kalyan Prarthana",
    ],
  },
];

// Feature Comparison Matrix
const COMPARISON_FEATURES = [
  { name: "Live Sankalp Poojan", silver: true, gold: true, diamond: true },
  { name: "Punsavan Sanskar", silver: true, gold: true, diamond: true },
  { name: "Simantonnayana Sanskar", silver: true, gold: true, diamond: true },
  { name: "Personalized Isht Mantra", silver: true, gold: true, diamond: true },
  { name: "Baby Kick Counter & Weight Tracker", silver: false, gold: true, diamond: true },
  { name: "Supraj Santaanotpatti Monthly Havan", silver: false, gold: true, diamond: true },
  { name: "Live Doctor & Gynecologist Sessions", silver: false, gold: false, diamond: true },
  { name: "Garbh Samvad & Brainopedia", silver: false, gold: false, diamond: true },
  { name: "Nutritionist Live Guidance & Diet Plans", silver: false, gold: false, diamond: true },
  { name: "Medi-Mitra Dedicated Support", silver: false, gold: false, diamond: true },
  { name: "24/7 Digital Library & Vishnu Sahasranam", silver: false, gold: false, diamond: true },
];

export default function GarbhSanskarFeature() {
  const [selectedPlan, setSelectedPlan] = useState("diamond");

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-purple-600 border border-purple-200/80 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Sun className="h-3.5 w-3.5" />
            <span>Prenatal Mastery • 9 Months Vedic Care</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#172554] leading-[1.15] font-['DM_Serif_Display',Georgia,serif] tracking-tight">
            Garbh Sanskar —{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              9-Month Prenatal Plans
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-['Manrope',sans-serif]">
            Ancient Vedic mantras, classical raga stimulation, prenatal yoga, and obstetric neuroscience designed to shape a healthy, calm, and virtuous child in the womb.
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
            <span className="text-[#172554] font-bold">Garbh Sanskar</span>
          </div>
        </div>
      </section>

      {/* ── 2. Pricing Plans Section ── */}
      <section className="py-16 md:py-24 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> Transparent Vedic Packages
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554]">
              Choose Your Garbh Sanskar Journey
            </h2>
            <p className="text-sm md:text-base text-[#475569] font-['Manrope',sans-serif]">
              Select the right level of live scholar guidance, poojan ceremonies, and health tracking for your pregnancy.
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const isDiamond = plan.id === "diamond";
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-[32px] p-7 sm:p-9 transition-all duration-300 ${
                    isDiamond
                      ? "bg-gradient-to-b from-[#FFF6FA] via-white to-[#FDF4F8] border-2 border-[#F45B8A] shadow-[0_25px_60px_rgba(244,91,138,0.18)] lg:-translate-y-3"
                      : "bg-white border border-pink-100/90 shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-xl"
                  }`}
                >
                  {/* Most Popular Floating Top Pill */}
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                        <Crown className="w-3.5 h-3.5" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl font-normal text-[#172554]">
                        {plan.name}
                      </h3>
                      {plan.id === "silver" && (
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                          Starter
                        </span>
                      )}
                      {plan.id === "gold" && (
                        <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                          Complete
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 min-h-[36px] font-['Manrope',sans-serif]">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="mt-5 pb-6 border-b border-pink-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">/ 9 Months Care</span>
                      </div>
                      <p className="text-[11px] text-[#F45B8A] font-semibold mt-1">One-time payment • All Poojan Included</p>
                    </div>

                    {/* Features list */}
                    <div className="mt-6 space-y-2.5">
                      <p className="text-xs font-bold text-[#172554] uppercase tracking-wider">
                        Included in {plan.name}:
                      </p>
                      <ul className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                        {plan.features.map((item, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-snug">
                            <Check className="w-4 h-4 text-[#F45B8A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${plan.buttonClass}`}
                    >
                      <span>Enroll in {plan.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Plan Comparison Table ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDFE] via-[#FDF6FA] to-[#F7FAFF] border-t border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl md:text-4xl font-normal text-[#172554]">
              Compare Plan Features
            </h2>
            <p className="text-sm text-slate-500 font-['Manrope',sans-serif]">
              Detailed breakdown of services included across Silver, Gold, and Diamond tiers.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-xl rounded-[28px] border border-pink-100 shadow-[0_15px_45px_rgba(23,37,84,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-pink-100">
                    <th className="p-4 sm:p-5 font-bold text-[#172554] text-xs sm:text-sm">Features & Rituals</th>
                    <th className="p-4 sm:p-5 font-bold text-center text-slate-600 text-xs sm:text-sm">Silver (₹5k)</th>
                    <th className="p-4 sm:p-5 font-bold text-center text-amber-700 text-xs sm:text-sm">Gold (₹11k)</th>
                    <th className="p-4 sm:p-5 font-bold text-center text-[#F45B8A] text-xs sm:text-sm bg-pink-50/50">Diamond (₹25k)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMPARISON_FEATURES.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-pink-50/30 transition-colors">
                      <td className="p-4 sm:p-5 font-medium text-slate-700 text-xs sm:text-sm">{row.name}</td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.silver ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-bold">—</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.gold ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-bold">—</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center bg-pink-50/20">
                        {row.diamond ? (
                          <Check className="w-4 h-4 text-[#F45B8A] mx-auto font-extrabold" />
                        ) : (
                          <span className="text-slate-300 font-bold">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
