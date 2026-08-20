import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Heart,
  Globe,
  GraduationCap,
  Star,
  ChevronRight,
  Compass,
  ArrowRight,
  Smartphone,
  PlayCircle,
} from "lucide-react";
import AboutAstroBabyDetail from "@/components/AboutAstroBabyDetail";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const pillarIcons = [
  {
    icon: Heart,
    gradient: "from-[#EA3484]/10 to-[#F45B8A]/5",
    iconColor: "text-[#EA3484]",
    borderColor: "border-pink-200/80 hover:border-[#EA3484]/50",
  },
  {
    icon: Sparkles,
    gradient: "from-[#F6C85F]/15 to-[#F6C85F]/5",
    iconColor: "text-[#D97706]",
    borderColor: "border-amber-200/80 hover:border-[#F6C85F]/50",
  },
  {
    icon: Globe,
    gradient: "from-[#EA3484]/10 to-[#F45B8A]/5",
    iconColor: "text-[#F45B8A]",
    borderColor: "border-pink-200/80 hover:border-[#F45B8A]/50",
  },
  {
    icon: GraduationCap,
    gradient: "from-[#F45B8A]/10 to-[#EA3484]/5",
    iconColor: "text-[#EA3484]",
    borderColor: "border-rose-200/80 hover:border-[#EA3484]/50",
  },
];

const statIcons = [
  {
    icon: Smartphone,
    iconBg: "bg-pink-50 text-[#EA3484] border-pink-100",
    badgeBg: "bg-pink-50/90 text-[#EA3484] border border-pink-100/80",
  },
  {
    icon: PlayCircle,
    iconBg: "bg-rose-50 text-[#F45B8A] border-rose-100",
    badgeBg: "bg-rose-50/90 text-[#F45B8A] border border-rose-100/80",
  },
  {
    icon: Globe,
    iconBg: "bg-pink-50 text-[#EA3484] border-pink-100",
    badgeBg: "bg-pink-50/90 text-[#EA3484] border border-pink-100/80",
  },
  {
    icon: Star,
    iconBg: "bg-amber-50 text-[#D97706] border-amber-100",
    badgeBg: "bg-amber-50/90 text-[#D97706] border border-amber-100/80",
  },
  {
    icon: Heart,
    iconBg: "bg-rose-50 text-[#EA3484] border-rose-100",
    badgeBg: "bg-rose-50/90 text-[#EA3484] border border-rose-100/80",
  },
];

export default function AboutPage() {
  const { t } = useTranslation();

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
            <span>{t("aboutPage.hero.badge", "Our Origins & Sacred Journey")}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] tracking-tight leading-[1.1] max-w-4xl mx-auto"
          >
            {t("aboutPage.hero.title", "The Story of")}{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#EA3484] to-[#F45B8A] bg-clip-text text-transparent">
              {t("aboutPage.hero.brand", "Astro Baby")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed"
          >
            {t(
              "aboutPage.hero.subtitle",
              "How ancient Garbhadhan Sanskar wisdom and modern obstetric neuroscience united to guide thousands of parents toward joyful, divine childbirth."
            )}
          </motion.p>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500"
          >
            <Link to="/" className="hover:text-[#EA3484] transition-colors flex items-center gap-1">
              {t("aboutPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-600">
              {t("aboutPage.hero.breadcrumbAbout", "About Us")}
            </span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-semibold">
              {t("aboutPage.hero.breadcrumbStory", "Our Story")}
            </span>
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
              <Heart className="h-3 w-3" /> {t("aboutPage.pillars.badge", "Guiding Principles")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t("aboutPage.pillars.heading", "Our Four Sacred Pillars")}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto"></div>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed mt-2">
              {t(
                "aboutPage.pillars.subtitle",
                "Every audio shloka, nutrition guide, and medical consult at Astro Baby is built on these foundational values."
              )}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillarIcons.map((style, index) => {
              const IconComp = style.icon;
              const title = t(`aboutPage.pillars.items.${index}.title`, "");
              const text = t(`aboutPage.pillars.items.${index}.text`, "");
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-[26px] bg-white/90 p-6 sm:p-7 border ${style.borderColor} shadow-[0_10px_35px_rgba(23,37,84,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(234,52,132,0.12)] flex flex-col justify-between`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 space-y-4">
                    <div
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-white shadow-md border border-pink-100 ${style.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#172554] leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                      {text}
                    </p>
                  </div>
                  <div className="relative z-10 pt-4 mt-4 border-t border-pink-100/80 flex items-center text-xs font-semibold text-[#172554] group-hover:text-[#EA3484] transition-colors">
                    <span>{t("aboutPage.pillars.explore", "Explore philosophy")}</span>
                    <ArrowRight className="h-3 w-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Impact & Numbers Section: Light Luxury AstroBaby Theme ── */}
      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-[#FFF5F9] via-[#FFFDFE] to-[#FFF6FA] border-y border-pink-100/70 overflow-hidden">
        {/* Ambient Theme Glow Spheres */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-2xs">
              <Sparkles className="h-3 w-3" /> {t("aboutPage.stats.badge", "Global Reach & Trust")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t("aboutPage.stats.heading", "The Impact of Our Journey")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto my-2"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal leading-relaxed">
              {t(
                "aboutPage.stats.subtitle",
                "Thousands of happy, healthy, and stress-free pregnancies nurtured across 62+ countries."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {statIcons.map((style, i) => {
              const IconComp = style.icon;
              const num = t(`aboutPage.stats.items.${i}.num`, "");
              const label = t(`aboutPage.stats.items.${i}.label`, "");
              const sub = t(`aboutPage.stats.items.${i}.sub`, "");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative bg-white/95 backdrop-blur-xl rounded-[24px] p-6 border border-pink-100/80 text-center flex flex-col items-center justify-between hover:border-pink-200 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(234,52,132,0.12)] transition-all duration-300 shadow-[0_10px_30px_rgba(23,37,84,0.04)]"
                >
                  {/* Subtle hover gradient */}
                  <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-b from-pink-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Icon Badge */}
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center border shadow-2xs mb-4 group-hover:scale-110 transition-transform duration-300 ${style.iconBg}`}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>

                    {/* Stat Number */}
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#172554] mb-1.5 tracking-tight group-hover:text-[#EA3484] transition-colors">
                      {num}
                    </div>

                    {/* Stat Label */}
                    <div className="text-xs sm:text-[13px] font-semibold text-[#475569] leading-snug">
                      {label}
                    </div>
                  </div>

                  {/* Subtitle Badge */}
                  <div className="relative z-10 mt-4 pt-3 border-t border-pink-100/60 w-full flex justify-center">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${style.badgeBg}`}
                    >
                      {sub}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Journey & Milestones Timeline ── */}
      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-[#FFF8FC] via-[#FFF0F6] to-[#FFFDFE] border-t border-pink-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Compass className="h-3 w-3" /> {t("aboutPage.timeline.badge", "Historical Timeline")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t("aboutPage.timeline.heading", "Milestones in Our Evolution")}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto"></div>
            <p className="text-sm sm:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              {t(
                "aboutPage.timeline.subtitle",
                "From a research initiative by IITians and Vedic scholars to the world's most comprehensive Garbhadhan Sanskar platform."
              )}
            </p>
          </div>

          <div className="relative">
            {/* Center Glowing Spine Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#EA3484] via-[#F45B8A] to-[#F6C85F] -translate-x-1/2 rounded-full opacity-40" />

            <div className="space-y-8 md:space-y-12">
              {[0, 1, 2, 3, 4].map((i) => {
                const year = t(`aboutPage.timeline.milestones.${i}.year`, "");
                const tag = t(`aboutPage.timeline.milestones.${i}.tag`, "");
                const title = t(`aboutPage.timeline.milestones.${i}.title`, "");
                const text = t(`aboutPage.timeline.milestones.${i}.text`, "");
                return (
                  <motion.div
                    key={i}
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
                    <div className={`${i % 2 === 0 ? "md:text-right" : "md:text-left md:order-2"}`}>
                      <div className="bg-white/95 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 border border-pink-100 shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_15px_45px_rgba(234,52,132,0.12)] transition-all duration-300 group">
                        <div
                          className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                        >
                          <span className="inline-block bg-gradient-to-r from-[#172554] to-[#EA3484] text-white font-semibold px-3.5 py-1 rounded-full text-xs shadow-xs">
                            {year}
                          </span>
                          <span className="text-[11px] font-semibold text-[#EA3484] uppercase tracking-wider bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                            {tag}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#172554] mb-2 group-hover:text-[#EA3484] transition-colors leading-snug">
                          {title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </div>

                    <div className={`${i % 2 === 0 ? "" : "md:order-1"} hidden md:block`} />
                  </motion.div>
                );
              })}
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
