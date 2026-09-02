import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

export default function FeaturesSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const programs: ProgramItem[] = [
    {
      icon: Heart,
      title: t("programs.garbhadhan.title", "Garbhadhan Sanskar"),
      subTitle: t("programs.garbhadhan.subtitle", "Sacred Preparation for Conception"),
      desc: t("programs.garbhadhan.desc", "Sacred pre-conception guidance, cosmic Muhurat coitus alignment, and fertility tracking to welcome a divine soul."),
      price: t("programs.garbhadhan.price", "₹11,000"),
      img: "/images/garbh_dan_banner.png",
      to: "/features/garbh-dhan",
      iconBg: "bg-pink-100/80",
      iconColor: "text-[#F45B8A]",
      features: [
        t("programs.garbhadhan.f1", "Muhurat-Based Conception Dates"),
        t("programs.garbhadhan.f2", "Ishta Mantra & Meditation"),
        t("programs.garbhadhan.f3", "Fertility Tracker & Support"),
      ],
    },
    {
      icon: Sparkles,
      title: t("programs.beejSanskar.title", "Beej Sanskar"),
      subTitle: t("programs.beejSanskar.subtitle", "Preparing the Foundation for Conscious Conception"),
      desc: t("programs.beejSanskar.desc", "Ayurvedic detoxification, cellular purification, satvik dietary routines, and reproductive vitality protocols before conceiving."),
      price: t("programs.beejSanskar.price", "Vitality Track"),
      img: "/images/beej_sanskar_banner.jpg",
      to: "/features/beej-sanskar",
      iconBg: "bg-amber-100/80",
      iconColor: "text-amber-600",
      features: [
        t("programs.beejSanskar.f1", "Ayurvedic Cellular Detox"),
        t("programs.beejSanskar.f2", "Satvik Diet & Vitality"),
        t("programs.beejSanskar.f3", "Stress Reduction & Yoga"),
      ],
    },
    {
      icon: Sun,
      title: t("programs.garbhSanskar.title", "Garbh Sanskar"),
      subTitle: t("programs.garbhSanskar.subtitle", "9-Month Journey of Prenatal Nurturing"),
      desc: t("programs.garbhSanskar.desc", "9-month comprehensive prenatal development with Diamond (₹25k), Gold (₹11k), and Silver (₹5k) plans."),
      price: t("programs.garbhSanskar.price", "Starting ₹5,000"),
      badge: t("programs.garbhSanskar.badge", "Most Popular"),
      img: "/images/garbh_sanskar_banner.jpg",
      to: "/features/garbh-sanskar",
      iconBg: "bg-purple-100/80",
      iconColor: "text-purple-600",
      features: [
        t("programs.garbhSanskar.f1", "Diamond, Gold & Silver Plans"),
        t("programs.garbhSanskar.f2", "Month-wise Mantra Vrushti"),
        t("programs.garbhSanskar.f3", "Garbh Samvad & Prenatal Yoga"),
      ],
    },
    {
      icon: Baby,
      title: t("programs.baalSanskar.title", "Baal Sanskar"),
      subTitle: t("programs.baalSanskar.subtitle", "Sacred Milestones in Early Childhood"),
      desc: t("programs.baalSanskar.desc", "Early childhood development, 4 sacred Vedic sanskars, cognitive puzzles, and virtue-building bedtime stories."),
      price: t("programs.baalSanskar.price", "₹6,000"),
      img: "/images/baal_bhavish_banner.jpg",
      to: "/features/baal-sanskar",
      iconBg: "bg-pink-100/80",
      iconColor: "text-[#EA3484]",
      features: [
        t("programs.baalSanskar.f1", "Namkaran, Nishkraman & Annaprashan"),
        t("programs.baalSanskar.f2", "Character & Value Building"),
        t("programs.baalSanskar.f3", "Cognitive Brain Puzzles"),
      ],
    },
    {
      icon: ShieldCheck,
      title: t("programs.infantCare.title", "Infant Care"),
      subTitle: t("programs.infantCare.subtitle", "Gentle Care for Your Baby's Early Years"),
      desc: t("programs.infantCare.desc", "Dedicated parenting coach, customized diet plans, daily live yoga, and lactation coaching."),
      price: t("programs.infantCare.price", "₹5,000"),
      img: "/images/nurturing_life_banner.png",
      to: "/features/infant-care",
      iconBg: "bg-emerald-100/80",
      iconColor: "text-emerald-600",
      features: [
        t("programs.infantCare.f1", "Personal Parenting Coach"),
        t("programs.infantCare.f2", "Customized Diet Plans"),
        t("programs.infantCare.f3", "Daily Live Yoga & Lactation Coach"),
      ],
    },
    {
      icon: Smile,
      title: t("programs.parenting.title", "Parenting"),
      subTitle: t("programs.parenting.subtitle", "Mindful Guidance for Raising Your Child"),
      desc: t("programs.parenting.desc", "Mindful parenting frameworks, positive emotional bonding, digital detox strategies, and screen-free routines."),
      price: t("programs.parenting.price", "Expert Guidance"),
      img: "/images/mindful_parenting_banner.png",
      to: "/features/parenting",
      iconBg: "bg-purple-100/80",
      iconColor: "text-purple-600",
      features: [
        t("programs.parenting.f1", "Emotional Intelligence Coaching"),
        t("programs.parenting.f2", "Digital Detox & Play Techniques"),
        t("programs.parenting.f3", "Parent-Child Bonding Exercises"),
      ],
    },
    {
      icon: Compass,
      title: t("programs.bhavishyaPhal.title", "Kundli Vishleshan"),
      subTitle: t("programs.bhavishyaPhal.subtitle", "Astrological Insights for Your Child's Journey"),
      desc: t("programs.bhavishyaPhal.desc", "Complete Janam Kundali + Falit Report (₹3,500) and 1-on-1 Astrologer Consultation (₹3,100)."),
      price: t("programs.bhavishyaPhal.price", "Starting ₹3,100"),
      img: "/images/about_premium.png",
      to: "/features/bhavishya-fal",
      iconBg: "bg-pink-100/80",
      iconColor: "text-[#EA3484]",
      features: [
        t("programs.bhavishyaPhal.f1", "Kundli + Falit (₹3,500)"),
        t("programs.bhavishyaPhal.f2", "Astrologer Consultation (₹3,100)"),
        t("programs.bhavishyaPhal.f3", "Career & Spiritual Direction"),
      ],
    },
  ];

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

    const maxVisibleOffset = isMobile ? 1 : 2;
    if (absOffset > maxVisibleOffset) {
      return {
        opacity: 0,
        transform: `translateX(${offset * 120}%) scale(0.6) translateZ(-400px)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    const spacing = isMobile ? Math.min(windowWidth * 0.75, 250) : isTablet ? 280 : 340;
    const x = offset * spacing;
    const z = -Math.pow(absOffset, 1.4) * (isMobile ? 70 : 120);
    const scale = Math.max(0.72, 1 - absOffset * (isMobile ? 0.16 : 0.12));
    const rotateY = offset * (isMobile ? -14 : -18);
    const opacity = Math.max(0.25, 1 - absOffset * (isMobile ? 0.45 : 0.35));
    const zIndex = 30 - Math.round(absOffset * 10);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-10 bg-gradient-to-b from-[#FFFDFE] via-[#FFF5F9] to-[#FFF8FD] overflow-hidden border-b border-pink-100/70">
      {/* Ambient decorative glowing blobs */}
      <div className="pointer-events-none absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F45B8A]" />
            <span>{t("featuresSection.badge", "Sacred Vedic Programs")}</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] text-[#172554] tracking-tight">
            {t("featuresSection.heading", "Holistic Sanskar for Every Stage of Parenthood")}
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>

          <p className="text-sm md:text-base leading-relaxed text-[#475569] font-normal max-w-2xl mx-auto mt-2">
            {t("featuresSection.subtitle", "Discover our complete 7-stage curriculum bridging authentic Vedic rituals with modern obstetric medicine.")}
          </p>
        </div>

        {/* ── 3D Cylindrical Carousel Container ── */}
        <div
          className="relative max-w-5xl mx-auto h-[420px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden sm:overflow-visible touch-pan-y"
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
                      <span>{t("featuresSection.learnMore", "View Program")}</span>
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
        <div className="flex justify-center mt-6 md:mt-8">
          <Link
            to="/features"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] hover:shadow-lg hover:shadow-[#F45B8A]/30 px-9 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t("featuresSection.viewAll", "Explore All 7 Sanskar Programs")}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
