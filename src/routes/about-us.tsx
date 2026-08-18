import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Globe,
  GraduationCap,
  Star,
  ChevronRight,
  Compass,
  ArrowRight,
  Users
} from "lucide-react";
import AboutAstroBabyDetail from "@/components/AboutAstroBabyDetail";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const storyPillars = [
  {
    icon: Heart,
    title: "Positive Pregnancy",
    text: "Empowering every expectant mother with serenity, emotional balance, and obstetric clarity for a peaceful gestational journey.",
    gradient: "from-[#EA3484]/10 to-[#F45B8A]/5",
    iconColor: "text-[#EA3484]",
    borderColor: "border-pink-200/80 hover:border-[#EA3484]/50",
  },
  {
    icon: Sparkles,
    title: "Virtuous Next Generation",
    text: "Nurturing the baby in the womb through authentic Garbhadhan Sanskar mantras, noble thoughts, and cognitive enrichment.",
    gradient: "from-[#F6C85F]/15 to-[#F6C85F]/5",
    iconColor: "text-[#D97706]",
    borderColor: "border-amber-200/80 hover:border-[#F6C85F]/50",
  },
  {
    icon: Globe,
    title: "Global Vedic Heritage",
    text: "Bringing authentic Garbhadhan Sanskar wisdom to families in over 62+ countries across languages and cultural boundaries.",
    gradient: "from-[#EA3484]/10 to-[#F45B8A]/5",
    iconColor: "text-[#F45B8A]",
    borderColor: "border-pink-200/80 hover:border-[#F45B8A]/50",
  },
  {
    icon: GraduationCap,
    title: "Scientific & Medical Rigor",
    text: "Synthesizing authentic Vedic scriptures with modern gynecological research, fetal neuroscience, and maternal nutrition.",
    gradient: "from-[#F45B8A]/10 to-[#EA3484]/5",
    iconColor: "text-[#EA3484]",
    borderColor: "border-rose-200/80 hover:border-[#EA3484]/50",
  },
];

const stats = [
  { num: "1,00,000+", label: "Mobile App Downloads", sub: "Trusted Worldwide", icon: "📱" },
  { num: "12,00,000+", label: "YouTube Community Views", sub: "Spiritual Guidance", icon: "▶️" },
  { num: "62+ Countries", label: "Global Reach", sub: "Families Enriched", icon: "🌍" },
  { num: "4.6 ★★★★★", label: "Google Play Store Rating", sub: "Verified Reviews", icon: "⭐" },
  { num: "Thousands", label: "Happy & Calm Pregnancies", sub: "Healthy Newborns", icon: "🌸" },
];

const milestones = [
  {
    year: "2018",
    title: "The Genesis & Sacred Vision",
    text: "Astro Baby was founded with a profound dream: to make the ancient, time-tested Vedic Garbhadhan Sanskar accessible, scientific, and practical for every modern couple.",
    tag: "Inception",
  },
  {
    year: "2019",
    title: "Rigorous R&D & Scientific Synthesis",
    text: "Scholars from IIT, renowned obstetricians, pediatric neurologists, and Vedic masters spent thousands of hours structuring a daily 9-month prenatal curriculum.",
    tag: "R&D Phase",
  },
  {
    year: "2020",
    title: "Global Mobile Platform Launch",
    text: "The official Astro Baby mobile application launched on Android & iOS, providing interactive shlokas, satvik diet plans, yoga videos, and personalized Isht Mantras.",
    tag: "Digital Launch",
  },
  {
    year: "2022",
    title: "100,000+ Enriched Families",
    text: "Surpassed 1,00,000+ active downloads across 62 nations, earning deep gratitude from parents who experienced calm, joyful, and healthy deliveries.",
    tag: "Global Impact",
  },
  {
    year: "Today",
    title: "A Worldwide Movement for Conscious Parenting",
    text: "Astro Baby has evolved into a global sanctum of conscious prenatal parenting, continuously advancing fetal development science and Vedic spirituality.",
    tag: "The Movement",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      {/* Header & Navbar */}
      <HeaderNavbar />

      {/* ── Page Hero / Banner: Our Story ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#FFFCFE]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-md shadow-xs mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Our Origins & Sacred Journey</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] tracking-tight leading-[1.1] max-w-4xl mx-auto"
          >
            The Story of{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#EA3484] to-[#F45B8A] bg-clip-text text-transparent">
              Astro Baby
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed"
          >
            How ancient Garbhadhan Sanskar wisdom and modern obstetric neuroscience united to guide thousands of parents toward joyful, divine childbirth.
          </motion.p>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500"
          >
            <Link to="/" className="hover:text-[#EA3484] transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-600">About Us</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-semibold">Our Story</span>
          </motion.div>
        </div>
      </section>

      {/* ── Main Detail Section (Celestial Mother, Philosophy & Intro Video) ── */}
      <AboutAstroBabyDetail />

      {/* ── Core Mission & Vision Pillars ── */}
      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#FFF6FA] border-y border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Heart className="h-3 w-3" /> Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              Our Four Sacred Pillars
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto"></div>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed mt-2">
              Every audio shloka, nutrition guide, and medical consult at Astro Baby is built on these foundational values.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {storyPillars.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-[26px] bg-white/90 p-6 sm:p-7 border ${item.borderColor} shadow-[0_10px_35px_rgba(23,37,84,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(234,52,132,0.12)] flex flex-col justify-between`}
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 space-y-4">
                    <div className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-white shadow-md border border-pink-100 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#172554] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  <div className="relative z-10 pt-4 mt-4 border-t border-pink-100/80 flex items-center text-xs font-semibold text-[#172554] group-hover:text-[#EA3484] transition-colors">
                    <span>Explore philosophy</span>
                    <ArrowRight className="h-3 w-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Impact & Numbers Section ── */}
      <section className="py-16 md:py-20 relative z-10 bg-gradient-to-b from-[#172554] via-[#1A3A6C] to-[#172554] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#EA3484]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#F45B8A]/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] tracking-tight">
              The Impact of Our Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Thousands of happy, healthy, and stress-free pregnancies nurtured across 62+ countries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-[24px] p-5 sm:p-6 border border-white/15 text-center flex flex-col items-center justify-center hover:bg-white/15 hover:border-white/30 transition-all duration-300 group shadow-lg"
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight drop-shadow">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#F6C85F] font-medium mt-1">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey & Milestones Timeline ── */}
      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-[#FFF8FC] via-[#FFF0F6] to-[#FFFDFE] border-t border-pink-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Compass className="h-3 w-3" /> Historical Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              Milestones in Our Evolution
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto"></div>
            <p className="text-sm sm:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              From a research initiative by IITians and Vedic scholars to the world's most comprehensive Garbhadhan Sanskar platform.
            </p>
          </div>

          <div className="relative">
            {/* Center Glowing Spine Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#EA3484] via-[#F45B8A] to-[#F6C85F] -translate-x-1/2 rounded-full opacity-40" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                    i % 2 === 0 ? "" : "md:rtl"
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg border-2 border-[#EA3484] z-20">
                    <div className="h-3 w-3 rounded-full bg-[#EA3484]" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`${
                      i % 2 === 0 ? "md:text-right" : "md:text-left md:order-2"
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 border border-pink-100 shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_15px_45px_rgba(234,52,132,0.12)] transition-all duration-300 group">
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        <span className="inline-block bg-gradient-to-r from-[#172554] to-[#EA3484] text-white font-semibold px-3.5 py-1 rounded-full text-xs shadow-xs">
                          {m.year}
                        </span>
                        <span className="text-[11px] font-semibold text-[#EA3484] uppercase tracking-wider bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                          {m.tag}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#172554] mb-2 group-hover:text-[#EA3484] transition-colors leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>

                  <div className={`${i % 2 === 0 ? "" : "md:order-1"} hidden md:block`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Separate Bridge Section: Direct Invitation to Meet the Team ── */}
      <section className="py-16 md:py-20 relative z-10 bg-gradient-to-b from-[#FFFDFE] to-[#FFF5FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#172554] via-[#1A3A6C] to-[#2B1B47] p-8 sm:p-12 text-white shadow-2xl border border-pink-200/20">
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[#EA3484]/30 blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F6C85F] backdrop-blur-md">
                  <Users className="h-3.5 w-3.5" /> Multidisciplinary Faculty
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Meet the Masters & Scholars Behind Astro Baby
                </h3>
                <p className="text-sm md:text-base text-slate-200 font-normal max-w-xl leading-relaxed">
                  Discover the distinguished team of doctors, IITians, Vedmurti Brahmins, yoga masters, and astrologers who crafted this curriculum.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#EA3484]/40 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Explore Team & Faculty</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── App Download CTA ── */}
      <AppDownloadSection />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
