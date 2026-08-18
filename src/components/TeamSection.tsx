import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Users, ArrowRight } from "lucide-react";

const statsData = [
  {
    value: "100+",
    label: "Experts & Scholars",
  },
  {
    value: "20+",
    label: "Years of Research",
  },
  {
    value: "50K+",
    label: "Happy Families",
  },
  {
    value: "100%",
    label: "Trusted Process",
  },
];

export default function TeamSection() {
  const location = useLocation();
  const isTeamPage = location.pathname === "/team";
  const isHomePage = location.pathname === "/";
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-20 pb-4 md:pb-6">
      {/* Background blobs for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [-20, 20, -20],
                  y: [-20, 20, -20],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 h-80 w-80 rounded-full bg-pink-100/40 blur-[80px]"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [20, -20, 20],
                  y: [20, -20, 20],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-rose-100/30 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10 items-center">
          {/* Left Column: Content sequence */}
          <div className="flex flex-col justify-center md:col-span-7 space-y-5 md:space-y-6">
            {/* Header tag, heading, description */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm">
                <Users className="h-3.5 w-3.5" /> Our Team
              </span>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#172554] tracking-tight">
                Meet Our Experts
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full"></div>
              <p className="text-sm md:text-base leading-relaxed text-[#475569] font-normal">
                Astro Baby is backed by a distinguished, multidisciplinary panel of IITians,
                scientists, gynaecologists, Vedic scholars, and certified life coaches. Working
                together in harmony, our experts combine ancient Indian scriptural wisdom with
                cutting-edge modern obstetrics and cognitive neuroscience.
              </p>

              {isHomePage && (
                <div className="pt-1 flex">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link
                      to="/team"
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm shadow-[#EA3484]/30"
                    >
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                </div>
              )}
            </motion.div>

            {/* 4 Stats Cards in 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 py-2">
              {statsData.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-[24px] bg-white/80 p-4 backdrop-blur-xl border border-pink-100/80 shadow-[0_8px_30px_rgba(23,37,84,0.03)] hover:shadow-[0_20px_45px_rgba(234,52,132,0.1)] hover:border-pink-200 transition-colors text-center"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-[#172554] group-hover:text-[#EA3484] tracking-tight mb-0.5 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-[10px] md:text-xs font-semibold text-[#475569] tracking-wide leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            {!isTeamPage && !isHomePage && (
              <div className="pt-2 flex justify-start">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="inline-block"
                >
                  <Link
                    to="/team"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-[#EA3484]/25 transition-all duration-300"
                  >
                    Meet the Team
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-1 duration-300">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky group photo with light image parallax */}
          <div className="md:col-span-5 md:h-full">
            <div
              ref={imageContainerRef}
              className="md:sticky md:top-24 w-full max-w-[420px] md:max-w-[480px] mx-auto md:mx-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-white/40 p-2.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(234,52,132,0.08)] border border-pink-100/80 group"
              >
                <div className="h-full w-full overflow-hidden rounded-[18px]">
                  <motion.img
                    style={shouldReduceMotion ? {} : { y: parallaxY }}
                    src="/images/team_premium.png"
                    alt="Astro Baby Experts Panel"
                    loading="lazy"
                    decoding="async"
                    className="h-[115%] w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
