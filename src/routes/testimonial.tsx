import { useState, useMemo, useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
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

const stories: Story[] = [
  {
    img: "experience_1727683696",
    ext: "jpg",
    yt: "vEltMP4qvhw",
    name: "Mr. & Mrs. Patil",
    city: "Kolhapur",
  },
  {
    img: "experience_1724400221",
    ext: "jpg",
    yt: "5YhDhV9Eq4M",
    name: "Mrs. Preeti Shree",
    city: "Dhanbad",
  },
  {
    img: "experience_1724396585",
    ext: "jpg",
    yt: "Q8V0cuHGBx4",
    name: "Mr. & Mrs. Chaturkar",
    city: "Pune",
  },
  {
    img: "experience_1723106769",
    ext: "jpg",
    yt: "wGaFK-N_-eo",
    name: "Mr. & Mrs. Sinha",
    city: "Bangalore",
  },
  {
    img: "experience_1698234576",
    ext: "jpg",
    yt: "tkXuMEOJCKo",
    name: "Mr. & Mrs. Dubey",
    city: "Gwalior",
  },
  {
    img: "experience_1697802459",
    ext: "jpg",
    yt: "6MgQ1sZ_tlI",
    name: "Mr. & Mrs. Jalan",
    city: "Delhi",
  },
  {
    img: "experience_1692248818",
    ext: "jpg",
    yt: "2R4-_4xlwTQ",
    name: "Mr. & Mrs. Chauhan",
    city: "Ghaziabad",
  },
  {
    img: "experience_1690293039",
    ext: "jpg",
    yt: "2Zg6cq71Y60",
    name: "Mr. & Mrs. Kumar",
    city: "Deoghar",
  },
  {
    img: "experience_1685785183",
    ext: "jpg",
    yt: "DRyca1GyD9U",
    name: "Dr. Rajendar Pensiya",
    city: "Lucknow",
  },
  {
    img: "experience_1679492114",
    ext: "webp",
    yt: "0XGQrZmSw7k",
    name: "Mr. & Mrs. Lahoti",
    city: "Satara",
  },
  {
    img: "experience_1677845108",
    ext: "webp",
    yt: "eD7fo6bsO6M",
    name: "Mr. & Mrs. Kumar",
    city: "Ranchi",
  },
  {
    img: "experience_1677844814",
    ext: "webp",
    yt: "xRxVaN43eZk",
    name: "Mrs. Chandrakala Sahu",
    city: "Narharpur",
  },
  {
    img: "experience_1675841267",
    ext: "webp",
    yt: "FUwlbiCJ_0I",
    name: "Mrs. Geeta Kapil Madan",
    city: "Pune",
  },
  {
    img: "experience_1675840812",
    ext: "webp",
    yt: "AW_pCeQGpps",
    name: "Mr. & Mrs. Tarpada",
    city: "Surat",
  },
  {
    img: "experience_1675831902",
    ext: "webp",
    yt: "IrE1re6NHCI",
    name: "Mrs. Jasmine Ale Magar",
    city: "Nepal",
  },
  {
    img: "experience_1674208161",
    ext: "webp",
    yt: "Ey6QFQSHI7c",
    name: "Harsh & Sakshi Manglani",
    city: "Indore",
  },
  {
    img: "experience_1674207919",
    ext: "webp",
    yt: "A47fpvPVf8A",
    name: "Mr. & Mrs. Rawat",
    city: "Delhi",
  },
  {
    img: "experience_1674205443",
    ext: "webp",
    yt: "W3cj6C4bi6g",
    name: "Mr. & Mrs. Kinjal Patel",
    city: "Ahmedabad",
  },
  {
    img: "experience_1673798399",
    ext: "webp",
    yt: "HhCniz-ehco",
    name: "Mr. & Mrs. Bedre",
    city: "Pune",
  },
  {
    img: "experience_1673265449",
    ext: "webp",
    yt: "428EL1HqYRs",
    name: "From around the world",
    city: "Global",
  },
  {
    img: "experience_1654952935",
    ext: "webp",
    yt: "1zTG4p9GO8M",
    name: "Shweta Bikash",
    city: "Daman",
  },
  {
    img: "experience_1654952918",
    ext: "webp",
    yt: "cIkHplx2T2k",
    name: "Shibani Nayak",
    city: "Jharsuguda",
  },
  {
    img: "experience_1654952892",
    ext: "webp",
    yt: "sZW89B7j5mM",
    name: "Pooja Ramakant",
    city: "Sambalpur",
  },
  {
    img: "experience_1654869821",
    ext: "webp",
    yt: "zsj9qeAeGK4",
    name: "Hemlata Bagde",
    city: "Aurangabad",
  },
  {
    img: "experience_1654869770",
    ext: "webp",
    yt: "ZGUOFp0CK_Y",
    name: "Gagan Sharma",
    city: "Canada",
  },
  {
    img: "experience_1654869715",
    ext: "webp",
    yt: "0yypDWYfirc",
    name: "Jyoti Aggarwal",
    city: "New Delhi",
  },
  {
    img: "experience_1654869622",
    ext: "webp",
    yt: "61izVsuGLkU",
    name: "Sadgi Sinha",
    city: "Kolkata",
  },
  {
    img: "experience_1654869442",
    ext: "webp",
    yt: "7uQJ0YxFQy0",
    name: "Mr. & Mrs. Patil",
    city: "Kolhapur",
  },
  {
    img: "experience_1654869385",
    ext: "webp",
    yt: "8ccTnwOHjFo",
    name: "Nirmala Bajaj",
    city: "Gulbarga",
  },
  {
    img: "experience_1654869266",
    ext: "webp",
    yt: "JqUMzK0PyTM",
    name: "Madhu Kiran",
    city: "Delhi",
  },
  {
    img: "experience_1654869192",
    ext: "webp",
    yt: "nV3Be79SrHE",
    name: "Neha Satyam",
    city: "Patna",
  },
  {
    img: "experience_1654869138",
    ext: "webp",
    yt: "e0Ak1GAkPzE",
    name: "Mr. & Mrs. Shukla",
    city: "Mumbai",
  },
  {
    img: "experience_1654869067",
    ext: "webp",
    yt: "61izVsuGLkU",
    name: "Mrs. Kritika Soni",
    city: "Mumbai",
  },
  {
    img: "experience_1654868970",
    ext: "webp",
    yt: "50R8KyryTKg",
    name: "Magadh Raj Verma",
    city: "Kota",
  },
  {
    img: "experience_1654868908",
    ext: "webp",
    yt: "5pbOnuZNIwc",
    name: "Mr. Ankit Birle",
    city: "Indore",
  },
  {
    img: "experience_1654868825",
    ext: "webp",
    yt: "Ck7u8jRNK9c",
    name: "Mr. & Mrs. Kinariwala",
    city: "Hyderabad",
  },
  {
    img: "experience_1654868706",
    ext: "webp",
    yt: "2zxW0lTYAZE",
    name: "Mr. & Mrs. Sudhir",
    city: "Rohtas",
  },
];

function Layout({ children }: { children: React.ReactNode; activeLabel?: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fc] via-white to-[#f4f7fb] text-slate-800">
      <HeaderNavbar />

      {children}

      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Astro Baby Garbh Sanskar. All rights reserved.</div>
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

export default function TestimonialPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const storiesGridRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 9;

  // Filter stories based on search query
  const filteredStories = useMemo(() => {
    return stories.filter((s) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q)
      );
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
        }
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
      {/* Top Banner */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #FFF6FB 0%, #F9F4FF 30%, #F4F9FF 65%, #EDF5FF 100%)",
        }}
        className="relative py-14 md:py-16 px-4 overflow-hidden border-b border-pink-200/60"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#F63D8E] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 shadow-sm">
            Real Experiences & Transformation
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A3A6C] leading-tight">
            Astro Baby User Stories
          </h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            From India and across the world, hear directly from thousands of happy parents whose lives,
            pregnancies, and babies were blessed through Garbh Sanskar.
          </p>

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
                placeholder="Search stories by name or city (e.g. Pune, Delhi, Patil, Indore)..."
                className="w-full px-5 py-3.5 pl-12 pr-10 rounded-full bg-white text-[#1A3A6C] text-sm md:text-base placeholder-slate-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F63D8E]"
              />
              <svg
                className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-4 text-slate-400 hover:text-[#F63D8E] p-1 font-bold"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Spotlight */}
      <section className="py-10 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-pink-100 shadow-md">
            <a
              href="https://www.youtube.com/watch?v=428EL1HqYRs"
              target="_blank"
              rel="noreferrer"
              className="relative block group overflow-hidden rounded-2xl shadow-md border border-pink-100"
            >
              <img
                src="/images/astrobaby_video_spotlight.jpg"
                alt="Astro Baby Garbh Sanskar User Stories Video Spotlight"
                className="w-full h-auto object-cover max-h-[440px] rounded-2xl transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F63D8E] text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
            <div className="mt-6 text-center">
              <h2 className="text-xl md:text-2xl font-extrabold text-[#1A3A6C]">
                Inspiring Journey of 1,00,000+ Mothers Around The World
              </h2>
              <p className="mt-2 text-slate-600 text-sm md:text-base max-w-3xl mx-auto font-sans">
                Watch how Astro Baby Garbh Sanskar brings peace of mind, positive parenting, and
                miraculous changes to expectant families worldwide.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.youtube.com/watch?v=428EL1HqYRs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#F63D8E] to-[#E02B7B] text-white text-xs md:text-sm font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  ▶ Watch Sample Video Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stories Grid Section */}
      <section ref={storiesGridRef} className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header Stats / Filters info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-pink-200/80 gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#1A3A6C]">
                User Experience Reviews
              </h2>
              {filteredStories.length > 0 && (
                <p className="text-xs md:text-sm text-slate-500 mt-0.5">
                  Showing <span className="font-semibold text-slate-800">{startIndex}</span> to{" "}
                  <span className="font-semibold text-slate-800">{endIndex}</span> of{" "}
                  <span className="font-bold text-[#1a3a6c]">
                    {filteredStories.length}
                  </span>{" "}
                  user stories
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

          {/* Stories Grid (9 items per page) */}
          {currentStories.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentStories.map((s, i) => {
                const aiThumb = AI_THUMBNAILS[i % AI_THUMBNAILS.length];
                return (
                  <a
                    key={s.img + i}
                    data-story-card
                    href={`https://www.youtube.com/watch?v=${s.yt}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden group hover:-translate-y-1"
                  >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-video overflow-hidden bg-slate-900">
                      <img
                        src={aiThumb}
                        alt={s.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* YouTube Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Top Left: City Badge */}
                    <span className="absolute top-3 left-3 bg-[#1a3a6c]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {s.city}
                    </span>

                    {/* Top Right: Tag */}
                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                      Video Story
                    </span>
                  </div>

                  {/* Content Box */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-[#1a3a6c] group-hover:text-red-600 transition-colors leading-snug line-clamp-1">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 font-medium">
                        Astro Baby Garbh Sanskar App User
                      </p>
                    </div>

                    {/* Watch Button */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-red-600 group-hover:text-red-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Video Story
                      </span>
                      <span className="text-xs text-slate-400 font-medium group-hover:text-[#1a3a6c]">
                        YouTube →
                      </span>
                    </div>
                  </div>
                </a>
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
              <h3 className="text-xl font-bold text-[#1a3a6c]">No Stories Found</h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto text-sm">
                We couldn't find any user stories matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="mt-6 px-6 py-2.5 bg-[#1a3a6c] text-white text-sm font-semibold rounded-full hover:bg-[#122a4f] transition-all shadow-sm"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* TAILWIND CSS PAGINATION BAR */}
          {totalPages > 1 && (
            <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-500">
                Page <span className="font-bold text-[#1a3a6c]">{safeCurrentPage}</span> of{" "}
                <span className="font-bold text-[#1a3a6c]">{totalPages}</span> ({filteredStories.length}{" "}
                total stories)
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
                          : "bg-white text-slate-700 hover:bg-slate-100 hover:text-[#1a3a6c] border border-slate-200"
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

      {/* Share Journey CTA Section */}
      <AppDownloadSection
        title={
          <>
            Begin Your Garbh Sanskar Journey Today on{" "}
            <span className="bg-gradient-to-r from-[#5A098F] via-[#7C3AED] to-[#F472B6] bg-clip-text text-transparent font-semibold">
              Astro Baby
            </span>
          </>
        }
        subtitle="Join thousands of happy mothers. Download the Astro Baby app and experience the power of ancient Garbh Sanskar wisdom."
      />
    </Layout>
  );
}

