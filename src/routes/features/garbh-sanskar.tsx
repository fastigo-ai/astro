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
import Footer from "@/components/common/Footer";

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

const PROGRAM_PILLARS = [
  {
    title: "Vedic Poojan & Samskaras",
    img: "/images/features/punsavan_sanskar.jpg",
    tagline: "Sacred ceremonies sanctifying every stage of fetal life.",
    body: [
      "Live one-on-one Sankalp Poojan, 3rd-month Punsavan Sanskar, and 8th-month Simantonnayana Sanskar conducted live by our experienced Vedic scholars on personalized auspicious Muhurats.",
      "These rituals impart spiritual armor, mental clarity, and divine virtues into the developing consciousness of your unborn child.",
    ],
  },
  {
    title: "Garbh Samvad & Brain Stimulation",
    img: "/images/features/garbhsamvad.jpg",
    tagline: "Laying the foundation of a lifetime bond.",
    body: [
      "Daily structured audio and interactive guides to communicate positive values, wisdom, and loving thoughts to your baby in the womb.",
      "Supported by Brainopedia cognitive stimulation exercises and neurological development puzzles to foster exceptional fetal brain development.",
    ],
  },
  {
    title: "Vaidic Mantra Vrushti & Classical Ragas",
    img: "/images/features/vaidic_mantra_vrushti.jpg",
    tagline: "Sound resonance for cellular and emotional harmony.",
    body: [
      "Sacred mantras chanted in authentic Vedic phonetics along with trimester-specific classical Indian ragas designed to balance maternal brainwaves.",
      "Induces deep state of relaxation, reduces prenatal anxiety, and nurtures the baby's auditory neural cortex.",
    ],
  },
  {
    title: "Trimester Prenatal Yoga & Yoga Nidra",
    img: "/images/features/yoga_session.jpg",
    tagline: "Strength, flexibility, and restorative sleep.",
    body: [
      "Live daily yoga sessions tailored to each trimester by certified prenatal instructors to ease back pain, promote pelvic flexibility, and prepare for natural delivery.",
      "Combined with 20-minute guided Yoga Nidra sessions that lower cortisol and relieve physical exhaustion.",
    ],
  },
  {
    title: "Doctor & Nutritionist Consultation",
    img: "/images/features/doctors_session.jpg",
    tagline: "Medical excellence meets Ayurvedic nourishment.",
    body: [
      "Regular live sessions with senior obstetricians and AIIMS alumni gynecologists to address pregnancy queries, combined with personalized satvik Ayurvedic diet plans from clinical nutritionists.",
      "Ensures optimal maternal hemoglobin levels, healthy fetal weight gain, and total peace of mind.",
    ],
  },
];

export default function GarbhSanskarFeature() {
  const [selectedPlan, setSelectedPlan] = useState("diamond");

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
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
            src="/images/garbh_sanskar_banner.jpg"
            alt="Astro Baby Garbh Sanskar"
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
                <Sun className="h-4 w-4 text-pink-300" />
                Astro Baby • 9-Month Prenatal Mastery
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Garbh Sanskar
                <span className="text-pink-300 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-1.5">
                  9-Month Sacred Prenatal Journey
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl font-normal drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ancient Vedic mantras, classical raga stimulation, trimester-specific prenatal yoga, and obstetric neuroscience designed to shape a healthy, calm, and virtuous child in the womb.
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
                  Explore Plans
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-white/85 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  Diamond • Gold • Silver Plans
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Deep Dive Features List (Just like Beej Sanskar) ── */}
      <section className="py-16 md:py-24 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] mb-3">
              <Sparkles className="h-3.5 w-3.5" /> Program Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight mb-4">Inside the Garbh Sanskar Program</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {PROGRAM_PILLARS.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={f.title}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-xl">
                      <img src={f.img} alt={f.title} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-pink-100 text-[#EA3484] font-semibold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <Check className="w-4 h-4 text-[#EA3484]" />
                      Pillar 0{i + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E293B] mb-2 tracking-tight leading-tight">{f.title}</h3>
                    <h4 className="text-lg text-[#EA3484] font-semibold mb-6">"{f.tagline}"</h4>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg font-normal">
                      {f.body.map((p, idx) => (<p key={idx}>{p}</p>))}
                    </div>

                    <div className="mt-8">
                      <a
                        href="/contact-us"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] text-white font-semibold text-sm shadow-[0_4px_18px_rgba(244,91,138,0.28)] hover:shadow-[0_8px_24px_rgba(244,91,138,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Pricing Plans Section ── */}
      <section className="py-16 md:py-24 bg-[#FFFDFE] border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> Transparent Vedic Packages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              Choose Your Garbh Sanskar Journey
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
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
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                        <Crown className="w-3.5 h-3.5" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#172554] leading-snug">
                        {plan.name}
                      </h3>
                      {plan.id === "silver" && (
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                          Starter
                        </span>
                      )}
                      {plan.id === "gold" && (
                        <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                          Complete
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 min-h-[36px] font-normal">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="mt-5 pb-6 border-b border-pink-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-[#172554] tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-500 font-normal">/ 9 Months Care</span>
                      </div>
                      <p className="text-[11px] text-[#F45B8A] font-semibold mt-1">One-time payment • All Poojan Included</p>
                    </div>

                    {/* Features list */}
                    <div className="mt-6 space-y-2.5">
                      <p className="text-xs font-semibold text-[#172554] uppercase tracking-wider">
                        Included in {plan.name}:
                      </p>
                      <ul className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                        {plan.features.map((item, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-snug font-normal">
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
                      className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${plan.buttonClass}`}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554] leading-[1.2] tracking-tight">
              Compare Plan Features
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto my-2"></div>
            <p className="text-sm text-slate-500 font-normal">
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
      <Footer />
    </div>
  );
}
