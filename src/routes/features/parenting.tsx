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

const PARENTING_SECTIONS = [
  {
    icon: UserCheck,
    title: "Personal Parenting Coach",
    tagline: "1-on-1 Certified Child Guidance",
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
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-emerald-700 border border-emerald-200/80 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Smile className="h-3.5 w-3.5" />
            <span>Mindful Parenting & Child Growth</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#172554] leading-[1.15] font-['DM_Serif_Display',Georgia,serif] tracking-tight">
            Parenting —{" "}
            <span className="bg-gradient-to-r from-[#172554] via-emerald-600 to-[#F45B8A] bg-clip-text text-transparent">
              Mindful Guidance & Child Development
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-['Manrope',sans-serif]">
            Empowering parents with compassionate psychological tools, child nutrition plans, emotional wellbeing, and expert pediatric mentorship.
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
            <span className="text-[#172554] font-bold">Parenting</span>
          </div>
        </div>
      </section>

      {/* ── 5 Core Sections ── */}
      <section className="py-16 md:py-24 bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> 5 Dedicated Parenting Pillars
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554]">
              Holistic Support for Modern Parents
            </h2>
            <p className="text-sm md:text-base text-[#475569] font-['Manrope',sans-serif]">
              Explore the key pillars designed to bring joy, calm, and clarity to your parenting journey.
            </p>
          </div>

          <div className="space-y-8">
            {PARENTING_SECTIONS.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[32px] p-7 sm:p-9 border border-emerald-100/90 shadow-[0_15px_45px_rgba(23,37,84,0.05)] hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 flex flex-col items-start gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#172554] mt-0.5">
                        {sec.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#F45B8A]">{sec.tagline}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-5 lg:pt-0 lg:pl-8">
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-['Manrope',sans-serif]">
                      {sec.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                      {sec.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
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
