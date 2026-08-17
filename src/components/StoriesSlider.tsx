import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
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

const benefits = [
  { icon: FiHeart, label: "Calmer journey" },
  { icon: FiShield, label: "Expert guidance" },
  { icon: FiAward, label: "Lasting confidence" },
];
const stats = [
  { icon: FiUsers, value: "10K+", label: "Happy Families" },
  { icon: FiGlobe, value: "25+", label: "Countries" },
  { icon: FiStar, value: "4.9/5", label: "Average Rating" },
  { icon: FiThumbsUp, value: "98%", label: "Recommend Us" },
];

const AI_THUMBNAILS = [
  "/images/story_thumb_1.png",
  "/images/story_thumb_2.png",
  "/images/story_thumb_3.png",
  "/images/story_thumb_4.png",
  "/images/story_thumb_5.png",
];

export default function StoriesSlider() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !activeVideo) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Scroll back to start if we reached the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Approximate width of a card + gap
          scrollRef.current.scrollBy({ left: 370, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeVideo]);

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
            <FiHeart className="h-3 w-3" /> USER STORIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] text-[#172554] tracking-tight">
            Real Journeys,{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Beautiful Experiences
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#475569] font-normal md:text-base">
            Heartfelt stories from families across 62+ countries who found calm, confidence, and deeper spiritual connection through AstroBaby.
          </p>
        </motion.header>

        <div
          ref={scrollRef}
          className="stories-track mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                    <h3 className="text-lg sm:text-xl font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">{story.name}</h3>
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
                <p className="mt-4 min-h-16 text-xs sm:text-sm leading-relaxed text-[#475569] font-normal">“{story.quote}”</p>
                {/* <div className="mt-5 grid grid-cols-3 border-t border-slate-200 pt-5">
                  {benefits.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2 px-1 text-center">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-[#1a3a6c]">
                        <Icon />
                      </span>
                      <span className="text-[10px] font-medium leading-tight text-slate-600">
                        {label}
                      </span>
                    </div>
                  ))}
                </div> */}
              </div>
            </motion.article>
          ))}
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
