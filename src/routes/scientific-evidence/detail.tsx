import { useState, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Activity,
  Award,
  FileText,
  ShieldCheck,
  Microscope,
  Home as HomeIcon,
  ChevronRight,
  Share2,
  Quote,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import StickyLeftNavigation from "@/components/common/StickyLeftNavigation";
import NewsletterSection from "@/components/common/NewsletterSection";
import Footer from "@/components/common/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  SCIENTIFIC_EVIDENCE_ITEMS,
  getScientificEvidenceBySlug,
  getLocalizedScientificItem,
  ScientificEvidenceItem,
} from "@/data/scientificEvidenceData";

interface Props {
  presetSlug?: string;
}

export default function ScientificEvidenceDetail({ presetSlug }: Props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const params = useParams<{ slug?: string }>();
  const slug = presetSlug || params.slug || "";
  const [copied, setCopied] = useState(false);

  const item = useMemo(() => {
    return getScientificEvidenceBySlug(slug, currentLang);
  }, [slug, currentLang]);

  if (!item) {
    return <Navigate to="/scientific-evidence" replace />;
  }

  const relatedItems = SCIENTIFIC_EVIDENCE_ITEMS.filter((i) => i.id !== item.id)
    .slice(0, 3)
    .map((rel) => getLocalizedScientificItem(rel, currentLang));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="home-bg min-h-screen text-slate-800 flex flex-col justify-between">
      <HeaderNavbar />
      <StickyLeftNavigation />

      <main className="pt-24 md:pt-28 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <Link to="/" className="hover:text-[#EA3484] flex items-center gap-1">
              <HomeIcon className="h-3.5 w-3.5" />
              <span>{t("nav.home", "Home")}</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/scientific-evidence" className="hover:text-[#EA3484]">
              {t("scientificEvidence.badge", "Scientific Evidence")}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-semibold text-[#172554] truncate max-w-[280px] sm:max-w-md">
              {item.shortTitle}
            </span>
          </nav>
        </div>

        {/* Paper Header Block */}
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#EA3484]">
                <Activity className="h-3.5 w-3.5" />
                {item.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1 text-xs font-semibold text-white">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                {item.badge}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                {item.doiOrPmid}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#172554] tracking-tight leading-[1.25]">
              {item.title}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              {item.excerpt}
            </p>

            {/* Quick Metadata Bar & Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/95 border border-pink-100/90 shadow-xs">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    {t("scientificEvidence.detail.journal", "Journal")}
                  </span>
                  <strong className="text-[#172554]">{item.journal}</strong>
                </div>
                <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    {t("scientificEvidence.detail.cohortSize", "Cohort Size")}
                  </span>
                  <strong className="text-[#172554]">{item.sampleSize}</strong>
                </div>
                <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    {t("scientificEvidence.detail.year", "Year")}
                  </span>
                  <strong className="text-[#172554]">{item.publishedYear}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>
                    {copied
                      ? t("scientificEvidence.detail.copied", "Link Copied!")
                      : t("scientificEvidence.detail.share", "Share")}
                  </span>
                </button>

                {item.externalUrl && (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] px-4 py-2 text-xs font-bold text-white shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 cursor-pointer"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>{t("scientificEvidence.detail.viewSource", "View Official Study")}</span>
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* Feature Thematic Visual with Key Statistic Overlay */}
          <div className="relative h-[260px] sm:h-[380px] md:h-[440px] w-full rounded-3xl overflow-hidden mb-10 border border-pink-200/80 shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/images/garbh_dan_banner.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

            {/* Key Stat Floating Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold text-[#EA3484] uppercase tracking-wider block">
                  {t("scientificEvidence.detail.endpoint", "Primary Clinical Endpoint & Outcome")}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                  {item.statLabel}
                </p>
              </div>
              <div className="shrink-0 bg-gradient-to-r from-[#172554] to-[#1e3a8a] text-white px-4 py-2 rounded-xl text-center shadow-sm">
                <span className="text-xl sm:text-2xl font-black text-pink-300 block leading-none">
                  {item.keyStat}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-300">
                  {t("scientificEvidence.detail.verified", "Verified Result")}
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Columns: Structured Research Deep-Dive */}
            <div className="lg:col-span-2 space-y-8">
              {/* Abstract */}
              <section className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-sm space-y-3">
                <h2 className="text-xl font-bold text-[#172554] flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#EA3484]" />
                  <span>{t("scientificEvidence.detail.abstract", "1. Structured Clinical Abstract")}</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA3484] rounded-full" />
                <p className="text-sm text-[#475569] leading-relaxed pt-2 font-normal">
                  {item.abstract}
                </p>
              </section>

              {/* Scientific Mechanism */}
              <section className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-sm space-y-3">
                <h2 className="text-xl font-bold text-[#172554] flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-[#EA3484]" />
                  <span>{t("scientificEvidence.detail.mechanism", "2. Biological & Neuro-Epigenetic Mechanism")}</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA3484] rounded-full" />
                <p className="text-sm text-[#475569] leading-relaxed pt-2 font-normal">
                  {item.scientificMechanism}
                </p>
              </section>

              {/* Ancient Vedic Garbh Sanskar Correlation */}
              <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#FFF5F9] via-[#FFFDFE] to-pink-50 border border-pink-200/90 shadow-sm space-y-3">
                <span className="text-[11px] font-bold text-[#EA3484] uppercase tracking-widest block">
                  {t("resources.garbhSanskar.badge", "Vedic Wisdom Integration")}
                </span>
                <h2 className="text-xl font-bold text-[#172554] flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  <span>{t("scientificEvidence.detail.vedic", "3. Classical Vedic Garbh Sanskar Foundation")}</span>
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full" />
                <p className="text-sm text-[#475569] leading-relaxed pt-2 italic">
                  "{item.vedicCorrelation}"
                </p>
              </section>

              {/* Key Findings List */}
              <section className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-[#172554] flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>{t("scientificEvidence.detail.findings", "4. Key Clinical Findings")}</span>
                </h2>
                <div className="w-16 h-1 bg-emerald-500 rounded-full" />

                <ul className="space-y-3 pt-2">
                  {item.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#475569]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Clinical Takeaways for Parents */}
              <section className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-[#172554] flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#EA3484]" />
                  <span>{t("scientificEvidence.detail.guidance", "5. Actionable Guidance for Parents")}</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA3484] rounded-full" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {item.clinicalTakeaways.map((takeaway, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl p-4 bg-gradient-to-b from-[#FFF5F9] to-white border border-pink-100/80 space-y-1.5"
                    >
                      <h4 className="text-sm font-bold text-[#172554]">{takeaway.title}</h4>
                      <p className="text-xs text-[#475569] leading-relaxed font-normal">
                        {takeaway.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-[#172554] flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-[#EA3484]" />
                  <span>{t("scientificEvidence.detail.faqs", "Frequently Asked Clinical Questions")}</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA3484] rounded-full" />

                <Accordion type="single" collapsible defaultValue="item-0" variant="theme">
                  {item.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} variant="theme">
                      <AccordionTrigger variant="theme">{faq.question}</AccordionTrigger>
                      <AccordionContent variant="theme">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Academic Citations */}
              <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-3">
                <h2 className="text-base font-bold text-[#172554] uppercase tracking-wider">
                  {t("scientificEvidence.detail.references", "Peer-Reviewed Citations & References")}
                </h2>
                <ul className="space-y-3 pt-2">
                  {item.references.map((ref, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-relaxed">
                      <strong>{ref.authors}</strong> ({ref.year}). <em>{ref.title}</em>. {ref.publication}.
                      {ref.link && (
                        <div className="mt-1">
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EA3484] hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span>{t("scientificEvidence.detail.visitLink", "View Indexed Medical Record on Source Portal →")}</span>
                          </a>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right 1 Column: Sidebar with Doctor Quote, Official Source Widget & Other Papers */}
            <div className="space-y-6">
              {/* Doctor Endorsement Card */}
              <div className="rounded-3xl p-6 bg-gradient-to-br from-[#172554] to-[#1e3a8a] text-white space-y-4 shadow-lg">
                <Quote className="h-8 w-8 text-pink-400 opacity-60" />
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  "{item.doctorQuote.quote}"
                </p>
                <div className="pt-2 border-t border-blue-900/60">
                  <h4 className="text-sm font-bold text-white">{item.doctorQuote.author}</h4>
                  <p className="text-xs text-pink-300 font-medium">{item.doctorQuote.designation}</p>
                </div>
              </div>

              {/* Official Research Source Widget */}
              <div className="rounded-3xl p-6 bg-white/95 border-2 border-[#EA3484]/30 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-[#EA3484]" />
                  <h3 className="text-base font-bold text-[#172554]">
                    {t("scientificEvidence.detail.sourceTitle", "Official Research Publication")}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(
                    "scientificEvidence.detail.sourceDesc",
                    "Access the original peer-reviewed publication and indexed medical records directly on PubMed, NIH, WHO, or NHS."
                  )}
                </p>
                {item.externalUrl && (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] py-3 text-xs font-bold text-white shadow-md hover:brightness-105 transition-all cursor-pointer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{t("scientificEvidence.detail.visitSourceBtn", "Open Official Study (External Link)")}</span>
                  </a>
                )}
              </div>

              {/* Related Papers Navigation */}
              <div className="rounded-3xl p-6 bg-white/95 border border-pink-100 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-[#172554]">
                  {t("scientificEvidence.detail.relatedTitle", "Related Evidence Papers")}
                </h3>
                <div className="space-y-3">
                  {relatedItems.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/scientific-evidence/${rel.slug}`}
                      className="group block p-3 rounded-xl hover:bg-pink-50/70 border border-transparent hover:border-pink-200/80 transition-all"
                    >
                      <span className="text-[10px] font-bold text-[#EA3484] uppercase block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-bold text-[#172554] group-hover:text-[#EA3484] transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <span className="text-[10px] text-slate-500 mt-1 inline-flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        {rel.keyStat}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/scientific-evidence"
                  className="block text-center text-xs font-bold text-[#EA3484] hover:underline pt-2"
                >
                  {t("scientificEvidence.detail.viewAllPapers", "View All 10 Research Papers →")}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
