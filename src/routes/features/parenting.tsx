import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smile,
  Sparkles,
  UserCheck,
  Brain,
  Utensils,
  Heart,
  Award,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const PARENTING_SECTIONS = [
  {
    icon: UserCheck,
    title: "Personal Parenting Coach",
    tagline: "1-on-1 Certified Child Guidance",
    img: "/images/features/mentoring.jpg",
    desc: "Direct access to empathetic parenting mentors who assist you through toddler tantrums, bedtime routines, digital screen limits, and positive reinforcement habits.",
    points: [
      "Custom conflict resolution strategies",
      "Positive discipline without yelling",
      "Parent-child emotional bonding techniques",
    ],
  },
  {
    icon: Brain,
    title: "Child Development & Milestones",
    tagline: "Cognitive, Social & Motor Mastery",
    img: "/images/features/brainopedia.jpg",
    desc: "Age-wise developmental roadmaps combining modern developmental psychology with Vedic value-based nurturing (Sanskaras).",
    points: [
      "Speech & language stimulation routines",
      "Gross and fine motor coordination games",
      "Social-emotional awareness & empathy building",
    ],
  },
  {
    icon: Utensils,
    title: "Child Nutrition Guidance",
    tagline: "Holistic Satvik Child Diet",
    img: "/images/features/nutritionist_session.jpg",
    desc: "Pediatric nutritionists guide you on overcoming picky eating, ensuring micronutrient balance, and creating tasty, nutrient-dense satvik meals.",
    points: [
      "Trimester and toddler growth meal plans",
      "Ayurvedic immunity-boosting recipes",
      "Healthy brain food & digestive health",
    ],
  },
  {
    icon: Heart,
    title: "Emotional Wellbeing",
    tagline: "Mindfulness & Resilience for Family",
    img: "/images/features/meditation.jpg",
    desc: "Tools to reduce maternal & paternal burnout, manage everyday family stress, and build an atmosphere of peace, patience, and love at home.",
    points: [
      "Guided parent de-stress meditation",
      "Anger management & calm communication",
      "Creating an uplifting home spiritual environment",
    ],
  },
  {
    icon: Award,
    title: "Expert Guidance & Live Sessions",
    tagline: "Live Masterclasses with Top Doctors & Psychologists",
    img: "/images/features/doctors_session.jpg",
    desc: "Weekly interactive live sessions with leading pediatricians, child psychologists, educationists, and Vedic scholars.",
    points: [
      "Live Q&A to answer your specific challenges",
      "Specialized sessions for school readiness",
      "Sibling harmony & social confidence workshops",
    ],
  },
];

export default function ParentingPage() {
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
            src="/images/parenting_banner.png"
            alt="Astro Baby Parenting"
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
                <Smile className="h-4 w-4 text-pink-300" />
                Astro Baby • Mindful Parenting & Child Growth
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Parenting
                <span className="text-pink-300 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-1.5">
                  Mindful Guidance & Child Development
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl font-normal drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Empowering parents with compassionate psychological tools, child nutrition plans,
                emotional wellbeing, and expert pediatric mentorship.
              </motion.p>

              {/* Action Buttons & Highlights */}
              <motion.div
                className="flex flex-wrap items-center gap-3 pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Consult Parenting Coach
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-white/85 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  Child Psychology • Nutrition • Family Harmony
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Deep Dive Features List (Just like Beej Sanskar) ── */}
      <section className="py-16 md:py-24 bg-white/95 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#EA3484]" /> 5 Dedicated Parenting Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A3A6C] leading-[1.2] tracking-tight mb-4">
              Holistic Support for Modern Parents
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              Explore the key pillars designed to bring joy, calm, and clarity to your parenting
              journey.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {PARENTING_SECTIONS.map((sec, idx) => {
              const reverse = idx % 2 === 1;
              const Icon = sec.icon;
              return (
                <motion.article
                  key={sec.title}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-rose-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-xl">
                      <img
                        src={sec.img}
                        alt={sec.title}
                        className="w-full h-[300px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-pink-100 text-[#EA3484] font-semibold text-xs px-4 py-2 rounded-full mb-4 w-max border border-pink-200">
                      <Icon className="w-4 h-4 text-[#EA3484]" />
                      Pillar 0{idx + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E293B] mb-2 tracking-tight leading-tight">
                      {sec.title}
                    </h3>
                    <h4 className="text-lg text-[#EA3484] font-semibold mb-4">"{sec.tagline}"</h4>
                    <p className="text-slate-600 leading-relaxed text-base mb-6 font-normal">
                      {sec.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {sec.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center gap-2 text-sm text-slate-700 font-normal"
                        >
                          <Check className="w-4 h-4 text-[#EA3484] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <a
                        href="/contact-us"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] text-white font-semibold text-sm shadow-[0_4px_18px_rgba(244,91,138,0.28)] hover:shadow-[0_8px_24px_rgba(244,91,138,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group"
                      >
                        Contact Parenting Mentor
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

      {/* App Download Section */}
      <AppDownloadSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
