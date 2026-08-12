import React, { useEffect, useRef } from "react";
import { gsap } from "@/utils/gsapSetup";

interface AppDownloadSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export default function AppDownloadSection({
  title,
  subtitle = "Download the Astro Baby Garbhadhan Sanskar app today and experience ancient wisdom backed by modern science.",
}: AppDownloadSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline with ScrollTrigger (animates once on scroll)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Section fade + y (1s)
      tl.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })
        // Card scale 0.95 -> 1 with ease
        .from(
          cardRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.7",
        )
        // Stagger heading, text, divider, and buttons (0.15s delay)
        .from(
          ".gsap-stagger-item",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5",
        );

      // 2. Infinite floating animation for spiritual icons (stars, moon, lotus)
      gsap.to(".gsap-floating-icon-1", {
        y: -12,
        rotation: 3,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gsap-floating-icon-2", {
        y: 10,
        rotation: -3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Radial background glow subtle pulse
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.12,
          opacity: 0.85,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#FFFCFE] text-[#475569] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Soft Lavender & Rose Radial Ambient Glows (Behind Card) */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] bg-gradient-to-br from-[#3B82F6]/10 via-[#F45B8A]/7 to-[#172554]/10 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Subtle Spiritual Decor Overlay (5-10% Opacity Stars, Moon, Lotus & Sparkles) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] overflow-hidden select-none">
        <div className="gsap-floating-icon-1 absolute top-10 left-12 text-3xl">✨</div>
        <div className="gsap-floating-icon-2 absolute top-20 right-16 text-4xl">🌙</div>
        <div className="gsap-floating-icon-1 absolute bottom-12 left-16 text-4xl">🌸</div>
        <div className="gsap-floating-icon-2 absolute bottom-16 right-20 text-3xl">✨</div>
        <div className="gsap-floating-icon-1 absolute top-1/2 left-8 text-2xl">🌸</div>
        <div className="gsap-floating-icon-2 absolute top-1/2 right-10 text-2xl">✨</div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Floating White Glassmorphism Card (28px Radius) */}
        <div
          ref={cardRef}
          className="bg-white/90 backdrop-blur-2xl rounded-3xl lg:rounded-[28px] p-8 sm:p-12 lg:p-16 border border-[#EAF4FF] shadow-[0_20px_60px_-15px_rgba(23,37,84,0.08)] text-center relative overflow-hidden group"
        >
          {/* Subtle Inner Accent Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#3B82F6]/10 via-[#F45B8A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <h2 className="gsap-stagger-item text-3xl sm:text-4xl md:text-5xl font-normal text-[#172554] leading-tight font-['Cormorant_Garamond',serif] mb-4 max-w-3xl mx-auto">
            {title || (
              <>
                Begin Your Garbhadhan Sanskar Journey Today on{" "}
                <span className="bg-gradient-to-r from-[#172554] via-[#3B82F6] to-[#F45B8A] bg-clip-text text-transparent font-semibold">
                  Astro Baby
                </span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="gsap-stagger-item text-[#5F5B73] text-base sm:text-lg max-w-xl mx-auto font-normal font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
            {subtitle}
          </p>

          {/* Thin Gradient Divider */}
          <div className="gsap-stagger-item w-32 h-[1px] bg-gradient-to-r from-transparent via-[#F45B8A]/30 to-transparent mx-auto my-6 sm:my-8" />

          {/* Premium Store Badges (Slightly Curved on 4 Sides) */}
          <div className="gsap-stagger-item flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 font-['Manrope',sans-serif]">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto max-w-[210px] sm:max-w-none transition-all duration-300 hover:-translate-y-1.5 active:scale-98 flex items-center justify-center group/btn"
            >
              <img
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-11 sm:h-14 w-auto object-contain drop-shadow-md group-hover/btn:scale-105 transition-transform duration-300"
              />
            </a>

            {/* App Store Button */}
            <a
              href="https://apple.co/3iEfg7K"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto max-w-[210px] sm:max-w-none transition-all duration-300 hover:-translate-y-1.5 active:scale-98 flex items-center justify-center group/btn"
            >
              <img
                src="/images/app-store-badge.png"
                alt="Download on the App Store"
                className="h-11 sm:h-14 w-auto object-contain drop-shadow-md group-hover/btn:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
