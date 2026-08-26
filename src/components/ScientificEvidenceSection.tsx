import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  BookOpen,
  Download,
  ArrowRight,
  CheckCircle2,
  Activity,
  Award,
  FileText,
  ShieldCheck,
  Microscope,
} from "lucide-react";
import { SCIENTIFIC_EVIDENCE_ITEMS, ScientificEvidenceItem } from "@/data/scientificEvidenceData";
import { downloadResearchPaper } from "@/utils/downloadResearchPaper";

export default function ScientificEvidenceSection() {
  const { t } = useTranslation();
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (item: ScientificEvidenceItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDownloadingId(item.id);
    downloadResearchPaper(item);
    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  // Divide 10 items into Left column and Right column sets for side auto scroll
  const leftColumnItems = SCIENTIFIC_EVIDENCE_ITEMS.slice(0, 5);
  const rightColumnItems = SCIENTIFIC_EVIDENCE_ITEMS.slice(5, 10);

  // Duplicate for seamless infinite loop
  const leftScrollItems = [...leftColumnItems, ...leftColumnItems];
  const rightScrollItems = [...rightColumnItems, ...rightColumnItems];
  const horizontalMarqueeItems = [...SCIENTIFIC_EVIDENCE_ITEMS, ...SCIENTIFIC_EVIDENCE_ITEMS];

  const renderCard = (item: ScientificEvidenceItem, isCompact = false) => (
    <div
      key={`${item.id}-${Math.random()}`}
      className="group relative flex flex-col justify-between rounded-[26px] bg-white/95 backdrop-blur-xl border border-pink-100/90 p-4 sm:p-5 shadow-[0_10px_30px_rgba(23,37,84,0.06)] hover:shadow-[0_20px_50px_rgba(234,52,132,0.18)] hover:border-[#F45B8A]/80 transition-all duration-300 overflow-hidden shrink-0"
    >
      {/* Glowing Accent Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#172554] via-[#EA3484] to-[#F45B8A] opacity-80 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Thematic AI Image Header with Dark Gradient Overlay */}
        <div className="relative h-32 sm:h-36 w-full rounded-xl overflow-hidden mb-3 border border-pink-100/80 shadow-inner">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/images/garbh_dan_banner.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#172554] shadow-xs">
              <Activity className="h-2.5 w-2.5 text-[#EA3484]" />
              {item.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-semibold text-white/90">
              <Award className="h-2.5 w-2.5 text-amber-400" />
              {item.publishedYear}
            </span>
          </div>

          {/* Key Stat Pill on Image */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-lg px-2.5 py-1 shadow-sm">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span className="text-[11px] font-extrabold text-[#172554]">{item.keyStat}</span>
            </div>
            <span className="text-[9px] text-slate-500 font-medium truncate max-w-[120px]">
              {item.journal.split("&")[0]}
            </span>
          </div>
        </div>

        {/* Content Block */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-bold text-[#EA3484] uppercase tracking-wider">
            {item.badge}
          </div>
          <h3 className="text-sm sm:text-base font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors leading-snug line-clamp-2">
            <Link to={`/scientific-evidence/${item.slug}`}>{item.title}</Link>
          </h3>
          <p className="text-[11px] text-[#475569] leading-relaxed line-clamp-2 font-normal">
            {item.excerpt}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 pt-3 border-t border-pink-100/70 flex items-center gap-2">
        <Link
          to={`/scientific-evidence/${item.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#172554] to-[#1e3a8a] px-2.5 py-1.5 text-[11px] font-semibold text-white hover:from-[#EA3484] hover:to-[#F45B8A] shadow-xs transition-all duration-300"
        >
          <BookOpen className="h-3 w-3" />
          <span>{t("scientificEvidence.readPaper", "Read")}</span>
        </Link>

        <button
          onClick={(e) => handleDownload(item, e)}
          disabled={downloadingId === item.id}
          title="Download Official Research Summary Brief (PDF/HTML)"
          className="inline-flex items-center justify-center gap-1 rounded-xl border border-pink-200/90 bg-pink-50/80 px-2.5 py-1.5 text-[11px] font-semibold text-[#EA3484] hover:bg-[#EA3484] hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
        >
          {downloadingId === item.id ? (
            <div className="h-3 w-3 animate-spin rounded-full border-2 border-[#EA3484] border-t-transparent" />
          ) : (
            <>
              <Download className="h-3 w-3" />
              <span>{t("scientificEvidence.downloadPdf", "Paper")}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative pt-3 sm:pt-6 pb-12 md:pb-16 bg-gradient-to-b from-[#FFF8FD] via-[#FFFDFE] to-[#FFF5F9] overflow-hidden border-b border-pink-100/70">
      {/* Ambient decorative glowing blobs */}
      <div className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ── DESKTOP & TABLET: 3-COLUMN SHOWCASE (Matching User Reference Image with Side Auto Scroll) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center min-h-[580px]">
          {/* 1. Left Column: Continuous Auto-Scroll Up Track */}
          <div className="lg:col-span-3 h-[560px] overflow-hidden relative rounded-3xl p-1">
            {/* Top and bottom fade masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FFF8FD] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FFF5F9] to-transparent z-10" />

            <div className="flex flex-col gap-4 animate-auto-scroll-up pause-on-hover">
              {leftScrollItems.map((item, idx) => (
                <div key={`left-${item.id}-${idx}`}>{renderCard(item)}</div>
              ))}
            </div>
          </div>

          {/* 2. Center Column: Hero Header, Badges & Main CTA */}
          <div className="lg:col-span-6 text-center px-4 space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/90 bg-pink-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
                <Microscope className="h-3.5 w-3.5 text-[#EA3484]" />
                <span>{t("scientificEvidence.badge", "Scientific Evidence & Clinical Trials")}</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.2] text-[#172554] tracking-tight"
            >
              {t("scientificEvidence.heading", "Bridging Ancient Garbh Sanskar with")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA3484] to-[#F45B8A]">
                {t("scientificEvidence.headingHighlight", "Modern Medical Science")}
              </span>
            </motion.h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto" />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm md:text-base leading-relaxed text-[#475569] font-normal max-w-lg mx-auto"
            >
              {t(
                "scientificEvidence.subtitle",
                "Explore peer-reviewed medical studies, neuro-developmental research, and clinical validation across prenatal music, meditation, maternal bonding, and fetal genomics."
              )}
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-3 pt-2 max-w-md mx-auto"
            >
              <div className="rounded-2xl bg-white/90 border border-pink-100 p-2.5 shadow-xs">
                <span className="block text-base font-extrabold text-[#172554]">10+</span>
                <span className="text-[10px] text-slate-500 font-medium">Clinical Papers</span>
              </div>
              <div className="rounded-2xl bg-white/90 border border-pink-100 p-2.5 shadow-xs">
                <span className="block text-base font-extrabold text-[#EA3484]">Level 1A</span>
                <span className="text-[10px] text-slate-500 font-medium">Evidence RCTs</span>
              </div>
              <div className="rounded-2xl bg-white/90 border border-pink-100 p-2.5 shadow-xs">
                <span className="block text-base font-extrabold text-emerald-600">PubMed</span>
                <span className="text-[10px] text-slate-500 font-medium">Indexed Trials</span>
              </div>
            </motion.div>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                to="/scientific-evidence"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-xl hover:brightness-105 hover:scale-105 transition-all duration-300"
              >
                <span>{t("scientificEvidence.viewAll", "Explore All 10 Research Papers")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* 3. Right Column: Continuous Auto-Scroll Down Track */}
          <div className="lg:col-span-3 h-[560px] overflow-hidden relative rounded-3xl p-1">
            {/* Top and bottom fade masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FFF8FD] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FFF5F9] to-transparent z-10" />

            <div className="flex flex-col gap-4 animate-auto-scroll-down pause-on-hover">
              {rightScrollItems.map((item, idx) => (
                <div key={`right-${item.id}-${idx}`}>{renderCard(item)}</div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE & TABLET: CENTER HEADER + HORIZONTAL AUTO-SCROLL MARQUEE ── */}
        <div className="lg:hidden space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/90 bg-pink-50/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#EA3484]">
              <Microscope className="h-3 w-3 text-[#EA3484]" />
              <span>{t("scientificEvidence.badge", "Scientific Evidence & Clinical Trials")}</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#172554] tracking-tight leading-snug">
              {t("scientificEvidence.heading", "Bridging Ancient Garbh Sanskar with")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA3484] to-[#F45B8A]">
                {t("scientificEvidence.headingHighlight", "Modern Medical Science")}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto">
              {t(
                "scientificEvidence.subtitle",
                "Explore peer-reviewed medical studies, neuro-developmental research, and clinical validation across prenatal music, meditation, maternal bonding, and fetal genomics."
              )}
            </p>
          </div>

          {/* Horizontal Side Auto-Scroll Container */}
          <div className="relative overflow-hidden py-2 -mx-4 sm:mx-0">
            {/* Left and right fade gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#FFF8FD] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FFF5F9] to-transparent z-10" />

            <div className="flex gap-4 animate-auto-scroll-left pause-on-hover w-max px-4">
              {horizontalMarqueeItems.map((item, idx) => (
                <div key={`h-${item.id}-${idx}`} className="w-[280px] sm:w-[310px]">
                  {renderCard(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/scientific-evidence"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] px-6 py-3 text-xs font-bold text-white shadow-md"
            >
              <span>{t("scientificEvidence.viewAll", "Explore All 10 Research Pages")}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
