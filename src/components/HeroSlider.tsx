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
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFCFE] via-[#F9F5FF] to-[#EAF4FF]"
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#3B82F6]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F45B8A]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] border border-pink-200/80 shadow-xs">
              <FiHeart className="text-[#F45B8A]" /> {slide.eyebrow}
            </div>
            <h1 className="font-sans mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[#172554] tracking-tight">
              {slide.heading.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span className="block text-[#172554] not-italic">{line}</span>
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-lg text-base md:text-lg text-slate-600 font-sans leading-relaxed">
              {slide.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {slide.programs.map((p) => (
                <div
                  key={p}
                  className="rounded-[16px] md:rounded-[20px] border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-md hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(244,91,138,0.08)]"
                >
                  <div className="text-[10px] uppercase tracking-wider text-[#F45B8A] font-bold">
                    Program
                  </div>
                  <div className="mt-1 font-sans text-base md:text-lg font-bold text-[#172554]">
                    {p}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton>Start Your Journey</PrimaryButton>
              <SecondaryButton>Watch Story</SecondaryButton>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="order-1 lg:order-2 relative flex flex-col h-[280px] sm:h-[380px] md:h-[480px] lg:h-auto">
          <div className="relative flex-1 overflow-hidden rounded-[36px] shadow-glow">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={slide.image}
                alt="Pregnancy wellness"
                className="absolute inset-0 h-full w-full object-cover"
                width={1200}
                height={1408}
                fetchPriority="high"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/80 p-3 backdrop-blur">
              <div className="text-[10px] uppercase tracking-wider text-ink-soft font-semibold">
                Slide {String(index + 1).padStart(2, "0")} /{" "}
                {String(heroSlides.length).padStart(2, "0")}
              </div>
              <SliderDots count={heroSlides.length} index={index} onChange={setIndex} />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <SliderArrows onPrev={prev} onNext={next} />
          </div>
        </div>
      </div>
    </section>
  );
}
