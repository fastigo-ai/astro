import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Smile,
  Sparkles,
  UserCheck,
  Brain,
  Utensils,
  Heart,
  Award,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const PARENTING_META = [
  { icon: UserCheck, img: "/images/features/mentoring.jpg" },
  { icon: Brain, img: "/images/features/brainopedia.jpg" },
  { icon: Utensils, img: "/images/features/nutritionist_session.jpg" },
  { icon: Heart, img: "/images/features/meditation.jpg" },
  { icon: Award, img: "/images/features/doctors_session.jpg" },
];

export default function ParentingPage() {
  const { t } = useTranslation();

  const parentingSections = useMemo(() => {
    return PARENTING_META.map((meta, idx) => {
      const title = t(`parentingDetailPage.pillars.items.${idx}.title`, "");
      const tagline = t(`parentingDetailPage.pillars.items.${idx}.tagline`, "");
      const desc = t(`parentingDetailPage.pillars.items.${idx}.desc`, "");
      const points: string[] = [];
      for (let p = 0; p < 3; p++) {
        const pt = t(`parentingDetailPage.pillars.items.${idx}.points.${p}`, "");
        if (pt) points.push(pt);
      }

      return {
        ...meta,
        title,
        tagline,
        desc,
        points,
      };
    });
  }, [t]);

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-sans selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── 1. Hero Banner Section ── */}
      <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFF8FD] to-[#FFFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              {t("parentingDetailPage.hero.breadcrumbHome", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/features" className="hover:text-[#F45B8A] transition-colors">
              {t("parentingDetailPage.hero.breadcrumbPrograms", "Sacred Programs")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">
              {t("parentingDetailPage.hero.title", "Parenting")}
            </span>
          </nav>

          {/* Hero Banner Card Container */}
          <motion.div
            className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] flex items-center shadow-xl border border-pink-100"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Background Banner Image */}
            <img
              src="/images/parenting_banner.png"
              alt="Astro Baby Parenting"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Gradient Overlays for High Text Legibility & Left Artwork Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent sm:bg-gradient-to-l sm:from-slate-950/95 sm:via-slate-950/80 sm:to-transparent" />
            <div className="absolute inset-0 bg-slate-950/20 sm:bg-transparent" />

            {/* Content Container (Aligned to Right Side) */}
            <div className="relative z-10 w-full flex justify-end p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-semibold shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Smile className="h-3.5 w-3.5 text-pink-300" />
                  <span>
                    {t(
                      "parentingDetailPage.hero.badge",
                      "Mindful Guidance & Childhood Development"
                    )}
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-1.5"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                    {t("parentingDetailPage.hero.title", "Parenting")}
                  </h1>
                  <span className="text-pink-300 font-semibold text-lg sm:text-2xl md:text-3xl block">
                    {t(
                      "parentingDetailPage.hero.tagline",
                      "Empowering Parents with Compassion & Wisdom"
                    )}
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal drop-shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t(
                    "parentingDetailPage.hero.subtitle",
                    "Empowering parents with compassionate psychological tools, child nutrition plans, emotional wellbeing, and expert pediatric mentorship."
                  )}
                </motion.p>

                {/* Action Buttons & Highlights */}
                <motion.div
                  className="flex flex-wrap items-center gap-3.5 pt-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-bold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>
                      {t(
                        "parentingDetailPage.hero.enrollBtn",
                        "Explore Parenting Track"
                      )}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-white/85 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    {t("parentingDetailPage.hero.price", "Holistic Support")}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Deep Dive Features List ── */}
      <section className="py-16 md:py-24 bg-white/95 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#EA3484]" />{" "}
              {t("parentingDetailPage.pillars.badge", "5 Core Pillars")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A3A6C] leading-[1.2] tracking-tight mb-4">
              {t(
                "parentingDetailPage.pillars.title",
                "Holistic Guidance for Mindful Parents"
              )}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              {t(
                "parentingDetailPage.pillars.subtitle",
                "Explore our comprehensive pillars designed to bring balance and confidence to your family."
              )}
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {parentingSections.map((sec, idx) => {
              const reverse = idx % 2 === 1;
              const Icon = sec.icon;
              return (
                <motion.article
                  key={sec.title + idx}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-rose-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-xl">
                      <img
                        src={sec.img}
                        alt={sec.title}
                        className="w-full h-[300px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-pink-100 text-[#EA3484] font-semibold text-xs px-4 py-2 rounded-full mb-4 w-max border border-pink-200">
                      <Icon className="w-4 h-4 text-[#EA3484]" />
                      Pillar 0{idx + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E293B] mb-2 tracking-tight leading-tight">
                      {sec.title}
                    </h3>
                    <h4 className="text-lg text-[#EA3484] font-semibold mb-4">"{sec.tagline}"</h4>
                    <p className="text-slate-600 leading-relaxed text-base mb-6 font-normal">
                      {sec.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {sec.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center gap-2 text-sm text-slate-700 font-normal"
                        >
                          <Check className="w-4 h-4 text-[#EA3484] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] text-white font-semibold text-sm shadow-[0_4px_18px_rgba(244,91,138,0.28)] hover:shadow-[0_8px_24px_rgba(244,91,138,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                      >
                        <span>
                          {t(
                            "parentingDetailPage.hero.enrollBtn",
                            "Explore Parenting Track"
                          )}
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <AppDownloadSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
