import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Brain, Activity, Globe, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Roots",
    desc: "Designed and guided by a multidisciplinary team of IITians, scientists, gynaecologists, and Vedic scholars.",
    color: "bg-pink-50 text-[#EA3484]",
  },
  {
    icon: Brain,
    title: "Cognitive Development",
    desc: "Combines ancient Indian Garbhadhan Sanskar practices with modern neuroscience to nurture early intellect and virtues.",
    color: "bg-rose-50 text-[#F45B8A]",
  },
  {
    icon: Activity,
    title: "Month-wise Wellness",
    desc: "Personalized music, yoga, meditation, and stress-relief sessions tailored to your exact week of pregnancy.",
    color: "bg-amber-50 text-[#D97706]",
  },
  {
    icon: Globe,
    title: "Global Motherhood",
    desc: "Empowering thousands of happy, healthy, and stress-free pregnancies in over 62 countries.",
    color: "bg-pink-50 text-[#EA3484]",
  },
];

export default function AboutSection() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const headingText = "Nurturing the Future, One Heartbeat at a Time.";

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#FFF6FA] via-[#FFFDFE] to-[#FFF8FD] py-12 md:py-16 border-b border-pink-100/60">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 z-10">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10 items-center">
          {/* Left Column: Minimal Image Thumbnail */}
          <div className="md:col-span-5 md:h-full">
            <div className="md:sticky md:top-24 w-full max-w-[420px] md:max-w-[480px] mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-white/70 p-2.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(234,52,132,0.08)] border border-pink-100/80 group"
              >
                <div className="h-full w-full overflow-hidden rounded-[18px] bg-pink-50/50">
                  <img
                    src="/images/about_premium.png"
                    alt="Serene Motherhood Garbhadhan Sanskar"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating glass overlay card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/90 p-3 backdrop-blur-md shadow-md border border-pink-100/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EA3484]/10 text-[#EA3484]">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#EA3484] font-semibold leading-none mb-0.5">
                        Garbhadhan Sanskar
                      </p>
                      <h4 className="text-xs font-bold text-[#172554] leading-none">
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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
                <Sparkles className="h-2.5 w-2.5" /> About{" "}
                <span className="font-extrabold text-[#EA3484]">Astro Baby</span>
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] text-[#172554] tracking-tight"
              >
                {headingText}
              </motion.h2>

              <div className="w-20 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full"></div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm md:text-base leading-relaxed text-[#475569] font-normal max-w-xl"
              >
                <strong className="text-[#EA3484] font-semibold">Astro Baby</strong>{" "}
                <strong className="text-[#EA3484] font-semibold">Garbhadhan Sanskar</strong> is
                India's leading digital platform combining ancient Vedic wisdom with modern
                obstetric science. Created by a passionate team of experts, we make pregnancy a
                happy, healthy, and spiritually rich journey.
              </motion.p>
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
                      className="flex gap-3 items-start p-3.5 bg-white/80 hover:bg-white border border-pink-100 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs hover:shadow-sm"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                      >
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

            {/* Unified Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] hover:opacity-95 px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-bold text-white shadow-md shadow-[#EA3484]/25 transition-all duration-300"
                >
                  <span>Begin Journey Today</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              </motion.div>

              {isHomePage && (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <Link
                    to="/about-us"
                    className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/90 bg-white/90 hover:bg-pink-50/80 text-[#EA3484] px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-bold transition-all duration-300 shadow-2xs hover:shadow-xs"
                  >
                    <span>Read Our Story</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
