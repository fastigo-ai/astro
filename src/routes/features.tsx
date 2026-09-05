import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Search,
  ChevronRight,
  ArrowRight,
  Sparkle,
  Download,
  BookOpen,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";
import LazyImage from "@/components/common/LazyImage";

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
  { id: "sanskars", key: "sanskars" },
  { id: "mantras", key: "mantras" },
  { id: "mentoring", key: "mentoring" },
  { id: "mindfulness", key: "mindfulness" },
  { id: "pillars", key: "pillars" },
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
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#F45B8A] border border-pink-200/80 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              {t("featuresPage.catalog.allTitle", "All Interactive Features")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] leading-[1.25] md:leading-[1.2] tracking-tight py-1">
            {t("featuresPage.hero.titleHighlight", "Interactive Features")}{" "}
            <span className="inline-block py-1 bg-gradient-to-r from-[#F45B8A] via-[#E91E63] to-[#172554] bg-clip-text text-transparent">
              & Vedic Tools
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
              {t("nav.features", "Features")}
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
                  className="absolute right-4.5 text-slate-400 hover:text-[#F45B8A] p-1 font-bold transition-colors text-sm cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs (Sticky) ── */}
      <section className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-16 md:top-20 z-20 shadow-xs">
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

      {/* ── All Interactive Features Catalog ── */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] min-h-[600px] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header count */}
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

          {/* Feature Cards Grid */}
          <div className="space-y-10 md:space-y-12">
            {filteredFeatures.map((f, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={f.title + f.idx}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : isEven ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
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
                      containerClassName="w-full h-[240px] sm:h-[280px]"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-pink-50 text-[#F45B8A] border border-pink-200/80 text-xs font-semibold uppercase tracking-wider">
                        {t("featuresPage.catalog.featureBadge", {
                          num: f.idx + 1,
                          defaultValue: `Interactive Feature ${String(f.idx + 1).padStart(2, "0")}`,
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {f.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#F45B8A]">{f.tagline}</p>

                    <div className="space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                      {f.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#172554] hover:bg-gradient-to-r hover:from-[#F45B8A] hover:to-[#E91E63] text-white text-xs font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
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

          {/* ── Cross Promotion Banner to Sacred Programs ── */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-50 via-rose-50 to-indigo-50 border border-pink-200 text-center space-y-4 shadow-sm">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F45B8A] bg-white px-3 py-1 rounded-full shadow-2xs border border-pink-100">
              <Sparkle className="w-3.5 h-3.5" /> 7 Dedicated Tracks
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              Looking for Stage-by-Stage Sacred Courses?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
              Explore our structured 9-month prenatal curriculum, Garbhadhan conception tracks, and early childhood programs.
            </p>
            <div className="pt-2">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>View All 7 Sacred Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
