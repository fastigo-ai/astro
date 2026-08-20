import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Heart,
  Baby,
  Smile,
  ShieldCheck,
  Compass,
  ArrowRight,
  Sun,
  Search,
  ChevronRight,
  Layers,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";
import LazyImage from "@/components/common/LazyImage";

// ── 7 Core Developmental Course Visual Meta ──
export const CORE_COURSES_META = [
  {
    id: "garbhadhan",
    img: "/images/garbh_dan_banner.png",
    to: "/features/garbh-dhan",
    icon: Heart,
    iconBg: "bg-pink-100/80 text-[#F45B8A]",
    badgeColor: "bg-pink-50 text-[#F45B8A] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
  },
  {
    id: "beej-sanskar",
    img: "/images/beej_sanskar_banner.jpg",
    to: "/features/beej-sanskar",
    icon: Sparkles,
    iconBg: "bg-amber-100/80 text-amber-600",
    badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
  },
  {
    id: "garbh-sanskar",
    img: "/images/garbh_sanskar_banner.jpg",
    isPopular: true,
    to: "/features/garbh-sanskar",
    icon: Sun,
    iconBg: "bg-purple-100/80 text-purple-600",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
  },
  {
    id: "baal-sanskar",
    img: "/images/baal_sanskar_banner.png",
    to: "/features/baal-sanskar",
    icon: Baby,
    iconBg: "bg-pink-100/80 text-[#EA3484]",
    badgeColor: "bg-pink-50 text-[#EA3484] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
  },
  {
    id: "infant-care",
    img: "/images/nurturing_life_banner.png",
    to: "/features/infant-care",
    icon: ShieldCheck,
    iconBg: "bg-pink-100/80 text-[#F45B8A]",
    badgeColor: "bg-pink-50 text-[#F45B8A] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
  },
  {
    id: "parenting",
    img: "/images/parenting_banner.png",
    to: "/features/parenting",
    icon: Smile,
    iconBg: "bg-rose-100/80 text-[#EA3484]",
    badgeColor: "bg-rose-50 text-[#EA3484] border-rose-200",
    gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
  },
  {
    id: "bhavishya-fal",
    img: "/images/baal_bhavish_banner.jpg",
    to: "/features/bhavishya-fal",
    icon: Compass,
    iconBg: "bg-pink-100/80 text-[#EA3484]",
    badgeColor: "bg-pink-50 text-[#EA3484] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
  },
];

const FEATURE_IMAGES = [
  "/images/garbh_dan_banner.png",
  "/images/features/sankalp_poojan.jpg",
  "/images/features/punsavan_sanskar.jpg",
  "/images/features/simantonnayana_sanskar.jpg",
  "/images/features/garbhsanskar_sutra.jpg",
  "/images/features/vaidic_mantra_vrushti.jpg",
  "/images/features/garbhsanskar_music.jpg",
  "/images/features/jeevan_sutra.jpg",
  "/images/features/medi_mitra_sessions.jpg",
  "/images/features/isht_mantra.jpg",
  "/images/features/garbhsamvad.jpg",
  "/images/features/yognidra.jpg",
  "/images/features/parv_based_sessions.jpg",
  "/images/features/santanotpatti_havan.jpg",
  "/images/features/yoga_session.jpg",
  "/images/features/nutritionist_session.jpg",
];

const CATEGORY_KEYS = [
  { id: "all", key: "all" },
  { id: "pillars", key: "pillars" },
  { id: "sanskars", key: "sanskars" },
  { id: "mantras", key: "mantras" },
  { id: "mentoring", key: "mentoring" },
  { id: "mindfulness", key: "mindfulness" },
];

export default function FeaturesPage() {
  const { t } = useTranslation();
  const [selectedCatId, setSelectedCatId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();

  // Dynamically constructed feature list with active language
  const featuresList = useMemo(() => {
    return FEATURE_IMAGES.map((img, idx) => {
      const title = t(`featuresPage.featuresList.${idx}.title`, "");
      const tagline = t(`featuresPage.featuresList.${idx}.tagline`, "");
      const body0 = t(`featuresPage.featuresList.${idx}.body.0`, "");
      const body1 = t(`featuresPage.featuresList.${idx}.body.1`, "");
      const body = body1 ? [body0, body1] : [body0];

      return {
        idx,
        img,
        title,
        tagline,
        body,
      };
    });
  }, [t]);

  const filteredFeatures = useMemo(() => {
    return featuresList.filter((f) => {
      const matchesSearch =
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.body.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCatId === "all" || selectedCatId === "pillars") return true;
      if (selectedCatId === "sanskars") {
        return [0, 1, 2, 3, 4, 12, 13].includes(f.idx);
      }
      if (selectedCatId === "mantras") {
        return [5, 6, 9, 10].includes(f.idx);
      }
      if (selectedCatId === "mentoring") {
        return [7, 8].includes(f.idx);
      }
      if (selectedCatId === "mindfulness") {
        return [11, 14, 15].includes(f.idx);
      }

      return true;
    });
  }, [featuresList, searchQuery, selectedCatId]);

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Top Hero / Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#F45B8A] border border-pink-200/80 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              {t("featuresPage.hero.badge", "7 Core Pillars & Comprehensive Features")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] leading-[1.1] tracking-tight">
            {t("featuresPage.hero.title", "Vedic Sanskar Courses &")}{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              {t("featuresPage.hero.titleHighlight", "Interactive Features")}
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            {t(
              "featuresPage.hero.subtitle",
              "A complete developmental continuum from pre-conception planning and prenatal neuro-development to early childhood and mindful parenting."
            )}
          </p>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              {t("featuresPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-semibold">
              {t("featuresPage.hero.breadcrumbFeatures", "Courses & Features")}
            </span>
          </div>

          {/* Search bar */}
          <div className="pt-3 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(
                  "featuresPage.hero.searchPlaceholder",
                  "Search features (e.g. Garbhadhan, Mantras, Beej Sanskar, Yoga, Doctors)..."
                )}
                className="w-full px-5 py-4 pl-12 pr-10 rounded-full bg-white/95 backdrop-blur-xl text-[#172554] text-sm md:text-base placeholder:text-slate-400 shadow-[0_10px_30px_rgba(23,37,84,0.06)] border border-pink-200 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] transition-all font-normal"
              />
              <Search className="w-5 h-5 text-[#F45B8A] absolute left-4.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4.5 text-slate-400 hover:text-[#F45B8A] p-1 font-bold transition-colors text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 Core Developmental Courses Grid ── */}
      <section className="py-16 md:py-24 bg-white/90 border-b border-pink-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Layers className="h-3.5 w-3.5" />{" "}
              {t("featuresPage.coursesSection.badge", "7 Dedicated Course Tracks")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t("featuresPage.coursesSection.heading", "Choose Your Stage of Parenthood")}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal leading-relaxed mt-2">
              {t(
                "featuresPage.coursesSection.subtitle",
                "Tailored guidance for every sacred step — from conscious conception to flourishing childhood."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CORE_COURSES_META.map((meta, idx) => {
              const Icon = meta.icon;
              const title = t(`featuresPage.courses.${idx}.title`, "");
              const subTitle = t(`featuresPage.courses.${idx}.subTitle`, "");
              const price = t(`featuresPage.courses.${idx}.price`, "");
              const desc = t(`featuresPage.courses.${idx}.desc`, "");
              const benefits: string[] = [
                t(`featuresPage.courses.${idx}.benefits.0`, ""),
                t(`featuresPage.courses.${idx}.benefits.1`, ""),
                t(`featuresPage.courses.${idx}.benefits.2`, ""),
              ].filter(Boolean);

              return (
                <div
                  key={meta.id}
                  className={`bg-gradient-to-br ${meta.gradient} bg-white/95 rounded-[30px] p-7 border border-pink-100 shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
                >
                  <div>
                    {/* Thematic Image Banner */}
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 group-hover:shadow-md transition-all border border-white/80 bg-slate-100">
                      <img
                        src={meta.img}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/images/celestial_mother.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                      {/* Floating Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center backdrop-blur-md shadow-xs ${meta.iconBg}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${meta.badgeColor}`}
                        >
                          {price}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <span className="text-xs font-semibold text-pink-100 uppercase tracking-wide drop-shadow line-clamp-1">
                          {subTitle}
                        </span>
                      </div>
                    </div>

                    {/* Titles */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs font-semibold text-[#F45B8A] uppercase tracking-wide mt-1">
                      {subTitle}
                    </p>

                    <p className="mt-3 text-sm text-[#475569] leading-relaxed font-normal">
                      {desc}
                    </p>

                    {/* Benefit bullets */}
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {benefits.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2 text-xs text-slate-600 font-normal"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F45B8A]" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={meta.to}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#172554] group-hover:bg-gradient-to-r group-hover:from-[#F45B8A] group-hover:to-[#E91E63] text-white text-xs font-semibold transition-all shadow-xs group-hover:shadow-md cursor-pointer"
                    >
                      <span>{t("featuresPage.coursesSection.viewProgram", "View Program")}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <span className="text-[11px] font-medium text-slate-400">
                      {t("featuresPage.coursesSection.availableInApp", "Available in App")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs ── */}
      <section className="bg-white/90 backdrop-blur-md border-y border-pink-100 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {CATEGORY_KEYS.map((cat) => {
              const active = selectedCatId === cat.id;
              const label = t(`featuresPage.categories.${cat.key}`, cat.key);
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-md shadow-[#F45B8A]/30 scale-105"
                      : "bg-white text-[#172554] border border-pink-100 hover:bg-pink-50/70 shadow-xs"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comprehensive Features Catalog ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] min-h-[600px] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554] leading-[1.2] tracking-tight">
              {selectedCatId === "all"
                ? t("featuresPage.catalog.allTitle", "All Interactive Features")
                : t(`featuresPage.categories.${selectedCatId}`, "Features")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto mt-3 mb-2"></div>
            <p className="text-xs md:text-sm text-slate-500 font-normal">
              {t("featuresPage.catalog.showingCount", {
                count: filteredFeatures.length,
                defaultValue: `Showing ${filteredFeatures.length} specialized tools and rituals`,
              })}
            </p>
          </div>

          <div className="space-y-12">
            {filteredFeatures.map((f, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={f.title + f.idx}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/95 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 md:p-10 border border-pink-100 shadow-[0_15px_45px_rgba(23,37,84,0.06)] grid lg:grid-cols-12 gap-8 items-center group hover:shadow-[0_20px_60px_rgba(244,91,138,0.12)] transition-shadow duration-300"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 overflow-hidden rounded-[24px] bg-slate-900 border-2 border-white shadow-md ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <LazyImage
                      src={f.img}
                      alt={f.title}
                      fallbackSrc="/images/garbh_dan_banner.png"
                      containerClassName="w-full h-[260px] sm:h-[300px]"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <span className="inline-block px-3.5 py-1 rounded-full bg-pink-50 text-[#F45B8A] border border-pink-200/80 text-xs font-semibold uppercase tracking-wider">
                      {t("featuresPage.catalog.featureBadge", {
                        num: f.idx + 1,
                        defaultValue: `Interactive Feature 0${f.idx + 1}`,
                      })}
                    </span>

                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {f.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#F45B8A]">{f.tagline}</p>

                    <div className="space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                      {f.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="pt-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#172554] hover:bg-[#1e3a8a] text-white text-xs font-semibold transition-all shadow-xs"
                      >
                        <span>
                          {t(
                            "featuresPage.catalog.accessInApp",
                            "Access in Astro Baby App"
                          )}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
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
