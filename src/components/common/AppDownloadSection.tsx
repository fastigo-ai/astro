import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";

interface AppDownloadSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export default function AppDownloadSection({
  title,
  subtitle,
}: AppDownloadSectionProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const effectiveSubtitle = subtitle || t("appDownload.subtitle", "Download the Astro Baby Garbhadhan Sanskar app today and experience ancient wisdom backed by modern science.");

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#FFFCFE] text-[#475569] overflow-hidden">
      {/* Soft Lavender & Rose Radial Ambient Glows */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.7, 0.9, 0.7],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] bg-gradient-to-br from-[#EA3484]/8 via-[#F45B8A]/5 to-[#172554]/8 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Subtle Spiritual Decor Overlay with gentle floating */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] overflow-hidden select-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [-6, 6, -6], rotate: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-12 text-3xl"
        >
          ✨
        </motion.div>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [6, -6, 6], rotate: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-16 text-4xl"
        >
          🌙
        </motion.div>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-16 text-4xl"
        >
          🌸
        </motion.div>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [8, -8, 8] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-20 text-3xl"
        >
          ✨
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Floating White Glassmorphism Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white/95 backdrop-blur-2xl rounded-3xl lg:rounded-[28px] p-8 sm:p-12 lg:p-16 border border-pink-100/80 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.08)] text-center relative overflow-hidden group"
        >
          {/* Subtle Inner Accent Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#EA3484]/10 via-[#F45B8A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight mb-4 max-w-3xl mx-auto"
          >
            {title || (
              <>
                {t("appDownload.heading", "Begin Your Garbhadhan Sanskar Journey Today on Astro Baby")}
              </>
            )}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-[#475569] max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
          >
            {effectiveSubtitle}
          </motion.p>

          {/* App Store / Play Store Download CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
              target="_blank"
              rel="noreferrer"
              aria-label="Download Astro Baby on Google Play Store"
              className="inline-block transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl rounded-xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
              <img
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-13 w-auto object-contain"
              />
            </a>

            <a
              href="https://apple.co/3iEfg7K"
              target="_blank"
              rel="noreferrer"
              aria-label="Download Astro Baby on Apple App Store"
              className="inline-block transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl rounded-xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
              <img
                src="/images/app-store-badge.png"
                alt="Download on App Store"
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-13 w-auto object-contain"
              />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-pink-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              100% Free Daily Trial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#EA3484]" />
              Android & iOS Compatible
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#172554]" />
              Doctor & Vedic Scholar Backed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
