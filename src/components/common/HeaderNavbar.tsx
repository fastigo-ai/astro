import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        desc: "Learn about our journey",
      },
      {
        label: "Team",
        to: "/team",
        desc: "Meet our experts",
      },
    ],
  },
  {
    label: "Program",
    to: "#",
    hasDropdown: true,
    isMegaMenu: true,
    dropdownItems: [
      {
        label: "Beej Sanskar",
        to: "/features/biz-sanskar",
        desc: "Holistic success and work-life balance",
      },
      {
        label: "Garbhadhan",
        to: "/features/garbh-dhan",
        desc: "Divine planning for conception",
      },
      {
        label: "Garbhadhan Sanskar",
        to: "/features/garbh-sanskar",
        desc: "Vedic wisdom for pregnancy",
      },
      {
        label: "Baal Bhavish Fal",
        to: "/features/baal-bhavish-fal",
        desc: "Astrological guidance for kids",
      },
      {
        label: "Parenting",
        to: "/features/parenting",
        desc: "Mindful and positive upbringing",
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
        desc: "Get in touch with our counselors",
      },
      {
        label: "Newsletter",
        to: "/newsletter",
        desc: "Weekly Vedic & obstetric insights",
      },
    ],
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

  // Handle scroll for sticky navbar 3D effect
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
    <div className="w-full relative z-50 font-['Plus_Jakarta_Sans',sans-serif]" style={{ zIndex: 9999 }}>
      {/* Top Bar - Kept for utility but minimal */}
      <div className="hidden md:block bg-[#172554] text-white text-xs py-2 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-amber-300">✨</span>
            <span className="font-semibold text-white/90">Astro Baby Garbhadhan Sanskar</span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <a href="tel:+919018567465" className="hover:text-amber-200 transition-colors font-semibold">
              +91 9018567465
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-500 ease-in-out ${scrolled ? 'fixed top-0 bg-pink-50/95 backdrop-blur-xl shadow-md' : 'absolute top-0 bg-pink-50'}`}>
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
                          className={`w-4 h-4 ${isHovered ? 'text-[#F45B8A]' : 'text-gray-400'}`}
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

                    {/* Dropdowns */}
                    <AnimatePresence>
                      {item.hasDropdown && isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50"
                        >
                          <div className={`${item.isMegaMenu ? 'w-[650px] p-6' : 'w-56 p-3'} bg-white rounded-2xl shadow-xl border border-pink-100`}>
                             {item.isMegaMenu ? (
                               <div className="grid grid-cols-2 gap-4">
                                 {item.dropdownItems?.map((dropItem) => (
                                   <Link key={dropItem.label} to={dropItem.to} className="flex flex-col p-4 rounded-xl hover:bg-pink-50 border border-transparent hover:border-pink-100 hover:shadow-sm transition-all group/item duration-200">
                                     <span className="font-bold text-gray-800 group-hover/item:text-[#F45B8A] text-[15px]">{dropItem.label}</span>
                                     <span className="text-[13px] text-gray-500 mt-1">{dropItem.desc}</span>
                                   </Link>
                                 ))}
                               </div>
                             ) : (
                               <div className="flex flex-col gap-1">
                                 {item.dropdownItems?.map((dropItem) => (
                                   <Link key={dropItem.label} to={dropItem.to} className="px-4 py-3 text-[14px] font-bold text-gray-700 hover:text-[#F45B8A] hover:bg-pink-50 rounded-xl transition-all hover:translate-x-1">
                                     {dropItem.label}
                                   </Link>
                                 ))}
                               </div>
                             )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Language & Join Now */}
            <div className="hidden md:flex items-center gap-6">
              {/* Language Selector */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-bold text-gray-700 hover:text-[#F45B8A] transition-colors"
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute right-0 mt-3 w-36 bg-white rounded-2xl shadow-xl border border-pink-100 py-2 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left px-5 py-2.5 text-[14px] font-bold transition-colors ${selectedLang.code === lang.code ? 'text-[#F45B8A] bg-pink-50' : 'text-gray-700 hover:bg-pink-50 hover:text-[#F45B8A]'}`}
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
                className="p-2 text-gray-800 hover:text-[#F45B8A] transition-colors rounded-full hover:bg-pink-50"
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
               animate={{ opacity: 1, height: 'auto' }}
               exit={{ opacity: 0, height: 0 }}
               className="md:hidden bg-white border-t border-pink-100 shadow-2xl absolute top-full left-0 w-full rounded-b-3xl overflow-hidden"
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
                      className={`block px-4 py-3.5 rounded-xl text-[16px] font-bold transition-colors ${isActive(item.to) ? 'text-[#F45B8A] bg-pink-50' : 'text-gray-800 hover:bg-pink-50'}`}
                    >
                      <div className="flex justify-between items-center">
                        {item.label}
                        {item.hasDropdown && (
                          <motion.svg 
                            animate={{ rotate: mobileDropdownOpen === item.label ? 180 : 0 }}
                            className={`w-5 h-5 ${mobileDropdownOpen === item.label ? 'text-[#F45B8A]' : 'text-gray-400'}`} 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        )}
                      </div>
                    </Link>
                    <AnimatePresence>
                      {item.hasDropdown && mobileDropdownOpen === item.label && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-6 pr-2 overflow-hidden"
                        >
                          <div className="py-2 space-y-1">
                            {item.dropdownItems?.map((dropItem) => (
                              <Link
                                key={dropItem.label}
                                to={dropItem.to}
                                onClick={() => setMenuOpen(false)}
                                className="block px-3 py-2.5 text-[15px] font-bold text-gray-600 hover:text-[#F45B8A] hover:bg-pink-50 rounded-lg transition-colors"
                              >
                                {dropItem.label}
                              </Link>
                            ))}
                          </div>
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
