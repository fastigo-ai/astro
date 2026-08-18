import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/heroSlides";
import { useAutoSlider } from "@/hooks/useAutoSlider";
import SliderDots from "@/components/common/SliderDots";
import SliderArrows from "@/components/common/SliderArrows";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { FiHeart } from "react-icons/fi";
import { TextEffect } from "@/components/core/text-effect";

export default function HeroSlider() {
  const { index, setIndex, next, prev, pause, resume } = useAutoSlider({
    count: heroSlides.length,
    interval: 5000,
  });
  const slide = heroSlides[index];
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Determine alignment: even indices (0, 2) left; odd indices (1, 3) right
  const isLeftAligned = index % 2 === 0;

  return (
    <section
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchStartX.current = null;
      }}
      className="relative w-full flex flex-col sm:block sm:h-screen sm:min-h-[600px] overflow-hidden bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#FFFCFE]"
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      {/* ── Desktop Background Image Slider (sm and above) ── */}
      <div className="hidden sm:block absolute inset-0 h-full w-full bg-[#FFFCFE]">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            src={slide.image}
            alt="Pregnancy wellness"
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </AnimatePresence>

        {/* Desktop Overlays for text readability */}
        <div className="absolute inset-0 bg-black/10 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* ── Main Container: Mobile Card + Desktop Split Layout ── */}
      <div className="relative sm:absolute sm:inset-0 z-10 mx-auto w-full max-w-7xl px-4 pt-3 pb-6 sm:py-8 sm:px-6 lg:px-8 flex flex-col justify-center sm:flex-row sm:items-center sm:pt-24 lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={`w-full max-w-2xl flex flex-col ${
              isLeftAligned
                ? "mr-auto text-center sm:text-left items-center sm:items-start"
                : "md:ml-auto text-center sm:text-left md:text-right items-center sm:items-start md:items-end"
            }`}
          >
            {/* ── Mobile-Only Framed Showcase Card (Inspired by Courses & Features) ── */}
            <div className="block sm:hidden w-full mb-3.5">
              <div className="relative aspect-[16/10] w-full rounded-[26px] overflow-hidden border-2 border-pink-200/90 shadow-[0_12px_35px_rgba(234,52,132,0.15)] bg-pink-50">
                <img
                  src={slide.image}
                  alt="Astro Baby Wellness"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  {slide.eyebrow && (
                    <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#EA3484] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-pink-100">
                      <FiHeart className="h-3 w-3 text-[#EA3484] fill-[#EA3484]/20" />
                      {slide.eyebrow}
                    </span>
                  )}
                  <span className="bg-[#172554]/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    Astro Baby
                  </span>
                </div>

                {/* Bottom Tag Overlay */}
                {slide.programs && slide.programs[0] && (
                  <div className="absolute bottom-2.5 left-3 right-3 text-left">
                    <span className="text-[11px] font-semibold text-pink-100 drop-shadow line-clamp-1">
                      ✦ {slide.programs[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Eyebrow Badge */}
            {slide.eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-pink-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-md shadow-xs mb-3.5"
              >
                <FiHeart className="h-3.5 w-3.5 text-[#EA3484] fill-[#EA3484]/20" />
                <span>{slide.eyebrow}</span>
              </motion.div>
            )}

            {/* Premium Heading with TextEffect */}
            <h1
              className={`font-sans text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] sm:leading-[1.05] tracking-normal space-y-1 ${
                isLeftAligned ? "" : "md:mr-[-4px]"
              }`}
            >
              {slide.heading.map((line, i) => (
                <TextEffect
                  key={`${index}-${i}-${line}`}
                  as="span"
                  per="char"
                  delay={i * 0.15}
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.025,
                        },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        rotateX: 90,
                        y: 10,
                      },
                      visible: {
                        opacity: 1,
                        rotateX: 0,
                        y: 0,
                        transition: {
                          duration: 0.2,
                        },
                      },
                    },
                  }}
                  className={`block m-0 p-0 leading-[1.1] sm:leading-[1.05] tracking-normal font-black sm:font-extrabold ${
                    i === 0
                      ? "text-[#172554] drop-shadow-xs"
                      : "bg-gradient-to-r from-[#EA3484] via-[#F45B8A] to-[#FF70A6] bg-clip-text text-transparent drop-shadow-xs"
                  }`}
                >
                  {line}
                </TextEffect>
              ))}
            </h1>

            {/* Premium Description with TextEffect */}
            <TextEffect
              key={`${index}-desc`}
              per="word"
              delay={0.4}
              preset="blur"
              className="mt-1.5 sm:mt-4 max-w-xl text-xs sm:text-base md:text-lg text-[#334155] sm:text-[#1E293B] font-normal leading-relaxed"
            >
              {slide.description}
            </TextEffect>

            {/* Program Highlight Tags */}
            {slide.programs && slide.programs.length > 0 && (
              <div
                className={`mt-2.5 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 ${
                  isLeftAligned
                    ? "justify-center sm:justify-start"
                    : "justify-center sm:justify-start md:justify-end"
                }`}
              >
                {slide.programs.map((prog, pIdx) => (
                  <span
                    key={pIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-pink-50/90 text-[#EA3484] border border-pink-200/80 shadow-2xs"
                  >
                    <span className="text-[#EA3484] font-bold text-[10px]">✦</span>
                    {prog}
                  </span>
                ))}
              </div>
            )}

            {/* Premium Action Buttons */}
            <div
              className={`mt-3.5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full sm:w-auto gap-2.5 sm:gap-4 ${
                isLeftAligned ? "" : "md:justify-end"
              }`}
            >
              <PrimaryButton className="relative overflow-hidden w-full max-w-xs sm:max-w-none sm:w-auto justify-center !bg-gradient-to-r !from-[#EA3484] !to-[#F45B8A] !text-white hover:!from-[#D81B60] hover:!to-[#E91E63] border-none shadow-[0_6px_20px_rgba(234,52,132,0.35)] transition-all duration-300 hover:shadow-[0_10px_28px_rgba(234,52,132,0.55)] hover:-translate-y-0.5 px-6 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold group cursor-pointer rounded-full">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Start Your Journey
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </PrimaryButton>

              <SecondaryButton className="relative overflow-hidden w-full max-w-xs sm:max-w-none sm:w-auto justify-center !bg-white/95 !text-[#172554] hover:!text-[#EA3484] hover:!bg-pink-50/80 !border !border-pink-200 shadow-xs transition-all duration-300 hover:-translate-y-0.5 px-6 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold flex items-center gap-2 group cursor-pointer rounded-full backdrop-blur-md">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <svg
                    className="w-4 h-4 text-[#EA3484] group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Story
                </span>
              </SecondaryButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="relative sm:absolute pb-4 sm:pb-0 sm:bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-2 sm:gap-4 pointer-events-auto">
        <SliderDots count={heroSlides.length} index={index} onChange={setIndex} />
        <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 sm:text-white/80 font-semibold sm:drop-shadow-md">
          {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </div>
      </div>

      {/* Side Arrows (Desktop Only) */}
      <div className="absolute inset-y-0 left-4 z-20 hidden sm:flex items-center">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 hidden sm:flex items-center">
        <button
          onClick={next}
          className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
