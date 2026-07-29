import { useEffect, useRef } from "react";
import { gsap } from "@/utils/gsapSetup";
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
    interval: 6000,
  });
  const slide = heroSlides[index];
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("[data-hero-image]", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.08,
        duration: 1.1,
        ease: "power3.out",
      })
        .from("[data-hero-eyebrow]", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, 0.2)
        .from(
          "[data-hero-heading] > span",
          { y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
          0.3,
        )
        .from("[data-hero-desc]", { y: 15, opacity: 0, duration: 0.6 }, 0.55)
        .from("[data-hero-card]", { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, 0.65)
        .from(
          "[data-hero-cta]",
          { scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.6)" },
          0.85,
        );
    }, rootRef);
    return () => ctx.revert();
  }, [index]);

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
      ref={rootRef}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchStartX.current = null;
      }}
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]"
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#2584F5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F63D8E]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <div
            data-hero-eyebrow
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F63D8E] border border-pink-200/80 shadow-xs"
          >
            <FiHeart className="text-[#F63D8E]" /> {slide.eyebrow}
          </div>
          <h1
            data-hero-heading
            className="font-sans mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[#1A3A6C] tracking-tight"
          >
            {slide.heading.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="block text-[#1A3A6C] not-italic">
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p data-hero-desc className="mt-5 max-w-lg text-base md:text-lg text-slate-600 font-sans leading-relaxed">
            {slide.description}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            {slide.programs.map((p) => (
              <div
                key={p}
                data-hero-card
                className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-md hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="text-[10px] uppercase tracking-wider text-[#F63D8E] font-bold">
                  Program
                </div>
                <div className="mt-1 font-sans text-base md:text-lg font-bold text-[#1A3A6C]">{p}</div>
              </div>
            ))}
          </div>
          <div data-hero-cta className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryButton>Start Your Journey</PrimaryButton>
            <SecondaryButton>Watch Story</SecondaryButton>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-slate-500 font-medium">
            <div>
              <span className="font-sans text-2xl font-extrabold text-[#F8B62D]">4.8★</span> App rating
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="font-sans text-2xl font-extrabold text-[#2584F5]">500k+</span> Mothers
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex flex-col h-[280px] sm:h-[380px] md:h-[480px] lg:h-auto">
          <div className="relative flex-1 overflow-hidden rounded-[36px] shadow-glow">
            <img
              data-hero-image
              src={slide.image}
              alt="Pregnancy wellness"
              className="absolute inset-0 h-full w-full object-cover"
              width={1200}
              height={1408}
              fetchPriority="high"
            />
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
