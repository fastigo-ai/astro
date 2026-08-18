import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface AppDownloadSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export default function AppDownloadSection({
  title,
  subtitle = "Download the Astro Baby Garbhadhan Sanskar app today and experience ancient wisdom backed by modern science.",
}: AppDownloadSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
                Begin Your Garbhadhan Sanskar Journey Today on{" "}
                <span className="bg-gradient-to-r from-[#172554] via-[#EA3484] to-[#F45B8A] bg-clip-text text-transparent">
                  Astro Baby
                </span>
              </>
            )}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#475569] text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Thin Gradient Divider */}
          <motion.div
            variants={itemVariants}
            className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#EA3484]/40 to-transparent mx-auto my-6 sm:my-8"
          />

          {/* Premium Store Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            {/* Google Play Button */}
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto max-w-[210px] sm:max-w-none flex items-center justify-center cursor-pointer"
            >
              <img
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                loading="lazy"
                decoding="async"
                className="h-11 sm:h-14 w-auto object-contain drop-shadow-md"
              />
            </motion.a>

            {/* App Store Button */}
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              href="https://apple.co/3iEfg7K"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto max-w-[210px] sm:max-w-none flex items-center justify-center cursor-pointer"
            >
              <img
                src="/images/app-store-badge.png"
                alt="Download on the App Store"
                loading="lazy"
                decoding="async"
                className="h-11 sm:h-14 w-auto object-contain drop-shadow-md"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
