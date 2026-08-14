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
          className={`text-sm font-bold text-[#172554] flex items-center gap-1.5 group-hover:text-[#F45B8A] transition-colors duration-300 ${
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
          className={`h-4 w-4 text-[#3B82F6]/40 group-hover:text-[#F45B8A] transition-transform duration-300 ${
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
    "/images/features/comprehensive_slide1.png",
    "/images/features/comprehensive_slide2.png",
    "/images/features/comprehensive_slide3.png",
  ];

  const allFeatures = [
    {
      icon: Sparkles,
      title: "Beej Sanskar",
      desc: "Holistic success and work-life balance through ancient wisdom.",
      iconBg: "bg-amber-100/50",
      iconColor: "text-amber-600",
    },
    {
      icon: Heart,
      title: "Garbhadhan",
      desc: "Divine planning and preparation for conscious conception.",
      iconBg: "bg-pink-100/50",
      iconColor: "text-pink-600",
    },
    {
      icon: GraduationCap,
      title: "Garbhadhan Sanskar",
      desc: "Vedic wisdom and scientific practices for a healthy pregnancy.",
      iconBg: "bg-purple-100/50",
      iconColor: "text-purple-600",
    },
    {
      icon: Compass,
      title: "Baal Bhavish Fal",
      desc: "Astrological guidance and insights for your child's bright future.",
      iconBg: "bg-indigo-100/50",
      iconColor: "text-indigo-600",
    },
    {
      icon: Activity,
      title: "Parenting",
      desc: "Mindful and positive upbringing strategies for modern parents.",
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
    <section className="relative isolate overflow-hidden bg-[#fcf2f7] pt-14 md:pt-16 pb-12 md:pb-16 border-b border-pink-100/60">


      <div className="relative mx-auto max-w-7xl px-4 md:px-6 z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs mb-4">
            <Sparkles className="h-3 w-3 text-[#F45B8A]" /> Comprehensive Features
          </span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] text-[#172554] tracking-tight mb-3 flex flex-wrap justify-center gap-x-2"
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
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
          {/* Left Column: 5 Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 order-2 lg:order-1">
            {allFeatures.map((item, idx) => (
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
                  alignRight={false}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column: Phone Mockup & Gradient Rings */}
          <div className="lg:col-span-5 flex justify-center items-center py-6 order-1 lg:order-2">
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

                {/* Screen Content: Automatic Slider */}
                <div className="relative h-full w-full bg-slate-100 overflow-hidden rounded-[34px]">
                  {/* Top Astro Baby Branding Overlay Header Bar on every slide */}
                  <div className="absolute top-0 left-0 right-0 z-20 pt-6 pb-2.5 px-3 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/70 to-transparent flex items-center justify-between text-white backdrop-blur-[3px] border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-400 text-xs font-black animate-pulse">✦</span>
                      <span className="font-extrabold tracking-wider text-[11px] bg-gradient-to-r from-amber-200 via-pink-200 to-white bg-clip-text text-transparent uppercase font-sans">
                        Astro Baby
                      </span>
                    </div>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#F45B8A] text-white shadow-xs tracking-wider uppercase">
                      Garbhadhan Sanskar
                    </span>
                  </div>

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

                  {/* Bottom Astro Baby Watermark / Label Badge Overlay on every slide */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-[#172554]/80 backdrop-blur-md border border-white/20 shadow-md flex items-center gap-1.5 pointer-events-none">
                    <span className="text-[#F45B8A] text-[10px]">✦</span>
                    <span className="text-[10px] font-bold text-white tracking-wider uppercase">
                      Astro Baby App
                    </span>
                  </div>

                  {/* Subtle glass screen reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Explore More Features Button */}
        <div data-more-features-btn className="flex justify-center mt-6 md:mt-8">
          <Link
            to="/features"
            className="group inline-flex items-center gap-2 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F45B8A]/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore More Features
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
