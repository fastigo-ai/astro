import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
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

  // 2. Mouse radial follow glow
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: x - 150,
          y: y - 150,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    };

    root.addEventListener("mousemove", handleGlobalMouseMove);
    return () => root.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // 3. GSAP Entrance and exit scroll anims
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Blobs floating
      const blobs = rootRef.current?.querySelectorAll("[data-feature-blob]");
      blobs?.forEach((blob) => {
        gsap.to(blob, {
          x: gsap.utils.random(-60, 60),
          y: gsap.utils.random(-60, 60),
          duration: gsap.utils.random(10, 16),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Split heading reveal
      gsap.to("[data-split-feature-word]", {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "[data-split-feature-trigger]",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // iPhone mockup entrance reveal
      gsap.fromTo(
        "[data-iphone-mockup]",
        {
          scale: 0.82,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.1)",
          scrollTrigger: {
            trigger: "[data-iphone-mockup-trigger]",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Continuous float loop for phone
      gsap.to("[data-iphone-mockup]", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Left cards stagger slide-in
      gsap.from("[data-left-feature-card]", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-cards-layout-trigger]",
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // Right cards stagger slide-in
      gsap.from("[data-right-feature-card]", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-cards-layout-trigger]",
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // Button fade-up entrance
      gsap.from("[data-more-features-btn]", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-more-features-btn]",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // Parallax blobs tied to scroll
      gsap.to("[data-parallax-feature-blob]", {
        y: "25%",
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] pt-12 md:pt-16 pb-0 md:pb-0"
    >
      {/* Background radial spotlight glow layer */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[#F63D8E]/10 blur-[90px] z-0 left-0 top-0"
      />

      {/* Decorative floating blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div
          data-feature-blob
          data-parallax-feature-blob
          className="absolute top-20 left-12 h-80 w-80 rounded-full bg-[#2584F5]/10 blur-[90px]"
        />
        <div
          data-feature-blob
          data-parallax-feature-blob
          className="absolute bottom-20 right-12 h-96 w-96 rounded-full bg-[#F63D8E]/10 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 z-10">
        {/* Header Block */}
        <div data-split-feature-trigger className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F63D8E] backdrop-blur-md shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F63D8E]" /> Features
          </span>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1A3A6C] tracking-tight">
            {headingWords.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden mr-2.5 pb-0.5">
                <span data-split-feature-word className="inline-block translate-y-[110%] opacity-0">
                  {word}
                </span>
              </span>
            ))}
          </h2>

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
              <div key={idx} data-left-feature-card>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  iconBg={item.iconBg}
                  iconColor={item.iconColor}
                  alignRight={true}
                />
              </div>
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
              <div
                data-iphone-mockup
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
              </div>
            </div>
          </div>

          {/* Right Column: 5 Features */}
          <div className="lg:col-span-4 space-y-5 order-3">
            {rightFeatures.map((item, idx) => (
              <div key={idx} data-right-feature-card>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  iconBg={item.iconBg}
                  iconColor={item.iconColor}
                  alignRight={false}
                />
              </div>
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
