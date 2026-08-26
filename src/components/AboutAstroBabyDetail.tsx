import { useState, useRef } from "react";
import { Sparkles, Heart, Moon, Sun, Play, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import LazyImage from "@/components/common/LazyImage";

const featureCardStyles = [
  {
    icon: Sparkles,
    bgColor: "bg-pink-50/70 border-pink-200/70 hover:bg-pink-100/70 hover:border-[#EA3484]/40",
    iconBg: "bg-[#EA3484]/10",
    iconColor: "text-[#EA3484]",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Moon,
    bgColor: "bg-amber-50/60 border-amber-200/70 hover:bg-amber-100/70 hover:border-[#F6C85F]/50",
    iconBg: "bg-[#F6C85F]/20",
    iconColor: "text-[#D97706]",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Heart,
    bgColor: "bg-rose-50/70 border-rose-200/70 hover:bg-rose-100/70 hover:border-[#F45B8A]/40",
    iconBg: "bg-[#F45B8A]/10",
    iconColor: "text-[#F45B8A]",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
  {
    icon: Sun,
    bgColor: "bg-pink-50/60 border-pink-200/70 hover:bg-pink-100/70 hover:border-[#EA3484]/40",
    iconBg: "bg-[#EA3484]/10",
    iconColor: "text-[#EA3484]",
    titleColor: "text-[#172554]",
    subtitleColor: "text-slate-600",
  },
];

export default function AboutAstroBabyDetail() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10 space-y-12 md:space-y-16">
      {/* ── 1. TOP SECTION: Main About Astro Baby Card ── */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-pink-100/80 bg-white/95 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.07)] transition-all duration-300"
      >
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-pink-100/40 blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl z-0" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Clean, Minimal Image Thumbnail */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-[26px] shadow-[0_16px_40px_rgba(234,52,132,0.09)] border-2 border-pink-100/80 bg-gradient-to-b from-white via-pink-50/30 to-pink-50/60 p-2.5 group">
              {/* Image Box */}
              <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] bg-pink-50">
                <LazyImage
                  src="/images/celestial_mother.png"
                  alt="Astro Baby Celestial Pregnant Mother"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Theme Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/40 via-transparent to-transparent pointer-events-none" />

                {/* Minimal Top Floating Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#EA3484] shadow-xs border border-pink-100">
                  <Sparkles className="h-3 w-3 text-[#EA3484]" />
                  <span>{t("aboutPage.detail.floatingSanskar", "Garbhadhan Sanskar")}</span>
                </div>

                {/* Minimal Bottom Info Bar */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-xl bg-white/90 backdrop-blur-md px-3.5 py-2.5 border border-white/80 shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#172554] leading-none">
                      {t("aboutPage.detail.floatingCareTitle", "Holistic Prenatal Care")}
                    </p>
                    <p className="text-[10px] text-[#EA3484] font-medium mt-1 leading-none">
                      {t("aboutPage.detail.floatingCareSub", "Vedic Wisdom & Modern Science")}
                    </p>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-50 text-[#EA3484] border border-pink-100">
                    <Star className="h-3.5 w-3.5 fill-[#F6C85F] text-[#F6C85F]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, Intro Text & 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* Header Block */}
            <div className="text-center md:text-left space-y-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
                <Sparkles className="h-3 w-3" /> {t("aboutPage.detail.badge", "Essence of Astro Baby")}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#172554] tracking-tight leading-[1.2]">
                {t("aboutPage.detail.heading", "Bridging Ancient Vedic Roots with Modern Science")}
              </h1>

              {/* Decorative Divider */}
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto md:mx-0 my-2"></div>

              <h2 className="text-sm md:text-base font-semibold text-[#EA3484] leading-snug">
                {t(
                  "aboutPage.detail.subheading",
                  "Nurturing Life with Compassionate Care, Medical Insights & Cosmic Wisdom"
                )}
              </h2>
            </div>

            {/* Introduction Paragraphs */}
            <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-[#475569] font-normal">
              <p>
                {t(
                  "aboutPage.detail.p1",
                  "Astro Baby is India's pioneer digital Garbhadhan Sanskar platform designed to support parents-to-be on their sacred journey of pregnancy, motherhood, and conscious parenting with the perfect harmony of medical guidance, personalized wellness, and timeless astrological wisdom."
                )}
              </p>

              <p>
                {t(
                  "aboutPage.detail.p2",
                  "We believe that every child is a divine blessing, celebrated in the cosmos and nurtured with mindful love. Our mission is to empower prospective parents with trustworthy obstetric information, expert gynecological advice, and spiritual practices that elevate the mental and physical development of the baby."
                )}
              </p>

              <p>
                {t(
                  "aboutPage.detail.p3",
                  "From trimester-wise Vedic mantras, satvik diet plans, and guided yoga, to personalized Janam Kundali insights – Astro Baby is your complete sanctum for a joyful, stress-free motherhood."
                )}
              </p>
            </div>

            {/* 4 Premium Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pt-3 items-stretch">
              {featureCardStyles.map((card, idx) => {
                const Icon = card.icon;
                const title = t(`aboutPage.detail.features.${idx}.title`, "");
                const subtitle = t(`aboutPage.detail.features.${idx}.subtitle`, "");
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                    className={`flex flex-col items-center text-center p-4 rounded-[20px] border ${card.bgColor} shadow-xs backdrop-blur-sm transition-colors duration-200 cursor-pointer h-full group`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} shadow-xs mb-3 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className={`text-xs font-semibold ${card.titleColor} mb-1.5 leading-tight`}>
                      {title}
                    </h3>
                    <p className={`text-[11px] font-normal ${card.subtitleColor} leading-relaxed`}>
                      {subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 2. BOTTOM SECTION: Visual Experience Video Player with Decent Family Thumbnail & Logo ── */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
            <Play className="h-3 w-3 fill-[#EA3484]" /> {t("aboutPage.video.badge", "Visual Experience")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554] leading-[1.2] tracking-tight">
            {t("aboutPage.video.heading", "Experience Astro Baby in Action")}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto my-2"></div>
          <p className="text-xs md:text-sm text-[#475569] font-normal leading-relaxed">
            {t(
              "aboutPage.video.subtitle",
              "Watch how our personalized Garbhadhan Sanskar modules nurture both mother and baby."
            )}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative z-10 max-w-4xl mx-auto rounded-[24px] md:rounded-[28px] overflow-hidden shadow-2xl border-2 border-white bg-slate-950 group">
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
              className="relative aspect-video w-full cursor-pointer overflow-hidden group"
            >
              {/* Clean Decent Video Thumbnail with Family & Astrological Harmony */}
              <LazyImage
                src="/images/visual_experience_family.jpg"
                alt="Astro Baby Vedic Garbhadhan Sanskar Family"
                fallbackSrc="/images/video_thumb.png"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Refined Theme Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/75 via-[#172554]/20 to-black/30 group-hover:from-[#172554]/65 transition-colors pointer-events-none" />

              {/* Top-Left: Decent Astro Baby Brand Logo Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center z-20">
                <div className="flex items-center bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-pink-200/80 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/logo.png"
                    alt="Astro Baby"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Top-Right: Category Tag */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-20">
                <div className="inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 text-white text-[11px] font-semibold shadow-xs">
                  <Sparkles className="h-3 w-3 text-[#F6C85F]" />
                  <span>{t("aboutPage.video.tag", "Vedic Prenatal Care")}</span>
                </div>
              </div>

              {/* Center Play Button with Pulsing Glow & Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <span className="absolute -inset-3 rounded-full bg-[#EA3484]/40 animate-ping" />
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.12 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white shadow-[0_12px_36px_rgba(234,52,132,0.55)] border-2 border-white pointer-events-auto"
                  >
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-white ml-1 text-white" />
                  </motion.div>
                </div>
                <span className="mt-3 text-white text-xs sm:text-sm font-bold tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/30 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/20">
                  {t("aboutPage.video.clickToWatch", "Click to Watch")}
                </span>
              </div>

              {/* Bottom Glass Bar with Video Info */}
              <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 flex items-center justify-between z-20 pointer-events-none">
                <div className="inline-flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium shadow-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EA3484] animate-pulse" />
                  <span className="drop-shadow-xs">
                    {t("aboutPage.video.videoInfo", "Experience 9-Month Garbhadhan Sanskar Journey")}
                  </span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20 text-white/90 text-xs font-semibold shadow-md">
                  <span>{t("aboutPage.video.hd", "HD 1080p")}</span>
                  <span>•</span>
                  <span>{t("aboutPage.video.duration", "1:48 min")}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
