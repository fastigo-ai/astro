import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Sun,
  Baby,
  ShieldCheck,
  Smile,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";

interface ProgramItem {
  icon: LucideIcon;
  title: string;
  subTitle: string;
  desc: string;
  img: string;
  price?: string;
  to: string;
  iconBg: string;
  iconColor: string;
  badge?: string;
  features: string[];
}

const programs: ProgramItem[] = [
  {
    icon: Heart,
    title: "Garbhadhan Sanskar",
    subTitle: "Sacred Preparation for Conception",
    desc: "Sacred pre-conception guidance, cosmic Muhurat coitus alignment, and fertility tracking to welcome a divine soul.",
    price: "₹11,000",
    img: "/images/garbh_dan_banner.png",
    to: "/features/garbh-dhan",
    iconBg: "bg-pink-100/80",
    iconColor: "text-[#F45B8A]",
    features: [
      "Muhurat-Based Coitus Dates",
      "Isht Mantra & Meditation",
      "Fertility Tracker & Support",
    ],
  },
  {
    icon: Sparkles,
    title: "Beej Sanskar",
    subTitle: "Preparing the Foundation for Conscious Conception",
    desc: "Ayurvedic detoxification, cellular purification, satvik dietary routines, and reproductive vitality protocols before conceiving.",
    price: "Vitality Track",
    img: "/images/beej_sanskar_banner.jpg",
    to: "/features/beej-sanskar",
    iconBg: "bg-amber-100/80",
    iconColor: "text-amber-600",
    features: ["Ayurvedic Cellular Detox", "Satvik Diet & Vitality", "Stress Reduction & Yoga"],
  },
  {
    icon: Sun,
    title: "Garbh Sanskar",
    subTitle: "9-Month Journey of Prenatal Nurturing",
    desc: "9-month comprehensive prenatal development with Vedic mantras, raga music therapy, and neuro-stimulation.",
    price: "Starting ₹5,000",
    badge: "Most Popular",
    img: "/images/garbh_sanskar_banner.jpg",
    to: "/features/garbh-sanskar",
    iconBg: "bg-purple-100/80",
    iconColor: "text-purple-600",
    features: [
      "Diamond (₹25k), Gold (₹11k), Silver (₹5k)",
      "Month-wise Mantra Vrushti",
      "Garbh Samvad & Prenatal Yoga",
    ],
  },
  {
    icon: Baby,
    title: "Baal Sanskar",
    subTitle: "Sacred Milestones in Early Childhood",
    desc: "Early childhood development, 4 sacred Vedic sanskars, cognitive puzzles, and virtue-building bedtime stories.",
    price: "₹6,000",
    img: "/images/baal_bhavish_banner.jpg",
    to: "/features/baal-sanskar",
    iconBg: "bg-pink-100/80",
    iconColor: "text-[#EA3484]",
    features: [
      "Namkaran, Nishkraman & Annaprashan",
      "Character & Value Building",
      "Cognitive Brain Puzzles",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Infant Care",
    subTitle: "Gentle Care for Your Baby's Early Years",
    desc: "Pediatrician-backed newborn care, lactation coach guidance, gentle sleep routines, and daily live classes.",
    price: "₹5,000",
    img: "/images/nurturing_life_banner.png",
    to: "/features/infant-care",
    iconBg: "bg-pink-100/80",
    iconColor: "text-[#F45B8A]",
    features: [
      "Personal Parenting Coach",
      "Custom Diet & Lactation",
      "Daily Live Yoga & Milestones",
    ],
  },
  {
    icon: Smile,
    title: "Parenting",
    subTitle: "Mindful Guidance for Raising Your Child",
    desc: "Evidence-based mindful parenting, emotional regulation strategies, positive discipline, and child nutrition.",
    price: "Expert Guidance",
    img: "/images/parenting_banner.jpg",
    to: "/features/parenting",
    iconBg: "bg-rose-100/80",
    iconColor: "text-[#EA3484]",
    features: [
      "Parenting Coach & Support",
      "Child Psychological Growth",
      "Nutrition & Emotional Wellbeing",
    ],
  },
  {
    icon: Compass,
    title: "Bhavishya Phal",
    subTitle: "Astrological Insights for Your Child's Journey",
    desc: "Astrological birth chart (Janam Kundali) analysis, planetary strengths, and senior astrologer consultation.",
    price: "Starting ₹3,100",
    img: "/images/about_premium.png",
    to: "/features/bhavishya-fal",
    iconBg: "bg-pink-100/80",
    iconColor: "text-[#EA3484]",
    features: [
      "Kundli + Falit Report (₹3,500)",
      "Live Astrologer Consultation (₹3,100)",
      "Lifelong Nakshatra Guidance",
    ],
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = programs.length;

  // Window resize listener for dynamic responsive layout
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3-Second Cylindrical Auto-Scroll Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
    setIsPaused(false);
  };

  // Helper function to calculate 3D cylindrical position for each card
  const getCardStyle = (index: number) => {
    let offset = (index - activeIndex) % total;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    // On mobile screens, only render adjacent cards to prevent horizontal overflow
    const maxVisibleOffset = isMobile ? 1 : 2;
    if (absOffset > maxVisibleOffset) {
      return {
        opacity: 0,
        transform: `translateX(${offset * 120}%) scale(0.6) translateZ(-400px)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    // Dynamic responsive spread
    const spacing = isMobile ? Math.min(windowWidth * 0.75, 250) : isTablet ? 280 : 340;
    const translateX = offset * spacing;
    const translateZ = -absOffset * (isMobile ? 60 : 110);
    const rotateY = offset * (isMobile ? -12 : -18);
    const scale = 1 - absOffset * (isMobile ? 0.12 : 0.1);
    const opacity = 1 - absOffset * (isMobile ? 0.35 : 0.25);
    const zIndex = 30 - absOffset * 10;

    return {
      opacity,
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      pointerEvents: "auto" as const,
    };
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#FFFDFE] via-[#FDF6FA] to-[#F7FAFF] pt-14 md:pt-20 pb-16 md:pb-24 border-b border-pink-100/60">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F45B8A]" /> AstroBaby Programs & Services
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] text-[#172554] tracking-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Sacred Programs
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>

          <p className="text-sm md:text-base leading-relaxed text-[#475569] font-normal max-w-2xl mx-auto mt-2">
            From conscious pre-conception preparation to prenatal nurturing, gentle infant care, and
            future astrological insights.
          </p>
        </div>

        {/* ── 3D Cylindrical Carousel Container ── */}
        <div
          className="relative max-w-5xl mx-auto h-[380px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden sm:overflow-visible touch-pan-y"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            const style = getCardStyle(idx);
            const isCenter = idx === activeIndex;

            return (
              <div
                key={idx}
                onClick={() => {
                  if (!isCenter) setActiveIndex(idx);
                }}
                style={style}
                className={`absolute w-[86vw] max-w-[310px] sm:w-[360px] md:w-[380px] transition-all duration-700 ease-out cursor-pointer ${
                  isCenter ? "cursor-default" : "hover:brightness-105"
                }`}
              >
                <div
                  className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-[30px] transition-all duration-500 overflow-hidden ${
                    isCenter
                      ? "bg-white/98 backdrop-blur-2xl border-2 border-[#F45B8A]/70 shadow-[0_25px_65px_rgba(244,91,138,0.18)]"
                      : "bg-white/85 backdrop-blur-md border border-pink-100/80 shadow-[0_10px_35px_rgba(23,37,84,0.06)]"
                  }`}
                >
                  {/* Glowing Accent Top Border for Active Card */}
                  {isCenter && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63]" />
                  )}

                  <div>
                    {/* Thematic Image Header */}
                    <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-4 border border-pink-100/80">
                      <img
                        src={prog.img}
                        alt={prog.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/images/garbh_dan_banner.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                      {/* Top Badges & Icon Overlay */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${prog.iconBg} ${prog.iconColor} shadow-xs backdrop-blur-md`}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <div className="flex items-center gap-1.5">
                          {prog.badge && (
                            <span className="bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shadow-2xs tracking-wider">
                              {prog.badge}
                            </span>
                          )}
                          {prog.price && (
                            <span className="text-[10px] font-semibold text-[#172554] bg-white/95 backdrop-blur-md border border-pink-100 px-2 py-0.5 rounded-full shadow-2xs">
                              {prog.price}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Subtitle tag at bottom */}
                      <div className="absolute bottom-2 left-2.5 right-2.5">
                        <span className="text-[10px] font-semibold text-pink-200 uppercase tracking-wide drop-shadow line-clamp-1">
                          {prog.subTitle}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-0.5">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#172554] transition-colors duration-300 leading-snug">
                        {prog.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#475569] font-normal">
                      {prog.desc}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={prog.to}
                      onClick={(e) => {
                        if (!isCenter) {
                          e.preventDefault();
                          setActiveIndex(idx);
                        }
                      }}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs ${
                        isCenter
                          ? "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-md shadow-[#F45B8A]/25 hover:scale-105 cursor-pointer"
                          : "bg-[#172554] text-white/90 hover:bg-[#1e3a8a]"
                      }`}
                    >
                      <span>View Program</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <span className="text-[11px] font-bold text-slate-400">Pillar 0{idx + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Carousel Navigation Controls ── */}
        <div className="flex flex-col items-center justify-center gap-5 mt-6">
          {/* Controls: Prev, Next & 7 Tonal Pagination Dots */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-pink-100 shadow-md flex items-center justify-center text-[#172554] hover:bg-[#F45B8A] hover:text-white transition-all hover:scale-105 cursor-pointer"
              aria-label="Previous Program"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 7 Tonal Pagination Dots */}
            <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-md rounded-full border border-pink-100/80 shadow-xs">
              {programs.map((_, dotIdx) => {
                const isActive = dotIdx === activeIndex;
                return (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-8 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] shadow-xs"
                        : "w-2.5 bg-pink-200 hover:bg-pink-300"
                    }`}
                    aria-label={`Go to Program ${dotIdx + 1}`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-pink-100 shadow-md flex items-center justify-center text-[#172554] hover:bg-[#F45B8A] hover:text-white transition-all hover:scale-105 cursor-pointer"
              aria-label="Next Program"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Explore All Features Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            to="/features"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] hover:shadow-lg hover:shadow-[#F45B8A]/30 px-9 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore All Features & Courses</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
