import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    label: "About Us",
    to: "/about-us",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    label: "Courses & Features",
    to: "#",
    hasDropdown: true,
    isMegaMenu: true,
    dropdownItems: [
      {
        label: "Beej Sanskar",
        to: "/features/biz-sanskar",
        desc: "Holistic success and work-life balance",
        icon: (
          <svg
            className="w-5 h-5 text-[#F43F5E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        ),
      },
      {
        label: "Garbh Dan",
        to: "/features/garbh-dhan",
        desc: "Divine planning for conception",
        icon: (
          <svg
            className="w-5 h-5 text-[#F43F5E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
      },
      {
        label: "Garbhadhan Sanskar",
        to: "/features/garbh-sanskar",
        desc: "Vedic wisdom for pregnancy",
        icon: (
          <svg
            className="w-5 h-5 text-[#F43F5E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        label: "Baal Bhavish Fal",
        to: "/features/baal-bhavish-fal",
        desc: "Astrological guidance for kids",
        icon: (
          <svg
            className="w-5 h-5 text-[#F43F5E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        label: "Parenting",
        to: "/features/parenting",
        desc: "Mindful and positive upbringing",
        icon: (
          <svg
            className="w-5 h-5 text-[#F43F5E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
      },
    ],
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    label: "User Stories",
    to: "/testimonial",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    label: "Team",
    to: "/team",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  /*
  {
    label: "Awards & Accolades",
    to: "/awardsaccolades",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  */
  {
    label: "Blogs",
    to: "/blog",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
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
  const isActive = (to?: string) => {
    if (!to || to === "#") return false;
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(to);
  };

  return (
    <div className="w-full relative z-50 font-['Plus_Jakarta_Sans',sans-serif]" style={{ zIndex: 9999 }}>
      {/* Top Contact & Announcement Bar */}
      <div className="hidden md:block bg-[#172554] text-white text-xs py-2 border-b border-white/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-amber-300 text-xs">✨</span>
            <span className="font-semibold text-white tracking-wide text-[12px]">
              Astro Baby Garbhadhan Sanskar — Divine Wisdom & Scientific Pregnancy Care
            </span>
          </div>
          <div className="flex items-center gap-5 text-white/90 text-[12px]">
            <a
              href="mailto:info@astrobaby.com"
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@astrobaby.com
            </a>
            <span className="text-white/40">|</span>
            <a
              href="tel:+919018567465"
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-semibold text-amber-200"
            >
              <svg
                className="w-3.5 h-3.5 text-amber-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
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
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>


              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 sm:p-2 text-[#5C2494] bg-purple-50 hover:bg-purple-100 rounded-full border border-purple-200 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
                <li key={item.label} className="relative group">
                  <Link
                    to={item.to || "#"}
                    onClick={(e) => {
                      if (item.hasDropdown && (!item.to || item.to === "#")) {
                        e.preventDefault();
                      }
                    }}
                    className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-full text-[11px] lg:text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${active
                        ? "bg-[#F45B8A] text-white shadow-md shadow-[#F45B8A]/30 font-bold"
                        : "text-slate-700 hover:text-[#F45B8A] hover:bg-pink-50/70"
                      }`}
                  >
                    <span className={active ? "text-white" : "text-[#3B82F6]"}>{item.icon}</span>
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        className={`w-3 h-3 lg:w-3.5 lg:h-3.5 transition-transform duration-200 group-hover:rotate-180 ${active ? "text-white" : "text-[#3B82F6]"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  {/* Mega / Modern Dropdown Menu */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute top-full -left-20 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-1">
                      {item.isMegaMenu ? (
                        <div className="w-[850px] xl:w-[950px] bg-white rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-pink-100/80 p-8 flex gap-10">
                          {/* Left Side: Links Grid */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                              {item.dropdownItems.map((dropItem) => (
                                <Link
                                  key={dropItem.label}
                                  to={dropItem.to}
                                  className="group/item flex items-start gap-4 hover:bg-slate-50 p-2.5 rounded-2xl transition-colors"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm border border-pink-50 transition-transform group-hover/item:scale-110">
                                    {dropItem.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-[15px] font-extrabold text-slate-800 leading-snug group-hover/item:text-[#F45B8A] transition-colors">
                                      {dropItem.label}
                                    </h4>
                                    <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed mt-1 pr-2">
                                      {dropItem.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>


                          </div>

                          {/* Right Side: Image Banner */}
                          <div className="w-[280px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-sm group/banner">
                            <img
                              src="/images/celestial_mother.png"
                              alt="Astro Baby App"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                              <p className="text-[9px] font-bold text-pink-300 tracking-wider uppercase mb-1">
                                TRUSTED BY 2.5M+ MOTHERS
                              </p>
                              <h3 className="text-[17px] font-bold leading-tight">
                                Astro Baby App
                              </h3>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-[300px] bg-white rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-pink-100/50 p-1.5">
                          <div className="flex flex-col">
                            {item.dropdownItems.map((dropItem) => (
                              <Link
                                key={dropItem.label}
                                to={dropItem.to}
                                className="group/item flex items-center gap-3 p-2 rounded-xl hover:bg-pink-50/80 transition-all duration-200"
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-slate-50 group-hover/item:bg-white group-hover/item:shadow-sm rounded-lg flex items-center justify-center text-xl transition-all duration-200 group-hover/item:scale-105">
                                  {dropItem.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#F45B8A] transition-colors leading-snug">
                                    {dropItem.label}
                                  </h4>
                                  <p className="text-[11px] text-slate-500 font-medium leading-tight">
                                    {dropItem.desc}
                                  </p>
                                </div>
                                <div className="text-slate-300 group-hover/item:text-[#F45B8A] transition-all group-hover/item:translate-x-0.5 duration-200 opacity-0 group-hover/item:opacity-100">
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2.5"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}

            {/* Language Selection Dropdown Menu */}
            <li
              className="relative ml-1 lg:ml-2 pl-1 lg:pl-2 border-l border-slate-200/80"
              ref={langRef}
            >
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 lg:px-4 py-1.5 lg:py-2 text-[11px] lg:text-xs xl:text-sm font-semibold text-[#3B82F6] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 rounded-full transition-all"
              >
                <svg
                  className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#3B82F6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span>{selectedLang.label}</span>
                <svg
                  className={`w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#3B82F6] transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-blue-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#3B82F6] uppercase tracking-wider border-b border-slate-100">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between hover:bg-blue-50 transition-colors ${selectedLang.code === lang.code
                          ? "text-[#3B82F6] font-bold bg-blue-50/70"
                          : "text-slate-700"
                        }`}
                    >
                      <span>
                        {lang.name} ({lang.label})
                      </span>
                      {selectedLang.code === lang.code && (
                        <svg
                          className="w-4 h-4 text-[#3B82F6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
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
                const isDropdownOpen = mobileDropdownOpen === item.label;

                return (
                  <div key={item.label} className="space-y-1">
                    <Link
                      to={item.to || "#"}
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          e.preventDefault();
                          setMobileDropdownOpen(isDropdownOpen ? null : item.label);
                        } else {
                          setMenuOpen(false);
                        }
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${active
                          ? "bg-[#F45B8A] text-white font-bold shadow-md shadow-[#F45B8A]/30"
                          : "text-slate-700 hover:bg-pink-50"
                        }`}
                    >
                      <span className={active ? "text-white" : "text-[#3B82F6]"}>{item.icon}</span>
                      <span className="flex-1">{item.label}</span>
                      {item.hasDropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                            } ${active ? "text-white" : "text-[#3B82F6]"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {/* Mobile Dropdown Menu */}
                    {item.hasDropdown && item.dropdownItems && isDropdownOpen && (
                      <div className="pl-6 pr-2 space-y-2 pb-3 pt-1 animate-in slide-in-from-top-2 fade-in duration-200">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.to}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-pink-50 border border-transparent transition-all group/mobile"
                          >
                            <div className="w-10 h-10 bg-slate-50 group-hover/mobile:bg-white shadow-sm rounded-xl flex items-center justify-center text-xl">
                              {dropItem.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-[13px] font-bold text-slate-700 group-hover/mobile:text-[#F45B8A]">
                                {dropItem.label}
                              </h4>
                              <p className="text-[10px] text-slate-500 line-clamp-1 leading-snug">
                                {dropItem.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Language Selection */}
            <div className="pt-3 border-t border-blue-100 space-y-2">
              <span className="text-xs font-bold text-[#172554] uppercase tracking-wider px-1 block">
                Select Language
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMobileLangOpen(!mobileLangOpen)}
                  className="w-full flex items-center justify-between bg-slate-50 hover:bg-pink-50/50 border border-slate-200/80 hover:border-pink-300 text-slate-800 text-xs font-bold rounded-2xl px-4 py-3 transition-all cursor-pointer shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#3B82F6]">🌐</span>
                    <span>{selectedLang.name}</span>
                    <span className="text-slate-400 font-normal">({selectedLang.label})</span>
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileLangOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileLangOpen && (
                  <div className="mt-2 bg-white rounded-2xl border border-pink-100 shadow-lg p-1.5 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setSelectedLang(lang);
                          setMobileLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedLang.code === lang.code
                            ? "bg-[#F45B8A] text-white shadow-xs"
                            : "text-slate-700 hover:bg-pink-50"
                          }`}
                      >
                        <span>{lang.name}</span>
                        <span className={selectedLang.code === lang.code ? "text-white/90" : "text-slate-400"}>
                          {lang.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile App Download Buttons */}
            <div className="pt-3 border-t border-blue-100 space-y-2">
              <div className="text-xs font-bold text-[#172554] uppercase tracking-wider px-1">
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
