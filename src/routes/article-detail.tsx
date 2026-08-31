import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Clock,
  Calendar,
  ChevronRight,
  Share2,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  User,
  HelpCircle,
  ShieldAlert,
  ChevronDown,
  Compass,
  Languages,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import Footer from "@/components/common/Footer";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import {
  findArticleAnyHub,
  getRelatedArticles,
  getLocalizedArticle,
  HubType,
  Article,
} from "@/data/articlesData";

export default function ArticleDetailPage({ defaultHub }: { defaultHub?: HubType }) {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Match article from database
  const rawArticle: Article | undefined = useMemo(() => {
    if (!slug) return undefined;
    return findArticleAnyHub(slug);
  }, [slug]);

  const article: Article | undefined = useMemo(() => {
    if (!rawArticle) return undefined;
    return getLocalizedArticle(rawArticle, currentLanguage.code);
  }, [rawArticle, currentLanguage]);

  // Determine parent hub
  const hub: HubType = article?.hub || defaultHub || "garbh-sanskar";

  const hubMeta = useMemo(() => {
    switch (hub) {
      case "garbh-sanskar":
        return {
          title: "Garbh Sanskar",
          link: "/garbh-sanskar",
          badgeBg: "bg-pink-50 text-[#F45B8A]",
        };
      case "pregnancy":
        return {
          title: "Pregnancy Care",
          link: "/pregnancy",
          badgeBg: "bg-rose-50 text-rose-600",
        };
      case "how-to":
        return {
          title: "How-To Guides",
          link: "/how-to",
          badgeBg: "bg-purple-50 text-purple-600",
        };
      default:
        return {
          title: "Resources",
          link: "/garbh-sanskar",
          badgeBg: "bg-pink-50 text-[#F45B8A]",
        };
    }
  }, [hub]);

  // Related articles
  const related = useMemo(() => {
    if (!article) return [];
    return getRelatedArticles(article, 4);
  }, [article]);

  // Filter Table of Contents to ONLY include items with available content sections
  const validToc = useMemo(() => {
    if (!article || !article.sections || article.sections.length === 0) return [];

    // If tableOfContents exists, only take items up to the number of actual sections available
    if (article.tableOfContents && article.tableOfContents.length > 0) {
      return article.tableOfContents.slice(0, article.sections.length).map((toc, idx) => ({
        id: toc.id || `section-${idx}`,
        title: toc.title || article.sections[idx]?.heading || `Section ${idx + 1}`,
      }));
    }

    // Otherwise generate from sections if more than 1 section
    if (article.sections.length > 1) {
      return article.sections.map((sec, idx) => ({
        id: `section-${idx}`,
        title: sec.heading,
      }));
    }

    return [];
  }, [article]);

  // Update HTML document title and meta description
  useEffect(() => {
    if (article) {
      document.title = `${article.metaTitle || article.title} | Astro Baby`;
    }
    window.scrollTo(0, 0);
  }, [article, slug]);

  if (!article) {
    return <ArticleNotFound />;
  }

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -110;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to popover
      }
    }
    setShowShareModal((prev) => !prev);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Article Header & Breadcrumbs ── */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-14 bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE] border-b border-pink-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to={hubMeta.link} className="hover:text-[#F45B8A] transition-colors">
              {hubMeta.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold truncate max-w-[240px] sm:max-w-none">
              {article.title}
            </span>
          </nav>

          {/* Category & Vitals */}
          <div className="flex items-center gap-2.5 mb-4 flex-wrap">
            <span className={`px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-pink-200/80 shadow-2xs ${hubMeta.badgeBg}`}>
              {article.category}
            </span>
            <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F45B8A]" />
              {article.readTime}
            </span>
            <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              {article.date}
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#172554] leading-[1.2] tracking-tight">
            {article.title}
          </h1>

          {/* Author info & Share button */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-pink-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#172554] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                AB
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#172554] block">
                  {article.author.name}
                </span>
                <span className="text-slate-400 text-xs font-normal">{article.author.role}</span>
              </div>
            </div>

            {/* Language Switcher & Share Trigger */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Language Switcher Button */}
              <div className="inline-flex items-center gap-1 bg-white border border-pink-200/90 rounded-full p-1 shadow-2xs">
                <Languages className="w-3.5 h-3.5 text-[#EA3484] ml-2" />
                <button
                  type="button"
                  onClick={() => changeLanguage(languages[0])}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    currentLanguage.code === "en"
                      ? "bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#EA3484]"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => changeLanguage(languages[1])}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    currentLanguage.code === "hi"
                      ? "bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#EA3484]"
                  }`}
                >
                  हिन्दी
                </button>
              </div>

              {/* Share Trigger */}
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-full bg-white border border-pink-200 text-[#172554] text-xs font-bold hover:bg-pink-50 transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
                  aria-label="Share article"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#F45B8A]" />
                  <span>{currentLanguage.code === "hi" ? "शेयर करें" : "Share Guide"}</span>
                </button>

              {showShareModal && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-pink-100 p-3.5 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-1">
                    <span className="text-xs font-bold text-[#172554] uppercase tracking-wider">
                      Share Guide
                    </span>
                    <button
                      onClick={() => setShowShareModal(false)}
                      className="text-slate-400 hover:text-[#172554] text-xs p-1"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + " - " + window.location.href)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">
                        WA
                      </div>
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={handleCopyLink}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-pink-50 hover:text-[#F45B8A] transition-colors text-left cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-pink-100 text-[#F45B8A] flex items-center justify-center font-bold text-[10px]">
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </div>
                      <span>{copied ? "Link Copied! ✓" : "Copy Link"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ── Main Article Body Layout ── */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Article Content (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-pink-100/80 aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/9] bg-pink-50/30 relative">
              <LazyImage
                src={article.featuredImage}
                alt={article.title}
                fallbackSrc="/images/celestial_mother.png"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Short Introduction */}
            <div className="bg-gradient-to-r from-[#FFF6FA] to-white p-6 sm:p-7 rounded-3xl border-l-4 border-[#F45B8A] shadow-xs text-base sm:text-lg text-[#172554] font-medium leading-relaxed">
              {article.excerpt}
            </div>

            {/* Mobile / Tablet Table of Contents */}
            {validToc.length > 0 && (
              <div className="lg:hidden bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-3">
                <div className="font-bold text-[#172554] text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#F45B8A]" />
                  <span>{currentLanguage.code === "hi" ? "विषय सूची" : "Table of Contents"}</span>
                </div>
                <ul className="space-y-2 text-xs font-semibold text-slate-600 pl-2">
                  {validToc.map((toc, idx) => (
                    <li key={toc.id}>
                      <a
                        href={`#${toc.id}`}
                        onClick={(e) => scrollToSection(e, toc.id)}
                        className="hover:text-[#F45B8A] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                      >
                        <span className="text-[#F45B8A] font-bold">{idx + 1}.</span>
                        <span>{toc.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-10 text-[#475569] leading-relaxed text-base sm:text-lg font-normal">
              {article.sections.map((sec, idx) => (
                <div
                  key={idx}
                  id={validToc[idx]?.id || `section-${idx}`}
                  className="space-y-4 scroll-mt-28"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#172554] leading-snug pt-2">
                    {sec.heading}
                  </h2>

                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed text-slate-700">
                      {p}
                    </p>
                  ))}

                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 my-4 bg-pink-50/40 p-5 rounded-2xl border border-pink-100/70">
                      {sec.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                          <span className="w-2 h-2 rounded-full bg-[#F45B8A] mt-2 shrink-0" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.highlightQuote && (
                    <blockquote className="border-l-4 border-[#F45B8A] bg-gradient-to-r from-[#FFF5F9] to-white p-5 my-6 rounded-r-2xl text-[#172554] italic text-base sm:text-lg font-serif shadow-2xs">
                      "{sec.highlightQuote}"
                    </blockquote>
                  )}

                  {sec.tip && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 my-4">
                      <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>{currentLanguage.code === "hi" ? "वैदिक सुझाव:" : "Vedic Tip:"}</strong> {sec.tip}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive FAQs Section */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-pink-100 space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#F45B8A]" />
                  <h3 className="text-2xl font-bold text-[#172554]">
                    {currentLanguage.code === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                  </h3>
                </div>

                <div className="space-y-3">
                  {article.faqs.map((faq, fIdx) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className="bg-white rounded-2xl border border-pink-100 overflow-hidden shadow-2xs"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#172554] hover:text-[#F45B8A] transition-colors cursor-pointer text-sm sm:text-base"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-[#F45B8A]" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-pink-50 pt-3"
                            >
                              {faq.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Health & Medical Disclaimer */}
            <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 flex items-start gap-3 leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong>Medical Disclaimer:</strong> The information provided in this guide is for
                educational and spiritual enrichment purposes. It is not intended as a substitute
                for professional medical advice, diagnosis, or treatment. Always seek the advice of
                your obstetrician or qualified healthcare provider with any questions regarding your
                pregnancy.
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols on lg) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Desktop Table of Contents & Parent Hub Card */}
            <div className="hidden lg:block sticky top-28 bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4">
              {validToc.length > 0 && (
                <>
                  <div className="font-bold text-[#172554] text-sm flex items-center gap-2 pb-3 border-b border-pink-50">
                    <BookOpen className="w-4 h-4 text-[#F45B8A]" />
                    <span>Table of Contents</span>
                  </div>
                  <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
                    {validToc.map((toc, idx) => (
                      <li key={toc.id}>
                        <a
                          href={`#${toc.id}`}
                          onClick={(e) => scrollToSection(e, toc.id)}
                          className="hover:text-[#F45B8A] transition-colors flex items-start gap-2 leading-snug py-1 cursor-pointer"
                        >
                          <span className="text-[#F45B8A] font-bold">{idx + 1}.</span>
                          <span>{toc.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Hub Navigation Card */}
              {hubMeta?.link && (
                <div className={`pt-4 ${validToc.length > 0 ? "mt-4 border-t border-pink-100" : ""}`}>
                  <Link
                    to={hubMeta.link}
                    className="block p-4 rounded-2xl bg-pink-50/60 border border-pink-100 hover:bg-pink-50 transition-colors group cursor-pointer"
                  >
                    <div className="text-[11px] font-bold text-[#F45B8A] uppercase tracking-wider">
                      Parent Resource Hub
                    </div>
                    <div className="text-sm font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors mt-0.5 flex items-center justify-between">
                      <span>Explore all in {hubMeta.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* ── Related Articles Section ── */}
      {related.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-[#FFFDFE] to-[#FFF6FA] border-t border-pink-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-pink-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F45B8A]">
                  Continue Learning
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">Related Articles</h2>
              </div>
              <Link
                to={hubMeta.link}
                className="text-xs font-bold text-[#F45B8A] hover:text-[#d94d7a] flex items-center gap-1"
              >
                <span>View Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((relArt) => (
                <Link
                  key={relArt.id}
                  to={`/${relArt.hub}/${relArt.slug}`}
                  className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-xs hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <LazyImage
                      src={relArt.featuredImage}
                      alt={relArt.title}
                      fallbackSrc="/images/hero/hero-1.png"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#172554]/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {relArt.category}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <h3 className="font-bold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug line-clamp-2 text-sm">
                      {relArt.title}
                    </h3>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F45B8A]">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* App Download CTA */}
      <AppDownloadSection />
      <Footer />
    </div>
  );
}

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-[#FFFCFE]">
      <HeaderNavbar />
      <div className="py-32 text-center max-w-xl mx-auto px-4">
        <div className="w-16 h-16 bg-pink-50 text-[#F45B8A] rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-[#172554]">Article Not Found</h2>
        <p className="text-slate-600 mt-2 text-sm">
          The requested guide could not be found or may have been moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/garbh-sanskar"
            className="px-6 py-3 rounded-full bg-[#172554] text-white text-xs font-bold hover:bg-[#1e3a8a] transition-all"
          >
            Garbh Sanskar Hub
          </Link>
          <Link
            to="/pregnancy"
            className="px-6 py-3 rounded-full bg-[#F45B8A] text-white text-xs font-bold hover:bg-[#e04576] transition-all"
          >
            Pregnancy Hub
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
