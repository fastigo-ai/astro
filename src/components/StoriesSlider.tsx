import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FiAward,
  FiChevronLeft,
  FiChevronRight,
  FiGlobe,
  FiHeart,
  FiMapPin,
  FiPlay,
  FiShield,
  FiStar,
  FiThumbsUp,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { storiesData } from "@/data/storiesData";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

const AI_THUMBNAILS = [
  "/images/story_thumb_1.png",
  "/images/story_thumb_2.png",
  "/images/story_thumb_3.png",
  "/images/story_thumb_4.png",
  "/images/story_thumb_5.png",
];

export default function StoriesSlider() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(Boolean(activeVideo));

  useEffect(() => {
    if (!activeVideo) return;
    closeBtnRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeVideo]);

  const scrollToNext = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".story-card");
    if (cards.length === 0) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    if (scrollLeft + clientWidth >= scrollWidth - 25) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      const firstCard = cards[0];
      const cardWidth = firstCard.offsetWidth;
      const step = cardWidth + 24; // 24px is gap-6
      container.scrollBy({ left: step, behavior: "smooth" });
    }
  }, []);

  const scrollToPrev = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".story-card");
    if (cards.length === 0) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    if (scrollLeft <= 15) {
      container.scrollTo({ left: scrollWidth - clientWidth, behavior: "smooth" });
    } else {
      const firstCard = cards[0];
      const cardWidth = firstCard.offsetWidth;
      const step = cardWidth + 24;
      container.scrollBy({ left: -step, behavior: "smooth" });
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".story-card");
    if (cards[index]) {
      const card = cards[index];
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft - 16,
        behavior: "smooth",
      });
    }
  };

  // Track active slide on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll<HTMLElement>(".story-card");
      if (cards.length === 0) return;
      const scrollPos = container.scrollLeft;
      const firstCard = cards[0];
      const cardWidth = firstCard.offsetWidth + 24;
      const index = Math.round(scrollPos / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, index), storiesData.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatic Smooth Sliding with pause on hover/interaction
  useEffect(() => {
    if (activeVideo || isPaused) return;

    const interval = setInterval(() => {
      scrollToNext();
    }, 3200);

    return () => clearInterval(interval);
  }, [activeVideo, isPaused, scrollToNext]);

  return (
    <section className="relative isolate overflow-hidden bg-[#fcf2f7] pt-10 md:pt-12 pb-20 md:pb-28 border-b border-pink-100/60">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-sm">
            <FiHeart className="h-3 w-3" /> <span>{t("stories.badge", "Heartfelt Experiences")}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] text-[#172554] tracking-tight">
            {t("stories.heading", "Loved by Over 10,000+ Happy Families")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#475569] font-normal md:text-base">
            {t("stories.subtitle", "Real journeys and transformative stories from mothers and families across the globe.")}
          </p>
        </motion.header>

        {/* Carousel Container with Hover/Touch Pause */}
        <div
          className="relative mt-8 sm:mt-12 group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={scrollToPrev}
            aria-label="Previous story"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-pink-200 text-[#172554] hover:text-[#EA3484] hover:bg-pink-50 shadow-lg flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer active:scale-95"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={scrollToNext}
            aria-label="Next story"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-pink-200 text-[#172554] hover:text-[#EA3484] hover:bg-pink-50 shadow-lg flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer active:scale-95"
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div
            ref={scrollRef}
            className="stories-track flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scroll-smooth px-2 sm:px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
          {storiesData.map((story, index) => (
            <motion.article
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="story-card group min-w-[85vw] snap-center overflow-hidden shrink-0 sm:min-w-[45vw] lg:min-w-[350px] max-w-[380px] bg-white/95 backdrop-blur-xl rounded-[28px] border border-pink-100 shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <button
                type="button"
                className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setActiveVideo(story.videoId)}
                aria-label={`Play ${story.name}'s story`}
              >
                <img
                  src={AI_THUMBNAILS[index % AI_THUMBNAILS.length]}
                  alt={`${story.name}, an Astro Baby family`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#172554]/70 via-transparent to-transparent" />
                <span className="play-button absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-2xl transition duration-300 group-hover:scale-110">
                  <FiPlay className="ml-1 fill-current text-xl" />
                </span>
                <span className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#172554]/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur shadow-sm">
                  <FiMapPin className="text-[#F45B8A]" /> {story.city}
                </span>
                <span className="absolute -bottom-4 right-4 grid h-10 w-10 place-items-center rounded-2xl bg-[#172554] text-xl font-bold text-white shadow-lg">
                  “
                </span>
              </button>
              <div className="p-6 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {story.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#F45B8A]">
                      Verified family
                    </p>
                  </div>
                  <div
                    className="flex gap-0.5 text-amber-400"
                    aria-label={`${story.rating} out of 5 stars`}
                  >
                    {Array.from({ length: story.rating }).map((_, star) => (
                      <FiStar key={star} className="fill-current w-4 h-4" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 min-h-16 text-xs sm:text-sm leading-relaxed text-[#475569] font-normal">
                  “{story.quote}”
                </p>
              </div>
            </motion.article>
          ))}
        </div>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {storiesData.map((_, dotIdx) => (
              <button
                key={`dot-${dotIdx}`}
                type="button"
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx
                    ? "w-8 bg-gradient-to-r from-[#F45B8A] to-[#E91E63]"
                    : "w-2 bg-pink-200 hover:bg-pink-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Story video"
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-900/85 p-4 backdrop-blur-md"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-black shadow-2xl">
            <button
              ref={closeBtnRef}
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-[#1a3a6c] shadow-lg"
            >
              <FiX />
            </button>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="User story"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Mandala({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`mandala absolute h-80 w-80 rounded-full opacity-[0.08] ${className}`}
    />
  );
}

function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute left-[9%] top-[18%] h-2 w-2 rotate-45 bg-[#F4C27A] shadow-[0_0_18px_#F4C27A]" />
      <span className="story-float absolute right-[12%] top-[22%] text-xl text-[#8B32BD]/40">
        ✦
      </span>
      <span className="story-float absolute bottom-[22%] left-[6%] text-lg text-[#F4C27A]/70 [animation-delay:1.2s]">
        ✧
      </span>
      <span className="absolute right-[5%] top-1/2 h-24 w-24 rounded-full bg-[#8B32BD]/10 blur-2xl" />
      <span className="absolute bottom-[8%] left-[18%] h-28 w-28 rounded-full bg-[#F4C27A]/10 blur-3xl" />
    </div>
  );
}
