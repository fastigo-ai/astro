import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Check,
  Calendar,
  Sun,
  Activity,
  Music,
  UserCheck,
  Stethoscope,
  Clock,
  ArrowRight,
  Shield,
  Play,
  Award,
  Compass,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

// ── 11 Sacred Inclusions for Garbhadhan Sanskar ──
const GARBHADHAN_SERVICES = [
  {
    icon: Calendar,
    title: "Auspicious Conception Dates",
    subTitle: "Astrological Muhurat",
    desc: "Precise Vedic timing calculated from both parents' birth charts to align conception with auspicious planetary energies.",
    badge: "Astrology",
  },
  {
    icon: Sun,
    title: "Personalized Isht Mantra",
    subTitle: "Vedic Chanting",
    desc: "Custom mantra based on your astrological planetary alignment for spiritual protection and positive energy.",
    badge: "Mantra",
  },
  {
    icon: Activity,
    title: "Conception Meditation",
    subTitle: "Emotional Harmony",
    desc: "Guided mindfulness and visualization sessions designed to reduce stress and foster partner connection.",
    badge: "Mindfulness",
  },
  {
    icon: Clock,
    title: "Daily Sandhya Prarthana",
    subTitle: "Live Evening Prayers",
    desc: "Daily live community prayers chanting the protective Ramraksha and Santan Gopal Stotras.",
    badge: "Daily Live",
  },
  {
    icon: Music,
    title: "Music Therapy",
    subTitle: "Fertility Ragas",
    desc: "Calming Indian classical ragas scientifically selected to balance hormones and ease anxiety.",
    badge: "Sound",
  },
  {
    icon: Sparkles,
    title: "Live Sankalp Poojan",
    subTitle: "Vedic Initiation",
    desc: "A personalized live ceremony conducted by Vedic scholars to sanctify your path to parenthood.",
    badge: "Ritual",
  },
  {
    icon: Shield,
    title: "Satvik Nutrition Plan",
    subTitle: "Ayurvedic Detox",
    desc: "Custom diet plans to cleanse reproductive tissues and enhance natural biological vitality.",
    badge: "Ayurveda",
  },
  {
    icon: Stethoscope,
    title: "Doctor Consultation",
    subTitle: "Gynecologist Guidance",
    desc: "Direct medical guidance and fertility health checks with experienced AIIMS-alumni gynecologists.",
    badge: "Medical",
  },
  {
    icon: UserCheck,
    title: "Dedicated Sahayata Sakhi",
    subTitle: "Care Companion",
    desc: "A dedicated personal mentor available daily to answer questions and offer emotional reassurance.",
    badge: "Support",
  },
  {
    icon: Sparkles,
    title: "Expert Masterclasses",
    subTitle: "Live Workshops",
    desc: "Interactive live masterclasses with doctors, psychologists, and traditional spiritual scholars.",
    badge: "Workshops",
  },
  {
    icon: Activity,
    title: "Fertility Cycle Tracker",
    subTitle: "Smart In-App Tool",
    desc: "Intelligent ovulation tracking integrated with cosmic Muhurat timings for optimal planning.",
    badge: "Tool",
  },
];

// ── 4-Stage Conscious Conception Journey ──
const CONCEPTION_STAGES = [
  {
    step: "01",
    title: "Kundali & Muhurat Alignment",
    desc: "Detailed astrological birth chart study of both partners to identify planetary alignments and determine highly auspicious conception windows.",
  },
  {
    step: "02",
    title: "Ayurvedic Cellular Detox",
    desc: "Personalized dietary and detox regimens to purify reproductive tissue (Shukra & Artava Dhatus) for prime biological vitality.",
  },
  {
    step: "03",
    title: "Sankalp Poojan & Isht Mantra",
    desc: "A live one-on-one Vedic ceremony conducted by traditional scholars to sanctify intentions and initiate mantra chanting.",
  },
  {
    step: "04",
    title: "Continuous Medical & Sakhi Support",
    desc: "Daily guidance by dedicated Sahayata Sakhis, gynecologist consultations, and calming meditation sessions throughout your journey.",
  },
];

export default function GarbhDhan() {
  const [inclusionIndex, setInclusionIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [showAllInclusions, setShowAllInclusions] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = GARBHADHAN_SERVICES.length;

  // Window resize listener for dynamic responsive math
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3-Second Automatic Cylindrical Scroll
  useEffect(() => {
    if (isCarouselPaused || showAllInclusions) return;

    const timer = setInterval(() => {
      setInclusionIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [isCarouselPaused, showAllInclusions, total]);

  const handlePrevInclusion = () => {
    setInclusionIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNextInclusion = () => {
    setInclusionIndex((prev) => (prev + 1) % total);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsCarouselPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNextInclusion();
    } else if (diff < -45) {
      handlePrevInclusion();
    }
    setTouchStartX(null);
    setIsCarouselPaused(false);
  };

  // Responsive 5-Box 3D Cylindrical Position Calculation
  const getCylindricalStyle = (index: number) => {
    let offset = (index - inclusionIndex) % total;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    // On mobile screens, only render adjacent 3 cards for clean performance & no edge overflow
    const maxVisibleOffset = isMobile ? 1 : 2;
    if (absOffset > maxVisibleOffset) {
      return {
        opacity: 0,
        transform: `translateX(${offset * 120}%) scale(0.5) translateZ(-400px)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    // Dynamic responsive spacing
    const spacing = isMobile ? Math.min(windowWidth * 0.72, 230) : isTablet ? 240 : 280;
    const translateX = offset * spacing;
    const translateZ = -absOffset * (isMobile ? 50 : 95);
    const rotateY = offset * (isMobile ? -12 : -16);
    const scale = 1 - absOffset * (isMobile ? 0.12 : 0.1);
    const opacity = 1 - absOffset * (isMobile ? 0.35 : 0.22);
    const zIndex = 30 - absOffset * 10;

    return {
      opacity,
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      pointerEvents: "auto" as const,
    };
  };

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/35 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-[#F45B8A] border border-pink-200 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-xs">
            <Heart className="h-3.5 w-3.5 fill-[#F45B8A]/20" />
            <span>Sacred Preparation for Conception • ₹11,000</span>
          </div>

          {/* Display Serif Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#172554] leading-[1.15] font-['DM_Serif_Display',Georgia,serif] tracking-tight">
            Garbhadhan Sanskar —{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Pre-Conception Program
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-[#334155] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-['Manrope',sans-serif] font-bold">
            A sacred pre-conception continuum combining astrological Muhurat calculation, Ayurvedic cellular detox, live Sankalp Poojan, and continuous doctor support to welcome a noble, healthy soul.
          </p>

          {/* Breadcrumbs Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link to="/features" className="hover:text-[#F45B8A] transition-colors">
              Courses & Features
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#172554] font-bold">Garbhadhan Sanskar</span>
          </div>

          {/* Pricing Highlight Card */}
          <div className="pt-5 max-w-xl mx-auto">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-pink-200/90 shadow-[0_15px_45px_rgba(244,91,138,0.12)] flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">All-Inclusive Complete Package</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-['DM_Serif_Display',Georgia,serif]">₹11,000</span>
                  <span className="text-xs text-slate-500 font-bold">/ complete pre-conception cycle</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#F45B8A]/30 hover:scale-105 transition-all text-center cursor-pointer"
                >
                  Enroll Now →
                </a>
                <a
                  href="https://youtu.be/HSHnKz5Po1w"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-full bg-pink-50 border border-pink-200 text-[#F45B8A] hover:bg-[#F45B8A] hover:text-white transition-all shadow-xs shrink-0 cursor-pointer"
                  title="Watch Video Overview"
                >
                  <Play className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-Stage Conscious Conception Journey ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FFFDFE] via-[#FDF6FA] to-[#F7FAFF] border-b border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Compass className="h-3.5 w-3.5 text-[#F45B8A]" /> The 4-Step Continuum
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554] tracking-tight">
              Your Journey to Conscious Conception
            </h2>
            <p className="text-sm md:text-base text-[#334155] font-['Manrope',sans-serif] font-bold">
              A structured scientific and spiritual roadmap guiding couples from preparation to blissful conception.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONCEPTION_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="relative bg-white/95 backdrop-blur-xl rounded-[28px] p-6 sm:p-7 border border-pink-100 shadow-[0_10px_35px_rgba(23,37,84,0.04)] hover:shadow-[0_20px_45px_rgba(244,91,138,0.1)] transition-all duration-300 group hover:-translate-y-1"
              >
                <span className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-[#F45B8A]/30 font-bold block mb-3 group-hover:text-[#F45B8A] transition-colors">
                  {stage.step}
                </span>
                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                  {stage.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#334155] font-['Manrope',sans-serif] font-bold">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Complete Inclusions Section (Cylindrical 5-Box View + Expand Option) ── */}
      <section className="py-16 md:py-24 bg-white/95 border-b border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#F45B8A]" /> Complete Inclusions
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554] tracking-tight">
              What You Receive in Garbhadhan Sanskar
            </h2>
            <p className="text-sm md:text-base text-[#334155] font-['Manrope',sans-serif] font-bold">
              Everything you need for conscious, spiritually empowered, and biologically optimized conception in a single ₹11,000 package.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!showAllInclusions ? (
              /* ── 5-BOX 3D CYLINDRICAL AUTOMATIC SCROLL VIEW ── */
              <motion.div
                key="cylindrical-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* 3D Carousel Stage */}
                <div
                  className="relative max-w-6xl mx-auto h-[380px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden sm:overflow-visible touch-pan-y"
                  style={{ perspective: "1200px" }}
                  onMouseEnter={() => setIsCarouselPaused(true)}
                  onMouseLeave={() => setIsCarouselPaused(false)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {GARBHADHAN_SERVICES.map((item, idx) => {
                    const Icon = item.icon;
                    const style = getCylindricalStyle(idx);
                    const isCenter = idx === inclusionIndex;

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (!isCenter) setInclusionIndex(idx);
                        }}
                        style={style}
                        className={`absolute w-[86vw] max-w-[300px] sm:w-[320px] md:w-[340px] transition-all duration-700 ease-out cursor-pointer ${
                          isCenter ? "cursor-default" : "hover:brightness-105"
                        }`}
                      >
                        <div
                          className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-[28px] transition-all duration-500 overflow-hidden ${
                            isCenter
                              ? "bg-white/98 backdrop-blur-2xl border-2 border-[#F45B8A]/70 shadow-[0_22px_55px_rgba(244,91,138,0.18)]"
                              : "bg-white/85 backdrop-blur-md border border-pink-100/90 shadow-[0_10px_30px_rgba(23,37,84,0.05)]"
                          }`}
                        >
                          {/* Glowing Accent Top Border for Active Center Box */}
                          {isCenter && (
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63]" />
                          )}

                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-50 to-pink-100/80 text-[#F45B8A] border border-pink-200/60 flex items-center justify-center shadow-xs">
                                <Icon className="w-6 h-6" />
                              </div>
                              <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-pink-50 text-[#F45B8A] border border-pink-100 tracking-wider">
                                {item.badge}
                              </span>
                            </div>

                            <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#172554] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs font-bold text-[#F45B8A] font-['Manrope',sans-serif] mt-0.5">
                              {item.subTitle}
                            </p>

                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#334155] font-['Manrope',sans-serif] font-bold">
                              {item.desc}
                            </p>
                          </div>

                          <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F45B8A]" />
                            <span>Included in Program</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Carousel Controls: Arrows & 11 Tonal Dots */}
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrevInclusion}
                      className="w-10 h-10 rounded-full bg-white border border-pink-100 shadow-md flex items-center justify-center text-[#172554] hover:bg-[#F45B8A] hover:text-white transition-all hover:scale-105 cursor-pointer"
                      aria-label="Previous Inclusion"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Pagination Dots for all 11 inclusions */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/70 backdrop-blur-md rounded-full border border-pink-100/80 shadow-xs">
                      {GARBHADHAN_SERVICES.map((_, dotIdx) => {
                        const isActive = dotIdx === inclusionIndex;
                        return (
                          <button
                            key={dotIdx}
                            onClick={() => setInclusionIndex(dotIdx)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              isActive
                                ? "w-6 bg-gradient-to-r from-[#F45B8A] to-[#E91E63]"
                                : "w-2 bg-pink-200 hover:bg-pink-300"
                            }`}
                            aria-label={`Go to item ${dotIdx + 1}`}
                          />
                        );
                      })}
                    </div>

                    <button
                      onClick={handleNextInclusion}
                      className="w-10 h-10 rounded-full bg-white border border-pink-100 shadow-md flex items-center justify-center text-[#172554] hover:bg-[#F45B8A] hover:text-white transition-all hover:scale-105 cursor-pointer"
                      aria-label="Next Inclusion"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ── FULL 11-BOX EXPANDED GRID VIEW ── */
              <motion.div
                key="grid-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
              >
                {GARBHADHAN_SERVICES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/95 backdrop-blur-xl rounded-[28px] p-6 sm:p-7 border border-pink-100 hover:border-[#F45B8A]/40 shadow-[0_10px_35px_rgba(23,37,84,0.04)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-50 to-pink-100/80 text-[#F45B8A] border border-pink-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-[#F45B8A] group-hover:to-[#E91E63] group-hover:text-white transition-all duration-300 shadow-xs">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-pink-50 text-[#F45B8A] border border-pink-100 tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#172554] group-hover:text-[#F45B8A] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-bold text-[#F45B8A] font-['Manrope',sans-serif] mt-0.5">
                          {item.subTitle}
                        </p>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#334155] font-['Manrope',sans-serif] font-bold">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F45B8A]" />
                        <span>Included in Program</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Explore More Toggle CTA ── */}
          <div className="flex justify-center mt-10 md:mt-14">
            <button
              onClick={() => setShowAllInclusions(!showAllInclusions)}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#172554] to-[#1e3a8a] hover:from-[#F45B8A] hover:to-[#E91E63] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg hover:shadow-[#F45B8A]/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {showAllInclusions ? (
                <>
                  <span>Show Cylindrical Carousel View</span>
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  <span>Explore All 11 Inclusions</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Prepare Consciously Before Conception Section (High Visibility Theme) ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] border-y border-pink-100/70 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute top-0 right-1/4 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F45B8A] shadow-xs backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-[#F45B8A]" /> Vedic Science & Medical Synergy
              </span>

              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554] leading-[1.15] tracking-tight">
                Why Prepare Consciously{" "}
                <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
                  Before Conception?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-['Manrope',sans-serif] font-bold">
                Ancient Ayurvedic texts and modern epigenetics agree: the mental harmony, spiritual vibration, and cellular health of both parents during conception form the lifelong foundation of your child's intellect, temperament, and biological vitality.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/90 backdrop-blur-md p-4.5 rounded-2xl border border-pink-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#F45B8A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 font-extrabold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#172554]">5,000+ Blessed Parents</h4>
                    <p className="text-xs text-slate-600 font-bold mt-0.5">Couples experiencing blissful conscious conception.</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-4.5 rounded-2xl border border-pink-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#F45B8A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 font-extrabold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#172554]">AIIMS Gynecologists</h4>
                    <p className="text-xs text-slate-600 font-bold mt-0.5">Expert medical reassurance & fertility guidance.</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-4.5 rounded-2xl border border-pink-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#F45B8A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 font-extrabold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#172554]">Learned Vaidic Scholars</h4>
                    <p className="text-xs text-slate-600 font-bold mt-0.5">Authentic rituals, mantras & Muhurat calculation.</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-4.5 rounded-2xl border border-pink-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#F45B8A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 font-extrabold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#172554]">100% Confidential Care</h4>
                    <p className="text-xs text-slate-600 font-bold mt-0.5">Dedicated daily companion (Sahayata Sakhi).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / CTA Box */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-2xl p-8 sm:p-9 rounded-[32px] border border-pink-200/90 shadow-[0_20px_50px_rgba(244,91,138,0.12)] text-center space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-50 to-pink-100 text-[#F45B8A] mx-auto shadow-xs">
                  <Heart className="w-7 h-7 fill-[#F45B8A]/20" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl text-[#172554]">
                    Begin Your Sacred Journey
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] font-['Manrope',sans-serif] font-bold leading-relaxed">
                    Download the AstroBaby app and schedule your live Sankalp Poojan with our senior Vedic acharyas today.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-100 text-left flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 font-bold uppercase block">All-Inclusive Fee</span>
                    <span className="text-2xl font-black text-[#172554]">₹11,000</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    100% Sacred Continuum
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#F45B8A]/30 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Download App & Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <AppDownloadSection />

      {/* Footer */}
      <footer className="bg-[#172554] text-white/80 py-10 font-['Plus_Jakarta_Sans',sans-serif] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          © {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
