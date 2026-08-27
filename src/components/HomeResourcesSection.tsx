import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Sun,
  Heart,
  BookOpen,
  ArrowUpRight,
  Search,
  X,
  ChevronRight,
} from "lucide-react";

export interface ResourceLinkItem {
  title: string;
  to: string;
  tag?: string;
}

export interface ResourceColumn {
  id: string;
  title: string;
  hubLink: string;
  icon: typeof Sun;
  themeColor: string;
  badgeBg: string;
  items: ResourceLinkItem[];
}

export const ALL_RESOURCES_DIRECTORY: {
  garbhSanskar: ResourceColumn;
  pregnancy: ResourceColumn;
  howTo: ResourceColumn;
} = {
  garbhSanskar: {
    id: "garbh-sanskar",
    title: "GARBH SANSKAR",
    hubLink: "/garbh-sanskar",
    icon: Sun,
    themeColor: "from-[#EA3484] to-[#F45B8A]",
    badgeBg: "bg-pink-50 text-[#EA3484] border-pink-200/80",
    items: [
      { title: "What is Garbh Sanskar", to: "/garbh-sanskar/what-is-garbh-sanskar" },
      { title: "Benefits & Importance", to: "/garbh-sanskar/benefits-of-garbh-sanskar-during-pregnancy" },
      { title: "Music & Mantras", to: "/garbh-sanskar/garbh-sanskar-mantra" },
      { title: "Stories", to: "/garbh-sanskar/garbh-sanskar-story" },
      { title: "Scientific Evidence", to: "/garbh-sanskar/scientific-evidence" },
      { title: "Garbh Sanskar Vidhi", to: "/garbh-sanskar/garbh-sanskar-vidhi" },
      { title: "Punsavan Sanskar", to: "/garbh-sanskar/punsavan-sanskar" },
      { title: "Simantonnayana Sanskar", to: "/garbh-sanskar/simantonnayana-sanskar" },
      { title: "Garbh Samvad", to: "/garbh-sanskar/garbh-samvad-during-pregnancy" },
      { title: "When to Start", to: "/garbh-sanskar/from-which-month-should-you-start" },
      { title: "First Trimester", to: "/garbh-sanskar/first-trimester" },
      { title: "Second Trimester", to: "/garbh-sanskar/second-trimester" },
      { title: "Third Trimester", to: "/garbh-sanskar/third-trimester" },
      { title: "Garbh Sanskar in Marathi", to: "/garbh-sanskar/garbh-sanskar-in-marathi" },
      { title: "Best Garbh Sanskar App", to: "/garbh-sanskar/best-garbh-sanskar-app" },
    ],
  },
  pregnancy: {
    id: "pregnancy",
    title: "PREGNANCY CARE",
    hubLink: "/pregnancy",
    icon: Heart,
    themeColor: "from-[#F43F5E] to-[#FB7185]",
    badgeBg: "bg-rose-50 text-rose-600 border-rose-200/80",
    items: [
      { title: "Pregnancy Calculator", to: "/pregnancy/pregnancy-calculator" },
      { title: "Pregnancy Symptoms", to: "/pregnancy/pregnancy-symptoms" },
      { title: "Early Pregnancy Signs", to: "/pregnancy/early-pregnancy-symptoms" },
      { title: "Pregnancy Stages", to: "/pregnancy/stages-of-pregnancy-month-by-month" },
      { title: "Ultrasound Guide", to: "/pregnancy/what-is-ultrasound-sonography" },
      { title: "Pregnancy Yoga", to: "/pregnancy/yoga-for-pregnant-women" },
      { title: "Exercise During Pregnancy", to: "/pregnancy/exercise-for-pregnant-women" },
      { title: "Meditation", to: "/pregnancy/meditation-during-pregnancy" },
      { title: "Mood Swings", to: "/pregnancy/mood-swings-during-pregnancy" },
      { title: "Back Pain", to: "/pregnancy/back-pain-during-pregnancy" },
      { title: "Stomach Pain", to: "/pregnancy/stomach-pain-during-pregnancy" },
      { title: "Low Blood Pressure", to: "/pregnancy/low-blood-pressure-during-pregnancy" },
      { title: "Miscarriage Prevention", to: "/pregnancy/miscarriage-prevention-and-care" },
      { title: "Healthy Pregnancy Diet", to: "/pregnancy/healthy-pregnancy-diet-chart" },
      { title: "Coconut Water Benefits", to: "/pregnancy/five-amazing-benefits-of-coconut-water-during-pregnancy" },
      { title: "Foods to Avoid", to: "/pregnancy/fruits-not-to-eat-during-pregnancy" },
      { title: "Spiritual Books", to: "/pregnancy/spiritual-books-to-read-during-pregnancy" },
      { title: "Baby Safety Signs", to: "/pregnancy/signs-that-tell-your-baby-is-safe-in-womb" },
      { title: "Family Support", to: "/pregnancy/role-of-mother-in-law-during-pregnancy" },
    ],
  },
  howTo: {
    id: "how-to",
    title: "HOW-TO GUIDES",
    hubLink: "/how-to",
    icon: BookOpen,
    themeColor: "from-[#8B5CF6] to-[#A78BFA]",
    badgeBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    items: [
      { title: "Plan a Pregnancy", to: "/how-to/how-to-plan-for-pregnancy" },
      { title: "Have a Healthy Baby", to: "/how-to/how-to-get-healthy-and-intelligent-baby" },
      { title: "Manage Anger", to: "/how-to/how-to-control-anger-during-pregnancy" },
      { title: "Control Vomiting", to: "/how-to/how-to-control-vomiting-during-pregnancy" },
      { title: "Keep Baby Healthy", to: "/how-to/how-to-make-baby-healthy-inside-the-womb" },
      { title: "Sleep Better", to: "/how-to/how-to-get-better-sleep-during-pregnancy" },
      { title: "Manage Work Stress", to: "/how-to/how-to-manage-job-stress-during-pregnancy" },
      { title: "Practice Garbh Sanskar", to: "/how-to/how-to-do-garbh-sanskar-at-home" },
      { title: "Care During Pregnancy", to: "/how-to/how-to-take-care-of-pregnant-women-during-pregnancy" },
    ],
  },
};

export default function HomeResourcesSection() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCols, setExpandedCols] = useState<Record<string, boolean>>({});

  const toggleColExpand = (colId: string) => {
    setExpandedCols((prev) => ({
      ...prev,
      [colId]: !prev[colId],
    }));
  };

  const allColumns = useMemo(() => [
    ALL_RESOURCES_DIRECTORY.garbhSanskar,
    ALL_RESOURCES_DIRECTORY.pregnancy,
    ALL_RESOURCES_DIRECTORY.howTo,
  ], []);

  // Filter items based on active search
  const filteredColumns = useMemo(() => {
    return allColumns.map((col) => {
      if (!searchQuery.trim()) return col;
      const q = searchQuery.toLowerCase().trim();
      const matchingItems = col.items.filter((item) =>
        item.title.toLowerCase().includes(q)
      );
      return {
        ...col,
        items: matchingItems,
      };
    });
  }, [allColumns, searchQuery]);

  const totalResults = useMemo(() => {
    return filteredColumns.reduce((acc, col) => acc + col.items.length, 0);
  }, [filteredColumns]);

  return (
    <section className="py-14 sm:py-20 md:py-28 relative z-10 bg-gradient-to-b from-[#FFFDFE] via-[#FFF5F9]/80 to-[#FFFDFE] text-slate-800 border-b border-pink-100/70 overflow-hidden">
      {/* Dynamic Ambient Glow Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-gradient-to-br from-pink-200/40 to-rose-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-gradient-to-tl from-purple-200/30 via-pink-200/20 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header Section */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-pink-200/90 bg-white/90 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#EA3484] shadow-xs backdrop-blur-md">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#EA3484] animate-pulse" />
            <span>{t("resourcesSection.badge", "Knowledge & Resource Hub")}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#172554] tracking-tight leading-[1.2]">
            {t("resourcesSection.directoryHeading", "Comprehensive Topics & Complete Guides")}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            {t(
              "resourcesSection.directorySubtitle",
              "Explore 43+ curated Vedic and obstetric master guides. Select any topic to access structured daily rituals, audio mantras, and expert medical advice."
            )}
          </p>

          {/* Interactive Search Bar */}
          <div className="pt-2 sm:pt-4 max-w-xl mx-auto px-1">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#EA3484] transition-colors">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. music, diet, yoga, symptoms)..."
                className="w-full pl-10 sm:pl-11 pr-10 py-3 sm:py-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-pink-200/80 text-xs sm:text-sm font-medium text-[#172554] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA3484]/30 focus:border-[#EA3484] shadow-xs sm:shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Search Result Feedback */}
        {searchQuery && (
          <div className="text-center mb-6 text-xs sm:text-sm font-semibold text-slate-500">
            Found <span className="text-[#EA3484] font-bold">{totalResults}</span> topic{totalResults === 1 ? "" : "s"} matching "{searchQuery}"
          </div>
        )}

        {/* 3-Column Luxury Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredColumns.map((col, colIdx) => {
              const Icon = col.icon;
              const isSearching = searchQuery.trim().length > 0;
              const isExpanded = isSearching || !!expandedCols[col.id];
              const visibleItems = isExpanded ? col.items : col.items.slice(0, 9);
              const hiddenCount = col.items.length - 9;

              return (
                <motion.div
                  key={col.id}
                  layout
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: colIdx * 0.05 }}
                  className="bg-white/95 rounded-2xl sm:rounded-[28px] border border-pink-100/90 p-4 sm:p-6 lg:p-7 shadow-[0_6px_25px_rgba(234,52,132,0.04)] sm:shadow-[0_10px_35px_rgba(234,52,132,0.05)] hover:shadow-[0_18px_45px_rgba(234,52,132,0.1)] hover:border-pink-300/80 transition-all duration-300 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group/card"
                >
                  {/* Subtle top card glow line */}
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${col.themeColor}`} />

                  <div>
                    {/* Header with Icon, Title & Hub Link */}
                    <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-pink-100/70">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br ${col.themeColor} text-white flex items-center justify-center shadow-md shadow-[#EA3484]/15 shrink-0`}>
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-extrabold text-[#172554] tracking-wide uppercase">
                            {col.title}
                          </h3>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 block">
                            {col.items.length} Articles Available
                          </span>
                        </div>
                      </div>

                      <Link
                        to={col.hubLink}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-pink-50/90 hover:bg-[#EA3484] text-[#EA3484] hover:text-white text-[11px] sm:text-xs font-bold transition-all duration-200 flex items-center gap-1 group/btn shadow-2xs shrink-0"
                        title={`Explore ${col.title} Hub`}
                      >
                        <span>Hub</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Topic Items List */}
                    {col.items.length === 0 ? (
                      <div className="py-6 text-center text-xs text-slate-400">
                        No matching topics found.
                      </div>
                    ) : (
                      <ul className="space-y-1 sm:space-y-1.5">
                        {visibleItems.map((item, itemIdx) => (
                          <li key={`${col.id}-${itemIdx}`}>
                            <Link
                              to={item.to}
                              className="group/item flex items-center justify-between px-2.5 py-2 sm:px-3 sm:py-2 rounded-xl text-slate-700 hover:text-[#EA3484] hover:bg-gradient-to-r hover:from-pink-50/80 hover:to-rose-50/40 active:bg-pink-100/60 transition-all duration-150 font-medium text-xs sm:text-[13px] leading-snug min-h-[38px]"
                            >
                              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 group-hover/item:bg-[#EA3484] group-hover/item:scale-125 transition-all shrink-0" />
                                <span className="truncate group-hover/item:translate-x-0.5 transition-transform">
                                  {item.title}
                                </span>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#EA3484] group-hover/item:translate-x-0.5 transition-all shrink-0" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tap for More Toggle when column has > 9 items and not in active search */}
                    {!isSearching && hiddenCount > 0 && (
                      <div className="mt-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => toggleColExpand(col.id)}
                          className="w-full py-2 px-3 text-xs font-bold text-[#EA3484] hover:text-[#d94d7a] bg-pink-50/70 hover:bg-pink-100/80 active:bg-pink-100 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer border border-pink-200/60 hover:border-pink-300 shadow-2xs"
                        >
                          <span>
                            {isExpanded
                              ? "Show Less ↑"
                              : `+ Tap for more (${hiddenCount} more)`}
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

