import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  BookOpen,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Activity,
  Award,
  Search,
  FileText,
  ShieldCheck,
  Microscope,
  Home as HomeIcon,
  ChevronRight,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import StickyLeftNavigation from "@/components/common/StickyLeftNavigation";
import NewsletterSection from "@/components/common/NewsletterSection";
import Footer from "@/components/common/Footer";
import {
  SCIENTIFIC_EVIDENCE_ITEMS,
  ScientificEvidenceItem,
  getLocalizedScientificItem,
} from "@/data/scientificEvidenceData";

export default function ScientificEvidenceHub() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");

  const categories = [
    { key: "all", label: t("scientificEvidence.hub.all", "All"), rawCategory: "All" },
    { key: "neuroscience", label: t("scientificEvidence.hub.neuroscience", "Neuroscience"), rawCategory: "Neuroscience" },
    { key: "biochemistry", label: t("scientificEvidence.hub.biochemistry", "Biochemistry"), rawCategory: "Biochemistry" },
    { key: "obstetrics", label: t("scientificEvidence.hub.obstetrics", "Obstetrics"), rawCategory: "Obstetrics" },
    { key: "epigenetics", label: t("scientificEvidence.hub.epigenetics", "Epigenetics"), rawCategory: "Epigenetics" },
    { key: "ayurveda", label: t("scientificEvidence.hub.ayurveda", "Ayurvedic Science"), rawCategory: "Ayurvedic Science" },
    { key: "consensus", label: t("scientificEvidence.hub.consensus", "Medical Consensus"), rawCategory: "Medical Consensus" },
  ];

  const localizedItems = SCIENTIFIC_EVIDENCE_ITEMS.map((item) =>
    getLocalizedScientificItem(item, currentLang)
  );

  const selectedCategoryObj = categories.find((c) => c.key === selectedCategoryKey);
  const targetRawCategory = selectedCategoryObj?.rawCategory || "All";

  const filteredItems = localizedItems.filter((item) => {
    const rawItem = SCIENTIFIC_EVIDENCE_ITEMS.find((raw) => raw.id === item.id);
    const matchesCategory =
      targetRawCategory === "All" ||
      rawItem?.category === targetRawCategory ||
      item.category === selectedCategoryObj?.label;

    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.journal.toLowerCase().includes(q) ||
      item.slug.toLowerCase().includes(q) ||
      (rawItem && (rawItem.title.toLowerCase().includes(q) || rawItem.excerpt.toLowerCase().includes(q)));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-bg min-h-screen text-slate-800 flex flex-col justify-between">
      <HeaderNavbar />
      <StickyLeftNavigation />

      <main className="pt-24 md:pt-28 pb-16">
        {/* Breadcrumb Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-[#EA3484] flex items-center gap-1">
              <HomeIcon className="h-3.5 w-3.5" />
              <span>{t("nav.home", "Home")}</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-semibold text-[#172554]">
              {t("scientificEvidence.badge", "Scientific Evidence & Research")}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-[#FFF5F9] via-[#FFFDFE] to-[#FFF8FD] border-y border-pink-100/70 overflow-hidden">
          <div className="pointer-events-none absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#EA3484] shadow-xs">
              <Microscope className="h-3.5 w-3.5" />
              <span>{t("scientificEvidence.badge", "AstroBaby Clinical Evidence Hub")}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172554] tracking-tight leading-[1.2]">
              {t("scientificEvidence.hub.titleStart", "Scientific Evidence & Clinical Validation of")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA3484] to-[#F45B8A]">
                {t("scientificEvidence.hub.titleHighlight", "Garbh Sanskar")}
              </span>
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto" />

            <p className="text-sm md:text-base text-[#475569] max-w-3xl mx-auto leading-relaxed">
              {t(
                "scientificEvidence.hub.subtitle",
                "Explore 10 peer-reviewed clinical research papers, in-utero neurodevelopmental trials, and biochemical studies indexed across NIH PubMed, The Lancet, and AYUSH confirming the transformative efficacy of prenatal Vedic practices."
              )}
            </p>

            {/* Search & Filter Bar */}
            <div className="pt-6 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={t(
                    "scientificEvidence.hub.searchPlaceholder",
                    "Search by topic, keyword (e.g. music, cortisol, yoga, nutrition, sleep)..."
                  )}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/95 rounded-2xl border border-pink-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EA3484]/40 text-sm"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategoryKey(cat.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      selectedCategoryKey === cat.key
                        ? "bg-[#172554] text-white shadow-md scale-105"
                        : "bg-white/90 text-slate-600 hover:bg-pink-50 hover:text-[#EA3484] border border-pink-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10 Research Papers Grid (Sacred Vedic Programs Box Style) */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-[30px] bg-white/95 backdrop-blur-xl border border-pink-100/90 p-6 shadow-[0_12px_35px_rgba(23,37,84,0.06)] hover:shadow-[0_22px_55px_rgba(234,52,132,0.14)] hover:border-[#F45B8A]/70 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#172554] via-[#EA3484] to-[#F45B8A] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Image header */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 border border-pink-100/80 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/garbh_dan_banner.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#172554] shadow-xs">
                        <Activity className="h-3 w-3 text-[#EA3484]" />
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white/90">
                        <Award className="h-3 w-3 text-amber-400" />
                        {item.publishedYear}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="text-xs font-extrabold text-[#172554]">{item.keyStat}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium truncate max-w-[150px]">
                        {item.journal.split("&")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-[#EA3484] uppercase tracking-wider">
                      {item.badge}
                    </div>
                    <h3 className="text-lg font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors leading-snug line-clamp-2">
                      <Link to={`/scientific-evidence/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 font-normal">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-4 border-t border-pink-100/70 flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/scientific-evidence/${item.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#172554] to-[#1e3a8a] px-3.5 py-2 text-xs font-semibold text-white hover:from-[#EA3484] hover:to-[#F45B8A] shadow-xs transition-all duration-300"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{t("scientificEvidence.readPaper", "Read Full Paper")}</span>
                  </Link>

                  {item.externalUrl && (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Official Clinical Study / Source"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-pink-200/90 bg-pink-50/80 px-3.5 py-2 text-xs font-semibold text-[#EA3484] hover:bg-[#EA3484] hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>{t("scientificEvidence.source", "Source")}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white/60 rounded-3xl border border-pink-100 p-8">
              <p className="text-sm text-slate-500">
                {t("scientificEvidence.hub.noResults", "No scientific evidence articles found matching your criteria.")}
              </p>
              <button
                onClick={() => {
                  setSelectedCategoryKey("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-[#EA3484] text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                {t("scientificEvidence.hub.reset", "Reset Filters")}
              </button>
            </div>
          )}
        </section>

        {/* Global Medical Advisory Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="rounded-3xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#172554] p-8 md:p-10 text-white relative overflow-hidden shadow-xl border border-pink-200/20">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-pink-300 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>{t("scientificEvidence.bannerBadge", "Rigorous Evidence-Based Standards")}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.25] tracking-tight text-white">
                {t("scientificEvidence.bannerHeadingStart", "Peer-Reviewed Science Meets")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
                  {t("scientificEvidence.bannerHeadingHighlight", "Time-Tested Vedic Wisdom")}
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                {t(
                  "scientificEvidence.bannerDescription",
                  "All AstroBaby scientific papers and clinical summaries are audited by our multidisciplinary board of OB-GYNs, neuroscientists, Ayurvedic physicians, and embryologists to ensure absolute medical safety and clinical integrity."
                )}
              </p>
            </div>
          </div>
        </section>
      </main>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
