import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage, Language } from "@/context/LanguageContext";
import { Heart, Sparkles, Sun, Baby, ShieldCheck, Smile, Compass } from "lucide-react";

export default function HeaderNavbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  const programCategories = [
    {
      id: "garbhadhan",
      title: t("programs.garbhadhan.title", "Garbhadhan Sanskar"),
      subtitle: t("programs.garbhadhan.subtitle", "Sacred Preparation for Conception"),
      to: "/features/garbh-dhan",
      icon: Heart,
      iconBg: "bg-pink-50 text-[#F45B8A]",
    },
    {
      id: "beej-sanskar",
      title: t("programs.beejSanskar.title", "Beej Sanskar"),
      subtitle: t("programs.beejSanskar.subtitle", "Preparing the Foundation for Conscious Conception"),
      to: "/features/beej-sanskar",
      icon: Sparkles,
      iconBg: "bg-amber-50 text-amber-600",
    },
    {
      id: "garbh-sanskar",
      title: t("programs.garbhSanskar.title", "Garbh Sanskar"),
      subtitle: t("programs.garbhSanskar.subtitle", "9-Month Journey of Prenatal Nurturing"),
      to: "/features/garbh-sanskar",
      icon: Sun,
      iconBg: "bg-purple-50 text-purple-600",
    },
    {
      id: "baal-sanskar",
      title: t("programs.baalSanskar.title", "Baal Sanskar"),
      subtitle: t("programs.baalSanskar.subtitle", "Sacred Milestones in Early Childhood"),
      to: "/features/baal-sanskar",
      icon: Baby,
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      id: "infant-care",
      title: t("programs.infantCare.title", "Infant Care"),
      subtitle: t("programs.infantCare.subtitle", "Gentle Care for Your Baby's Early Years"),
      to: "/features/infant-care",
      icon: ShieldCheck,
      iconBg: "bg-pink-50 text-[#F45B8A]",
    },
    {
      id: "parenting",
      title: t("programs.parenting.title", "Parenting"),
      subtitle: t("programs.parenting.subtitle", "Mindful Guidance for Raising Your Child"),
      to: "/features/parenting",
      icon: Smile,
      iconBg: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "bhavishya-fal",
      title: t("programs.bhavishyaPhal.title", "Bhavishya Phal"),
      subtitle: t("programs.bhavishyaPhal.subtitle", "Astrological Insights for Your Child's Future"),
      to: "/features/bhavishya-fal",
      icon: Compass,
      iconBg: "bg-indigo-50 text-indigo-600",
    },
  ];

  const resourceCategories = [
    {
      id: "garbh-sanskar-hub",
      title: t("resources.garbhSanskar.title", "Garbh Sanskar"),
      subtitle: t("resources.garbhSanskar.subtitle", "Ancient Vedic wisdom, mantras & music"),
      to: "/garbh-sanskar",
      icon: Sun,
      iconBg: "bg-pink-50 text-[#F45B8A]",
      badge: t("resources.garbhSanskar.badge", "Vedic Wisdom"),
    },
    {
      id: "pregnancy-hub",
      title: t("resources.pregnancy.title", "Pregnancy"),
      subtitle: t("resources.pregnancy.subtitle", "Trimester care, yoga, nutrition & symptoms"),
      to: "/pregnancy",
      icon: Heart,
      iconBg: "bg-rose-50 text-rose-600",
      badge: t("resources.pregnancy.badge", "Complete Care"),
    },
    {
      id: "how-to-hub",
      title: t("resources.howTo.title", "How-To Guides"),
      subtitle: t("resources.howTo.subtitle", "Step-by-step pregnancy & baby care guides"),
      to: "/how-to",
      icon: Sparkles,
      iconBg: "bg-purple-50 text-purple-600",
      badge: t("resources.howTo.badge", "Practical Steps"),
    },
  ];

  const navItems = [
    {
      label: t("nav.home", "Home"),
      to: "/",
    },
    {
      label: t("nav.aboutUs", "About Us"),
      to: "/about-us",
    },
    {
      label: "Sacred Programs",
      to: "/features",
      hasDropdown: true,
      isProgramMenu: true,
      programItems: programCategories,
    },
    {
      label: "Resources",
      to: "/garbh-sanskar",
      hasDropdown: true,
      isResourceMenu: true,
      resourceItems: resourceCategories,
    },
    {
      label: t("nav.blog", "Vedic Blog"),
      to: "/blog",
    },
    {
      label: t("nav.contact", "Contact Us"),
      to: "/contact",
      hasDropdown: true,
      dropdownItems: [
        {
          label: t("nav.contact", "Contact Us"),
          to: "/contact",
        },
        {
          label: "Newsletter",
          to: "/newsletter",
        },
      ],
    },
  ];
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const isScrolledRef = useRef(false);
  const isVisibleRef = useRef(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
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

  // Handle scroll for sticky navbar effect with rAF throttling
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const shouldBeScrolled = currentScrollY > 15;

          if (shouldBeScrolled !== isScrolledRef.current) {
            isScrolledRef.current = shouldBeScrolled;
            setScrolled(shouldBeScrolled);
          }

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to?: string) => {
    if (!to || to === "#") return false;
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 font-medium select-none"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 99999 }}
    >
      <div className="w-full">
        {/* Main Navbar with smooth height, bg, border & shadow transitions */}
        <nav
          className={`w-full transition-all duration-500 ease-in-out ${
            scrolled
              ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_35px_rgba(23,37,84,0.08)] border-b border-pink-200/80"
              : "bg-pink-50/95 backdrop-blur-md border-b border-pink-100/60"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex justify-between items-center transition-all duration-500 ease-in-out ${
                scrolled ? "h-16 md:h-[72px]" : "h-20 md:h-24"
              }`}
            >
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="inline-block">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src="/images/logo.png"
                    alt="Astro Baby"
                    className={`w-auto object-contain drop-shadow-2xs transition-all duration-500 ease-in-out ${
                      scrolled ? "h-11 md:h-14" : "h-16 md:h-20"
                    }`}
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M19 9l-7 7-7-7"
                          />
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
                            /* ── COMPACT SACRED PROGRAMS DROPDOWN ── */
                            <div className="w-[520px] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_15px_45px_rgba(23,37,84,0.12)] border border-pink-100 p-3 grid grid-cols-2 gap-2">
                              {programCategories.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                  <Link
                                    key={cat.id}
                                    to={cat.to}
                                    className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl hover:bg-pink-50 text-gray-800 hover:text-[#F45B8A] transition-all group/item duration-150"
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${cat.iconBg}`}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-bold text-[13.5px] leading-tight text-[#172554] group-hover/item:text-[#F45B8A] transition-colors truncate">
                                        {cat.title}
                                      </span>
                                      <span className="text-[11px] text-slate-400 group-hover/item:text-slate-500 transition-colors line-clamp-1">
                                        {cat.subtitle}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          ) : item.isResourceMenu ? (
                            /* ── RESOURCES CONTENT HUBS DROPDOWN ── */
                            <div className="w-[400px] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_15px_45px_rgba(23,37,84,0.12)] border border-pink-100 p-2.5 flex flex-col gap-1.5">
                              {resourceCategories.map((res) => {
                                const Icon = res.icon;
                                return (
                                  <Link
                                    key={res.id}
                                    to={res.to}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-pink-50 text-gray-800 hover:text-[#F45B8A] transition-all group/res duration-150 border border-transparent hover:border-pink-100"
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${res.iconBg} shadow-2xs`}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="font-bold text-[13.5px] leading-tight text-[#172554] group-hover/res:text-[#F45B8A] transition-colors">
                                          {res.title}
                                        </span>
                                        <span className="text-[9.5px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-100/60 text-[#F45B8A]">
                                          {res.badge}
                                        </span>
                                      </div>
                                      <span className="text-[11px] text-slate-400 group-hover/res:text-slate-500 transition-colors mt-0.5 leading-tight truncate">
                                        {res.subtitle}
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
                  className="flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-bold text-gray-700 hover:text-[#F45B8A] bg-pink-50/50 hover:bg-pink-50 rounded-full border border-pink-100/80 transition-all cursor-pointer shadow-2xs"
                  aria-label="Change Language"
                >
                  <span className="text-base">🌐</span>
                  <span>{currentLanguage.name}</span>
                  <motion.svg
                    animate={{ rotate: langOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-gray-500"
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
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.96 }}
                      className="absolute right-0 mt-2.5 w-44 bg-white rounded-2xl shadow-xl border border-pink-100 py-2 z-50 overflow-hidden"
                    >
                      <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-pink-50 mb-1">
                        Select Language
                      </div>
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-[13.5px] font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                            currentLanguage.code === lang.code
                              ? "text-[#F45B8A] bg-pink-50 font-bold"
                              : "text-gray-700 hover:bg-pink-50/60 hover:text-[#F45B8A]"
                          }`}
                        >
                          <span>{lang.name}</span>
                          <span className="text-xs text-slate-400 font-normal">
                            {lang.nativeName}
                          </span>
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          setMobileDropdownOpen(
                            mobileDropdownOpen === item.label ? null : item.label,
                          );
                        } else {
                          setMenuOpen(false);
                        }
                      }}
                      className={`block px-4 py-3 rounded-xl text-[15.5px] font-bold transition-colors ${
                        isActive(item.to)
                          ? "text-[#F45B8A] bg-pink-50"
                          : "text-gray-800 hover:bg-pink-50"
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M19 9l-7 7-7-7"
                            />
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
                              {programCategories.map((cat) => {
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
                          ) : item.isResourceMenu ? (
                            <div className="py-2 space-y-1.5">
                              {resourceCategories.map((res) => {
                                const Icon = res.icon;
                                return (
                                  <Link
                                    key={res.id}
                                    to={res.to}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-start gap-3 p-2.5 rounded-xl text-gray-800 hover:text-[#F45B8A] hover:bg-pink-50 transition-colors bg-pink-50/40 border border-pink-100/60"
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${res.iconBg}`}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col min-w-0 flex-1">
                                      <div className="flex items-center justify-between">
                                        <span className="font-bold text-[14px] text-[#172554]">
                                          {res.title}
                                        </span>
                                        <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-pink-100 text-[#F45B8A]">
                                          {res.badge}
                                        </span>
                                      </div>
                                      <span className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                                        {res.subtitle}
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

                {/* Mobile Language Selector Row */}
                <div className="pt-3 mt-2 border-t border-pink-100">
                  <div className="px-3 pb-2 text-[12px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🌐</span>
                    <span>Language / भाषा</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang);
                          setMenuOpen(false);
                        }}
                        className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-xl border text-xs transition-all cursor-pointer ${
                          currentLanguage.code === lang.code
                            ? "bg-[#F45B8A] text-white font-bold border-[#F45B8A] shadow-xs"
                            : "bg-pink-50/50 text-slate-700 font-semibold border-pink-100 hover:bg-pink-100/60"
                        }`}
                      >
                        <span>{lang.name}</span>
                        <span
                          className={`text-[10px] ${currentLanguage.code === lang.code ? "text-white/80" : "text-slate-400"}`}
                        >
                          {lang.nativeName}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  </header>
  );
}
