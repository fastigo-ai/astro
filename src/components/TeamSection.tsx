import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import { Sparkles, Users, ArrowRight } from "lucide-react";

const statsData = [
  {
    value: 100,
    suffix: "+",
    label: "Experts & Scholars",
    format: (v: number) => `${Math.floor(v)}+`,
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Research",
    format: (v: number) => `${Math.floor(v)}+`,
  },
  {
    value: 50,
    suffix: "K+",
    label: "Happy Families",
    format: (v: number) => `${Math.floor(v)}K+`,
  },
  {
    value: 100,
    suffix: "%",
    label: "Trusted Process",
    format: (v: number) => `${Math.floor(v)}%`,
  },
];

export default function TeamSection() {
  const location = useLocation();
  const isTeamPage = location.pathname === "/team";
  const isHomePage = location.pathname === "/";

  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const headingText = "Meet Our Experts";
  const headingWords = headingText.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Floating Background Blobs Animation
      const blobs = rootRef.current?.querySelectorAll("[data-blob]");
      blobs?.forEach((blob) => {
        gsap.to(blob, {
          x: gsap.utils.random(-40, 40),
          y: gsap.utils.random(-40, 40),
          duration: gsap.utils.random(8, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // 2. Large Image Clip-path Reveal on Scroll
      gsap.fromTo(
        "[data-reveal-team-img]",
        {
          clipPath: "inset(8% 8% 8% 8% round 32px)",
          scale: 1.08,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 32px)",
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-team-image-trigger]",
            start: "top 85%",
            end: "bottom 40%",
            scrub: 0.8,
          },
        },
      );

      // Image Parallax scroll
      gsap.to("[data-parallax-team-img]", {
        y: "6%",
        ease: "none",
        scrollTrigger: {
          trigger: "[data-team-image-trigger]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. SplitText Heading Reveal Stagger
      gsap.to("[data-split-team-word]", {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "[data-split-team-trigger]",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 4. Stagger stats cards reveal
      gsap.from("[data-stat-card]", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-stats-trigger]",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // 5. Counters animation
      const counterTargets = rootRef.current?.querySelectorAll("[data-team-counter]");
      counterTargets?.forEach((el, index) => {
        const targetVal = statsData[index].value;
        const countObj = { val: 0 };
        gsap.to(countObj, {
          val: targetVal,
          duration: 1.8,
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
              x: distanceX * 0.35,
              y: distanceY * 0.35,
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
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-white pt-16 md:pt-20 pb-4 md:pb-6"
    >
      {/* Background blobs for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-blob
          className="absolute top-10 right-10 h-80 w-80 rounded-full bg-[#EAE6FA]/40 blur-[80px]"
        />
        <div
          data-blob
          className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#F3E8FF]/30 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
          {/* Left Column: Content sequence */}
          <div className="flex flex-col justify-center md:col-span-7 space-y-5 md:space-y-6">
            {/* Header tag, heading, description */}
            <div data-split-team-trigger className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D6CFFF]/60 bg-[#EAE6FA]/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5D539B] backdrop-blur-sm">
                <Users className="h-3.5 w-3.5" /> Our Team
              </span>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#1a3a6c] tracking-tight">
                {headingWords.map((word, index) => (
                  <span key={index} className="inline-block overflow-hidden mr-2.5 pb-0.5">
                    <span
                      data-split-team-word
                      className="inline-block translate-y-[110%] opacity-0"
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-sans">
                Astro Baby is backed by a distinguished, multidisciplinary panel of IITians,
                scientists, gynaecologists, Vedic scholars, and certified life coaches. Working
                together in harmony, our experts combine ancient Indian scriptural wisdom with
                cutting-edge modern obstetrics and cognitive neuroscience. Together, we curate
                tailored music, yoga, meditation, and cellular-level wellness practices to guide you
                through a healthy, happy, and spiritually enriched motherhood journey.
              </p>

              {isHomePage && (
                <div className="pt-1 flex">
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-1 bg-[#5D539B]/10 hover:bg-[#5D539B]/20 text-[#5D539B] px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm border border-[#D6CFFF]/30"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* 4 Stats Cards in 2x2 grid */}
            <div data-stats-trigger className="grid grid-cols-2 gap-4 py-2">
              {statsData.map((stat, i) => (
                <div
                  key={i}
                  data-stat-card
                  className="group relative rounded-[24px] bg-white/40 p-4 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(93,83,155,0.05)] hover:bg-[#FAF6EE]/50 transition-all duration-500 transform hover:-translate-y-0.5 text-center"
                >
                  <div
                    data-team-counter
                    className="text-2xl md:text-3xl font-extrabold text-[#5D539B] tracking-tight mb-0.5 group-hover:scale-105 transition-transform duration-300"
                  >
                    0
                  </div>
                  <p className="text-[10px] md:text-xs font-semibold text-[#1a3a6c] tracking-wide leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {!isTeamPage && !isHomePage && (
              <div className="pt-2 flex justify-start">
                <div ref={btnRef} className="inline-block">
                  <Link
                    to="/team"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#5D539B] hover:bg-[#483F80] px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-[#5D539B]/20 transition-all duration-300"
                  >
                    Meet the Team
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-1 duration-300">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky group photo with clip-path zoom reveal */}
          <div className="md:col-span-5 md:h-full">
            <div
              data-team-image-trigger
              className="md:sticky md:top-24 w-full max-w-[420px] md:max-w-[480px] mx-auto md:mx-0"
            >
              <div
                data-reveal-team-img
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-white/40 p-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(31,38,135,0.04)] border border-white/40"
              >
                <div className="h-full w-full overflow-hidden rounded-[18px]">
                  <img
                    data-parallax-team-img
                    src="/images/team_premium.png"
                    alt="Astro Baby Experts Panel"
                    className="h-[112%] w-full object-cover scale-105"
                    style={{ transformOrigin: "center center" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
