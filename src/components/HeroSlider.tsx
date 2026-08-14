import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/heroSlides";
import { useAutoSlider } from "@/hooks/useAutoSlider";
import SliderDots from "@/components/common/SliderDots";
import SliderArrows from "@/components/common/SliderArrows";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { FiHeart } from "react-icons/fi";

export default function HeroSlider() {
  const { index, setIndex, next, prev, pause, resume } = useAutoSlider({
    count: heroSlides.length,
    interval: 4000,
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
      className="relative w-full flex flex-col sm:block sm:h-screen sm:min-h-[600px] overflow-hidden bg-[#FFFCFE]"
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      {/* Image Slider Container (Top on mobile, full-screen background on desktop) */}
      <div className="relative w-full aspect-square sm:aspect-auto sm:absolute sm:inset-0 sm:h-full sm:w-full bg-[#FFFCFE]">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={slide.image}
            alt="Pregnancy wellness"
            className="absolute inset-0 h-full w-full object-contain sm:object-cover object-center sm:object-top"
            fetchPriority="high"
          />
        </AnimatePresence>

        {/* Desktop Overlay for text readability */}
        <div className="hidden sm:block absolute inset-0 bg-black/10 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Content Container (Below image on mobile, overlay on desktop) */}
      <div className="relative sm:absolute sm:inset-0 z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center sm:pt-24 lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isLeftAligned ? -30 : 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: isLeftAligned ? 30 : -30, filter: "blur(4px)" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className={`w-full max-w-2xl flex flex-col ${isLeftAligned ? "mr-auto text-center sm:text-left items-center sm:items-start" : "md:ml-auto text-center sm:text-left md:text-right items-center sm:items-start md:items-end"}`}
          >

            {/* Premium Heading */}
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className={`font-sans text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.1] sm:leading-[1.05] text-[#1A3A6C] sm:text-white tracking-tight sm:drop-shadow-2xl ${isLeftAligned ? "" : "md:mr-[-4px]"}`}
            >
              {slide.heading.map((line, i) => (
                <motion.span 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                  }}
                  className="block py-1 sm:drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Premium Description */}
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl text-slate-600 sm:text-[#172554] font-medium sm:font-semibold leading-relaxed sm:drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] sm:bg-transparent sm:backdrop-blur-none sm:p-0">
              {slide.description}
            </p>

            {/* Premium Buttons */}
            <div className={`mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-3 sm:gap-5 ${isLeftAligned ? "" : "md:justify-end"}`}>
              <PrimaryButton className="relative overflow-hidden w-full sm:w-auto justify-center !bg-gradient-to-r !from-[#F45B8A] !to-[#E91E63] !text-white hover:!from-[#D81B60] hover:!to-[#C2185B] border-none shadow-[0_8px_24px_rgba(244,91,138,0.4)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(244,91,138,0.6)] hover:-translate-y-0.5 px-6 sm:px-8 py-3.5 text-sm md:text-base group">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Start Your Journey
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </PrimaryButton>
              
              <SecondaryButton className="relative overflow-hidden w-full sm:w-auto justify-center !bg-gradient-to-r !from-[#1C83FF] !to-[#0066FF] !text-white hover:!from-[#156cd1] hover:!to-[#0052cc] border-none shadow-[0_8px_24px_rgba(28,131,255,0.4)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(28,131,255,0.6)] hover:-translate-y-0.5 px-6 sm:px-8 py-3.5 text-sm md:text-base flex items-center gap-2 group">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <svg className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  Watch Story
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </SecondaryButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="relative sm:absolute pb-8 sm:pb-0 sm:bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4">
        <SliderDots count={heroSlides.length} index={index} onChange={setIndex} />
        <div className="text-xs uppercase tracking-widest text-slate-400 sm:text-white/80 font-semibold sm:drop-shadow-md">
          {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </div>
      </div>
      
      {/* Side Arrows (Desktop Only) */}
      <div className="absolute inset-y-0 left-4 z-20 hidden sm:flex items-center">
        <button onClick={prev} className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all border border-white/10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 hidden sm:flex items-center">
        <button onClick={next} className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all border border-white/10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

