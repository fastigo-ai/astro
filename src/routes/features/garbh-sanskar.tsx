import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sun,
  Sparkles,
  Check,
  Crown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const PROGRAM_PILLARS_META = [
  { img: "/images/features/punsavan_sanskar.jpg" },
  { img: "/images/features/garbhsamvad.jpg" },
  { img: "/images/features/vaidic_mantra_vrushti.jpg" },
  { img: "/images/features/yoga_session.jpg" },
  { img: "/images/features/doctors_session.jpg" },
];

export default function GarbhSanskarFeature() {
  const { t } = useTranslation();

  const pricingPlans = useMemo(() => {
    const plansMeta = [
      {
        id: "silver",
        isPopular: false,
        badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
        buttonClass: "bg-[#172554] hover:bg-[#1e3a8a] text-white",
        featuresCount: 7,
      },
      {
        id: "diamond",
        isPopular: true,
        badgeColor: "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-sm",
        buttonClass:
          "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-lg shadow-[#F45B8A]/30 hover:scale-102",
        featuresCount: 26,
      },
      {
        id: "gold",
        isPopular: false,
        badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
        buttonClass: "bg-[#172554] hover:bg-[#1e3a8a] text-white",
        featuresCount: 12,
      },
    ];

    return plansMeta.map((p, idx) => {
      const name = t(`garbhSanskarDetailPage.pricing.plans.${idx}.name`, "");
      const price = t(`garbhSanskarDetailPage.pricing.plans.${idx}.price`, "");
      const period = t(`garbhSanskarDetailPage.pricing.plans.${idx}.period`, "");
      const tagline = t(`garbhSanskarDetailPage.pricing.plans.${idx}.tagline`, "");
      const features: string[] = [];
      for (let f = 0; f < p.featuresCount; f++) {
        const feat = t(`garbhSanskarDetailPage.pricing.plans.${idx}.features.${f}`, "");
        if (feat) features.push(feat);
      }

      return {
        ...p,
        name,
        price,
        period,
        tagline,
        features,
      };
    });
  }, [t]);

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner Section ── */}
      <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              {t("garbhSanskarDetailPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/features" className="hover:text-[#F45B8A] transition-colors">
              {t("garbhSanskarDetailPage.hero.breadcrumbPrograms", "Sacred Programs")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("garbhSanskarDetailPage.hero.title", "Garbh Sanskar")}
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
              src="/images/garbh_sanskar_banner.jpg"
              alt="Astro Baby Garbh Sanskar"
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
                  <Sun className="h-3.5 w-3.5 text-pink-300" />
                  <span>
                    {t(
                      "garbhSanskarDetailPage.hero.badge",
                      "9-Month Sacred Prenatal Continuum"
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
                    {t("garbhSanskarDetailPage.hero.title", "Garbh Sanskar")}
                  </h1>
                  <span className="text-pink-300 font-semibold text-lg sm:text-2xl md:text-3xl block">
                    {t(
                      "garbhSanskarDetailPage.hero.tagline",
                      "Nurturing Genius & Virtue in the Womb"
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
                    "garbhSanskarDetailPage.hero.subtitle",
                    "A complete 9-month prenatal mastery blending ancient Vedic rituals, classical raga therapy, trimester-specific yoga, doctor guidance, and cognitive brain stimulation."
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
                    href="#plans-pricing"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-bold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>
                      {t("garbhSanskarDetailPage.hero.enrollBtn", "Explore Plans")}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-white/85 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    Diamond • Gold • Silver Plans
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Pricing Plans Section ── */}
      <section id="plans-pricing" className="py-16 md:py-24 bg-[#FFFDFE] border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />{" "}
              {t("garbhSanskarDetailPage.pricing.badge", "Transparent Plans")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t(
                "garbhSanskarDetailPage.pricing.title",
                "Choose Your Prenatal Plan"
              )}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              {t(
                "garbhSanskarDetailPage.pricing.subtitle",
                "Select the right care package designed for your 9-month prenatal journey."
              )}
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
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
                        <span className="text-xs text-slate-500 font-normal">/ {plan.period}</span>
                      </div>
                      <p className="text-[11px] text-[#F45B8A] font-semibold mt-1">
                        One-time payment • All Poojan Included
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="mt-6 space-y-2.5">
                      <p className="text-xs font-semibold text-[#172554] uppercase tracking-wider">
                        Included in {plan.name}:
                      </p>
                      <ul className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                        {plan.features.map((item, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-snug font-normal"
                          >
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
                      className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${plan.buttonClass}`}
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

      {/* App Download Section */}
      <AppDownloadSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
