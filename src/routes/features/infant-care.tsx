import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  ChevronRight,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const INFANT_CARE_META = [
  { icon: UserCheck, img: "/images/features/mentoring.jpg" },
  { icon: Utensils, img: "/images/features/nutritionist_session.jpg" },
  { icon: Activity, img: "/images/features/yoga_session.jpg" },
  { icon: Heart, img: "/images/features/medi_mitra_sessions.jpg" },
  { icon: Compass, img: "/images/features/monthly_calendar.png" },
];

export default function InfantCarePage() {
  const { t } = useTranslation();

  const services = useMemo(() => {
    return INFANT_CARE_META.map((meta, idx) => {
      const title = t(`infantCareDetailPage.services.services.${idx}.title`, "");
      const subTitle = t(`infantCareDetailPage.services.services.${idx}.subTitle`, "");
      const desc = t(`infantCareDetailPage.services.services.${idx}.desc`, "");

      return {
        ...meta,
        title,
        subTitle,
        desc,
      };
    });
  }, [t]);

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-sans selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner Section ── */}
      <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              {t("infantCareDetailPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/features" className="hover:text-[#F45B8A] transition-colors">
              {t("infantCareDetailPage.hero.breadcrumbPrograms", "Sacred Programs")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("infantCareDetailPage.hero.title", "Infant Care")}
            </span>
          </nav>

          {/* Hero Banner Card Container */}
          <motion.div
            className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] flex items-center shadow-xl border border-pink-100"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Background Banner Image */}
            <img
              src="/images/nurturing_life_banner.png"
              alt="Astro Baby Infant Care"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Gradient Overlays for High Text Legibility & Left Artwork Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent sm:bg-gradient-to-l sm:from-slate-950/95 sm:via-slate-950/80 sm:to-transparent" />
            <div className="absolute inset-0 bg-slate-950/20 sm:bg-transparent" />

            {/* Content Container (Aligned to Right Side) */}
            <div className="relative z-10 w-full flex justify-end p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-semibold shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-pink-300" />
                  <span>
                    {t(
                      "infantCareDetailPage.hero.badge",
                      "Postnatal Nurturing & Lactation Support"
                    )}
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-1.5"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                    {t("infantCareDetailPage.hero.title", "Infant Care")}
                  </h1>
                  <span className="text-pink-300 font-semibold text-lg sm:text-2xl md:text-3xl block">
                    {t(
                      "infantCareDetailPage.hero.tagline",
                      "Holistic Care for Mother and Newborn"
                    )}
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal drop-shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t(
                    "infantCareDetailPage.hero.subtitle",
                    "Comprehensive pediatrician-backed wellness, personal lactation coach, custom diet plans, and daily live classes for your baby's crucial first months."
                  )}
                </motion.p>

                {/* Action Buttons & Highlights */}
                <motion.div
                  className="flex flex-wrap items-center gap-3.5 pt-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-bold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>
                      {t("infantCareDetailPage.hero.enrollBtn", "Enroll for ₹5,000")}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-white/85 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    {t("infantCareDetailPage.hero.price", "₹5,000")}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. 5 Core Pillars Grid ── */}
      <section className="py-16 md:py-24 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#F45B8A]" />{" "}
              {t("infantCareDetailPage.services.badge", "5 Care Pillars")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t(
                "infantCareDetailPage.services.title",
                "Dedicated Newborn & Postnatal Support"
              )}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal leading-relaxed mt-2">
              {t(
                "infantCareDetailPage.services.subtitle",
                "Comprehensive care designed to support your postpartum recovery and newborn vitality."
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-pink-50/20 via-white to-rose-50/20 rounded-[28px] p-6 sm:p-7 border border-pink-100/90 shadow-[0_10px_35px_rgba(23,37,84,0.04)] hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Thematic Image Header */}
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 border border-white shadow-sm">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#F45B8A] flex items-center justify-center shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 text-[#F45B8A] border border-pink-100">
                          Pillar 0{idx + 1}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3">
                        <span className="text-xs font-semibold text-pink-200 uppercase tracking-wide drop-shadow">
                          {item.subTitle}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#F45B8A] uppercase tracking-wider mt-0.5">
                      {item.subTitle}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#475569] font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#172554]">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#F45B8A]" />
                      <span>Included in Program</span>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F45B8A] hover:text-[#d94d7a] flex items-center gap-1 cursor-pointer"
                    >
                      Inquire <ArrowRight className="w-3 h-3" />
                    </a>
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
      <Footer />
    </div>
  );
}
