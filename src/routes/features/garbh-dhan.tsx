import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  Award,
  Compass,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

// ── 11 Sacred Inclusions Visual Meta ──
const GARBHADHAN_SERVICES_META = [
  { icon: Calendar, img: "/images/features/monthly_calendar.png" },
  { icon: Sun, img: "/images/features/isht_mantra.jpg" },
  { icon: Activity, img: "/images/features/meditation.jpg" },
  { icon: Clock, img: "/images/features/sandhya_prarthana.jpg" },
  { icon: Music, img: "/images/features/garbhsanskar_music.jpg" },
  { icon: Sparkles, img: "/images/features/sankalp_poojan.jpg" },
  { icon: Shield, img: "/images/features/nutritionist_session.jpg" },
  { icon: Stethoscope, img: "/images/features/doctors_session.jpg" },
  { icon: UserCheck, img: "/images/features/mentoring.jpg" },
  { icon: Sparkles, img: "/images/features/parv_based_sessions.jpg" },
  { icon: Activity, img: "/images/features/monthly_calendar.png" },
];

export default function GarbhDhan() {
  const { t } = useTranslation();
  const [inclusionIndex, setInclusionIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const services = useMemo(() => {
    return GARBHADHAN_SERVICES_META.map((meta, idx) => {
      const title = t(`garbhadhanDetailPage.inclusions.services.${idx}.title`, "");
      const subTitle = t(`garbhadhanDetailPage.inclusions.services.${idx}.subTitle`, "");
      const desc = t(`garbhadhanDetailPage.inclusions.services.${idx}.desc`, "");
      const badge = t(`garbhadhanDetailPage.inclusions.services.${idx}.badge`, "");

      return {
        ...meta,
        title,
        subTitle,
        desc,
        badge,
      };
    });
  }, [t]);

  const total = services.length;

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3-Second Automatic Cylindrical Scroll
  useEffect(() => {
    if (isCarouselPaused) return;

    const timer = setInterval(() => {
      setInclusionIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [isCarouselPaused, total]);

  const handlePrevInclusion = () => {
    setInclusionIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNextInclusion = () => {
    setInclusionIndex((prev) => (prev + 1) % total);
  };

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

  const getCylindricalStyle = (index: number) => {
    let offset = (index - inclusionIndex) % total;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    const maxVisibleOffset = isMobile ? 1 : 2;
    if (absOffset > maxVisibleOffset) {
      return {
        opacity: 0,
        transform: `translate(-50%, -50%) translateX(${offset * 120}%) scale(0.5) translateZ(-400px)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    const spacing = isMobile ? Math.min(windowWidth * 0.72, 230) : isTablet ? 240 : 280;
    const translateX = offset * spacing;
    const translateZ = -absOffset * (isMobile ? 50 : 95);
    const rotateY = offset * (isMobile ? -12 : -16);
    const scale = 1 - absOffset * (isMobile ? 0.12 : 0.1);
    const opacity = 1 - absOffset * (isMobile ? 0.35 : 0.22);
    const zIndex = 30 - absOffset * 10;

    return {
      opacity,
      transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      pointerEvents: "auto" as const,
    };
  };

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-sans selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner Section ── */}
      <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              {t("garbhadhanDetailPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/features" className="hover:text-[#F45B8A] transition-colors">
              {t("garbhadhanDetailPage.hero.breadcrumbPrograms", "Sacred Programs")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("garbhadhanDetailPage.hero.title", "Garbhadhan Sanskar")}
            </span>
          </nav>

          {/* Hero Banner Card Container */}
          <motion.div
            className="relative w-full rounded-[32px] overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] flex items-center shadow-xl border border-pink-100"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Background Banner Image */}
            <img
              src="/images/garbh_dan_banner.png"
              alt="Astro Baby Garbhadhan Sanskar"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Gradient Overlays for High Text Legibility & Left Artwork Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent sm:bg-gradient-to-l sm:from-slate-950/95 sm:via-slate-950/80 sm:to-transparent" />
            <div className="absolute inset-0 bg-slate-950/20 sm:bg-transparent" />

            {/* Content Container (Aligned to Right Side) */}
            <div className="relative z-10 w-full flex justify-end p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-semibold shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Heart className="h-3.5 w-3.5 text-pink-300 fill-pink-300/30" />
                  <span>
                    {t(
                      "garbhadhanDetailPage.hero.badge",
                      "Sacred Pre-Conception • ₹11,000"
                    )}
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-1.5"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                    {t("garbhadhanDetailPage.hero.title", "Garbhadhan Sanskar")}
                  </h1>
                  <span className="text-pink-300 font-semibold text-lg sm:text-2xl md:text-3xl block">
                    {t(
                      "garbhadhanDetailPage.hero.tagline",
                      "Divine Preparation for Conception"
                    )}
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal drop-shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t(
                    "garbhadhanDetailPage.hero.subtitle",
                    "A sacred pre-conception continuum combining astrological Muhurat calculation, Ayurvedic cellular detox, live Sankalp Poojan, and continuous doctor support to welcome a noble, healthy soul."
                  )}
                </motion.p>

                {/* Action Buttons & Highlights */}
                <motion.div
                  className="flex flex-wrap items-center gap-3.5 pt-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-bold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>
                      {t("garbhadhanDetailPage.hero.enrollBtn", "Enroll for ₹11,000")}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-white/85 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    {t(
                      "garbhadhanDetailPage.hero.ctaSub",
                      "Muhurat • Ayurvedic Detox • Poojan"
                    )}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Complete Inclusions Section (Cylindrical Carousel) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-pink-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#F45B8A]" />{" "}
              {t("garbhadhanDetailPage.inclusions.badge", "Sacred Inclusions")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t(
                "garbhadhanDetailPage.inclusions.title",
                "11 Sacred Pillars of Garbhadhan"
              )}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto" />
            <p className="text-sm md:text-base text-[#475569] font-normal leading-relaxed mt-2">
              {t(
                "garbhadhanDetailPage.inclusions.subtitle",
                "Everything you need for conscious, spiritually aligned conception."
              )}
            </p>
          </div>

          {/* ── 5-BOX 3D CYLINDRICAL VIEW ── */}
          <div className="space-y-8">
            {/* 3D Carousel Stage */}
            <div
              className="relative max-w-5xl mx-auto h-[440px] sm:h-[460px] flex items-center justify-center select-none overflow-hidden sm:overflow-visible touch-pan-y"
              style={{ perspective: "1200px" }}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {services.map((item, idx) => {
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
                    className={`absolute top-1/2 left-1/2 w-[86vw] max-w-[300px] sm:w-[320px] md:w-[340px] transition-all duration-700 ease-out cursor-pointer ${
                      isCenter ? "cursor-default" : "hover:brightness-105"
                    }`}
                  >
                    <div
                      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-[28px] transition-all duration-500 overflow-hidden min-h-[380px] sm:min-h-[400px] ${
                        isCenter
                          ? "bg-white/98 backdrop-blur-2xl border-2 border-[#F45B8A]/70 shadow-[0_22px_55px_rgba(244,91,138,0.18)]"
                          : "bg-white/90 backdrop-blur-md border border-pink-100/90 shadow-[0_10px_30px_rgba(23,37,84,0.05)]"
                      }`}
                    >
                      {/* Top Accent Stripe */}
                      {isCenter && (
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63]" />
                      )}

                      <div>
                        {/* Image Header */}
                        <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-4 border border-pink-100/80 bg-slate-100">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                            <div className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md text-[#F45B8A] flex items-center justify-center shadow-xs">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#F45B8A] border border-pink-100 tracking-wider">
                              {item.badge}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-[#172554] leading-snug line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#F45B8A] mt-0.5">
                          {item.subTitle}
                        </p>

                        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal line-clamp-3">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F45B8A]" />
                        <span>Included in Program</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevInclusion}
                  className="w-10 h-10 rounded-full bg-white border border-pink-200 shadow-md flex items-center justify-center text-[#172554] hover:bg-[#F45B8A] hover:text-white transition-all hover:scale-105 cursor-pointer"
                  aria-label="Previous Inclusion"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white/80 backdrop-blur-md rounded-full border border-pink-100 shadow-xs">
                  {services.map((_, dotIdx) => {
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
                  className="w-10 h-10 rounded-full bg-white border border-pink-200 shadow-md flex items-center justify-center text-[#172554] hover:bg-[#F45B8A] hover:text-white transition-all hover:scale-105 cursor-pointer"
                  aria-label="Next Inclusion"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why Prepare Consciously Section ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] border-y border-pink-100/70 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-1/4 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] shadow-xs backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-[#F45B8A]" />{" "}
                {t(
                  "garbhadhanDetailPage.pricingCard.badge",
                  "Vedic Science & Medical Synergy"
                )}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#172554] leading-[1.2] tracking-tight">
                {t("garbhadhanDetailPage.pricingCard.title", "Garbhadhan Sanskar Complete Track")}
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {t(
                  "garbhadhanDetailPage.hero.subtitle",
                  "A sacred pre-conception continuum combining astrological Muhurat calculation, Ayurvedic cellular detox, live Sankalp Poojan, and continuous doctor support."
                )}
              </p>

              {/* All 11 Feature Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((featIdx) => {
                  const featText = t(`garbhadhanDetailPage.pricingCard.features.${featIdx}`, "");
                  if (!featText) return null;
                  return (
                    <div
                      key={featIdx}
                      className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-pink-100 shadow-xs flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-pink-50 text-[#F45B8A] flex items-center justify-center shrink-0 mt-0.5 border border-pink-100">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm text-[#172554]">
                          {featText}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Card / CTA Box */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-2xl p-8 sm:p-10 rounded-[32px] border border-pink-200 shadow-xl text-center space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-50 to-pink-100 text-[#F45B8A] mx-auto shadow-xs border border-pink-200/60">
                  <Heart className="w-7 h-7 fill-[#F45B8A]/20" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#172554] leading-snug">
                    {t(
                      "garbhadhanDetailPage.pricingCard.enrollNow",
                      "Enroll in Garbhadhan Track"
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {t(
                      "garbhadhanDetailPage.hero.ctaSub",
                      "Live Sankalp Poojan • Doctor Guidance • Personalized Isht Mantra"
                    )}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-100 text-left flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 font-semibold uppercase block">
                      {t("garbhadhanDetailPage.pricingCard.period", "One-Time Enrolment")}
                    </span>
                    <span className="text-2xl font-black text-[#172554]">
                      {t("garbhadhanDetailPage.pricingCard.price", "₹11,000")}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
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
                    <span>
                      {t(
                        "garbhadhanDetailPage.pricingCard.enrollNow",
                        "Enroll in Garbhadhan Track"
                      )}
                    </span>
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
      <Footer />
    </div>
  );
}
