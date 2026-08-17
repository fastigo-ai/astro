import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Sun,
  Baby,
  ShieldCheck,
  Smile,
  Compass,
  Phone,
} from "lucide-react";

// ── 7 Core Program Headings for Dropdown (Exact Names) ──
export const PROGRAM_DROPDOWN_CATEGORIES = [
  {
    id: "garbhadhan",
    title: "Garbhadhan Sanskar",
    subtitle: "Sacred Preparation for Conception",
    to: "/features/garbh-dhan",
    icon: Heart,
    iconBg: "bg-pink-50 text-[#F45B8A]",
  },
  {
    id: "beej-sanskar",
    title: "Beej Sanskar",
    subtitle: "Preparing the Foundation for Conscious Conception",
    to: "/features/beej-sanskar",
    icon: Sparkles,
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    id: "garbh-sanskar",
    title: "Garbh Sanskar",
    subtitle: "9-Month Journey of Prenatal Nurturing",
    to: "/features/garbh-sanskar",
    icon: Sun,
    iconBg: "bg-purple-50 text-purple-600",
  },
  {
    id: "baal-sanskar",
    title: "Baal Sanskar",
    subtitle: "Sacred Milestones in Early Childhood",
    to: "/features/baal-sanskar",
    icon: Baby,
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: "infant-care",
    title: "Infant Care",
    subtitle: "Gentle Care for Your Baby's Early Years",
    to: "/features/infant-care",
    icon: ShieldCheck,
    iconBg: "bg-pink-50 text-[#F45B8A]",
  },
  {
    id: "parenting",
    title: "Parenting",
    subtitle: "Mindful Guidance for Raising Your Child",
    to: "/features/parenting",
    icon: Smile,
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "bhavishya-fal",
    title: "Bhavishya Phal",
    subtitle: "Astrological Insights for Your Child's Journey",
    to: "/features/bhavishya-fal",
    icon: Compass,
    iconBg: "bg-indigo-50 text-indigo-600",
  },
];

const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about-us",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Our Story",
        to: "/about-us",
      },
      {
        label: "Team",
        to: "/team",
      },
    ],
  },
  {
    label: "Courses & Features",
    to: "/features",
    hasDropdown: true,
    isProgramMenu: true,
    dropdownItems: [
      {
        label: "Garbhadhan Sanskar",
        desc: "Sacred Preparation for Conception",
        to: "/features/garbh-dhan",
      },
      {
        label: "Beej Sanskar",
        desc: "Preparing the Foundation for Conscious Conception",
        to: "/features/beej-sanskar",
      },
      {
        label: "Garbh Sanskar",
        desc: "9-Month Journey of Prenatal Nurturing",
        to: "/features/garbh-sanskar",
      },
      {
        label: "Baal Sanskar",
        desc: "Sacred Milestones in Early Childhood",
        to: "/features/baal-sanskar",
      },
      {
        label: "Infant Care",
        desc: "Gentle Care for Your Baby's Early Years",
        to: "/features/infant-care",
      },
      {
        label: "Parenting",
        desc: "Mindful Guidance for Raising Your Child",
        to: "/features/parenting",
      },
      {
        label: "Bhavishya Phal",
        desc: "Astrological Insights for Your Child's Journey",
        to: "/features/bhavishya-fal",
      },
    ],
  },
  {
    label: "Testimonial",
    to: "/testimonial",
  },
  {
    label: "Blogs",
    to: "/blog",
  },
  {
    label: "Contact",
    to: "/contact",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Contact Us",
        to: "/contact",
      },
      {
        label: "Newsletter",
        to: "/newsletter",
      },
    ],
  },
];

const languages = [
  { code: "en", name: "English", label: "English" },
  { code: "hi", name: "Hindi", label: "Hindi" },
  { code: "mr", name: "Marathi", label: "Marathi" },
  { code: "gu", name: "Gujarati", label: "Gujarati" },
];

export default function HeaderNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

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

  // Handle scroll for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to?: string) => {
    if (!to || to === "#") return false;
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <div className="w-full relative z-50 font-medium" style={{ zIndex: 9999 }}>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#172554] text-white text-xs py-2 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-amber-300">✨</span>
            <span className="font-semibold text-white/90">Astro Baby Garbhadhan Sanskar</span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <a href="tel:+919018567465" className="hover:text-amber-200 transition-colors font-semibold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9018567465</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-500 ease-in-out ${
          scrolled ? "fixed top-0 bg-pink-50/95 backdrop-blur-xl shadow-md" : "absolute top-0 bg-pink-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="inline-block">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/images/logo.png"
                  alt="Astro Baby"
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
              {navItems.map((item) => {
                const active = isActive(item.to);
                const isHovered = hoveredItem === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      to={item.to || "#"}
                      onClick={(e) => {
                        if (item.hasDropdown && (!item.to || item.to === "#")) {
                          e.preventDefault();
                        }
                      }}
                      className="px-2 py-2 text-[15.5px] font-bold text-gray-800 flex items-center gap-1.5 transition-colors hover:text-[#F45B8A]"
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <motion.svg
                          animate={{ rotate: isHovered ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className={`w-4 h-4 ${isHovered ? "text-[#F45B8A]" : "text-gray-400"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}

                      {/* Underline Indicator */}
                      <motion.span
                        initial={false}
                        animate={{ scaleX: active || isHovered ? 1 : 0 }}
                        className="absolute bottom-0 left-0 w-full h-[3px] rounded-t-lg bg-[#F45B8A] origin-center"
                      />
                    </Link>

                    {/* Small & Clean Dropdowns */}
                    <AnimatePresence>
                      {item.hasDropdown && isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full pt-3 z-50 left-1/2 -translate-x-1/2"
                        >
                          {item.isProgramMenu ? (
                            /* ── COMPACT SMALL DROPDOWN (ONLY HEADINGS) ── */
                            <div className="w-[500px] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_15px_45px_rgba(23,37,84,0.12)] border border-pink-100 p-3 grid grid-cols-2 gap-1.5">
                              {PROGRAM_DROPDOWN_CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                  <Link
                                    key={cat.id}
                                    to={cat.to}
                                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-pink-50 text-gray-800 hover:text-[#F45B8A] transition-all group/item duration-150"
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${cat.iconBg}`}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-bold text-[13.5px] leading-tight text-[#172554] group-hover/item:text-[#F45B8A] transition-colors truncate">
                                        {cat.title}
                                      </span>
                                      <span className="text-[11px] text-slate-400 group-hover/item:text-slate-500 transition-colors truncate">
                                        {cat.subtitle}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          ) : (
                            /* Regular Dropdown */
                            <div className="w-52 p-2 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl border border-pink-100 flex flex-col gap-1">
                              {item.dropdownItems?.map((dropItem) => (
                                <Link
                                  key={dropItem.label}
                                  to={dropItem.to}
                                  className="px-3.5 py-2.5 text-[14px] font-bold text-gray-700 hover:text-[#F45B8A] hover:bg-pink-50 rounded-xl transition-all"
                                >
                                  {dropItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Language Selector */}
            <div className="hidden md:flex items-center gap-6">
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-bold text-gray-700 hover:text-[#F45B8A] transition-colors cursor-pointer"
                >
                  <span className="text-lg">🌐</span>
                  <span>{selectedLang.code.toUpperCase()}</span>
                  <motion.svg
                    animate={{ rotate: langOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="absolute right-0 mt-2.5 w-36 bg-white rounded-2xl shadow-xl border border-pink-100 py-1.5 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-[13.5px] font-bold transition-colors cursor-pointer ${
                            selectedLang.code === lang.code
                              ? "text-[#F45B8A] bg-pink-50"
                              : "text-gray-700 hover:bg-pink-50 hover:text-[#F45B8A]"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-800 hover:text-[#F45B8A] transition-colors rounded-full hover:bg-pink-50 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-pink-100 shadow-2xl absolute top-full left-0 w-full rounded-b-3xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.to || "#"}
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          e.preventDefault();
                          setMobileDropdownOpen(mobileDropdownOpen === item.label ? null : item.label);
                        } else {
                          setMenuOpen(false);
                        }
                      }}
                      className={`block px-4 py-3 rounded-xl text-[15.5px] font-bold transition-colors ${
                        isActive(item.to) ? "text-[#F45B8A] bg-pink-50" : "text-gray-800 hover:bg-pink-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        {item.label}
                        {item.hasDropdown && (
                          <motion.svg
                            animate={{ rotate: mobileDropdownOpen === item.label ? 180 : 0 }}
                            className={`w-5 h-5 ${mobileDropdownOpen === item.label ? "text-[#F45B8A]" : "text-gray-400"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        )}
                      </div>
                    </Link>

                    {/* Mobile Accordion Content (Simple Headings List) */}
                    <AnimatePresence>
                      {item.hasDropdown && mobileDropdownOpen === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pr-2 overflow-hidden"
                        >
                          {item.isProgramMenu ? (
                            <div className="py-2 space-y-1">
                              {PROGRAM_DROPDOWN_CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                  <Link
                                    key={cat.id}
                                    to={cat.to}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-800 hover:text-[#F45B8A] hover:bg-pink-50 transition-colors"
                                  >
                                    <div
                                      className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${cat.iconBg}`}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-bold text-[14px] text-[#172554]">
                                        {cat.title}
                                      </span>
                                      <span className="text-[11px] text-slate-400">
                                        {cat.subtitle}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="py-2 space-y-1">
                              {item.dropdownItems?.map((dropItem) => (
                                <Link
                                  key={dropItem.label}
                                  to={dropItem.to}
                                  onClick={() => setMenuOpen(false)}
                                  className="block px-3 py-2 text-[14px] font-bold text-gray-600 hover:text-[#F45B8A] hover:bg-pink-50 rounded-lg transition-colors"
                                >
                                  {dropItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
