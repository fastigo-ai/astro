import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "About Us",
    to: "/about-us",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Courses & Features",
    to: "/features",
    hasDropdown: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: "User Stories",
    to: "/testimonial",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Team",
    to: "/team",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Awards & Accolades",
    to: "/awardsaccolades",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    label: "Blogs",
    to: "/blog",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const languages = [
  { code: "en", name: "English", label: "English" },
  { code: "hi", name: "Hindi", label: "हिंदी" },
  { code: "mr", name: "Marathi", label: "मराठी" },
  { code: "gu", name: "Gujarati", label: "ગુજરાતી" },
];

export default function HeaderNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const langRef = useRef<HTMLLIElement>(null);

  // Close language menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to determine if link is active
  const isActive = (to: string) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(to);
  };

  return (
    <div className="w-full relative font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Contact & Announcement Bar */}
      <div className="hidden md:block bg-[#5C2494] text-white text-xs py-2 border-b border-white/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-amber-300 text-xs">✨</span>
            <span className="font-semibold text-white tracking-wide text-[12px]">
              Astro Baby Garbh Sanskar — Divine Wisdom & Scientific Pregnancy Care
            </span>
          </div>
          <div className="flex items-center gap-5 text-white/90 text-[12px]">
            <a
              href="mailto:info@astrobaby.com"
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@astrobaby.com
            </a>
            <span className="text-white/40">|</span>
            <a
              href="tel:+919018567465"
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-semibold text-amber-200"
            >
              <svg className="w-3.5 h-3.5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 9018567465
            </a>
          </div>
        </div>
      </div>

      {/* Main Large Logo & Tagline Header (Desktop) */}
      <header className="hidden md:block bg-white py-1 md:py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <Link to="/" className="inline-block group">
            <img
              src="/images/logo.png"
              alt="Astro Baby Logo"
              className="h-28 md:h-36 lg:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="text-xs md:text-sm font-bold -mt-2 md:-mt-3 flex items-center justify-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span>
            <span className="text-[#F43F5E] font-semibold tracking-wide">
              Nurturing Every Life with Love &amp; Wisdom
            </span>
            <span className="text-emerald-500 font-bold">✔</span>
          </div>
        </div>
      </header>

      {/* Sticky Pill Navigation Bar */}
      <nav className="sticky top-2 z-50 px-2 sm:px-4 md:px-6 py-2 pointer-events-auto">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-full shadow-[0_12px_35px_-5px_rgba(92,36,148,0.12)] border border-purple-100/90 px-2.5 sm:px-4 lg:px-5 py-1.5 lg:py-2 flex items-center justify-between">

          {/* Mobile Header Bar Logo & Toggle */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Astro Baby"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Mobile Quick Call Button */}
              <a
                href="tel:+919109155039"
                className="flex items-center justify-center p-1.5 sm:p-2 rounded-full bg-rose-50 text-[#F43F5E] border border-rose-200/80 text-xs font-bold transition-colors"
                title="Call Us"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Mobile Language Trigger */}
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#6B21A8] bg-purple-50 hover:bg-purple-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-purple-200/80 transition-colors"
              >
                🌐 {selectedLang.label}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 sm:p-2 text-[#5C2494] bg-purple-50 hover:bg-purple-100 rounded-full border border-purple-200 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 mx-auto">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-full text-[11px] lg:text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                      active
                        ? "bg-[#EA3484] text-white shadow-md shadow-[#EA3484]/30 font-bold"
                        : "text-slate-700 hover:text-[#EA3484] hover:bg-pink-50/70"
                    }`}
                  >
                    <span className={active ? "text-white" : "text-[#1C83FF]"}>
                      {item.icon}
                    </span>
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item.hasDropdown && (
                      <svg className={`w-3 h-3 lg:w-3.5 lg:h-3.5 ${active ? "text-white" : "text-[#1C83FF]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}

            {/* Language Selection Dropdown Menu */}
            <li className="relative ml-1 lg:ml-2 pl-1 lg:pl-2 border-l border-slate-200/80" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 lg:px-4 py-1.5 lg:py-2 text-[11px] lg:text-xs xl:text-sm font-semibold text-[#1C83FF] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 rounded-full transition-all"
              >
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#1C83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>{selectedLang.label}</span>
                <svg className={`w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#1C83FF] transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-blue-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#1C83FF] uppercase tracking-wider border-b border-slate-100">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between hover:bg-blue-50 transition-colors ${
                        selectedLang.code === lang.code ? "text-[#1C83FF] font-bold bg-blue-50/70" : "text-slate-700"
                      }`}
                    >
                      <span>{lang.name} ({lang.label})</span>
                      {selectedLang.code === lang.code && (
                        <svg className="w-4 h-4 text-[#1C83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>

        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl mt-2 px-4 py-4 space-y-4 animate-in slide-in-from-top duration-300">
            <div className="space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.to);
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                      active
                        ? "bg-[#EA3484] text-white font-bold shadow-md shadow-[#EA3484]/30"
                        : "text-slate-700 hover:bg-pink-50"
                    }`}
                  >
                    <span className={active ? "text-white" : "text-[#1C83FF]"}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile App Download Buttons */}
            <div className="pt-3 border-t border-purple-100 space-y-2">
              <div className="text-xs font-bold text-purple-600 uppercase tracking-wider px-1">
                Get Astro Baby App
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
                  title="Get Astro Baby on Google Play Store"
                >
                  <img
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-9 w-auto object-contain drop-shadow-xs"
                  />
                </a>
                <a
                  href="https://apple.co/3iEfg7K"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
                  title="Download Astro Baby on Apple App Store"
                >
                  <img
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    className="h-9 w-auto object-contain drop-shadow-xs"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
