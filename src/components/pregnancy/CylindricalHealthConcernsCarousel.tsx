import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  HeartPulse,
  Activity,
  ShieldCheck,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface HealthConcernItem {
  link: string;
  tag: string;
  title: string;
  desc: string;
  iconName?: string;
}

interface Props {
  links: string[];
}

export default function CylindricalHealthConcernsCarousel({ links }: Props) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = links.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play rotation timer (3 seconds)
  useEffect(() => {
    if (!isAutoPlay) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlay, nextSlide]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsAutoPlay(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStartX(null);
    setIsAutoPlay(true);
  };

  // 6 Card metadata configuration
  const cardIcons = [
    Activity, // Mood Swings
    ShieldCheck, // Back Pain
    HeartPulse, // Stomach Pain
    Activity, // Low BP
    Sparkles, // Signs Baby Is Safe
    BookOpen, // Ultrasound
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF5F9] via-[#FFF9FC] to-[#FFF5F9] border-y border-pink-100/70 relative overflow-hidden">
      {/* Subtle background ambient circles */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rose-200/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-12">
          {/* ── Left Side: Heading & Information Controls ── */}
          <div className="w-full lg:w-[38%] space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/90 text-[#EA3484] border border-pink-200 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <HeartPulse className="w-3.5 h-3.5 text-[#EA3484] animate-pulse" />
              <span>
                {t(
                  "pregnancyHubPage.healthConcerns.badge",
                  "Medical & Comfort Care"
                )}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] leading-tight tracking-tight">
              {t(
                "pregnancyHubPage.healthConcerns.title",
                "Pregnancy Health & Common Concerns"
              )}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t(
                "pregnancyHubPage.healthConcerns.desc",
                "Clear, doctor-backed explanations for back aches, mood swings, blood pressure fluctuations, and ultrasound scans."
              )}
            </p>

            {/* Quick Summary Pill */}
            <div className="p-3.5 rounded-2xl bg-white/90 border border-pink-200/80 shadow-xs flex items-center justify-between gap-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#EA3484] font-bold text-xs shrink-0">
                  0{activeIndex + 1}
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-[#172554] block">
                    {t(`pregnancyHubPage.healthConcerns.cards.${activeIndex}.title`)}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {t(`pregnancyHubPage.healthConcerns.cards.${activeIndex}.tag`)}
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                Verified
              </span>
            </div>

            {/* Carousel Interactive Controls (Counter + Arrows) */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Concern"
                className="w-11 h-11 rounded-full bg-white hover:bg-pink-50 text-[#172554] hover:text-[#EA3484] border border-pink-200 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5 px-2">
                {links.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      idx === activeIndex
                        ? "w-7 h-2.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] shadow-xs"
                        : "w-2.5 h-2.5 bg-pink-200 hover:bg-pink-300"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Concern"
                className="w-11 h-11 rounded-full bg-white hover:bg-pink-50 text-[#172554] hover:text-[#EA3484] border border-pink-200 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ── Right Side: 3D Cylindrical 3-Card Carousel ── */}
          <div
            className="w-full lg:w-[60%] relative h-[380px] sm:h-[400px] flex items-center justify-center select-none touch-pan-y"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ perspective: "1100px" }}
          >
            {/* 3D Cylindrical Stage */}
            <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
              {links.map((link, idx) => {
                // Calculate shortest circular offset from activeIndex
                let offset = (idx - activeIndex + total) % total;
                if (offset > total / 2) {
                  offset -= total;
                }

                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                const isVisible = Math.abs(offset) <= 1;

                // 3D Cylindrical Geometry
                let transform = "translateX(0%) translateZ(-200px) rotateY(0deg) scale(0.6)";
                let opacity = 0;
                let zIndex = 0;

                if (isCenter) {
                  transform = "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)";
                  opacity = 1;
                  zIndex = 30;
                } else if (isLeft) {
                  transform = "translateX(-62%) translateZ(-90px) rotateY(24deg) scale(0.88)";
                  opacity = 0.72;
                  zIndex = 20;
                } else if (isRight) {
                  transform = "translateX(62%) translateZ(-90px) rotateY(-24deg) scale(0.88)";
                  opacity = 0.72;
                  zIndex = 20;
                }

                const CardIcon = cardIcons[idx] || Sparkles;

                return (
                  <div
                    key={idx}
                    onClick={() => !isCenter && handleCardClick(idx)}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[310px] md:w-[330px] transition-all duration-500 ease-out origin-center ${
                      isVisible ? "pointer-events-auto" : "pointer-events-none"
                    } ${!isCenter ? "cursor-pointer hover:opacity-90" : ""}`}
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className={`h-[330px] sm:h-[350px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                        isCenter
                          ? "bg-white border-2 border-pink-300 shadow-[0_20px_45px_rgba(234,52,132,0.18)] ring-4 ring-pink-100/60"
                          : "bg-white/90 backdrop-blur-md border border-pink-200/90 shadow-[0_10px_25px_rgba(23,37,84,0.08)]"
                      }`}
                    >
                      {/* Top Header Card */}
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#EA3484] bg-pink-50 border border-pink-200/80 px-3 py-1 rounded-full shadow-2xs">
                            {t(`pregnancyHubPage.healthConcerns.cards.${idx}.tag`)}
                          </span>

                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                              isCenter
                                ? "bg-gradient-to-tr from-[#EA3484] to-[#F45B8A] text-white shadow-2xs"
                                : "bg-pink-50 text-[#EA3484]"
                            }`}
                          >
                            <CardIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-[#172554] leading-snug">
                          {t(`pregnancyHubPage.healthConcerns.cards.${idx}.title`)}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {t(`pregnancyHubPage.healthConcerns.cards.${idx}.desc`)}
                        </p>
                      </div>

                      {/* Bottom Action CTA */}
                      <div className="pt-4 border-t border-slate-100/90">
                        {isCenter ? (
                          <Link
                            to={link}
                            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-bold shadow-md shadow-[#EA3484]/25 hover:shadow-lg transition-all group"
                          >
                            <span>
                              {t("pregnancyHubPage.articles.readArticle", "Read Article")}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ) : (
                          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                            <span>Click to Focus</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Side Floating Arrow Controls */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-1 sm:left-4 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-[#172554] hover:text-[#EA3484] border border-pink-200 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-1 sm:right-4 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-[#172554] hover:text-[#EA3484] border border-pink-200 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
