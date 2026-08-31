import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  ChevronRight,
  Compass,
} from "lucide-react";
import AboutAstroBabyDetail from "@/components/AboutAstroBabyDetail";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] tracking-tight leading-[1.3] md:leading-[1.2] max-w-4xl mx-auto py-2"
          >
            {t("aboutPage.hero.title", "The Story of")}{" "}
            <span className="inline-block py-1 bg-gradient-to-r from-[#172554] via-[#EA3484] to-[#F45B8A] bg-clip-text text-transparent">
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
