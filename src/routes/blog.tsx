import { Link } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
import { gsap } from "@/utils/gsapSetup";
import { Sparkles, Search, ChevronRight, Clock, Calendar, ArrowRight, BookOpen, User } from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";
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
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {children}

      <Footer />
    </div>
  );
}

const CATEGORIES = [
  "All Articles",
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
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const blogSectionRef = useRef<HTMLDivElement>(null);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const category = getPostCategory(p.title);
      const matchesCategory = selectedCategory === "All Articles" || category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;
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
      {/* ── Top Hero / Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#F45B8A] border border-pink-200/80 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Astro Baby Knowledge Sanctum</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] leading-[1.1] tracking-tight">
            Garbhadhan Sanskar &{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Pregnancy Blog
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-[#475569] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Explore authentic guidance on Garbhadhan Sanskar, trimester care, nutrition, mantras, yoga,
            and fetal neuroscience — curated by doctors & Vedic scholars.
          </p>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-semibold">Blogs</span>
          </div>

          {/* Search Input Box */}
          <div className="pt-3 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search articles by topic (e.g. Diet, Trimester 2, Yoga, Mantras)..."
                className="w-full px-5 py-4 pl-12 pr-10 rounded-full bg-white/95 backdrop-blur-xl text-[#172554] placeholder:text-slate-400 shadow-[0_10px_30px_rgba(23,37,84,0.06)] border border-pink-200 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] transition-all text-sm sm:text-base font-normal"
              />
              <Search className="w-5 h-5 text-[#F45B8A] absolute left-4.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-4.5 text-slate-400 hover:text-[#F45B8A] p-1 font-semibold transition-colors text-sm"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs ── */}
      <section className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    active
                      ? "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-md shadow-[#F45B8A]/30 scale-105"
                      : "bg-white text-[#172554] border border-pink-100 hover:bg-pink-50/70 shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main Blog Grid Section ── */}
      <section
        ref={blogSectionRef}
        className="py-14 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] min-h-[600px] relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Stats / Filters info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-pink-200/80 gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#172554] leading-tight">
                {selectedCategory === "All Articles" ? "All Knowledge Articles" : selectedCategory}
              </h2>
              {filteredPosts.length > 0 && (
                <p className="text-xs md:text-sm text-slate-500 mt-1 font-normal">
                  Showing <span className="font-semibold text-[#172554]">{startIndex}</span> to{" "}
                  <span className="font-semibold text-[#172554]">{endIndex}</span> of{" "}
                  <span className="font-semibold text-[#F45B8A]">
                    {filteredPosts.length}
                  </span>{" "}
                  published articles
                </p>
              )}
            </div>

            {/* Total Pages Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3.5 py-1.5 bg-white border border-pink-200 rounded-full text-[#172554] shadow-xs">
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
                    className="bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] transition-all duration-400 border border-pink-100 flex flex-col overflow-hidden group hover:-translate-y-1.5"
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
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                      {/* Top Left: Category Badge */}
                      <span className="absolute top-3.5 left-3.5 bg-[#172554]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3.5 py-1 rounded-full shadow-sm">
                        {category}
                      </span>

                      {/* Top Right: Read Time */}
                      <span className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Clock className="w-3 h-3 text-pink-300" />
                        {readTime}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug line-clamp-2">
                          {p.title}
                        </h3>

                        {/* Metadata */}
                        <div className="mt-3 flex items-center gap-3 text-xs text-slate-500 font-normal">
                          <span className="flex items-center gap-1.5 text-slate-600">
                            <Calendar className="w-3.5 h-3.5 text-[#F45B8A]" />
                            {p.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-600">
                            <User className="w-3.5 h-3.5 text-[#3B82F6]" />
                            Astro Baby Team
                          </span>
                        </div>
                      </div>

                      {/* Read More link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#F45B8A] group-hover:text-[#d94d7a] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* No Results state */
            <div className="py-20 text-center bg-white/90 backdrop-blur-md rounded-3xl border border-pink-200 p-8 shadow-sm max-w-xl mx-auto">
              <div className="w-16 h-16 bg-pink-50 text-[#F45B8A] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#172554]">
                No Articles Found
              </h3>
              <p className="text-slate-500 mt-2 text-sm font-normal">
                We couldn't find any articles matching your search query or selected category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Articles");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="mt-6 px-7 py-3 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs font-semibold rounded-full hover:shadow-md transition-all shadow-sm cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* TAILWIND CSS PAGINATION BAR */}
          {totalPages > 1 && (
            <div className="mt-14 pt-8 border-t border-pink-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-500 font-normal">
                Page <span className="font-semibold text-[#172554]">{safeCurrentPage}</span> of{" "}
                <span className="font-semibold text-[#172554]">{totalPages}</span> (
                {filteredPosts.length} total articles)
              </div>

              {/* Pagination controls */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(safeCurrentPage - 1)}
                  disabled={safeCurrentPage === 1}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    safeCurrentPage === 1
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                      : "bg-white text-[#172554] hover:bg-[#172554] hover:text-white border border-pink-200 shadow-xs cursor-pointer"
                  }`}
                  aria-label="Previous Page"
                >
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
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                        isCurrent
                          ? "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-md shadow-[#F45B8A]/30 scale-105"
                          : "bg-white text-[#172554] hover:bg-pink-50 border border-pink-200 shadow-xs"
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
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    safeCurrentPage === totalPages
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                      : "bg-white text-[#172554] hover:bg-[#172554] hover:text-white border border-pink-200 shadow-xs cursor-pointer"
                  }`}
                  aria-label="Next Page"
                >
                  <span>Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* App Download CTA */}
      <AppDownloadSection />
    </Layout>
  );
}
