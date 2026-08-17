import { useState, useRef, useEffect } from "react";
import { Sparkles, Heart, Moon, Sun, Play, Volume2, Maximize2, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "@/utils/gsapSetup";

const featureCards = [
  {
    icon: Sparkles,
    title: "Personalized Pregnancy Care",
    subtitle: "Week-by-week updates, tips & health guidance.",
    bgColor: "bg-pink-50/70 border-pink-200/60 hover:bg-pink-100/70",
    iconBg: "bg-[#EA3484]/10",
    iconColor: "text-[#EA3484]",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Moon,
    title: "Astrology Insights",
    subtitle: "Janam Kundli, auspicious dates & predictions.",
    bgColor: "bg-rose-50/70 border-rose-200/60 hover:bg-rose-100/70",
    iconBg: "bg-rose-500/10",
    iconColor: "text-[#F45B8A]",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Heart,
    title: "Expert Guidance",
    subtitle: "Consult doctors, astrologers & wellness experts.",
    bgColor: "bg-pink-50/70 border-pink-200/60 hover:bg-pink-100/70",
    iconBg: "bg-[#EA3484]/10",
    iconColor: "text-[#EA3484]",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Sun,
    title: "Holistic Wellness",
    subtitle: "Yoga, meditation, diet & mental well-being.",
    bgColor: "bg-amber-50/70 border-amber-200/60 hover:bg-amber-100/70",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
];

export default function AboutAstroBabyDetail() {
  const [isPlaying, setIsPlaying] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in main top card
      gsap.from("[data-about-card]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // Video container reveal
      gsap.from("[data-video-container]", {
        scale: 0.97,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-video-container]",
          start: "top 85%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10 space-y-12 md:space-y-16">
      {/* ── 1. TOP SECTION: Main About Astro Baby Card ── */}
      <div
        data-about-card
        className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-pink-100/80 bg-white/90 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.07)] transition-all duration-300"
      >
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl z-0" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Celestial Pregnant Mother Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(23,37,84,0.12)] border-4 border-white/90 bg-gradient-to-b from-white to-pink-50/50 group">
              <img
                src="/images/celestial_mother.png"
                alt="Astro Baby Celestial Pregnant Mother"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#172554] shadow-md backdrop-blur-md border border-white/60">
                <Star className="h-3.5 w-3.5 fill-[#F6C85F] text-[#F6C85F]" />
                <span>Ancient Vedic Science</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-3.5 backdrop-blur-md border border-white/70 text-center shadow-lg">
                <p className="text-xs font-semibold text-[#172554]">
                  Nurtured by Obstetric Science & Cosmic Wisdom
                </p>
                <p className="text-[10px] text-[#F45B8A] font-semibold mt-0.5">
                  Guidance for Body, Mind & Spirit
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, Intro Text & 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* Header Block */}
            <div className="text-center md:text-left space-y-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-sm">
                <Sparkles className="h-3 w-3" /> Essence of Astro Baby
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] tracking-tight leading-[1.2]">
                Bridging Ancient Vedic Roots with Modern Science
              </h1>

              {/* Decorative Divider */}
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto md:mx-0 my-2"></div>

              <h2 className="text-base md:text-lg font-semibold text-[#EA3484] leading-snug">
                Nurturing Life with Compassionate Care, Medical Insights & Cosmic Wisdom
              </h2>
            </div>

            {/* Introduction Paragraphs */}
            <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-[#475569] font-normal">
              <p>
                <strong className="text-[#172554] font-semibold">Astro Baby</strong> is India's pioneer digital Garbhadhan Sanskar platform designed to support parents-to-be on their sacred journey of pregnancy, motherhood, and conscious parenting with the perfect harmony of medical guidance, personalized wellness, and timeless astrological wisdom.
              </p>

              <p>
                We believe that every child is a divine blessing, celebrated in the cosmos and nurtured with mindful love. Our mission is to empower prospective parents with trustworthy obstetric information, expert gynecological advice, and spiritual practices that elevate the mental and physical development of the baby.
              </p>

              <p>
                From trimester-wise Vedic mantras, satvik diet plans, and guided yoga, to personalized Janam Kundali insights – Astro Baby is your complete sanctum for a joyful, stress-free motherhood.
              </p>
            </div>

            {/* 4 Premium Feature Cards Grid */}
            <div
              data-feature-cards-grid
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 items-stretch"
            >
              {featureCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center p-4 rounded-[20px] border ${card.bgColor} shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer h-full group`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} shadow-sm mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className={`text-xs font-semibold ${card.titleColor} mb-1.5 leading-tight`}>
                      {card.title}
                    </h3>
                    <p className={`text-[11px] font-normal ${card.subtitleColor} leading-relaxed`}>
                      {card.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. BOTTOM SECTION: Our Introduction Video ── */}
      <div
        data-video-container
        className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#FFF0F5] border border-pink-100/80 p-6 md:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.06)] text-center space-y-6"
      >
        {/* Subtle Constellation SVG Decorations */}
        <div className="pointer-events-none absolute inset-0 opacity-20 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <g stroke="#F45B8A" strokeWidth="1" strokeDasharray="3 3" fill="none">
              <path d="M100,80 L180,120 L240,60 L310,140" />
              <path d="M750,90 L820,50 L890,130 L950,80" />
              <path d="M80,300 L160,240 L220,320" />
              <path d="M780,310 L860,260 L920,340" />
            </g>
            <g fill="#F45B8A">
              <circle cx="100" cy="80" r="3" />
              <circle cx="180" cy="120" r="4" />
              <circle cx="240" cy="60" r="3" />
              <circle cx="310" cy="140" r="3.5" />
              <circle cx="750" cy="90" r="3" />
              <circle cx="820" cy="50" r="4" />
              <circle cx="890" cy="130" r="3" />
              <circle cx="950" cy="80" r="3.5" />
            </g>
          </svg>
        </div>

        {/* Section Header */}
        <div className="relative z-10 max-w-xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-sm">
            <Play className="h-3 w-3 fill-[#F45B8A]" /> Visual Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554] leading-[1.2] tracking-tight">
            Experience Astro Baby in Action
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto my-2"></div>
          <p className="text-xs md:text-sm text-[#475569] font-normal leading-relaxed">
            Watch how our personalized Garbhadhan Sanskar modules nurture both mother and baby.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative z-10 max-w-4xl mx-auto rounded-[24px] md:rounded-[28px] overflow-hidden shadow-2xl border-4 border-white/95 bg-slate-950 group">
          {isPlaying ? (
            <div className="aspect-video w-full">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://www.youtube.com/embed/HSHnKz5Po1w?autoplay=1"
                title="Astro Baby Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative aspect-video w-full cursor-pointer overflow-hidden"
            >
              {/* Video Thumbnail */}
              <img
                src="/images/video_thumb.png"
                alt="AstroBaby Introduction Video Thumbnail"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#172554]/30 group-hover:bg-[#172554]/20 transition-colors" />

              {/* AstroBaby Branding Overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-3 text-white text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-lg">
                  <Moon className="h-6 w-6 text-[#F6C85F] fill-[#F6C85F]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-none tracking-wide text-white drop-shadow">
                    AstroBaby
                  </h3>
                  <p className="text-[10px] text-pink-200 tracking-widest uppercase mt-1 font-medium">
                    Guide • Nurture • Enlighten
                  </p>
                </div>
              </div>

              <div className="absolute top-20 left-6 max-w-xs text-left hidden sm:block text-white/90 text-xs font-normal leading-relaxed drop-shadow">
                Your sacred companion from preconception to mindful parenting.
              </div>

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play Introduction Video"
                  className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-[0_10px_30px_rgba(244,91,138,0.5)] transition duration-300 group-hover:scale-110 border-2 border-white/80"
                >
                  <Play className="h-7 w-7 md:h-8 w-8 fill-white ml-1 text-white" />
                </button>
              </div>

              {/* Interactive Mock Control Bar at Bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-3">
                  <Play className="h-4 w-4 fill-white cursor-pointer" />
                  <span>0:00 / 1:48</span>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="h-4 w-4 cursor-pointer" />
                  <Maximize2 className="h-4 w-4 cursor-pointer" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
