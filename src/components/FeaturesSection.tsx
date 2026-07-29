import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Heart,
  Music,
  Activity,
  Flame,
  Activity as Stethoscope,
  Moon,
  Calendar,
  Compass,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
  alignRight?: boolean;
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  iconBg,
  iconColor,
  alignRight = false,
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 0,
    glowY: 0,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation limits (-12 to 12 deg) for premium 3D feel
    const rotateY = (mouseX / width - 0.5) * 14;
    const rotateX = (0.5 - mouseY / height) * 14;

    setCoords({
      rotateX,
      rotateY,
      glowX: mouseX,
      glowY: mouseY,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setCoords({ rotateX: 0, rotateY: 0, glowX: 0, glowY: 0, isHovered: false });
  };

  const transformStyle = coords.isHovered
    ? `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) translateY(-6px)`
    : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className={`group relative flex gap-4 p-5 bg-white/45 hover:bg-white/75 border border-white/50 hover:border-[#5D539B]/30 rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(93,83,155,0.05)] transition-all duration-300 cursor-pointer overflow-hidden ${
        alignRight ? "md:flex-row-reverse md:text-right" : "flex-row text-left"
      }`}
    >
      {/* Radial Hover Glow Layer */}
      {coords.isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 120px at ${coords.glowX}px ${coords.glowY}px, rgba(93, 83, 155, 0.08), transparent)`,
          }}
        />
      )}

      {/* Pastel circular icon wrapper */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor} transition-transform duration-300 group-hover:scale-105 shadow-sm`}
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Feature Details */}
      <div className="flex-1 space-y-1">
        <h4
          className={`text-sm font-bold text-[#1a3a6c] flex items-center gap-1.5 group-hover:text-[#5D539B] transition-colors duration-300 ${
            alignRight ? "md:justify-end" : "justify-start"
          }`}
        >
          {title}
        </h4>
        <p className="text-xs leading-relaxed text-slate-500 font-sans">{desc}</p>
      </div>

      {/* Rotating Arrow Icon */}
      <div
        className={`flex items-center shrink-0 self-center transition-transform duration-300 ${
          coords.isHovered ? "scale-110 translate-x-0.5" : "scale-100"
        }`}
      >
        <ArrowRight
          className={`h-4 w-4 text-[#5D539B]/40 group-hover:text-[#5D539B] transition-transform duration-300 ${
            coords.isHovered ? "rotate-[-45deg]" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/features/sankalp_poojan.jpg",
    "/images/features/punsavan_sanskar.jpg",
    "/images/features/simantonnayana_sanskar.jpg",
    "/images/features/garbhsanskar_sutra.jpg",
    "/images/features/vaidic_mantra_vrushti.jpg",
  ];

  const leftFeatures = [
    {
      icon: Sparkles,
      title: "Sankalp Poojan",
      desc: "Sacred ceremony to establish pure mental intentions for pregnancy.",
      iconBg: "bg-amber-100/50",
      iconColor: "text-amber-600",
    },
    {
      icon: GraduationCap,
      title: "Punsavan Sanskar",
      desc: "Fetal wellness rituals designed to support sensory and cognitive cells.",
      iconBg: "bg-purple-100/50",
      iconColor: "text-purple-600",
    },
    {
      icon: Heart,
      title: "Simantonnayana Sanskar",
      desc: "Deep psychological stress-relief practices ensuring maternal calm.",
      iconBg: "bg-pink-100/50",
      iconColor: "text-pink-600",
    },
  ];

  const rightFeatures = [
    {
      icon: Music,
      title: "Vaidic Mantra Vrushti",
      desc: "Samavedic & Rigvedic audio echoes for cellular and structural peace.",
      iconBg: "bg-indigo-100/50",
      iconColor: "text-indigo-600",
    },
    {
      icon: Activity,
      title: "Garbh Sanskar Music",
      desc: "Ragas and frequencies tuned to encourage neural pathway growth.",
      iconBg: "bg-blue-100/50",
      iconColor: "text-blue-600",
    },
    {
      icon: Compass,
      title: "Yoga & Pranayama",
      desc: "Tailored postures and breathing patterns for body tone and delivery prep.",
      iconBg: "bg-emerald-100/50",
      iconColor: "text-emerald-600",
    },
  ];

  const headingText = "Everything You Need, All in One Place";
  const headingWords = headingText.split(" ");

  // 1. Automatic Slide Interval (3 slides)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] pt-14 md:pt-16 pb-12 md:pb-16 border-b border-pink-100/60"
    >
      {/* Mandala & Sparkle Background Decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="mandala absolute -left-36 top-10 h-80 w-80 rounded-full opacity-[0.07] bg-[#8B32BD]" />
        <div className="mandala absolute -right-36 bottom-10 h-80 w-80 rounded-full opacity-[0.07] bg-[#F4C27A]" />
        <span className="absolute left-[8%] top-[15%] h-2.5 w-2.5 rotate-45 bg-[#F4C27A] shadow-[0_0_18px_#F4C27A] opacity-70" />
        <span className="story-float absolute right-[10%] top-[18%] text-2xl text-[#8B32BD]/40">✦</span>
        <span className="story-float absolute bottom-[18%] left-[5%] text-xl text-[#F4C27A]/70 [animation-delay:1.2s]">✧</span>
        <span className="absolute right-[4%] top-1/3 h-48 w-48 rounded-full bg-[#8B32BD]/10 blur-3xl" />
        <span className="absolute bottom-[6%] left-[12%] h-56 w-56 rounded-full bg-[#F4C27A]/15 blur-3xl" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#F63D8E]/5 via-[#2584F5]/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-sky-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3B82F6] backdrop-blur-sm shadow-xs mb-4">
            <Sparkles className="h-3 w-3 text-[#3B82F6]" /> Comprehensive Features
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] text-[#1a3a6c] tracking-tight mb-3"
          >
            {headingText}
          </motion.h2>

          <p className="text-sm md:text-base leading-relaxed text-slate-600 font-sans">
            A comprehensive week-by-week guide to nurturing your body and your baby, combining
            wisdom and medicine to ensure full pregnancy growth.
          </p>
        </div>

        {/* Features Content layout */}
        <div
          data-cards-layout-trigger
          data-iphone-mockup-trigger
          className="grid gap-8 lg:grid-cols-12 items-center"
        >
          {/* Left Column: 5 Features (Right-aligned details on desktop) */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
            {leftFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  iconBg={item.iconBg}
                  iconColor={item.iconColor}
                  alignRight={true}
                />
              </motion.div>
            ))}
          </div>

          {/* Center Column: Phone Mockup & Gradient Rings */}
          <div className="lg:col-span-4 flex justify-center items-center py-6 order-1 lg:order-2">
            <div className="relative flex justify-center items-center w-full max-w-[320px]">
              {/* Rotating Gradient Rings */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                <div className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-[#5D539B]/15 animate-[spin_45s_linear_infinite]" />
                <div className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-[#EAE6FA]/40 animate-[spin_28s_linear_infinite_reverse]" />
                <div className="absolute h-[260px] w-[260px] rounded-full bg-gradient-to-tr from-[#EAE6FA]/30 to-[#F3E8FF]/30 blur-[30px] opacity-70 animate-[spin_18s_linear_infinite]" />
              </div>

              {/* iPhone Mockup wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 w-[260px] h-[530px] bg-slate-900 rounded-[44px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-[5.5px] border-slate-800 overflow-hidden"
              >
                {/* Speaker notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-800 rounded-b-2xl z-30 flex justify-center items-end pb-1">
                  <div className="w-10 h-1 bg-slate-600 rounded-full" />
                </div>

                {/* Screen Content: 3-Image Automatic Slider */}
                <div className="relative h-full w-full bg-slate-100 overflow-hidden rounded-[34px]">
                  {slides.map((slide, idx) => (
                    <img
                      key={slide}
                      src={slide}
                      alt={`Feature Screen ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                  {/* Subtle glass screen reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: 5 Features */}
          <div className="lg:col-span-4 space-y-5 order-3">
            {rightFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  iconBg={item.iconBg}
                  iconColor={item.iconColor}
                  alignRight={false}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore More Features Button */}
        <div data-more-features-btn className="flex justify-center mt-6 md:mt-8">
          <Link
            to="/features"
            className="group inline-flex items-center gap-2 rounded-full bg-[#5D539B] hover:bg-[#483F80] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#5D539B]/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore More Features
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
