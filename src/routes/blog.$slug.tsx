import { Link, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { Layout } from "./blog";
import NewsletterSection from "@/components/common/NewsletterSection";
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
          text: `Check out this Garbh Sanskar article: ${post.title}`,
          url: window.location.href,
        });
        return;
      } catch {
        // User cancelled or share failed, fallback to popover
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
      {/* Article Main Hero Split Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#1a3a6c] transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[#1a3a6c]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#1a3a6c] transition-colors">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-[#5A098F] font-semibold truncate max-w-[200px] sm:max-w-none">
              Article
            </span>
          </nav>

          {/* 2-Column Split: Video (Left) + Content (Right) */}
          <div className="bg-gradient-to-br from-[#FAF8FD] via-white to-[#FAF8FD] rounded-3xl p-6 md:p-8 border border-[#ECE5F6] shadow-sm grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Side: Video Player Container */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-slate-900 border border-slate-200/60 group">
                {isPlayingVideo ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/428EL1HqYRs?autoplay=1"
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src="/images/astrobaby_video_spotlight.jpg"
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Play Video Center Overlay Button */}
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="absolute inset-0 flex items-center justify-center group/btn"
                      aria-label="Play video guide"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#5A098F] to-[#7C3AED] text-white rounded-full flex items-center justify-center shadow-xl group-hover/btn:scale-110 transition-transform">
                        <svg className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>

                    {/* Left Top Badge */}
                    <span className="absolute top-3 left-3 bg-[#5A098F]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F472B6] animate-pulse" />
                      Garbh Sanskar Video
                    </span>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium drop-shadow-md">
                      Click to watch expert video guide
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Content Overview & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Category & Read Time Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-xs">
                    {category}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1">
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a3a6c] leading-tight">
                  {post.title}
                </h1>

                {/* Author & Date info */}
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 font-medium pb-4 border-b border-slate-200/60">
                  <div className="w-8 h-8 rounded-full bg-[#1a3a6c] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    AB
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block">Astro Baby Expert Team</span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>
                </div>

                {/* Short Excerpt */}
                <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed line-clamp-3">
                  {post.title} — pregnancy is one of the most beautiful and transformative phases in a
                  woman's life. This guide explores its significance through Garbh Sanskar, ancient wisdom,
                  and practical well-being practices.
                </p>
              </div>

              {/* Action Buttons: Read More & Share */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 sm:gap-3 flex-wrap">
                <button
                  onClick={handleToggleExpand}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1a3a6c] text-white text-xs sm:text-sm font-semibold hover:bg-[#122a4f] transition-all shadow-md flex items-center gap-2"
                >
                  <span>{isExpanded ? "Collapse Article ▲" : "Read Full Article ▼"}</span>
                </button>

                {/* Share Button & Popover */}
                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="px-4 py-2.5 sm:py-3 rounded-full bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 hover:border-[#1a3a6c] transition-all flex items-center gap-2 shadow-xs"
                    aria-label="Share article"
                  >
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-5.368 3 3 0 000 5.368zm0 9.316a3 3 0 100-5.368 3 3 0 000 5.368z" />
                    </svg>
                    <span>Share</span>
                  </button>

                  {/* Share Popover Menu */}
                  {showShareModal && (
                    <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-fadeIn">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-1">
                        <span className="text-xs font-bold text-[#1a3a6c] uppercase tracking-wider">
                          Share Article
                        </span>
                        <button
                          onClick={() => setShowShareModal(false)}
                          className="text-slate-400 hover:text-slate-600 text-xs p-1"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="space-y-1">
                        {/* WhatsApp */}
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                            WA
                          </div>
                          <span>WhatsApp</span>
                        </a>

                        {/* Facebook */}
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                            f
                          </div>
                          <span>Facebook</span>
                        </a>

                        {/* Twitter / X */}
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                            𝕏
                          </div>
                          <span>Twitter / X</span>
                        </a>

                        {/* Copy Link */}
                        <button
                          onClick={handleCopyLink}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors text-left"
                        >
                          <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">
                            🔗
                          </div>
                          <span>{copied ? "Link Copied! ✓" : "Copy Link"}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  className="ml-auto text-xs font-semibold text-red-600 hover:underline hidden sm:inline-block"
                >
                  Download App →
                </a>
              </div>
            </div>
          </div>

          {/* Expanded Full Article Section (Toggled by Read More) */}
          {isExpanded && (
            <div ref={fullArticleRef} className="mt-10 bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-lg animate-fadeIn">
              <div className="max-w-3xl mx-auto prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a6c] mb-4">
                  Introduction
                </h2>
                <p>
                  Garbh Sanskar is the practice of educating and nurturing the unborn child in the womb.
                  Rooted in ancient Indian scriptures, it emphasizes the powerful bond between mother and baby,
                  and how a mother's thoughts, food, environment, and spiritual practices influence the
                  child's physical, mental, and emotional development.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a6c] mt-10 mb-4">
                  Why Garbh Sanskar Matters
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Supports healthy fetal brain development and emotional bonding.</li>
                  <li>Reduces maternal stress, anxiety, and mood swings during pregnancy.</li>
                  <li>Encourages a positive lifestyle, nutritious sattvic diet, and daily wellness routine.</li>
                  <li>Instills sanskaars (positive virtues) in the baby even before birth.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a6c] mt-10 mb-4">
                  Practical Guidance & Daily Tips
                </h2>
                <p>
                  Include daily meditation, mantra chanting, satsang, spiritual reading, gentle yoga, and a
                  balanced diet in your routine. Communicate lovingly with your baby (Garbh Samvad), listen to
                  soothing Garbh Sanskar music, and surround yourself with positive thoughts and environment.
                </p>

                <blockquote className="border-l-4 border-red-600 bg-[#f7f5f0] p-5 my-8 rounded-r-xl text-slate-800 italic font-serif text-lg md:text-xl shadow-xs">
                  "A calm, happy, and spiritually connected mother gives birth to a healthy, intelligent,
                  and virtuous child."
                </blockquote>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a6c] mt-10 mb-4">
                  Conclusion
                </h2>
                <p>
                  Every moment of pregnancy is a golden opportunity to shape the future of your child. With
                  the guidance of Astro Baby Garbh Sanskar, thousands of mothers have experienced a
                  joyful, mindful, and spiritually enriched pregnancy journey.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="px-5 py-2 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-300 transition-colors"
                  >
                    Close Full Article ▲
                  </button>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    className="px-5 py-2.5 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors shadow-xs"
                  >
                    Download Astro Baby App
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* SCROLLABLE RELATED ARTICLES SECTION */}
      {related.length > 0 && (
        <section className="py-14 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] border-t border-pink-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Recommended For You
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a6c] mt-1">
                  Related Articles
                </h2>
              </div>

              {/* Scroll Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full bg-white text-[#1a3a6c] border border-slate-200 shadow-sm flex items-center justify-center hover:bg-[#1a3a6c] hover:text-white transition-all text-xl font-bold"
                  aria-label="Scroll left"
                >
                  ‹
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full bg-white text-[#1a3a6c] border border-slate-200 shadow-sm flex items-center justify-center hover:bg-[#1a3a6c] hover:text-white transition-all text-xl font-bold"
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
                    className="w-[290px] sm:w-[330px] md:w-[360px] flex-shrink-0 snap-start bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden group hover:-translate-y-1"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      <span className="absolute top-3 left-3 bg-[#1a3a6c]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                        {cat}
                      </span>
                      <span className="absolute top-3 right-3 bg-slate-900/75 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {rTime}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[#1a3a6c] group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                          {p.title}
                        </h3>
                        <div className="mt-2 text-xs text-slate-500 font-medium">
                          {p.date} • Astro Baby Team
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-red-600 group-hover:text-red-700">
                        <span>Read Full Article</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSection />

    </Layout>
  );
}

function BlogNotFound() {
  return (
    <Layout activeLabel="Blogs">
      <section className="py-24 text-center bg-[#f7f5f0]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a6c]">Article Not Found</h1>
        <p className="mt-3 text-slate-600">The blog post you're looking for doesn't exist.</p>
        <Link
          to="/blog"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-[#1a3a6c] text-white font-medium hover:bg-[#122a4f] shadow-sm"
        >
          Browse All Articles
        </Link>
      </section>
    </Layout>
  );
}

function BlogError() {
  return (
    <Layout activeLabel="Blogs">
      <section className="py-24 text-center bg-[#f7f5f0]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a6c]">Something Went Wrong</h1>
        <Link
          to="/blog"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-[#1a3a6c] text-white font-medium hover:bg-[#122a4f] shadow-sm"
        >
          Back to Blogs
        </Link>
      </section>
    </Layout>
  );
}

