import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sun,
  Sparkles,
  Check,
  Crown,
  ChevronRight,
  ArrowRight,
  Shield,
  Activity,
  Layers,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

interface PlanDetailData {
  id: "silver" | "diamond" | "gold";
  planCode: string;
  nameKey: string;
  price: string;
  periodKey: string;
  taglineKey: string;
  descKey: string;
  badgeKey: string;
  isPopular?: boolean;
  themeGradient: string;
  badgeBg: string;
  accentColor: string;
  btnClass: string;
  heroImg: string;
  categories: {
    categoryTitleKey: string;
    icon: any;
    items: {
      nameKey: string;
      descKey: string;
    }[];
  }[];
}

export default function GarbhSanskarPlanDetail() {
  const { planId } = useParams<{ planId: string }>();
  const { t } = useTranslation();

  // Normalize route param (e.g., "silver", "diamond", "gold", "plan-a-diamond", etc.)
  const normalizedId = useMemo(() => {
    const raw = (planId || "").toLowerCase();
    if (raw.includes("diamond") || raw === "plan-a") return "diamond";
    if (raw.includes("gold") || raw === "plan-b") return "gold";
    if (raw.includes("silver") || raw === "plan-c") return "silver";
    return null;
  }, [planId]);

  const planData = useMemo<PlanDetailData | null>(() => {
    if (!normalizedId) return null;

    if (normalizedId === "diamond") {
      return {
        id: "diamond",
        planCode: "Plan A",
        nameKey: "garbhSanskarPlanPage.diamond.name",
        price: "₹25,000",
        periodKey: "garbhSanskarPlanPage.diamond.period",
        taglineKey: "garbhSanskarPlanPage.diamond.tagline",
        descKey: "garbhSanskarPlanPage.diamond.desc",
        badgeKey: "garbhSanskarPlanPage.diamond.badge",
        isPopular: true,
        themeGradient: "from-[#F45B8A] via-[#EA3484] to-[#BE185D]",
        badgeBg: "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white",
        accentColor: "text-[#F45B8A]",
        btnClass: "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-lg shadow-[#F45B8A]/30 hover:scale-105",
        heroImg: "/images/garbh_sanskar_banner.jpg",
        categories: [
          {
            categoryTitleKey: "garbhSanskarPlanPage.diamond.cat1Title",
            icon: Sun,
            items: [
              { nameKey: "garbhSanskarPlanPage.diamond.f1Name", descKey: "garbhSanskarPlanPage.diamond.f1Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f2Name", descKey: "garbhSanskarPlanPage.diamond.f2Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f3Name", descKey: "garbhSanskarPlanPage.diamond.f3Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f4Name", descKey: "garbhSanskarPlanPage.diamond.f4Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f5Name", descKey: "garbhSanskarPlanPage.diamond.f5Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f6Name", descKey: "garbhSanskarPlanPage.diamond.f6Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f7Name", descKey: "garbhSanskarPlanPage.diamond.f7Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f8Name", descKey: "garbhSanskarPlanPage.diamond.f8Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f9Name", descKey: "garbhSanskarPlanPage.diamond.f9Desc" },
            ],
          },
          {
            categoryTitleKey: "garbhSanskarPlanPage.diamond.cat2Title",
            icon: Activity,
            items: [
              { nameKey: "garbhSanskarPlanPage.diamond.f10Name", descKey: "garbhSanskarPlanPage.diamond.f10Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f11Name", descKey: "garbhSanskarPlanPage.diamond.f11Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f12Name", descKey: "garbhSanskarPlanPage.diamond.f12Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f13Name", descKey: "garbhSanskarPlanPage.diamond.f13Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f14Name", descKey: "garbhSanskarPlanPage.diamond.f14Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f15Name", descKey: "garbhSanskarPlanPage.diamond.f15Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f16Name", descKey: "garbhSanskarPlanPage.diamond.f16Desc" },
            ],
          },
          {
            categoryTitleKey: "garbhSanskarPlanPage.diamond.cat3Title",
            icon: Sparkles,
            items: [
              { nameKey: "garbhSanskarPlanPage.diamond.f17Name", descKey: "garbhSanskarPlanPage.diamond.f17Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f18Name", descKey: "garbhSanskarPlanPage.diamond.f18Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f19Name", descKey: "garbhSanskarPlanPage.diamond.f19Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f20Name", descKey: "garbhSanskarPlanPage.diamond.f20Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f21Name", descKey: "garbhSanskarPlanPage.diamond.f21Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f22Name", descKey: "garbhSanskarPlanPage.diamond.f22Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f23Name", descKey: "garbhSanskarPlanPage.diamond.f23Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f24Name", descKey: "garbhSanskarPlanPage.diamond.f24Desc" },
            ],
          },
          {
            categoryTitleKey: "garbhSanskarPlanPage.diamond.cat4Title",
            icon: Shield,
            items: [
              { nameKey: "garbhSanskarPlanPage.diamond.f25Name", descKey: "garbhSanskarPlanPage.diamond.f25Desc" },
              { nameKey: "garbhSanskarPlanPage.diamond.f26Name", descKey: "garbhSanskarPlanPage.diamond.f26Desc" },
            ],
          },
        ],
      };
    }

    if (normalizedId === "gold") {
      return {
        id: "gold",
        planCode: "Plan B",
        nameKey: "garbhSanskarPlanPage.gold.name",
        price: "₹11,000",
        periodKey: "garbhSanskarPlanPage.gold.period",
        taglineKey: "garbhSanskarPlanPage.gold.tagline",
        descKey: "garbhSanskarPlanPage.gold.desc",
        badgeKey: "garbhSanskarPlanPage.gold.badge",
        isPopular: false,
        themeGradient: "from-amber-500 via-amber-600 to-yellow-600",
        badgeBg: "bg-amber-100 text-amber-800 border border-amber-300",
        accentColor: "text-amber-600",
        btnClass: "bg-[#172554] hover:bg-[#1e3a8a] text-white shadow-lg",
        heroImg: "/images/garbh_sanskar_banner.jpg",
        categories: [
          {
            categoryTitleKey: "garbhSanskarPlanPage.gold.cat1Title",
            icon: Sun,
            items: [
              { nameKey: "garbhSanskarPlanPage.gold.f1Name", descKey: "garbhSanskarPlanPage.gold.f1Desc" },
              { nameKey: "garbhSanskarPlanPage.gold.f2Name", descKey: "garbhSanskarPlanPage.gold.f2Desc" },
              { nameKey: "garbhSanskarPlanPage.gold.f3Name", descKey: "garbhSanskarPlanPage.gold.f3Desc" },
              { nameKey: "garbhSanskarPlanPage.gold.f4Name", descKey: "garbhSanskarPlanPage.gold.f4Desc" },
              { nameKey: "garbhSanskarPlanPage.gold.f5Name", descKey: "garbhSanskarPlanPage.gold.f5Desc" },
            ],
          },
          {
            categoryTitleKey: "garbhSanskarPlanPage.gold.cat2Title",
            icon: Activity,
            items: [
              { nameKey: "garbhSanskarPlanPage.gold.f6Name", descKey: "garbhSanskarPlanPage.gold.f6Desc" },
              { nameKey: "garbhSanskarPlanPage.gold.f7Name", descKey: "garbhSanskarPlanPage.gold.f7Desc" },
              { nameKey: "garbhSanskarPlanPage.gold.f8Name", descKey: "garbhSanskarPlanPage.gold.f8Desc" },
            ],
          },
          {
            categoryTitleKey: "garbhSanskarPlanPage.gold.cat3Title",
            icon: Shield,
            items: [
              { nameKey: "garbhSanskarPlanPage.gold.f9Name", descKey: "garbhSanskarPlanPage.gold.f9Desc" },
              { nameKey: "garbhSanskarPlanPage.gold.f10Name", descKey: "garbhSanskarPlanPage.gold.f10Desc" },
            ],
          },
        ],
      };
    }

    // Silver plan
    return {
      id: "silver",
      planCode: "Plan C",
      nameKey: "garbhSanskarPlanPage.silver.name",
      price: "₹5,000",
      periodKey: "garbhSanskarPlanPage.silver.period",
      taglineKey: "garbhSanskarPlanPage.silver.tagline",
      descKey: "garbhSanskarPlanPage.silver.desc",
      badgeKey: "garbhSanskarPlanPage.silver.badge",
      isPopular: false,
      themeGradient: "from-slate-600 via-slate-700 to-slate-800",
      badgeBg: "bg-slate-100 text-slate-700 border border-slate-300",
      accentColor: "text-slate-700",
      btnClass: "bg-[#172554] hover:bg-[#1e3a8a] text-white shadow-lg",
      heroImg: "/images/garbh_sanskar_banner.jpg",
      categories: [
        {
          categoryTitleKey: "garbhSanskarPlanPage.silver.cat1Title",
          icon: Sun,
          items: [
            { nameKey: "garbhSanskarPlanPage.silver.f1Name", descKey: "garbhSanskarPlanPage.silver.f1Desc" },
            { nameKey: "garbhSanskarPlanPage.silver.f2Name", descKey: "garbhSanskarPlanPage.silver.f2Desc" },
            { nameKey: "garbhSanskarPlanPage.silver.f3Name", descKey: "garbhSanskarPlanPage.silver.f3Desc" },
            { nameKey: "garbhSanskarPlanPage.silver.f4Name", descKey: "garbhSanskarPlanPage.silver.f4Desc" },
            { nameKey: "garbhSanskarPlanPage.silver.f5Name", descKey: "garbhSanskarPlanPage.silver.f5Desc" },
          ],
        },
      ],
    };
  }, [normalizedId]);

  if (!planData) {
    return <Navigate to="/features/garbh-sanskar" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner ── */}
      <section className="relative pt-24 md:pt-32 pb-12 overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE]">
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
            <Link to="/features/garbh-sanskar" className="hover:text-[#F45B8A] transition-colors">
              {t("garbhSanskarDetailPage.hero.title", "Garbh Sanskar")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t(planData.nameKey, `${planData.planCode} Plan`)}
            </span>
          </nav>

          {/* Banner Card Container */}
          <motion.div
            className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center shadow-xl border border-pink-100"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={planData.heroImg}
              alt={t(planData.nameKey, "Garbh Sanskar Plan")}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/70 to-transparent sm:bg-gradient-to-l sm:from-slate-950/95 sm:via-slate-950/85 sm:to-transparent" />

            <div className="relative z-10 w-full flex justify-end p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
                {/* Plan Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-semibold shadow-sm">
                  {planData.isPopular ? (
                    <Crown className="h-3.5 w-3.5 text-yellow-300" />
                  ) : (
                    <Sparkles className="h-3.5 w-3.5 text-pink-300" />
                  )}
                  <span>{t(planData.badgeKey, "Sacred Prenatal Tier")}</span>
                </div>

                {/* Plan Title & Subtitle */}
                <div className="space-y-1.5">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                    {t(planData.nameKey, "Garbh Sanskar")}
                  </h1>
                  <span className="text-pink-300 font-semibold text-lg sm:text-2xl block">
                    {t(planData.taglineKey, "Sacred 9-Month Continuum")}
                  </span>
                </div>

                {/* Description */}
                <p className="text-pink-50/90 text-sm sm:text-base leading-relaxed font-normal drop-shadow-sm">
                  {t(planData.descKey, "Complete Vedic prenatal nurturing and comprehensive developmental mentorship.")}
                </p>

                {/* Pricing Display */}
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <span className="text-[11px] text-pink-200 font-semibold uppercase block">
                      {t(planData.periodKey, "Complete 9-Month Care")}
                    </span>
                    <span className="text-3xl font-black text-white tracking-tight">
                      {planData.price}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-pink-200 bg-white/15 px-3.5 py-1.5 rounded-full border border-white/25">
                    100% Poojan & Inclusions Included
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-bold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>{t("garbhSanskarPlanPage.hero.enrollBtn", "Enroll via Astro Baby App")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#complete-package"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/25 transition-all cursor-pointer"
                  >
                    <span>{t("garbhSanskarPlanPage.hero.viewDetails", "View Complete Package ↓")}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Complete Package Section (Categorized Inclusions Grid) ── */}
      <section id="complete-package" className="py-16 md:py-24 bg-white/95 relative z-10 border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Layers className="h-3.5 w-3.5 text-[#F45B8A]" />{" "}
              {t("garbhSanskarPlanPage.packageSection.badge", "Complete Package Details")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t("garbhSanskarPlanPage.packageSection.title", "Everything Included in Your Plan")}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              {t(
                "garbhSanskarPlanPage.packageSection.subtitle",
                "Explore all dedicated Vedic rituals, daily wellness practices, expert sessions, and tracking tools."
              )}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-12">
            {planData.categories.map((cat, cIdx) => {
              const CatIcon = cat.icon;
              return (
                <div
                  key={cIdx}
                  className="bg-gradient-to-br from-pink-50/30 via-white to-rose-50/20 rounded-[32px] p-6 sm:p-9 border border-pink-100/90 shadow-[0_10px_35px_rgba(23,37,84,0.04)] space-y-6"
                >
                  <div className="flex items-center gap-3.5 pb-4 border-b border-pink-100">
                    <div className="w-11 h-11 rounded-2xl bg-pink-100/80 text-[#F45B8A] flex items-center justify-center shadow-xs">
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#172554]">
                        {t(cat.categoryTitleKey, `Category ${cIdx + 1}`)}
                      </h3>
                      <span className="text-xs font-semibold text-[#F45B8A] uppercase tracking-wider">
                        {cat.items.length} Included Features
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {cat.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="bg-white p-4.5 rounded-2xl border border-pink-100/80 shadow-2xs hover:shadow-md hover:border-pink-200 transition-all duration-300 flex items-start gap-3.5 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-pink-50 text-[#F45B8A] flex items-center justify-center shrink-0 mt-0.5 border border-pink-100 group-hover:bg-[#F45B8A] group-hover:text-white transition-colors">
                          <Check className="w-4 h-4 font-bold" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                            {t(item.nameKey, `Feature ${iIdx + 1}`)}
                          </h4>
                          <p className="text-xs text-slate-500 font-normal leading-relaxed">
                            {t(item.descKey, "Structured prenatal guidance and support.")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Trimester Journey Overview ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FFFDFE] to-[#FFF5F9] border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F45B8A]">
              {t("garbhSanskarPlanPage.timeline.badge", "9-Month Structured Continuum")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t("garbhSanskarPlanPage.timeline.title", "How Your 9-Month Journey Unfolds")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-[28px] border border-pink-100 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-[#F45B8A] bg-pink-50 px-3 py-1 rounded-full uppercase">
                Trimester 1 (Months 1-3)
              </span>
              <h4 className="text-lg font-bold text-[#172554]">
                {t("garbhSanskarPlanPage.timeline.t1Title", "Sacred Initiation & Conception Protection")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {t(
                  "garbhSanskarPlanPage.timeline.t1Desc",
                  "Live Sankalp Poojan, Punsavan Sanskar ceremony, personalized Ishta Mantra initiation, and morning sickness Ayurvedic remedies."
                )}
              </p>
            </div>

            <div className="bg-white p-7 rounded-[28px] border border-pink-100 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-[#F45B8A] bg-pink-50 px-3 py-1 rounded-full uppercase">
                Trimester 2 (Months 4-6)
              </span>
              <h4 className="text-lg font-bold text-[#172554]">
                {t("garbhSanskarPlanPage.timeline.t2Title", "Neuro-Stimulation & Raga Therapy")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {t(
                  "garbhSanskarPlanPage.timeline.t2Desc",
                  "Classical Garbh Sanskar music, daily Garbh Samvad bonding exercises, fetal brain stimulation puzzles, and trimester yoga."
                )}
              </p>
            </div>

            <div className="bg-white p-7 rounded-[28px] border border-pink-100 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-[#F45B8A] bg-pink-50 px-3 py-1 rounded-full uppercase">
                Trimester 3 (Months 7-9)
              </span>
              <h4 className="text-lg font-bold text-[#172554]">
                {t("garbhSanskarPlanPage.timeline.t3Title", "Simantonnayana & Labor Preparation")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {t(
                  "garbhSanskarPlanPage.timeline.t3Desc",
                  "8th-month Simantonnayana ritual blessing, Yoga Nidra deep relaxation, pelvic floor breathing, and doctor-guided birth readiness."
                )}
              </p>
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
