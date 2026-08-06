import { useState, useRef, useEffect } from "react";
import { Sparkles, Heart, Moon, Sun, Play, Volume2, Maximize2 } from "lucide-react";
import { gsap } from "@/utils/gsapSetup";

const featureCards = [
  {
    icon: Sparkles,
    title: "Personalized Pregnancy Care",
    subtitle: "Week-by-week updates, tips & health guidance.",
    bgColor: "bg-sky-50/90 border-sky-200/90 hover:bg-sky-100/80",
    iconColor: "text-[#3B82F6]",
    titleColor: "text-[#1a3a6c]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Moon,
    title: "Astrology Insights",
    subtitle: "Janam Kundli, auspicious dates & predictions.",
    bgColor: "bg-purple-50/90 border-purple-200/90 hover:bg-purple-100/80",
    iconColor: "text-purple-600",
    titleColor: "text-[#1a3a6c]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Heart,
    title: "Expert Guidance",
    subtitle: "Consult doctors, astrologers & wellness experts.",
    bgColor: "bg-pink-50/90 border-pink-200/90 hover:bg-pink-100/80",
    iconColor: "text-pink-500",
    titleColor: "text-[#1a3a6c]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Sun,
    title: "Holistic Wellness",
    subtitle: "Yoga, meditation, diet & mental well-being.",
    bgColor: "bg-emerald-50/90 border-emerald-200/90 hover:bg-emerald-100/80",
    iconColor: "text-emerald-500",
    titleColor: "text-[#1a3a6c]",
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
    <div ref={rootRef} className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 space-y-12">
      {/* ── 1. TOP SECTION: Main About Astro Baby Card ── */}
      <div
        data-about-card
        className="relative overflow-hidden rounded-[28px] border border-blue-100/80 bg-white p-6 md:p-10 shadow-[0_12px_45px_rgba(23,37,84,0.07)] transition-all duration-300"
      >
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-50/60 blur-3xl z-0" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Celestial Pregnant Mother Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px] overflow-hidden rounded-[24px] shadow-[0_15px_35px_rgba(26,58,108,0.12)] border-2 border-white">
              <img
                src="/images/celestial_mother.png"
                alt="Astro Baby Celestial Pregnant Mother"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/85 p-3 backdrop-blur-md border border-white/60 text-center shadow-md">
                <p className="text-xs font-semibold text-[#1a3a6c]">
                  Nurtured by Science & Cosmic Wisdom
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, Intro Text & 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* Header Block */}
            <div className="text-center md:text-left space-y-2">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#172554] tracking-tight">
                About Astro Baby
              </h1>

              {/* Decorative Divider with heart & star icons */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sky-400 py-1">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300" />
                <span className="text-xs">✦</span>
                <Heart className="h-3.5 w-3.5 fill-sky-400 text-sky-400" />
                <span className="text-xs">✦</span>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300" />
              </div>

              <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#3B82F6] leading-snug">
                Nurturing Life with Guidance, Care & Cosmic Wisdom
              </h2>
            </div>

            {/* Introduction Paragraphs */}
            <p className="text-sm md:text-base leading-relaxed text-slate-600 font-sans">
              Astro Baby is a unique digital platform designed to support parents-to-be on their
              beautiful journey of pregnancy, motherhood, and parenting with the perfect blend of
              medical guidance, personalized care, and ancient astrological wisdom.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-600 font-sans">
              We believe that every baby is a blessing, written in the stars and nurtured with love.
              Our mission is to empower parents with trustworthy information, expert advice, and
              spiritual insights that help in the healthy development of the baby and the well-being
              of the mother.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-600 font-sans">
              From pregnancy tracking, diet plans, yoga & wellness, to baby care tips and
              astrology-based predictions – Astro Baby is your all-in-one companion for a happy
              motherhood journey.
            </p>

            {/* 4 Premium Feature Cards Grid (Aligned in 1 Horizontal Line across all desktop & tablet screens) */}
            <div
              data-feature-cards-grid
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 items-stretch"
            >
              {featureCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center p-3.5 rounded-[20px] border ${card.bgColor} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer h-full`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ${card.iconColor} mb-2.5`}
                    >
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className={`text-xs font-bold ${card.titleColor} mb-1.5 leading-tight`}>
                      {card.title}
                    </h3>
                    <p className={`text-[11px] font-medium ${card.subtitleColor} leading-snug`}>
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
        className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#EAF2FD] via-[#F1F6FE] to-[#E5EFFC] border border-blue-100/80 p-6 md:p-10 shadow-[0_10px_35px_rgba(23,37,84,0.06)] text-center space-y-6"
      >
        {/* Subtle Constellation SVG Decorations */}
        <div className="pointer-events-none absolute inset-0 opacity-25 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <g stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" fill="none">
              <path d="M100,80 L180,120 L240,60 L310,140" />
              <path d="M750,90 L820,50 L890,130 L950,80" />
              <path d="M80,300 L160,240 L220,320" />
              <path d="M780,310 L860,260 L920,340" />
            </g>
            <g fill="#3B82F6">
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
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#172554]">
            Our Introduction Video
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 text-sky-400 py-1">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300" />
            <span className="text-xs">✦</span>
            <Heart className="h-3.5 w-3.5 fill-sky-400 text-sky-400" />
            <span className="text-xs">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300" />
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative z-10 max-w-4xl mx-auto rounded-[24px] overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-950 group">
          {isPlaying ? (
            <div className="aspect-video w-full">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://www.youtube.com/embed/vEltMP4qvhw?autoplay=1"
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/20 transition-colors" />

              {/* AstroBaby Branding Overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-3 text-white text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-lg">
                  <Moon className="h-7 w-7 text-sky-300 fill-sky-300" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold leading-none tracking-wide text-white drop-shadow">
                    AstroBaby
                  </h3>
                  <p className="text-[10px] text-sky-200 tracking-wider font-sans uppercase mt-0.5">
                    Guide. Nurture. Shine.
                  </p>
                </div>
              </div>

              <div className="absolute top-16 left-6 max-w-xs text-left hidden sm:block text-white/90 text-xs font-sans leading-relaxed drop-shadow">
                Your cosmic companion from pregnancy to parenting.
              </div>

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play Introduction Video"
                  className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/90 text-[#1a3a6c] shadow-2xl transition duration-300 group-hover:scale-110 border-2 border-white"
                >
                  <Play className="h-7 w-7 md:h-9 md:w-9 fill-[#1a3a6c] ml-1" />
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
