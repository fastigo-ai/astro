import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  BookOpen,
  Calendar,
  Heart,
  Music,
  ShieldCheck,
  Search,
  ChevronRight,
  ChevronLeft,
  Clock,
  ArrowRight,
  Sun,
  Globe2,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import Footer from "@/components/common/Footer";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import LazyImage from "@/components/common/LazyImage";
import { useLanguage } from "@/context/LanguageContext";
import { getArticlesByHub, getLocalizedArticle } from "@/data/articlesData";

const DAILY_REGIMEN_META = [
  {
    to: "/garbh-sanskar/garbh-sanskar-vidhi",
    img: "/images/features/sankalp_poojan.jpg",
    icon: Sparkles,
  },
  {
    to: "/garbh-sanskar/garbh-sanskar-music",
    img: "/images/features/garbhsanskar_music.jpg",
    icon: Music,
  },
  {
    to: "/garbh-sanskar/garbh-sanskar-mantra",
    img: "/images/features/vaidic_mantra_vrushti.jpg",
    icon: BookOpen,
  },
  {
    to: "/garbh-sanskar/garbh-sanskar-story",
    img: "/images/story_thumb_1.png",
    icon: Heart,
  },
  {
    to: "/garbh-sanskar/best-garbh-sanskar-app",
    img: "/images/features/garbhsamvad.jpg",
    icon: ShieldCheck,
  },
];

export default function GarbhSanskarHubPage() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const rawArticles = useMemo(() => getArticlesByHub("garbh-sanskar"), []);
  const allArticles = useMemo(() => {
    return rawArticles.map((a) => getLocalizedArticle(a, currentLanguage.code));
  }, [rawArticles, currentLanguage]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // 3D Cylindrical Regimen Carousel State
  const [regimenIndex, setRegimenIndex] = useState(2);
  const [isRegimenPaused, setIsRegimenPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const dailyRegimenPractices = useMemo(() => {
    return DAILY_REGIMEN_META.map((meta, idx) => {
      const title = t(`garbhSanskarHubPage.regimen.practices.${idx}.title`, "");
      const subTitle = t(`garbhSanskarHubPage.regimen.practices.${idx}.subTitle`, "");
      const desc = t(`garbhSanskarHubPage.regimen.practices.${idx}.desc`, "");
      const tag = t(`garbhSanskarHubPage.regimen.practices.${idx}.tag`, "");

      return {
        ...meta,
        title,
        subTitle,
        desc,
        tag,
      };
    });
  }, [t]);

  const totalRegimen = dailyRegimenPractices.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isRegimenPaused) return;
    const interval = setInterval(() => {
      setRegimenIndex((prev) => (prev + 1) % totalRegimen);
    }, 3500);
    return () => clearInterval(interval);
  }, [isRegimenPaused, totalRegimen]);

  const handleNextRegimen = () => {
    setRegimenIndex((prev) => (prev + 1) % totalRegimen);
  };

  const handlePrevRegimen = () => {
    setRegimenIndex((prev) => (prev - 1 + totalRegimen) % totalRegimen);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsRegimenPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNextRegimen();
    } else if (diff < -45) {
      handlePrevRegimen();
    }
    setTouchStartX(null);
    setIsRegimenPaused(false);
  };

  const getRegimenCylindricalStyle = (index: number) => {
    let offset = (index - regimenIndex) % totalRegimen;
    if (offset > totalRegimen / 2) offset -= totalRegimen;
    if (offset < -totalRegimen / 2) offset += totalRegimen;

    const absOffset = Math.abs(offset);
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    const maxVisibleOffset = isMobile ? 1 : 2;
    if (absOffset > maxVisibleOffset) {
      return {
        opacity: 0,
        transform: `translate(-50%, -50%) translateX(${offset * 120}%) scale(0.5) translateZ(-400px)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    const spacing = isMobile ? Math.min(windowWidth * 0.72, 240) : isTablet ? 250 : 290;
    const translateX = offset * spacing;
    const translateZ = -absOffset * (isMobile ? 50 : 95);
    const rotateY = offset * (isMobile ? -12 : -16);
    const scale = 1 - absOffset * (isMobile ? 0.12 : 0.1);
    const opacity = 1 - absOffset * (isMobile ? 0.35 : 0.22);
    const zIndex = 30 - absOffset * 10;

    return {
      opacity,
      transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      pointerEvents: "auto" as const,
    };
  };

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allArticles.map((a) => a.category)));
    return ["All", ...cats];
  }, [allArticles]);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((a) => {
      const matchCat = selectedCategory === "All" || a.category === selectedCategory;
      const matchSearch =
        a.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchCat && matchSearch;
    });
  }, [allArticles, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;

  const displayedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("all-articles");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner Section ── */}
      <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              {t("garbhSanskarHubPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">
              {t("garbhSanskarHubPage.hero.breadcrumbResources", "Resources")}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("garbhSanskarHubPage.hero.breadcrumbCurrent", "Garbh Sanskar")}
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
              alt="Complete Guide to Garbh Sanskar"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Gradient Overlays for High Text Legibility & Left Artwork Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/70 to-transparent sm:bg-gradient-to-l sm:from-slate-950/95 sm:via-slate-950/80 sm:to-transparent" />
            <div className="absolute inset-0 bg-slate-950/20 sm:bg-transparent" />

            {/* Content Container (Aligned to Right Side) */}
            <div className="relative z-10 w-full flex justify-end p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-semibold shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                  <span>
                    {t(
                      "garbhSanskarHubPage.hero.badge",
                      "Sacred Prenatal Wisdom Hub"
                    )}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white leading-tight drop-shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {t("garbhSanskarHubPage.hero.title", "Complete Guide to")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200">
                    {t(
                      "garbhSanskarHubPage.hero.titleHighlight",
                      "Garbh Sanskar"
                    )}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {t(
                    "garbhSanskarHubPage.hero.subtitle",
                    "Discover ancient Vedic wisdom and modern prenatal neuroscience, including daily practices, soothing music, mantras, stories, scientific trials, and trimester-wise parenting."
                  )}
                </motion.p>

                {/* Action CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/features/garbh-sanskar"
                    className="px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs sm:text-sm md:text-base font-bold shadow-lg shadow-[#F45B8A]/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {t(
                        "garbhSanskarHubPage.hero.exploreBtn",
                        "Explore Garbh Sanskar Program"
                      )}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#all-articles"
                    className="px-7 py-3.5 sm:py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm md:text-base font-bold hover:bg-white/25 active:scale-95 transition-all text-center cursor-pointer"
                  >
                    {t(
                      "garbhSanskarHubPage.hero.browseBtn",
                      "Browse 17+ Vedic Articles ↓"
                    )}
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. What is Garbh Sanskar Section ── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-12 border border-pink-100 shadow-[0_15px_45px_rgba(23,37,84,0.05)] grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-[#F45B8A] px-3 sm:px-3.5 py-1 bg-pink-50 rounded-full border border-pink-100 inline-block">
              {t("garbhSanskarHubPage.whatIs.badge", "Vedic Science & Philosophy")}
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#172554] leading-tight">
              {t("garbhSanskarHubPage.whatIs.title", "What is Garbh Sanskar?")}
            </h2>
            <p className="text-[#475569] leading-relaxed text-xs sm:text-sm md:text-base">
              {t(
                "garbhSanskarHubPage.whatIs.p1",
                "Garbh Sanskar is the ancient Vedic practice of educating and nurturing the unborn baby inside the mother's womb. Derived from the Sanskrit roots Garbh (womb/fetus) and Sanskar (refinement/purification), this tradition acknowledges that a child's mental, physical, and spiritual personality begins shaping from the very moment of conception."
              )}
            </p>
            <p className="text-[#475569] leading-relaxed text-xs sm:text-sm md:text-base">
              {t(
                "garbhSanskarHubPage.whatIs.p2",
                "A mother's emotional poise, peaceful mental state, satvik diet, and sensory inputs directly influence fetal neurogenesis. By creating an atmosphere filled with uplifting shlokas, classical ragas, and loving communication (Garbh Samvad), parents cultivate vitality and virtue in their baby."
              )}
            </p>
            <div className="pt-1 sm:pt-2">
              <Link
                to="/garbh-sanskar/what-is-garbh-sanskar"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F45B8A] hover:text-[#d94d7a] group"
              >
                <span>
                  {t(
                    "garbhSanskarHubPage.whatIs.readMore",
                    "Read Full Article on What is Garbh Sanskar"
                  )}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF6FA] to-[#F1F7FF] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-pink-100/80 space-y-4">
            <h3 className="font-bold text-[#172554] text-base sm:text-lg flex items-center gap-2">
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#F45B8A]" />
              {t("garbhSanskarHubPage.whatIs.highlightsTitle", "Core Highlights")}
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#475569]">
              {[0, 1, 2].map((hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F45B8A] mt-1.5 shrink-0" />
                  <span>
                    {t(`garbhSanskarHubPage.whatIs.highlights.${hIdx}`, "")}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-pink-100">
              <Link
                to="/garbh-sanskar/importance-of-garbh-sanskar-during-pregnancy"
                className="text-xs font-bold text-[#172554] hover:text-[#F45B8A] flex items-center justify-between"
              >
                <span>
                  {t(
                    "garbhSanskarHubPage.whatIs.essentialLink",
                    "Learn Why It's Essential"
                  )}
                </span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Benefits and Importance Cards ── */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FFFDFE] to-[#FFF6FA] border-y border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
              {t("garbhSanskarHubPage.benefits.badge", "Proven Advantages")}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#172554]">
              {t(
                "garbhSanskarHubPage.benefits.title",
                "Benefits & Importance of Garbh Sanskar"
              )}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              {t(
                "garbhSanskarHubPage.benefits.subtitle",
                "Discover how ancient Vedic methods translate into modern neurological and physical wellness."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <Link
              to="/garbh-sanskar/importance-of-garbh-sanskar-during-pregnancy"
              className="bg-white rounded-2xl p-5 sm:p-6 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#F45B8A] flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                  {t(
                    "garbhSanskarHubPage.benefits.cards.0.title",
                    "Importance During Pregnancy"
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(
                    "garbhSanskarHubPage.benefits.cards.0.desc",
                    "Why cultivating a peaceful, virtuous womb environment is vital for lifelong emotional and cognitive health."
                  )}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
                <span>
                  {t("garbhSanskarHubPage.benefits.readGuide", "Read Full Guide")}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/garbh-sanskar/benefits-of-garbh-sanskar-during-pregnancy"
              className="bg-white rounded-2xl p-5 sm:p-6 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                  {t(
                    "garbhSanskarHubPage.benefits.cards.1.title",
                    "10 Proven Benefits"
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(
                    "garbhSanskarHubPage.benefits.cards.1.desc",
                    "Explore 10 evidence-based advantages including calmer newborn temperament, higher IQ, and easier delivery."
                  )}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
                <span>
                  {t("garbhSanskarHubPage.benefits.readGuide", "Read Full Guide")}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/garbh-sanskar/scientific-evidence"
              className="bg-white rounded-2xl p-5 sm:p-6 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                  {t(
                    "garbhSanskarHubPage.benefits.cards.2.title",
                    "Scientific Garbh Sanskar Evidence"
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(
                    "garbhSanskarHubPage.benefits.cards.2.desc",
                    "Clinical trials and fetal psychology studies validating sensory learning and epigenetic modulation."
                  )}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
                <span>
                  {t("garbhSanskarHubPage.benefits.readGuide", "Read Full Guide")}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Garbh Sanskar Practices (3D Cylindrical Scrollable Carousel) ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-pink-50/30 to-white border-y border-pink-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#F45B8A]" />{" "}
              {t("garbhSanskarHubPage.regimen.badge", "Daily Regimen")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554] tracking-tight">
              {t(
                "garbhSanskarHubPage.regimen.title",
                "Core Garbh Sanskar Practices"
              )}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t(
                "garbhSanskarHubPage.regimen.subtitle",
                "Incorporate these practical Vedic rituals, sound therapy, sacred mantras, and mobile routines into your everyday schedule."
              )}
            </p>
          </div>

          {/* 3D Cylindrical Carousel Stage */}
          <div className="space-y-8">
            <div
              className="relative max-w-5xl mx-auto h-[440px] sm:h-[460px] flex items-center justify-center select-none overflow-hidden sm:overflow-visible touch-pan-y"
              style={{ perspective: "1200px" }}
              onMouseEnter={() => setIsRegimenPaused(true)}
              onMouseLeave={() => setIsRegimenPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {dailyRegimenPractices.map((item, idx) => {
                const Icon = item.icon;
                const style = getRegimenCylindricalStyle(idx);
                const isCenter = idx === regimenIndex;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!isCenter) setRegimenIndex(idx);
                    }}
                    style={style}
                    className={`absolute top-1/2 left-1/2 w-[86vw] max-w-[300px] sm:w-[320px] md:w-[340px] transition-all duration-700 ease-out cursor-pointer ${isCenter ? "cursor-default" : "hover:brightness-105"
                      }`}
                  >
                    <div
                      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-[28px] transition-all duration-500 overflow-hidden min-h-[380px] sm:min-h-[400px] ${isCenter
                          ? "bg-white/98 backdrop-blur-2xl border-2 border-[#F45B8A]/70 shadow-[0_22px_55px_rgba(244,91,138,0.18)]"
                          : "bg-white/90 backdrop-blur-md border border-pink-100/90 shadow-[0_10px_30px_rgba(23,37,84,0.05)]"
                        }`}
                    >
                      {/* Top Accent Stripe */}
                      {isCenter && (
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63]" />
                      )}

                      <div>
                        {/* Image Header */}
                        <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-4 border border-pink-100/80 bg-slate-100">
                          <img
                            src={item.img}
                            alt={item.title}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/images/features/sankalp_poojan.jpg";
                            }}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                            <div className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md text-[#F45B8A] flex items-center justify-center shadow-xs">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[9.5px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#F45B8A] border border-pink-100 tracking-wider">
                              {item.tag}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-[#172554] leading-snug line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#F45B8A] mt-0.5">
                          {item.subTitle}
                        </p>

                        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal line-clamp-3">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={item.to}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F45B8A] hover:text-[#EA3484] transition-colors"
                        >
                          <span>Explore Practice</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <span className="text-[11px] font-semibold text-slate-400">
                          {idx + 1} / {totalRegimen}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows & Dot Indicators */}
            <div className="flex flex-col items-center justify-center gap-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevRegimen}
                  aria-label="Previous Daily Practice"
                  className="w-10 h-10 rounded-full border border-pink-200 bg-white/90 backdrop-blur-md text-[#172554] hover:bg-[#F45B8A] hover:text-white hover:border-[#F45B8A] shadow-sm transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-100 shadow-2xs">
                  {dailyRegimenPractices.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setRegimenIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${i === regimenIndex
                          ? "w-6 bg-gradient-to-r from-[#F45B8A] to-[#E91E63]"
                          : "w-2 bg-slate-200 hover:bg-pink-300"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextRegimen}
                  aria-label="Next Daily Practice"
                  className="w-10 h-10 rounded-full border border-pink-200 bg-white/90 backdrop-blur-md text-[#172554] hover:bg-[#F45B8A] hover:text-white hover:border-[#F45B8A] shadow-sm transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 font-medium">
                Swipe or use arrows to rotate 3D practices • Auto-rotates every 3.5s
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Garbh Sanskar by Pregnancy Stage (Timeline) ── */}
      <section className="py-16 bg-[#FFF9FC] border-y border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
              {t("garbhSanskarHubPage.trimester.badge", "Trimester Guidance")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t(
                "garbhSanskarHubPage.trimester.title",
                "Garbh Sanskar by Trimester"
              )}
            </h2>
            <p className="text-slate-500 text-sm">
              {t(
                "garbhSanskarHubPage.trimester.subtitle",
                "Tailored Vedic routines, nutritional priorities, and sensory activities for every stage of pregnancy."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((tIdx) => (
              <div
                key={tIdx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-pink-100 shadow-sm flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100/40 rounded-bl-full -z-0" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-[#F45B8A] rounded-full text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {t(`garbhSanskarHubPage.trimester.trimesters.${tIdx}.num`)} (
                      {t(`garbhSanskarHubPage.trimester.trimesters.${tIdx}.weeks`)})
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#172554]">
                    {t(
                      `garbhSanskarHubPage.trimester.trimesters.${tIdx}.tagline`
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(`garbhSanskarHubPage.trimester.trimesters.${tIdx}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. All Garbh Sanskar Articles Grid ── */}
      <section id="all-articles" className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-4 border-b border-pink-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
              {t("garbhSanskarHubPage.articles.badge", "Knowledge Library")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t(
                "garbhSanskarHubPage.articles.title",
                "All Garbh Sanskar Articles & Guides"
              )}{" "}
              ({filteredArticles.length})
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={t(
                "garbhSanskarHubPage.articles.searchPlaceholder",
                "Search Garbh Sanskar articles, mantras, or tips..."
              )}
              className="w-full px-4 py-2.5 pl-10 rounded-full bg-white border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F45B8A]"
            />
            <Search className="w-4 h-4 text-[#F45B8A] absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat
                  ? "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-pink-100 hover:bg-pink-50"
                }`}
            >
              {cat === "All" ? t("garbhSanskarHubPage.articles.all", "All") : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid & Pagination */}
        {filteredArticles.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {displayedArticles.map((art, idx) => (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (idx % 3) * 0.05 }}
                >
                  <Link
                    to={`/garbh-sanskar/${art.slug}`}
                    className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-[0_10px_30px_rgba(23,37,84,0.04)] hover:shadow-[0_20px_45px_rgba(244,91,138,0.12)] transition-all flex flex-col h-full group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <LazyImage
                        src={art.featuredImage}
                        alt={art.title}
                        fallbackSrc="/images/hero/hero-1.png"
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-[#172554]/90 backdrop-blur-md text-white text-[10.5px] font-bold px-3 py-1 rounded-full">
                        {art.category}
                      </span>
                      <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10.5px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-pink-300" />
                        {art.readTime}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug line-clamp-2 text-base">
                          {art.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed font-normal">
                          {art.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
                        <span>
                          {t(
                            "garbhSanskarHubPage.articles.readArticle",
                            "Read Full Article"
                          )}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 pt-8 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-500 font-medium order-2 sm:order-1">
                  {t("garbhSanskarHubPage.articles.pageOf", {
                    current: currentPage,
                    total: totalPages,
                  })}
                </p>

                <div className="flex items-center gap-2 order-1 sm:order-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${currentPage === 1
                        ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50"
                        : "border-pink-200 text-[#172554] hover:bg-pink-50 hover:border-pink-300"
                      }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>
                      {t("garbhSanskarHubPage.articles.previous", "Previous")}
                    </span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${currentPage === pageNum
                            ? "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-md shadow-[#F45B8A]/25"
                            : "bg-white text-slate-700 border border-pink-100 hover:bg-pink-50"
                          }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${currentPage === totalPages
                        ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50"
                        : "border-pink-200 text-[#172554] hover:bg-pink-50 hover:border-pink-300"
                      }`}
                  >
                    <span>{t("garbhSanskarHubPage.articles.next", "Next")}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="py-16 text-center bg-pink-50/50 rounded-3xl border border-pink-100">
            <p className="text-slate-600 font-medium">
              {t(
                "garbhSanskarHubPage.articles.noResults",
                "No articles found matching your search."
              )}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="mt-3 text-xs font-bold text-[#F45B8A] hover:underline cursor-pointer"
            >
              {t("garbhSanskarHubPage.articles.clearFilters", "Clear filters")}
            </button>
          </div>
        )}
      </section>

      {/* App Download CTA */}
      <AppDownloadSection />
      <Footer />
    </div>
  );
}
