import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Search,
  ChevronRight,
  ChevronLeft,
  Clock,
  ArrowRight,
  CheckCircle2,
  ListOrdered,
  Smile,
  ShieldCheck,
  Moon,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import Footer from "@/components/common/Footer";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import LazyImage from "@/components/common/LazyImage";
import { useLanguage } from "@/context/LanguageContext";
import { getArticlesByHub, getLocalizedArticle } from "@/data/articlesData";

const CHALLENGES_META = [
  {
    to: "/how-to/how-to-control-anger-during-pregnancy",
    icon: Smile,
    color: "text-rose-500 bg-rose-50",
  },
  {
    to: "/how-to/how-to-control-vomiting-during-pregnancy",
    icon: ShieldCheck,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    to: "/how-to/how-to-get-better-sleep-during-pregnancy",
    icon: Moon,
    color: "text-purple-600 bg-purple-50",
  },
  {
    to: "/how-to/how-to-manage-job-stress-during-pregnancy",
    icon: Briefcase,
    color: "text-blue-600 bg-blue-50",
  },
];

const CATEGORY_PILLS_ICONS = [Smile, Moon, Briefcase, HeartHandshake];
const CATEGORY_PILLS_COLORS = [
  "from-pink-50 to-white border-pink-100 bg-pink-100 text-[#F45B8A]",
  "from-purple-50 to-white border-purple-100 bg-purple-100 text-purple-600",
  "from-blue-50 to-white border-blue-100 bg-blue-100 text-blue-600",
  "from-amber-50 to-white border-amber-100 bg-amber-100 text-amber-600",
];

export default function HowToHubPage() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const rawArticles = useMemo(() => getArticlesByHub("how-to"), []);
  const allArticles = useMemo(() => {
    return rawArticles.map((a) => getLocalizedArticle(a, currentLanguage.code));
  }, [rawArticles, currentLanguage]);
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
    const element = document.getElementById("all-guides");
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
              {t("howToHubPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">
              {t("howToHubPage.hero.breadcrumbResources", "Resources")}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("howToHubPage.hero.breadcrumbCurrent", "How-To Guides")}
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
              alt="Pregnancy & Garbh Sanskar How-To Guides"
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
                  <ListOrdered className="w-3.5 h-3.5 text-pink-300" />
                  <span>
                    {t(
                      "howToHubPage.hero.badge",
                      "Practical Step-by-Step Hub"
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
                  {t(
                    "howToHubPage.hero.title",
                    "Pregnancy & Garbh Sanskar"
                  )}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200">
                    {t("howToHubPage.hero.titleHighlight", "How-To Guides")}
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
                    "howToHubPage.hero.subtitle",
                    "Simple, step-by-step practical guides to help you plan pregnancy, manage trimester challenges, master Garbh Sanskar rituals at home, and prepare for confident parenting."
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
                    to="/how-to/how-to-do-garbh-sanskar-at-home"
                    className="px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs sm:text-sm md:text-base font-bold shadow-lg shadow-[#F45B8A]/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {t(
                        "howToHubPage.hero.featuredBtn",
                        "Featured: Garbh Sanskar at Home"
                      )}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#all-guides"
                    className="px-7 py-3.5 sm:py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm md:text-base font-bold hover:bg-white/25 active:scale-95 transition-all text-center cursor-pointer"
                  >
                    {t(
                      "howToHubPage.hero.browseBtn",
                      "Browse All How-To Guides ↓"
                    )}
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Pregnancy Planning ── */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="space-y-3 max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A] px-3.5 py-1 bg-pink-50 rounded-full border border-pink-100">
            {t("howToHubPage.planning.badge", "Phase 1")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
            {t(
              "howToHubPage.planning.title",
              "Preconception & Pregnancy Planning"
            )}
          </h2>
          <p className="text-slate-600 text-sm">
            {t(
              "howToHubPage.planning.desc",
              "Laying a wholesome, conscious foundation for conception with Ayurvedic detoxification and lifestyle prep."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/how-to/how-to-plan-for-pregnancy"
            className="bg-white rounded-3xl p-7 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#F45B8A] bg-pink-50 px-3 py-1 rounded-full">
                {t("howToHubPage.planning.cards.0.tag", "Preconception Checklist")}
              </span>
              <h3 className="text-xl font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                {t(
                  "howToHubPage.planning.cards.0.title",
                  "How to Plan Pregnancy: Step-by-Step Preparation"
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(
                  "howToHubPage.planning.cards.0.desc",
                  "Complete roadmap: medical screenings, prenatal folic acid, Ayurvedic cellular detox, ovulation tracking, and emotional alignment for couples."
                )}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
              <span>
                {t("howToHubPage.articles.readArticle", "Read Full Guide")}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/how-to/how-to-get-healthy-and-intelligent-baby"
            className="bg-white rounded-3xl p-7 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                {t("howToHubPage.planning.cards.1.tag", "Brain & Body Boost")}
              </span>
              <h3 className="text-xl font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                {t(
                  "howToHubPage.planning.cards.1.title",
                  "How to Get a Healthy and Intelligent Baby"
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(
                  "howToHubPage.planning.cards.1.desc",
                  "Evidence-based and Vedic protocols: DHA & walnut nutrition, maternal mental visualization, classical ragas, and early sensory neuro-stimulation."
                )}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
              <span>
                {t("howToHubPage.articles.readArticle", "Read Full Guide")}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* ── 3. Managing Pregnancy Challenges ── */}
      <section className="py-16 bg-[#FFF9FC] border-y border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
              {t("howToHubPage.challenges.badge", "Real-Life Solutions")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t(
                "howToHubPage.challenges.title",
                "Managing Pregnancy Challenges"
              )}
            </h2>
            <p className="text-slate-500 text-sm">
              {t(
                "howToHubPage.challenges.desc",
                "Actionable, calming techniques to overcome daily physical discomforts and emotional stresses."
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHALLENGES_META.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link
                  key={idx}
                  to={card.to}
                  className="bg-white rounded-3xl p-6 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold ${card.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {t(`howToHubPage.challenges.cards.${idx}.title`)}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {t(`howToHubPage.challenges.cards.${idx}.desc`)}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
                    <span>
                      {t("howToHubPage.articles.readArticle", "Read Guide")}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Baby Health and Pregnancy Care ── */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="space-y-3 max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A] px-3.5 py-1 bg-pink-50 rounded-full border border-pink-100">
            {t("howToHubPage.babyHealth.badge", "Nurturing & Partner Role")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
            {t(
              "howToHubPage.babyHealth.title",
              "Baby Health & Maternal Caregiving"
            )}
          </h2>
          <p className="text-slate-600 text-sm">
            {t(
              "howToHubPage.babyHealth.desc",
              "Ensuring optimal growth inside the womb and guiding husbands on compassionate partner care."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/how-to/how-to-make-baby-healthy-inside-the-womb"
            className="bg-white rounded-3xl p-7 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                {t("howToHubPage.babyHealth.cards.0.tag", "Fetal Vitality")}
              </span>
              <h3 className="text-xl font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                {t(
                  "howToHubPage.babyHealth.cards.0.title",
                  "How to Make Baby Healthy Inside the Womb"
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(
                  "howToHubPage.babyHealth.cards.0.desc",
                  "Vital steps for fetal weight gain, bone mineralization, placental oxygenation, and eliminating environmental and mental toxins."
                )}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
              <span>
                {t("howToHubPage.articles.readArticle", "Read Health Guide")}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/how-to/how-to-take-care-of-pregnant-women-during-pregnancy"
            className="bg-white rounded-3xl p-7 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {t("howToHubPage.babyHealth.cards.1.tag", "Husbands & Family")}
              </span>
              <h3 className="text-xl font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                {t(
                  "howToHubPage.babyHealth.cards.1.title",
                  "How to Take Care of Pregnant Women"
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(
                  "howToHubPage.babyHealth.cards.1.desc",
                  "Comprehensive guide for husbands: evening belly talk, emotional safety, hospital bag preparation, and providing physical support."
                )}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
              <span>
                {t("howToHubPage.articles.readArticle", "Read Care Guide")}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* ── 5. Garbh Sanskar at Home (Featured Prominently) ── */}
      <section className="py-16 bg-gradient-to-r from-[#FFF0F6] via-[#FFF8FC] to-[#F0F5FF] border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-pink-200/80 shadow-[0_20px_50px_rgba(244,91,138,0.1)] grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 text-[#F45B8A] text-xs font-bold uppercase tracking-wider border border-pink-200/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {t(
                    "howToHubPage.featuredRoutine.badge",
                    "Featured Practical Routine"
                  )}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554] leading-tight">
                {t(
                  "howToHubPage.featuredRoutine.title",
                  "How to Do Garbh Sanskar at Home"
                )}
              </h2>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                {t(
                  "howToHubPage.featuredRoutine.desc",
                  "You don't need complex rituals or elaborate setups. Practicing authentic Garbh Sanskar at home requires just 20 mindful minutes a day to nurture your baby's intelligence, emotional resilience, and virtues."
                )}
              </p>

              {/* 5 Simple Steps Checklist */}
              <div className="space-y-2.5 pt-2">
                {[0, 1, 2, 3, 4].map((sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172554] font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F45B8A] shrink-0" />
                    <span>
                      {t(`howToHubPage.featuredRoutine.steps.${sIdx}`, "")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/how-to/how-to-do-garbh-sanskar-at-home"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs sm:text-sm font-bold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>
                    {t(
                      "howToHubPage.featuredRoutine.readGuide",
                      "Read Complete Home Guide"
                    )}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/features/garbh-sanskar"
                  className="px-6 py-3.5 rounded-full bg-pink-50 text-[#172554] border border-pink-200 text-xs sm:text-sm font-bold hover:bg-pink-100 transition-all"
                >
                  {t(
                    "howToHubPage.featuredRoutine.exploreApp",
                    "Explore Guided App Program →"
                  )}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-b from-[#FFF5F9] to-white rounded-3xl p-6 sm:p-8 border border-pink-100 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-pink-100 text-[#F45B8A] flex items-center justify-center mx-auto shadow-inner">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#172554]">
                {t(
                  "howToHubPage.featuredRoutine.appCardTitle",
                  "Begin Your Daily 20-Min Home Routine"
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {t(
                  "howToHubPage.featuredRoutine.appCardDesc",
                  "Join over 10,000+ mothers practicing effortless, guided home Garbh Sanskar with the Astro Baby mobile app."
                )}
              </p>
              <div className="pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full py-3 px-4 rounded-xl bg-[#172554] text-white text-xs sm:text-sm font-bold hover:bg-[#1e3a8a] transition-colors shadow-sm cursor-pointer"
                >
                  {t(
                    "howToHubPage.featuredRoutine.appDownloadBtn",
                    "Download Free Astro Baby App"
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Category Pills ── */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((idx) => {
            const Icon = CATEGORY_PILLS_ICONS[idx];
            const colorClass = CATEGORY_PILLS_COLORS[idx];
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-gradient-to-br border flex items-start gap-3.5 ${colorClass}`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#172554]">
                    {t(`howToHubPage.categoryPills.${idx}.title`)}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {t(`howToHubPage.categoryPills.${idx}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 7. All How-To Guides Grid ── */}
      <section id="all-guides" className="py-12 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-4 border-b border-pink-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
              {t("howToHubPage.articles.badge", "Step-by-Step Catalog")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
              {t("howToHubPage.articles.title", "All How-To Guides")} (
              {filteredArticles.length})
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={t(
                "howToHubPage.articles.searchPlaceholder",
                "Search How-To guides..."
              )}
              className="w-full px-4 py-2.5 pl-10 rounded-full bg-white border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F45B8A]"
            />
            <Search className="w-4 h-4 text-[#F45B8A] absolute left-3.5 top-3" />
          </div>
        </div>

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
              {cat === "All" ? t("howToHubPage.articles.all", "All") : cat}
            </button>
          ))}
        </div>

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
                    to={`/how-to/${art.slug}`}
                    className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-[0_10px_30px_rgba(23,37,84,0.04)] hover:shadow-[0_20px_45px_rgba(244,91,138,0.12)] transition-all flex flex-col h-full group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <LazyImage
                        src={art.featuredImage}
                        alt={art.title}
                        fallbackSrc="/images/hero/hero-3.png"
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
                          {t("howToHubPage.articles.readArticle", "Read Full Guide")}
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
                  {t("howToHubPage.articles.pageOf", {
                    from: (currentPage - 1) * ITEMS_PER_PAGE + 1,
                    to: Math.min(currentPage * ITEMS_PER_PAGE, filteredArticles.length),
                    total: filteredArticles.length,
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
                      {t("howToHubPage.articles.previous", "Previous")}
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
                    <span>{t("howToHubPage.articles.next", "Next")}</span>
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
                "howToHubPage.articles.noResults",
                "No guides found matching your criteria."
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
              {t("howToHubPage.articles.clearFilters", "Reset Filters")}
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
