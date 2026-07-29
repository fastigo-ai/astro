import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import { Sparkles, GraduationCap, Brain, Activity, Globe, ArrowUpRight } from "lucide-react";

const statsData = [
  { value: 100000, label: "App Downloads", format: (v: number) => `${Math.floor(v / 1000)}K+` },
  {
    value: 1200000,
    label: "YouTube Views",
    format: (v: number) => `${(v / 1000000).toFixed(1)}M+`,
  },
  { value: 62, label: "Countries Reached", format: (v: number) => `${Math.floor(v)}+` },
  { value: 4.6, label: "App Rating", format: (v: number) => `${v.toFixed(1)}★` },
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Roots",
    desc: "Designed and guided by a multidisciplinary team of IITians, scientists, gynaecologists, and Vedic scholars.",
    color: "bg-sky-50 text-[#3B82F6]",
  },
  {
    icon: Brain,
    title: "Cognitive Development",
    desc: "Combines ancient Indian Garbh Sanskar practices with modern neuroscience to nurture early intellect and virtues.",
    color: "bg-blue-50 text-[#1a3a6c]",
  },
  {
    icon: Activity,
    title: "Month-wise Wellness",
    desc: "Personalized music, yoga, meditation, and stress-relief sessions tailored to your exact week of pregnancy.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Globe,
    title: "Global Motherhood",
    desc: "Empowering thousands of happy, healthy, and stress-free pregnancies in over 62 countries.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function AboutSection() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const headingText = "Nurturing the Future, One Heartbeat at a Time.";
  const headingWords = headingText.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Floating Background Blobs Animation
      const blobs = rootRef.current?.querySelectorAll("[data-blob]");
      blobs?.forEach((blob) => {
        gsap.to(blob, {
          x: gsap.utils.random(-50, 50),
          y: gsap.utils.random(-50, 50),
          duration: gsap.utils.random(8, 14),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // 2. Sticky Image Clip-path Reveal on Scroll
      gsap.fromTo(
        "[data-reveal-img]",
        {
          clipPath: "inset(12% 12% 12% 12% round 32px)",
          scale: 1.15,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 32px)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-image-trigger]",
            start: "top 80%",
            end: "bottom 30%",
            scrub: 0.8,
          },
        },
      );

      // Image Parallax scroll within its frame
      gsap.to("[data-parallax-img]", {
        y: "8%",
        ease: "none",
        scrollTrigger: {
          trigger: "[data-image-trigger]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. SplitText Heading Reveal Stagger
      gsap.to("[data-split-word]", {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "[data-split-trigger]",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 4. Stagger cards reveal (only if they exist)
      if (document.querySelectorAll("[data-feature-card]").length > 0) {
        gsap.from("[data-feature-card]", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-cards-trigger]",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      }

      // 5. Counters animation (Only on Home Page)
      if (isHomePage) {
        const counterTargets = rootRef.current?.querySelectorAll("[data-counter-target]");
        counterTargets?.forEach((el, index) => {
          const targetVal = statsData[index].value;
          const countObj = { val: 0 };
          gsap.to(countObj, {
            val: targetVal,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = statsData[index].format(countObj.val);
            },
          });
        });
      }

      // 6. Magnetic CTA Button Hover Effect
      const button = btnRef.current;
      if (button) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const btnX = rect.left + rect.width / 2;
          const btnY = rect.top + rect.height / 2;

          const distanceX = e.clientX - btnX;
          const distanceY = e.clientY - btnY;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance < 140) {
            gsap.to(button, {
              x: distanceX * 0.4,
              y: distanceY * 0.4,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            gsap.to(button, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "elastic.out(1, 0.3)",
            });
          }
        };

        const onMouseLeave = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        };

        window.addEventListener("mousemove", onMouseMove);
        button.addEventListener("mouseleave", onMouseLeave);

        return () => {
          window.removeEventListener("mousemove", onMouseMove);
          button.removeEventListener("mouseleave", onMouseLeave);
        };
      }
    }, rootRef);

    return () => ctx.revert();
  }, [isHomePage]);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] py-8 md:py-10">
      {/* Decorative Parallax/Floating Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-blob
          className="absolute -top-12 -left-12 h-72 w-72 rounded-full bg-[#EAE6FA]/40 blur-[80px]"
        />
        <div
          data-blob
          className="absolute top-1/3 -right-24 h-[400px] w-[400px] rounded-full bg-[#F3E8FF]/30 blur-[100px]"
        />
        <div
          data-blob
          className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-[#EAE6FA]/50 blur-[80px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
          {/* Left Column: Sticky image with clip-path zoom reveal */}
          <div className="md:col-span-5 md:h-full">
            <div
              data-image-trigger
              className="md:sticky md:top-24 w-full max-w-[420px] md:max-w-[480px] mx-auto md:mx-0"
            >
              <div
                data-reveal-img
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-white/40 p-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(31,38,135,0.04)] border border-white/40"
              >
                <div className="h-full w-full overflow-hidden rounded-[18px]">
                  <img
                    data-parallax-img
                    src="/images/about_premium.png"
                    alt="Serene Motherhood Garbh Sanskar"
                    className="h-[110%] w-full object-cover object-top scale-105"
                    style={{ transformOrigin: "center center" }}
                  />
                </div>
                {/* Floating glass overlay card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/60 p-3.5 backdrop-blur-md shadow-md border border-white/40">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6] text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold leading-none mb-0.5">
                        Garbh Sanskar
                      </p>
                      <h4 className="text-xs font-bold text-[#1a3a6c] leading-none">
                        Empowered Motherhood
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content sequence */}
          <div className="flex flex-col justify-center md:col-span-7 space-y-5 md:space-y-6">
            {/* Badge & Heading & Description */}
            <div data-split-trigger className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3B82F6] backdrop-blur-sm">
                <Sparkles className="h-2.5 w-2.5" /> About Astro Baby
              </span>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] text-[#1a3a6c] tracking-tight">
                {headingWords.map((word, index) => (
                  <span key={index} className="inline-block overflow-hidden mr-2 pb-0.5">
                    <span data-split-word className="inline-block translate-y-[110%] opacity-0">
                      {word}
                    </span>
                  </span>
                ))}
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-sans max-w-xl">
                Astro Baby Garbh Sanskar is India's leading digital platform combining ancient Vedic
                wisdom with modern obstetric science. Created by a passionate team of experts, we
                make pregnancy a happy, healthy, and spiritually rich journey.
              </p>

              {isHomePage && (
                <div className="pt-1 flex">
                  <Link
                    to="/about-us"
                    className="inline-flex items-center gap-1 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 text-[#3B82F6] px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm border border-sky-200/60"
                  >
                    Read More <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Dynamic Counter Stats (Only on Home Page) */}
            {isHomePage && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3 border-y border-sky-100">
                {statsData.map((stat, i) => (
                  <div key={i} className="space-y-0.5">
                    <div
                      data-counter-target
                      className="text-xl md:text-2xl font-extrabold text-[#3B82F6] tracking-tight"
                    >
                      0
                    </div>
                    <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Staggered Feature Cards */}
            {!isHomePage && (
              <div data-cards-trigger className="grid gap-4 sm:grid-cols-2">
                {features.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      data-feature-card
                      className="flex gap-3 items-start p-3 bg-white/20 hover:bg-[#FAF6EE]/40 border border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#5D539B]/10 text-[#5D539B]">
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#1a3a6c] mb-0.5">{item.title}</h3>
                        <p className="text-[11px] leading-relaxed text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA Option with Magnetic Pull */}
            <div className="pt-2 flex items-center justify-start">
              <div ref={btnRef} className="inline-block">
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#5D539B] hover:bg-[#483F80] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#5D539B]/15 transition-all duration-300"
                >
                  Begin Journey Today
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
