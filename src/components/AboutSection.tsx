import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Brain, Activity, Globe, ArrowUpRight } from "lucide-react";



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
    desc: "Combines ancient Indian Garbhadhan Sanskar practices with modern neuroscience to nurture early intellect and virtues.",
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

  const headingText = "Nurturing the Future, One Heartbeat at a Time.";

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFFCFE] via-[#F9F5FF] to-[#EAF4FF] py-12 md:py-16 border-b border-pink-100/60">
      {/* Mandala & Sparkle Background Decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="mandala absolute -left-32 top-6 h-80 w-80 rounded-full opacity-[0.07] bg-[#8B32BD]" />
        <div className="mandala absolute -right-32 bottom-6 h-80 w-80 rounded-full opacity-[0.07] bg-[#F4C27A]" />
        <span className="absolute left-[7%] top-[12%] h-2.5 w-2.5 rotate-45 bg-[#F4C27A] shadow-[0_0_18px_#F4C27A] opacity-70" />
        <span className="story-float absolute right-[9%] top-[16%] text-2xl text-[#8B32BD]/40">
          ✦
        </span>
        <span className="story-float absolute bottom-[14%] left-[4%] text-xl text-[#F4C27A]/70 [animation-delay:1.2s]">
          ✧
        </span>
        <span className="absolute right-[5%] top-1/4 h-48 w-48 rounded-full bg-[#8B32BD]/10 blur-3xl" />
        <span className="absolute bottom-[8%] left-[10%] h-56 w-56 rounded-full bg-[#F4C27A]/15 blur-3xl" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-[#F45B8A]/5 via-[#3B82F6]/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 z-10">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
          {/* Left Column: Image with Framer Motion reveal */}
          <div className="md:col-span-5 md:h-full">
            <div className="md:sticky md:top-24 w-full max-w-[420px] md:max-w-[480px] mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-white/40 p-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(31,38,135,0.04)] border border-white/40"
              >
                <div className="h-full w-full overflow-hidden rounded-[18px]">
                  <img
                    src="/images/about_premium.png"
                    alt="Serene Motherhood Garbhadhan Sanskar"
                    className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-700"
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
                        Garbhadhan Sanskar
                      </p>
                      <h4 className="text-xs font-bold text-[#1a3a6c] leading-none">
                        Empowered Motherhood
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Content sequence */}
          <div className="flex flex-col justify-center md:col-span-7 space-y-5 md:space-y-6">
            {/* Badge & Heading & Description */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm">
                <Sparkles className="h-2.5 w-2.5" /> About{" "}
                <span className="font-extrabold text-[#F45B8A]">Astro Baby</span>
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] text-[#172554] tracking-tight"
              >
                {headingText}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm md:text-base leading-relaxed text-slate-600 font-sans max-w-xl"
              >
                <strong className="text-[#F45B8A] font-bold">Astro Baby</strong>{" "}
                <strong className="text-[#F45B8A] font-bold">Garbhadhan Sanskar</strong> is India's
                leading digital platform combining ancient Vedic wisdom with modern obstetric
                science. Created by a passionate team of experts, we make pregnancy a happy,
                healthy, and spiritually rich journey.
              </motion.p>

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
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F45B8A]/10 text-[#F45B8A]">
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#172554] mb-0.5">{item.title}</h3>
                        <p className="text-[11px] leading-relaxed text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA Option with Framer Motion hover scale */}
            <div className="pt-2 flex items-center justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#F45B8A]/25 transition-all duration-300"
                >
                  Begin Journey Today
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
