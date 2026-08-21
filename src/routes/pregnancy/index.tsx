import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Heart,
  Apple,
  ShieldAlert,
  Search,
  ChevronRight,
  ChevronLeft,
  Clock,
  ArrowRight,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import Footer from "@/components/common/Footer";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import LazyImage from "@/components/common/LazyImage";
import CylindricalHealthConcernsCarousel from "@/components/pregnancy/CylindricalHealthConcernsCarousel";
import { getArticlesByHub } from "@/data/articlesData";

const UNDERSTANDING_LINKS = [
  "/pregnancy/stages-of-pregnancy-month-by-month",
  "/pregnancy/pregnancy-symptoms",
  "/pregnancy/early-pregnancy-symptoms",
  "/pregnancy/seven-early-signs-of-pregnancy-you-should-not-ignore",
];

const HEALTH_CONCERNS_LINKS = [
  "/pregnancy/mood-swings-during-pregnancy",
  "/pregnancy/back-pain-during-pregnancy",
  "/pregnancy/stomach-pain-during-pregnancy",
  "/pregnancy/low-blood-pressure-during-pregnancy",
  "/pregnancy/signs-that-tell-your-baby-is-safe-in-womb",
  "/pregnancy/what-is-ultrasound-sonography",
];

const FITNESS_LINKS = [
  "/pregnancy/meditation-during-pregnancy",
  "/pregnancy/yoga-for-pregnant-women",
  "/pregnancy/exercise-for-pregnant-women",
];

const NUTRITION_LINKS = [
  "/pregnancy/five-amazing-benefits-of-coconut-water-during-pregnancy",
  "/pregnancy/fruits-not-to-eat-during-pregnancy",
];

const FAMILY_LINKS = [
  "/pregnancy/spiritual-books-to-read-during-pregnancy",
  "/pregnancy/role-of-mother-in-law-during-pregnancy",
];

export default function PregnancyHubPage() {
  const { t } = useTranslation();
  const allArticles = useMemo(() => getArticlesByHub("pregnancy"), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

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
    const element = document.getElementById("pregnancy-articles");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#EA3484]/20 selection:text-[#EA3484]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner Section ── */}
      <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#EA3484] transition-colors">
              {t("pregnancyHubPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">
              {t("pregnancyHubPage.hero.breadcrumbResources", "Resources")}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("pregnancyHubPage.hero.breadcrumbCurrent", "Pregnancy Care")}
            </span>
          </nav>

          {/* Hero Banner Card Container */}
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(234,52,132,0.14)] border border-pink-100/80 bg-slate-900">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-end overflow-hidden"
            >
            {/* Background Banner Image */}
            <img
              src="/images/celestial_mother.png"
              alt="Complete Pregnancy Care Guide"
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
                  <Heart className="w-3.5 h-3.5 text-pink-300" />
                  <span>
                    {t(
                      "pregnancyHubPage.hero.badge",
                      "Complete Maternal Wellness Hub"
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
                  {t("pregnancyHubPage.hero.title", "Complete Pregnancy")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF70A6] via-[#F45B8A] to-[#F6C85F]">
                    {t("pregnancyHubPage.hero.titleHighlight", "Care Guide")}
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
                    "pregnancyHubPage.hero.subtitle",
                    "Explore pregnancy symptoms, trimester-by-trimester growth milestones, satvik nutrition, prenatal yoga, meditation, scans, and emotional health support."
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
                    className="px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs sm:text-sm md:text-base font-bold shadow-lg shadow-[#EA3484]/30 hover:shadow-xl hover:shadow-[#EA3484]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {t(
                        "pregnancyHubPage.hero.exploreBtn",
                        "Explore Holistic Prenatal Care"
                      )}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#pregnancy-articles"
                    className="px-7 py-3.5 sm:py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm md:text-base font-bold hover:bg-white/25 active:scale-95 transition-all text-center cursor-pointer"
                  >
                    {t(
                      "pregnancyHubPage.hero.browseBtn",
                      "Browse 17+ Pregnancy Guides ↓"
                    )}
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* ── 2. Understanding Pregnancy ── */}
      <section className="py-16 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA3484] px-3.5 py-1 bg-pink-50 rounded-full border border-pink-200/80">
            {t("pregnancyHubPage.understanding.badge", "Pregnancy Fundamentals")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554]">
            {t(
              "pregnancyHubPage.understanding.title",
              "Understanding Pregnancy Stages & Bodily Changes"
            )}
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            {t(
              "pregnancyHubPage.understanding.desc",
              "Pregnancy spans approximately 40 weeks, categorized into three distinct trimesters. Each phase brings profound anatomical, physiological, and emotional transitions. Staying educated about your body empowers you to distinguish normal sensations from symptoms requiring clinical attention."
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UNDERSTANDING_LINKS.map((link, idx) => (
            <Link
              key={idx}
              to={link}
              className="bg-white rounded-3xl p-6 border border-pink-100/90 hover:border-pink-300 hover:shadow-[0_15px_35px_rgba(234,52,132,0.12)] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#EA3484] bg-pink-50 border border-pink-200/60 px-2.5 py-0.5 rounded-full">
                  {t(`pregnancyHubPage.understanding.cards.${idx}.tag`)}
                </span>
                <h3 className="text-base font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors leading-snug">
                  {t(`pregnancyHubPage.understanding.cards.${idx}.title`)}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t(`pregnancyHubPage.understanding.cards.${idx}.desc`)}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#EA3484]">
                <span>
                  {t("pregnancyHubPage.articles.readArticle", "Read Guide")}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. Pregnancy Health and Common Concerns (3D Cylindrical Scroll with Side Heading) ── */}
      <CylindricalHealthConcernsCarousel links={HEALTH_CONCERNS_LINKS} />

      {/* ── 4. Fitness and Wellness ── */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#FFF5F9] via-white to-[#F0F7FF] rounded-[32px] p-6 sm:p-10 md:p-12 border border-pink-100 shadow-sm">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
              {t("pregnancyHubPage.fitness.badge", "Movement & Calmness")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t(
                "pregnancyHubPage.fitness.title",
                "Prenatal Fitness & Mindful Wellness"
              )}
            </h2>
            <p className="text-slate-600 text-sm">
              {t(
                "pregnancyHubPage.fitness.desc",
                "Gentle movement promotes placental blood flow, eases delivery, and uplifts maternal mood. Always consult your healthcare specialist before beginning any new fitness routine."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FITNESS_LINKS.map((link, idx) => (
              <Link
                key={idx}
                to={link}
                className="bg-white rounded-2xl p-6 border border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                    {t(`pregnancyHubPage.fitness.cards.${idx}.tag`)}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                    {t(`pregnancyHubPage.fitness.cards.${idx}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(`pregnancyHubPage.fitness.cards.${idx}.desc`)}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
                  <span>
                    {t("pregnancyHubPage.articles.readArticle", "Explore")}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Nutrition Section ── */}
      <section className="py-16 bg-gradient-to-b from-[#FFFDFE] to-[#FFF6FA] border-y border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
              {t("pregnancyHubPage.nutrition.badge", "Satvik Pregnancy Diet")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t(
                "pregnancyHubPage.nutrition.title",
                "Prenatal Nutrition & Dietary Guidelines"
              )}
            </h2>
            <p className="text-slate-500 text-sm">
              {t(
                "pregnancyHubPage.nutrition.desc",
                "Nourish yourself and your developing baby with Ayurvedic dietary principles and superfoods."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {NUTRITION_LINKS.map((link, idx) => (
              <Link
                key={idx}
                to={link}
                className="bg-white rounded-3xl p-7 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Apple className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {t(`pregnancyHubPage.nutrition.cards.${idx}.tag`)}
                  </span>
                  <h3 className="text-xl font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors">
                    {t(`pregnancyHubPage.nutrition.cards.${idx}.title`)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(`pregnancyHubPage.nutrition.cards.${idx}.desc`)}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#EA3484]">
                  <span>
                    {t("pregnancyHubPage.articles.readArticle", "Read Nutrition Guide")}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Family and Emotional Support ── */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA3484] px-3.5 py-1 bg-pink-50 rounded-full border border-pink-200/80">
            {t("pregnancyHubPage.family.badge", "Ecosystem of Care")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
            {t(
              "pregnancyHubPage.family.title",
              "Family & Emotional Support System"
            )}
          </h2>
          <p className="text-slate-500 text-sm">
            {t(
              "pregnancyHubPage.family.desc",
              "Creating a peaceful, joyful home atmosphere filled with inspiring literature and supportive family bonds."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FAMILY_LINKS.map((link, idx) => (
            <Link
              key={idx}
              to={link}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100/90 hover:border-pink-300 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
                  {t(`pregnancyHubPage.family.cards.${idx}.tag`)}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors">
                  {t(`pregnancyHubPage.family.cards.${idx}.title`)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(`pregnancyHubPage.family.cards.${idx}.desc`)}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#EA3484]">
                <span>
                  {t("pregnancyHubPage.articles.readArticle", "Read Guide")}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 7. All Pregnancy Articles Grid with Pagination ── */}
      <section id="pregnancy-articles" className="py-16 max-w-7xl mx-auto px-4 border-t border-pink-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-4 border-b border-pink-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA3484] px-3 py-1 bg-pink-50 rounded-full border border-pink-200/80 inline-block mb-1">
              {t("pregnancyHubPage.articles.badge", "Complete Library")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t(
                "pregnancyHubPage.articles.title",
                "All Pregnancy Care Articles"
              )}{" "}
              ({filteredArticles.length})
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={t(
                "pregnancyHubPage.articles.searchPlaceholder",
                "Search pregnancy topics..."
              )}
              className="w-full px-4 py-2.5 pl-10 rounded-full bg-white border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA3484] focus:border-transparent text-slate-800"
            />
            <Search className="w-4 h-4 text-[#EA3484] absolute left-3.5 top-3" />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white shadow-md shadow-[#EA3484]/25"
                  : "bg-white text-slate-700 border border-pink-100 hover:bg-pink-50 hover:text-[#EA3484]"
              }`}
            >
              {cat === "All" ? t("pregnancyHubPage.articles.all", "All") : cat}
            </button>
          ))}
        </div>

        {displayedArticles.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {displayedArticles.map((art, idx) => (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (idx % 3) * 0.05 }}
                >
                  <Link
                    to={`/pregnancy/${art.slug}`}
                    className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-[0_10px_30px_rgba(23,37,84,0.04)] hover:shadow-[0_20px_45px_rgba(234,52,132,0.12)] transition-all flex flex-col h-full group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <LazyImage
                        src={art.featuredImage}
                        alt={art.title}
                        fallbackSrc="/images/hero/hero-2.png"
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
                        <h3 className="font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors leading-snug line-clamp-2 text-base">
                          {art.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed font-normal">
                          {art.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#EA3484]">
                        <span>
                          {t(
                            "pregnancyHubPage.articles.readArticle",
                            "Read Full Guide"
                          )}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination Bar */}
            {totalPages > 1 && (
              <div className="mt-12 pt-8 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {t("pregnancyHubPage.articles.pageOf", {
                    from: (currentPage - 1) * ITEMS_PER_PAGE + 1,
                    to: Math.min(currentPage * ITEMS_PER_PAGE, filteredArticles.length),
                    total: filteredArticles.length,
                  })}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      currentPage === 1
                        ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50"
                        : "border-pink-200 text-[#172554] hover:bg-pink-50 hover:border-pink-300"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>
                      {t("pregnancyHubPage.articles.previous", "Previous")}
                    </span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          currentPage === pageNum
                            ? "bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white shadow-md shadow-[#EA3484]/25"
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
                    className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      currentPage === totalPages
                        ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50"
                        : "border-pink-200 text-[#172554] hover:bg-pink-50 hover:border-pink-300"
                    }`}
                  >
                    <span>{t("pregnancyHubPage.articles.next", "Next")}</span>
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
                "pregnancyHubPage.articles.noResults",
                "No articles found matching your criteria."
              )}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="mt-3 text-xs font-bold text-[#EA3484] hover:underline cursor-pointer"
            >
              {t("pregnancyHubPage.articles.clearFilters", "Reset Filters")}
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
