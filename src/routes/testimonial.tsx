import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "@/utils/gsapSetup";
import { Sparkles, Heart, Search, MapPin, Play, ChevronRight, Star, Video, ArrowRight, X } from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

type Story = { img: string; ext: string; yt: string; name: string; city: string };

const AI_THUMBNAILS = [
  "/images/story_thumb_1.png",
  "/images/story_thumb_2.png",
  "/images/story_thumb_3.png",
  "/images/story_thumb_4.png",
  "/images/story_thumb_5.png",
];

const DEFAULT_VIDEO_ID = "HSHnKz5Po1w";

const stories: Story[] = [
  {
    img: "experience_1727683696",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Patil",
    city: "Kolhapur",
  },
  {
    img: "experience_1724400221",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mrs. Preeti Shree",
    city: "Dhanbad",
  },
  {
    img: "experience_1724396585",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Chaturkar",
    city: "Pune",
  },
  {
    img: "experience_1723106769",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Sinha",
    city: "Bangalore",
  },
  {
    img: "experience_1698234576",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Dubey",
    city: "Gwalior",
  },
  {
    img: "experience_1697802459",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Jalan",
    city: "Delhi",
  },
  {
    img: "experience_1692248818",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Chauhan",
    city: "Ghaziabad",
  },
  {
    img: "experience_1690293039",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Kumar",
    city: "Deoghar",
  },
  {
    img: "experience_1685785183",
    ext: "jpg",
    yt: DEFAULT_VIDEO_ID,
    name: "Dr. Rajendar Pensiya",
    city: "Lucknow",
  },
  {
    img: "experience_1679492114",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Lahoti",
    city: "Satara",
  },
  {
    img: "experience_1677845108",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Kumar",
    city: "Ranchi",
  },
  {
    img: "experience_1677844814",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mrs. Chandrakala Sahu",
    city: "Narharpur",
  },
  {
    img: "experience_1675841267",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mrs. Geeta Kapil Madan",
    city: "Pune",
  },
  {
    img: "experience_1675840812",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Tarpada",
    city: "Surat",
  },
  {
    img: "experience_1675831902",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mrs. Jasmine Ale Magar",
    city: "Nepal",
  },
  {
    img: "experience_1674208161",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Harsh & Sakshi Manglani",
    city: "Indore",
  },
  {
    img: "experience_1674207919",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Rawat",
    city: "Delhi",
  },
  {
    img: "experience_1674205443",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Kinjal Patel",
    city: "Ahmedabad",
  },
  {
    img: "experience_1673798399",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Bedre",
    city: "Pune",
  },
  {
    img: "experience_1673265449",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "From around the world",
    city: "Global",
  },
  {
    img: "experience_1654952935",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Shweta Bikash",
    city: "Daman",
  },
  {
    img: "experience_1654952918",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Shibani Nayak",
    city: "Jharsuguda",
  },
  {
    img: "experience_1654952892",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Pooja Ramakant",
    city: "Sambalpur",
  },
  {
    img: "experience_1654869821",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Hemlata Bagde",
    city: "Aurangabad",
  },
  {
    img: "experience_1654869770",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Gagan Sharma",
    city: "Canada",
  },
  {
    img: "experience_1654869715",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Jyoti Aggarwal",
    city: "New Delhi",
  },
  {
    img: "experience_1654869622",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Sadgi Sinha",
    city: "Kolkata",
  },
  {
    img: "experience_1654869442",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Patil",
    city: "Kolhapur",
  },
  {
    img: "experience_1654869385",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Nirmala Bajaj",
    city: "Gulbarga",
  },
  {
    img: "experience_1654869266",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Madhu Kiran",
    city: "Delhi",
  },
  {
    img: "experience_1654869192",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Neha Satyam",
    city: "Patna",
  },
  {
    img: "experience_1654869138",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Shukla",
    city: "Mumbai",
  },
  {
    img: "experience_1654869067",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mrs. Kritika Soni",
    city: "Mumbai",
  },
  {
    img: "experience_1654868970",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Magadh Raj Verma",
    city: "Kota",
  },
  {
    img: "experience_1654868908",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. Ankit Birle",
    city: "Indore",
  },
  {
    img: "experience_1654868825",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Kinariwala",
    city: "Hyderabad",
  },
  {
    img: "experience_1654868706",
    ext: "webp",
    yt: DEFAULT_VIDEO_ID,
    name: "Mr. & Mrs. Sudhir",
    city: "Rohtas",
  },
];

function Layout({ children }: { children: React.ReactNode; activeLabel?: string }) {
  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {children}

      <footer className="bg-[#172554] text-white/80 py-10 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.
          </div>
          <div className="flex gap-4 text-white/80 text-xs font-semibold">
            <span className="hover:text-white transition cursor-pointer">Facebook</span>
            <span>•</span>
            <span className="hover:text-white transition cursor-pointer">Instagram</span>
            <span>•</span>
            <span className="hover:text-white transition cursor-pointer">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function TestimonialPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalVideo, setActiveModalVideo] = useState<string | null>(null);
  const storiesGridRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 9;

  // Filter stories based on search query
  const filteredStories = useMemo(() => {
    return stories.filter((s) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q);
    });
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredStories.length / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  // Slice exactly 9 items per page
  const currentStories = useMemo(() => {
    const startIdx = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredStories.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredStories, safeCurrentPage]);

  useEffect(() => {
    if (!storiesGridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-story-card]",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.out",
          clearProps: "opacity,transform",
        },
      );
    }, storiesGridRef);
    return () => ctx.revert();
  }, [safeCurrentPage, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (storiesGridRef.current) {
      storiesGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate pagination bar numbers
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
  const endIndex = Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredStories.length);

  return (
    <Layout activeLabel="User Stories">
      {/* ── Page Hero / Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#F45B8A] border border-pink-200/80 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Real Experiences & Miracles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#172554] leading-[1.15] font-['DM_Serif_Display',Georgia,serif] tracking-tight">
            Astro Baby{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              User Stories & Reviews
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-['Manrope',sans-serif]">
            Hear directly from thousands of happy parents across 62+ countries whose pregnancies,
            mindset, and newborns were blessed through Garbhadhan Sanskar.
          </p>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">Testimonials</span>
          </div>

          {/* Search Input Box */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search stories by parent's name or city (e.g. Pune, Delhi, Patil, Indore)..."
                className="w-full px-5 py-4 pl-12 pr-10 rounded-full bg-white/95 backdrop-blur-xl text-[#172554] text-sm md:text-base placeholder-slate-400 shadow-[0_10px_30px_rgba(23,37,84,0.06)] border border-pink-200 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] transition-all"
              />
              <Search className="w-5 h-5 text-[#F45B8A] absolute left-4.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-4.5 text-slate-400 hover:text-[#F45B8A] p-1 font-bold transition-colors text-sm"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Video Spotlight ── */}
      <section className="py-12 bg-gradient-to-b from-[#FFFDFE] to-[#FBF7FC] border-b border-pink-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-pink-100 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.07)]">
            <div
              onClick={() => setActiveModalVideo(DEFAULT_VIDEO_ID)}
              className="relative block group overflow-hidden rounded-[24px] shadow-lg border-2 border-white cursor-pointer"
            >
              <img
                src="/images/astrobaby_video_spotlight.jpg"
                alt="Astro Baby Garbhadhan Sanskar User Stories Video Spotlight"
                className="w-full h-auto object-cover max-h-[440px] transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/70 via-black/20 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-white/80">
                  <Play className="w-7 h-7 md:w-9 md:h-9 fill-white ml-1 text-white" />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-3">
              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl md:text-4xl font-normal text-[#172554]">
                Inspiring Experiences of 1,00,000+ Families Around The World
              </h2>
              <p className="text-[#475569] text-sm sm:text-base max-w-3xl mx-auto font-['Manrope',sans-serif] leading-relaxed">
                Watch how Astro Baby Garbhadhan Sanskar brings peace of mind, joyful prenatal bonding, and
                miraculous changes to expectant families across 62+ countries.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveModalVideo(DEFAULT_VIDEO_ID)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-[#F45B8A]/30 hover:scale-105 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white text-white" />
                  <span>Watch Featured Video Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Stories Grid Section ── */}
      <section
        ref={storiesGridRef}
        className="py-14 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] min-h-[600px] relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Stats / Filters info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-pink-200/80 gap-3">
            <div>
              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-2xl md:text-3xl font-normal text-[#172554]">
                Verified Parent Reviews
              </h2>
              {filteredStories.length > 0 && (
                <p className="text-xs md:text-sm text-slate-500 mt-1 font-['Manrope',sans-serif]">
                  Showing <span className="font-bold text-[#172554]">{startIndex}</span> to{" "}
                  <span className="font-bold text-[#172554]">{endIndex}</span> of{" "}
                  <span className="font-bold text-[#F45B8A]">{filteredStories.length}</span> verified stories
                </p>
              )}
            </div>

            {/* Total Pages Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3.5 py-1.5 bg-white border border-pink-200 rounded-full text-[#172554] shadow-xs">
                Page {safeCurrentPage} of {totalPages}
              </span>
            </div>
          </div>

          {/* Stories Grid (9 items per page) */}
          {currentStories.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentStories.map((s, i) => {
                const aiThumb = AI_THUMBNAILS[i % AI_THUMBNAILS.length];
                return (
                  <div
                    key={s.img + i}
                    data-story-card
                    onClick={() => setActiveModalVideo(s.yt)}
                    className="bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] transition-all duration-300 border border-pink-100 flex flex-col overflow-hidden group hover:-translate-y-1.5 cursor-pointer"
                  >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-video overflow-hidden bg-slate-900">
                      <img
                        src={aiThumb}
                        alt={s.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/70 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                      {/* YouTube Play Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-13 h-13 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border border-white/80">
                          <Play className="w-6 h-6 fill-white ml-0.5 text-white" />
                        </div>
                      </div>

                      {/* Top Left: City Badge */}
                      <span className="absolute top-3.5 left-3.5 bg-[#172554]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#F45B8A]" />
                        {s.city}
                      </span>

                      {/* Top Right: Tag */}
                      <span className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Video className="w-3 h-3 text-amber-300" />
                        Video Story
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug line-clamp-1">
                          {s.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium font-['Manrope',sans-serif] mt-0.5">
                          Verified Astro Baby Garbhadhan Sanskar Family
                        </p>
                      </div>

                      {/* Watch Button */}
                      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#F45B8A] group-hover:text-[#d94d7a] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Experience Video</span>
                        </span>
                        <span className="text-xs text-slate-400 font-bold group-hover:text-[#172554] transition-colors">
                          Play →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* No Results state */
            <div className="py-20 text-center bg-white/90 backdrop-blur-md rounded-3xl border border-pink-200 p-8 shadow-sm max-w-xl mx-auto">
              <div className="w-16 h-16 bg-pink-50 text-[#F45B8A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#172554]">
                No Stories Found
              </h3>
              <p className="text-slate-500 mt-2 text-sm font-['Manrope',sans-serif]">
                We couldn't find any user stories matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="mt-6 px-7 py-3 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs font-bold rounded-full hover:shadow-md transition-all shadow-sm cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* TAILWIND CSS PAGINATION BAR */}
          {totalPages > 1 && (
            <div className="mt-14 pt-8 border-t border-pink-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-500 font-['Manrope',sans-serif]">
                Page <span className="font-bold text-[#172554]">{safeCurrentPage}</span> of{" "}
                <span className="font-bold text-[#172554]">{totalPages}</span> (
                {filteredStories.length} total stories)
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

      {/* ── Video Player Modal ── */}
      {activeModalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Story video modal"
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/85 p-4 backdrop-blur-md"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-black shadow-2xl border-2 border-white/20">
            <button
              onClick={() => setActiveModalVideo(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#172554] shadow-lg hover:bg-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeModalVideo}?autoplay=1`}
                title="User story video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Share Journey CTA Section */}
      <AppDownloadSection
        title={
          <>
            Begin Your Garbhadhan Sanskar Journey Today on{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#3B82F6] to-[#F45B8A] bg-clip-text text-transparent font-semibold">
              Astro Baby
            </span>
          </>
        }
        subtitle="Join thousands of happy mothers. Download the Astro Baby app and experience the power of ancient Garbhadhan Sanskar wisdom."
      />
    </Layout>
  );
}
