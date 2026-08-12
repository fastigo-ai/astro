import { Link } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
import { gsap } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import {
  type Post,
  posts,
  slugify,
  getPostCategory,
  getReadTime,
  getPostImage,
} from "../data/blogs";

export function Layout({
  children,
  activeLabel,
}: {
  children: React.ReactNode;
  activeLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <HeaderNavbar />

      {children}

      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.</div>
          <div className="flex gap-4 text-white/80 text-xs font-semibold">
            <span className="hover:text-white transition">Facebook</span>
            <span>•</span>
            <span className="hover:text-white transition">Instagram</span>
            <span>•</span>
            <span className="hover:text-white transition">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const CATEGORIES = [
  "All",
  "Garbhadhan Sanskar",
  "Trimester Guide",
  "Diet & Nutrition",
  "Health & Fitness",
  "Vedic & Mantras",
  "Pregnancy Care",
];

const ITEMS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const blogSectionRef = useRef<HTMLDivElement>(null);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const category = getPostCategory(p.title);
      const matchesCategory = selectedCategory === "All" || category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;

  // Ensure valid current page range
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  // Slice exactly 9 items for current page
  const currentArticles = useMemo(() => {
    const startIdx = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredPosts, safeCurrentPage]);

  useEffect(() => {
    if (!blogSectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-blog-card]",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "opacity,transform",
        },
      );
    }, blogSectionRef);
    return () => ctx.revert();
  }, [safeCurrentPage, selectedCategory, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Generate page numbers for pagination bar
  const paginationRange = useMemo(() => {
    const delta = 2;
    const range: (number | string)[] = [];
    for (
      let i = Math.max(2, safeCurrentPage - delta);
      i <= Math.min(totalPages - 1, safeCurrentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (safeCurrentPage - delta > 2) {
      range.unshift("...");
    }
    if (safeCurrentPage + delta < totalPages - 1) {
      range.push("...");
    }
    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }
    return range;
  }, [safeCurrentPage, totalPages]);

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredPosts.length);

  return (
    <Layout activeLabel="Blogs">
      {/* Top Banner */}
      <section className="relative bg-[#FAF8FD] text-[#5F5B73] py-16 md:py-24 px-4 border-b border-[#ECE5F6] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Soft Luxury Radial Ambient Glows */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#7C3AED]/10 to-[#F472B6]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#5A098F]/10 to-[#F472B6]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          {/* Top Badge: Light Lavender with Purple Text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] text-[#5A098F] border border-[#ECE5F6] text-xs font-bold uppercase tracking-wider font-['Manrope',sans-serif] shadow-xs">
            <span>✨</span> ASTRO BABY KNOWLEDGE CENTER
          </div>

          {/* Heading: Cormorant Garamond font with purple-pink gradient ONLY on Garbhadhan Sanskar */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1E1B2E] leading-tight font-['Cormorant_Garamond',serif]">
            <span className="bg-gradient-to-r from-[#5A098F] via-[#7C3AED] to-[#F472B6] bg-clip-text text-transparent font-semibold">
              Garbhadhan Sanskar
            </span>{" "}
            & Pregnancy Blog
          </h1>

          {/* Body Text */}
          <p className="text-[#5F5B73] text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-normal leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
            Explore authentic guidance on Garbhadhan Sanskar, trimester care, nutrition, mantras, yoga,
            and pregnancy health — curated by experts for positive motherhood.
          </p>

          {/* Search Input Box: Premium Glassmorphism (18px Rounded Corners) */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search articles (e.g., Diet, Trimester, Yoga, Mantras)..."
                className="w-full px-5 py-4 pl-12 pr-10 rounded-[18px] bg-white/90 backdrop-blur-xl text-[#1E1B2E] placeholder-[#948EAD] shadow-[0_10px_30px_-10px_rgba(90,9,143,0.08)] border border-[#ECE5F6] focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/15 transition-all font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base"
              />
              <svg
                className="w-5 h-5 text-[#948EAD] absolute left-4 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-4 text-[#948EAD] hover:text-[#5A098F] p-1 font-bold transition-colors"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white/95 backdrop-blur-md border-b border-[#ECE5F6] sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs md:text-sm font-bold font-['Manrope',sans-serif] transition-all ${
                    active
                      ? "bg-gradient-to-r from-[#5A098F] to-[#7C3AED] text-white shadow-md shadow-purple-500/20 scale-105"
                      : "bg-white text-[#1A3A6C] border border-[#ECE5F6] hover:bg-[#FAF8FD] hover:text-[#5A098F] shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Blog Grid Section */}
      <section
        ref={blogSectionRef}
        className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] min-h-[600px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header Stats / Filters info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-pink-200/80 gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#1A3A6C]">
                {selectedCategory === "All" ? "All Articles" : selectedCategory}
              </h2>
              {filteredPosts.length > 0 && (
                <p className="text-xs md:text-sm text-slate-500 mt-0.5">
                  Showing <span className="font-semibold text-slate-800">{startIndex}</span> to{" "}
                  <span className="font-semibold text-slate-800">{endIndex}</span> of{" "}
                  <span className="font-semibold font-bold text-[#1a3a6c]">
                    {filteredPosts.length}
                  </span>{" "}
                  articles
                </p>
              )}
            </div>

            {/* Total Pages Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600 shadow-xs">
                Page {safeCurrentPage} of {totalPages}
              </span>
            </div>
          </div>

          {/* Articles Grid (9 cards per page) */}
          {currentArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((p, i) => {
                const category = getPostCategory(p.title);
                const readTime = getReadTime(p.title);
                return (
                  <Link
                    key={i}
                    data-blog-card
                    to={`/blog/${slugify(p.title)}`}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden group hover:-translate-y-1"
                  >
                    {/* Thumbnail Image Container */}
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

                      {/* Top Left: Category Badge */}
                      <span className="absolute top-3 left-3 bg-[#1a3a6c]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                        {category}
                      </span>

                      {/* Top Right: Read Time */}
                      <span className="absolute top-3 right-3 bg-slate-900/75 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <svg
                          className="w-3 h-3 text-slate-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {readTime}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title */}
                        <h3 className="text-base md:text-lg font-bold text-[#1a3a6c] group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                          {p.title}
                        </h3>

                        {/* Metadata */}
                        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <span className="flex items-center gap-1 text-slate-600">
                            <svg
                              className="w-3.5 h-3.5 text-red-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {p.date}
                          </span>
                          <span>•</span>
                          <span>Astro Baby Team</span>
                        </div>
                      </div>

                      {/* Read More link */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-semibold text-red-600 group-hover:text-red-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Full Article
                          <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* No Results state */
            <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a3a6c]">No Articles Found</h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto text-sm">
                We couldn't find any articles matching your search query or selected category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="mt-6 px-6 py-2.5 bg-[#1a3a6c] text-white text-sm font-semibold rounded-full hover:bg-[#122a4f] transition-all shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* TAILWIND CSS PAGINATION BAR */}
          {totalPages > 1 && (
            <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-500">
                Page <span className="font-bold text-[#1a3a6c]">{safeCurrentPage}</span> of{" "}
                <span className="font-bold text-[#1a3a6c]">{totalPages}</span> (
                {filteredPosts.length} total articles)
              </div>

              {/* Pagination controls */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(safeCurrentPage - 1)}
                  disabled={safeCurrentPage === 1}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
                    safeCurrentPage === 1
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-[#1a3a6c] hover:bg-[#1a3a6c] hover:text-white border border-slate-200 shadow-xs"
                  }`}
                  aria-label="Previous Page"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Prev</span>
                </button>

                {/* Page Numbers */}
                {paginationRange.map((page, idx) => {
                  if (typeof page === "string") {
                    return (
                      <span key={`ellipsis-${idx}`} className="px-2 py-1 text-slate-400 font-bold">
                        …
                      </span>
                    );
                  }
                  const isCurrent = page === safeCurrentPage;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-bold transition-all flex items-center justify-center ${
                        isCurrent
                          ? "bg-[#1a3a6c] text-white shadow-md ring-2 ring-[#1a3a6c]/20 scale-105"
                          : "bg-white text-[#1a3a6c] hover:bg-slate-100 hover:text-[#1a3a6c] border border-slate-200"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(safeCurrentPage + 1)}
                  disabled={safeCurrentPage === totalPages}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
                    safeCurrentPage === totalPages
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-[#1a3a6c] hover:bg-[#1a3a6c] hover:text-white border border-slate-200 shadow-xs"
                  }`}
                  aria-label="Next Page"
                >
                  <span>Next</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Banner */}
      <NewsletterSection />
    </Layout>
  );
}
