import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Baby,
  Sparkles,
  Check,
  ArrowRight,
  Award,
  ChevronRight,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const CORE_SANSKARS_META = [
  { img: "/images/features/isht_mantra.jpg" },
  { img: "/images/features/sandhya_prarthana.jpg" },
  { img: "/images/features/sankalp_poojan.jpg" },
  { img: "/images/features/nutritionist_session.jpg" },
];

const ADDITIONAL_FEATURES_META = [
  { img: "/images/features/library.jpg" },
  { img: "/images/features/brainopedia.jpg" },
  { img: "/images/features/vaidic_mantra_vrushti.jpg" },
  { img: "/images/features/garbhsanskar_sutra.jpg" },
];

export default function BaalSanskarPage() {
  const { t } = useTranslation();

  const coreSanskars = useMemo(() => {
    return CORE_SANSKARS_META.map((meta, idx) => {
      const title = t(`baalSanskarDetailPage.sanskars.items.${idx}.title`, "");
      const subTitle = t(`baalSanskarDetailPage.sanskars.items.${idx}.subTitle`, "");
      const desc = t(`baalSanskarDetailPage.sanskars.items.${idx}.desc`, "");

      return {
        ...meta,
        title,
        subTitle,
        desc,
      };
    });
  }, [t]);

  const additionalFeatures = useMemo(() => {
    return ADDITIONAL_FEATURES_META.map((meta, idx) => {
      const text = t(`baalSanskarDetailPage.additional.items.${idx}`, "");
      return {
        ...meta,
        text,
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
              {t("baalSanskarDetailPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/features" className="hover:text-[#F45B8A] transition-colors">
              {t("baalSanskarDetailPage.hero.breadcrumbPrograms", "Sacred Programs")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("baalSanskarDetailPage.hero.title", "Baal Sanskar")}
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
              src="/images/baal_sanskar_banner.png"
              alt="Astro Baby Baal Sanskar"
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
                  <Baby className="h-3.5 w-3.5 text-pink-300" />
                  <span>
                    {t(
                      "baalSanskarDetailPage.hero.badge",
                      "Early Childhood Milestone Sanctification"
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
                    {t("baalSanskarDetailPage.hero.title", "Baal Sanskar")}
                  </h1>
                  <span className="text-pink-300 font-semibold text-lg sm:text-2xl md:text-3xl block">
                    {t(
                      "baalSanskarDetailPage.hero.tagline",
                      "Nurturing Virtues & Moral Intellect in Early Childhood"
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
                    "baalSanskarDetailPage.hero.subtitle",
                    "Nurturing positive virtues, cognitive sharpness, and emotional security through the 4 sacred early childhood Vedic sanskars."
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
                      {t("baalSanskarDetailPage.hero.enrollBtn", "Enroll for ₹6,000")}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-white/85 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    {t("baalSanskarDetailPage.hero.price", "₹6,000")}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. The 4 Core Childhood Sanskars ── */}
      <section className="py-16 md:py-24 bg-white/95 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#EA3484]" />{" "}
              {t("baalSanskarDetailPage.sanskars.badge", "Milestone Ceremonies")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A3A6C] leading-[1.2] tracking-tight mb-4">
              {t(
                "baalSanskarDetailPage.sanskars.title",
                "The 4 Pillars of Baal Sanskar"
              )}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              {t(
                "baalSanskarDetailPage.sanskars.subtitle",
                "Authentic Vedic rituals performed at key developmental stages."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreSanskars.map((s, idx) => (
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
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#EA3484] hover:text-[#d94d7a] flex items-center gap-1 font-semibold cursor-pointer"
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
              {t("baalSanskarDetailPage.additional.title", "Additional Developmental Inclusions (Included in ₹6,000):")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {additionalFeatures.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-pink-100/80 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <img
                    src={feat.img}
                    alt={feat.text}
                    className="w-12 h-12 rounded-xl object-cover shrink-0 border border-pink-50"
                  />
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
