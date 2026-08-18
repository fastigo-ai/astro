import { Link, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { Layout } from "./blog";
import {
  Sparkles,
  Heart,
  Clock,
  Calendar,
  ChevronRight,
  Share2,
  Copy,
  Check,
  Play,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import {
  posts,
  slugify,
  getPostCategory,
  getReadTime,
  getPostImage,
  type Post,
} from "../data/blogs";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fullArticleRef = useRef<HTMLDivElement>(null);

  const post = posts.find((p) => slugify(p.title) === slug);
  if (!post) return <BlogNotFound />;

  const currentIdx = posts.findIndex((p) => slugify(p.title) === slugify(post.title));
  const category = getPostCategory(post.title);
  const readTime = getReadTime(post.title);

  // Fetch related articles (prefer same category first)
  const related = posts
    .filter((_, i) => i !== currentIdx)
    .sort((a, b) => (getPostCategory(a.title) === category ? -1 : 1))
    .slice(0, 8);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: `Check out this Garbhadhan Sanskar article: ${post.title}`,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to modal
      }
    }
    setShowShareModal((prev) => !prev);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleToggleExpand = () => {
    const nextState = !isExpanded;
    setIsExpanded(nextState);
    if (nextState && fullArticleRef.current) {
      setTimeout(() => {
        fullArticleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <Layout activeLabel="Blogs">
      {/* ── Article Main Hero Split Section ── */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#FFFCFE] border-b border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/blog" className="hover:text-[#F45B8A] transition-colors">
              Blogs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </span>
          </nav>

          {/* 2-Column Split: Video (Left) + Content (Right) */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 md:p-10 border border-pink-100 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.08)] grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Video Player Container */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative aspect-video rounded-[24px] overflow-hidden shadow-xl bg-slate-900 border-2 border-white group">
                {isPlayingVideo ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HSHnKz5Po1w?autoplay=1"
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src="/images/astrobaby_video_spotlight.jpg"
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Play Video Center Overlay Button */}
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="absolute inset-0 flex items-center justify-center group/btn"
                      aria-label="Play video guide"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white rounded-full flex items-center justify-center shadow-2xl group-hover/btn:scale-110 transition-transform border-2 border-white/80">
                        <Play className="w-7 h-7 md:w-8 md:h-8 fill-white ml-1 text-white" />
                      </div>
                    </button>

                    {/* Left Top Badge */}
                    <span className="absolute top-3.5 left-3.5 bg-[#172554]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F45B8A] animate-pulse" />
                      Video Insight
                    </span>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3.5 left-4 right-4 text-white text-xs font-medium drop-shadow-md">
                      Click to watch expert Garbhadhan Sanskar guidance
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Content Overview & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                {/* Category & Read Time Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3.5 py-1 bg-[#F45B8A]/10 text-[#F45B8A] text-xs font-semibold uppercase tracking-wider rounded-full border border-pink-200/60 shadow-xs">
                    {category}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F45B8A]" />
                    {readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172554] leading-[1.2] tracking-tight">
                  {post.title}
                </h1>

                {/* Author & Date info */}
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 font-normal pb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-[#172554] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    AB
                  </div>
                  <div>
                    <span className="font-semibold text-[#172554] block">
                      Astro Baby Expert Faculty
                    </span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                </div>

                {/* Short Excerpt */}
                <p className="mt-4 text-[#475569] text-sm sm:text-base leading-relaxed font-normal">
                  {post.title} — Pregnancy is one of the most transformative, divine milestones in
                  life. This guide illuminates essential Vedic traditions, gynecological care, and
                  conscious prenatal practices to ensure optimal development for both mother and
                  child.
                </p>
              </div>

              {/* Action Buttons: Read More & Share */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3 flex-wrap">
                <button
                  onClick={handleToggleExpand}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-[#F45B8A]/30 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>{isExpanded ? "Collapse Article ▲" : "Read Full Article ▼"}</span>
                </button>

                {/* Share Button & Popover */}
                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="px-5 py-3 rounded-full bg-white border border-pink-200 text-[#172554] text-xs sm:text-sm font-semibold hover:bg-pink-50 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                    aria-label="Share article"
                  >
                    <Share2 className="w-4 h-4 text-[#F45B8A]" />
                    <span>Share</span>
                  </button>

                  {/* Share Popover Menu */}
                  {showShareModal && (
                    <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-pink-100 p-3.5 z-50 animate-fadeIn">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-1">
                        <span className="text-xs font-semibold text-[#172554] uppercase tracking-wider">
                          Share Article
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
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                            WA
                          </div>
                          <span>WhatsApp</span>
                        </a>

                        <button
                          onClick={handleCopyLink}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-pink-50 hover:text-[#F45B8A] transition-colors text-left cursor-pointer"
                        >
                          <div className="w-7 h-7 rounded-full bg-pink-100 text-[#F45B8A] flex items-center justify-center font-bold text-xs">
                            {copied ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
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

          {/* ── Expanded Full Article Section ── */}
          {isExpanded && (
            <div
              ref={fullArticleRef}
              className="mt-10 bg-white rounded-[32px] p-6 sm:p-10 md:p-14 border border-pink-100 shadow-xl animate-fadeIn"
            >
              <div className="max-w-3xl mx-auto space-y-6 text-[#475569] leading-relaxed text-base sm:text-lg font-normal">
                <h2 className="text-2xl md:text-3xl font-bold text-[#172554]">
                  Understanding the Science of Garbhadhan Sanskar
                </h2>
                <p>
                  Garbhadhan Sanskar is the sacred process of educating and nurturing the baby right
                  inside the womb. Rooted in authentic Ayurvedic treatises and the Vedas, it
                  emphasizes that a mother's mental state, satvik diet, sensory inputs, and
                  environment directly sculpt the child's neurological and psychological
                  development.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-[#172554] pt-4">
                  Why Garbhadhan Sanskar Is Essential in Modern Pregnancy
                </h2>
                <ul className="list-disc pl-6 space-y-2.5 text-[#475569]">
                  <li>
                    Fosters early cognitive development, neural synaptogenesis, and emotional
                    equilibrium.
                  </li>
                  <li>Significantly reduces maternal stress hormone (cortisol) production.</li>
                  <li>
                    Promotes balanced nutrition, prenatal yoga flexibility, and joyful bonding
                    between partners.
                  </li>
                  <li>
                    Instills profound spiritual sanskars, courage, and virtue even before the child
                    takes their first breath.
                  </li>
                </ul>

                <blockquote className="border-l-4 border-[#F45B8A] bg-gradient-to-r from-[#FFF6FA] to-white p-6 my-8 rounded-r-2xl text-[#172554] italic text-xl md:text-2xl shadow-xs">
                  "A serene, joyful, and spiritually attuned mother gifts the world a healthy,
                  brilliant, and virtuous soul."
                </blockquote>

                <h2 className="text-2xl md:text-3xl font-bold text-[#172554] pt-4">
                  Daily Practices for Expectant Mothers
                </h2>
                <p>
                  Incorporate daily 15-minute Garbh Samvad (mother-baby dialogue), listening to
                  specific Raga-based mantras, practicing gentle pelvic-floor pranayama, and
                  maintaining an uplifting, peaceful atmosphere at home.
                </p>

                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Close Full Article ▲
                  </button>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs font-semibold hover:shadow-lg transition-all shadow-sm"
                  >
                    Download Astro Baby App →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Scrollable Related Articles Section ── */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] border-t border-pink-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-pink-200/80">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-sm mb-1.5">
                  <Sparkles className="h-3 w-3" /> Recommended Reads
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#172554]">Related Articles</h2>
              </div>

              {/* Scroll Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full bg-white text-[#172554] border border-pink-200 shadow-sm flex items-center justify-center hover:bg-[#172554] hover:text-white transition-all font-bold cursor-pointer"
                  aria-label="Scroll left"
                >
                  ‹
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full bg-white text-[#172554] border border-pink-200 shadow-sm flex items-center justify-center hover:bg-[#172554] hover:text-white transition-all font-bold cursor-pointer"
                  aria-label="Scroll right"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Carousel */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {related.map((p: Post, i: number) => {
                const cat = getPostCategory(p.title);
                const rTime = getReadTime(p.title);
                return (
                  <Link
                    key={i}
                    to={`/blog/${slugify(p.title)}`}
                    className="w-[290px] sm:w-[330px] md:w-[360px] shrink-0 snap-start bg-white rounded-[26px] shadow-[0_10px_30px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_45px_rgba(244,91,138,0.12)] transition-all duration-300 border border-pink-100 flex flex-col overflow-hidden group hover:-translate-y-1"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={getPostImage(p, i)}
                        alt={p.title}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/images/story_thumb_1.png";
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      <span className="absolute top-3 left-3 bg-[#172554]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-0.5 rounded-full shadow-sm">
                        {cat}
                      </span>
                      <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Clock className="w-3 h-3 text-pink-300" />
                        {rTime}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <h3 className="text-lg font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug line-clamp-2">
                        {p.title}
                      </h3>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#F45B8A]">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* App Download Section */}
      <AppDownloadSection />
    </Layout>
  );
}

function BlogNotFound() {
  return (
    <Layout activeLabel="Blogs">
      <div className="py-28 text-center max-w-xl mx-auto px-4">
        <div className="w-16 h-16 bg-pink-50 text-[#F45B8A] rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-[#172554]">Article Not Found</h2>
        <p className="text-slate-600 mt-2 text-sm font-normal">
          The article you are looking for may have been moved or updated.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#172554] text-white text-xs font-semibold hover:bg-[#1e3a8a] transition-all"
        >
          <span>Explore All Articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Layout>
  );
}
