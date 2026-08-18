import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  Sparkles,
  Heart,
  Baby,
  Smile,
  ShieldCheck,
  Compass,
  ArrowRight,
  Sun,
  Search,
  ChevronRight,
  BookOpen,
  Music,
  Activity,
  Flame,
  Moon,
  Calendar,
  Layers,
  GraduationCap,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";
import LazyImage from "@/components/common/LazyImage";

// ── 7 Core Developmental Course Pillars (Exact Names) ──
export const CORE_COURSES = [
  {
    id: "garbhadhan",
    title: "Garbhadhan Sanskar",
    subTitle: "Sacred Preparation for Conception",
    price: "₹11,000",
    img: "/images/garbh_dan_banner.png",
    tagline: "Sacred Preparation for Conception",
    desc: "Auspicious conception planning, couple spiritual alignment, Isht Mantra, and fertility tracking to welcome a healthy, virtuous soul.",
    to: "/features/garbh-dhan",
    icon: Heart,
    iconBg: "bg-pink-100/80 text-[#F45B8A]",
    badgeColor: "bg-pink-50 text-[#F45B8A] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    benefits: [
      "Muhurat-Based Coitus Dates",
      "Isht Mantra & Meditation",
      "Fertility Tracker & Support",
    ],
  },
  {
    id: "beej-sanskar",
    title: "Beej Sanskar",
    subTitle: "Preparing the Foundation for Conscious Conception",
    price: "Vitality Track",
    img: "/images/beej_sanskar_banner.jpg",
    tagline: "Preparing the Foundation for Conscious Conception",
    desc: "Ayurvedic detoxification, cellular purification, satvik dietary routines, and reproductive vitality protocols before conceiving.",
    to: "/features/beej-sanskar",
    icon: Sparkles,
    iconBg: "bg-amber-100/80 text-amber-600",
    badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    benefits: [
      "Ayurvedic cellular detox",
      "Nutritional vitality charts",
      "Stress reduction & yoga",
    ],
  },
  {
    id: "garbh-sanskar",
    title: "Garbh Sanskar",
    subTitle: "9-Month Journey of Prenatal Nurturing",
    price: "Starting ₹5,000",
    img: "/images/garbh_sanskar_banner.jpg",
    isPopular: true,
    tagline: "9-Month Journey of Prenatal Nurturing",
    desc: "9-month comprehensive prenatal mastery available in Diamond (₹25,000), Gold (₹11,000), and Silver (₹5,000) tiers.",
    to: "/features/garbh-sanskar",
    icon: Sun,
    iconBg: "bg-purple-100/80 text-purple-600",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    benefits: [
      "Diamond, Gold & Silver Tiers",
      "Month-wise Mantra Vrushti",
      "Garbh Samvad & Raga Music",
    ],
  },
  {
    id: "baal-sanskar",
    title: "Baal Sanskar",
    subTitle: "Sacred Milestones in Early Childhood",
    price: "₹6,000",
    img: "/images/baal_bhavish_banner.jpg",
    tagline: "Sacred Milestones in Early Childhood",
    desc: "Namkaran, Nishkraman, Karnavedha, and Annaprashan ceremonies combined with moral bedtime stories and cognitive brain puzzles.",
    to: "/features/baal-sanskar",
    icon: Baby,
    iconBg: "bg-pink-100/80 text-[#EA3484]",
    badgeColor: "bg-pink-50 text-[#EA3484] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    benefits: ["4 Sacred Childhood Sanskars", "Moral & Bedtime Stories", "Brain Puzzles & Shlokas"],
  },
  {
    id: "infant-care",
    title: "Infant Care",
    subTitle: "Gentle Care for Your Baby's Early Years",
    price: "₹5,000",
    img: "/images/nurturing_life_banner.png",
    tagline: "Gentle Care for Your Baby's Early Years",
    desc: "Personal parenting coach, customized post-partum diet, daily live yoga, lactation coaching, and astrological support.",
    to: "/features/infant-care",
    icon: ShieldCheck,
    iconBg: "bg-pink-100/80 text-[#F45B8A]",
    badgeColor: "bg-pink-50 text-[#F45B8A] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    benefits: [
      "Personal Parenting Coach",
      "Custom Diet & Lactation",
      "Daily Live Yoga & Milestones",
    ],
  },
  {
    id: "parenting",
    title: "Parenting",
    subTitle: "Mindful Guidance for Raising Your Child",
    price: "Expert Guidance",
    img: "/images/parenting_banner.jpg",
    tagline: "Mindful Guidance for Raising Your Child",
    desc: "Mindful parenting practices, emotional resilience techniques, child psychological growth, and pediatrician-backed nutrition.",
    to: "/features/parenting",
    icon: Smile,
    iconBg: "bg-rose-100/80 text-[#EA3484]",
    badgeColor: "bg-rose-50 text-[#EA3484] border-rose-200",
    gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
    benefits: [
      "Parenting Coach & Support",
      "Child Development Milestones",
      "Emotional Wellbeing & Diet",
    ],
  },
  {
    id: "bhavishya-fal",
    title: "Bhavishya Phal",
    subTitle: "Astrological Insights for Your Child's Journey",
    price: "Starting ₹3,100",
    img: "/images/about_premium.png",
    tagline: "Astrological Insights for Your Child's Journey",
    desc: "Comprehensive Janam Kundali generation + Falit report (₹3,500) and live 1-on-1 Astrologer Consultation (₹3,100).",
    to: "/features/bhavishya-fal",
    icon: Compass,
    iconBg: "bg-pink-100/80 text-[#EA3484]",
    badgeColor: "bg-pink-50 text-[#EA3484] border-pink-200",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    benefits: [
      "Kundli + Falit Report (₹3,500)",
      "Live Astrologer Consultation (₹3,100)",
      "Lifelong Planetary Guidance",
    ],
  },
];

type Feature = { title: string; img: string; tagline: string; body: string[] };

const features: Feature[] = [
  {
    title: "Garbhadhan",
    img: "/images/garbh_dan_banner.png",
    tagline: "Pre-conception guidance & divine preparation",
    body: [
      "Garbhadhan is a noble Vedic initiative to support couples preparing for parenthood. Your conscious planning lights up a new life with wisdom, health, and grace.",
      "A complete pre-conception purification and preparation process combining Vaidic rituals, astrological alignment, and Ayurvedic detox to pave the way for a healthy, virtuous child.",
    ],
  },
  {
    title: "Sankalp Poojan",
    img: "/images/features/sankalp_poojan.jpg",
    tagline: "Live Sankalp Poojan before starting Garbhadhan Sanskar",
    body: [
      "In Vaidic Indian tradition, every auspicious work starts with Sankalp poojan. At Astro Baby, Vaidic Sankalp poojan is conducted live under the guidance of our learned Vaidic Brahmins.",
      "Within 24 hours of enrolling, our representative coordinates the sacred samagri and schedules your personal one-on-one live Sankalp Poojan on an auspicious muhurat.",
    ],
  },
  {
    title: "Punsavan Sanskar",
    img: "/images/features/punsavan_sanskar.jpg",
    tagline: "An important sanskar performed during the third month of pregnancy",
    body: [
      "The first mention of Punsavan Sanskar is found in Atharva Veda. Performed during the 3rd month as the baby's central nervous system rapidly forms.",
      "Imparts mental resilience, superior intelligence, and noble sanskars to the developing fetus.",
    ],
  },
  {
    title: "Simantonnayana Sanskar",
    img: "/images/features/simantonnayana_sanskar.jpg",
    tagline: "Sacred sanskar performed during the seventh/eighth month of pregnancy",
    body: [
      "Simantonnayana Sanskar is the third of the 16 Vedic sanskars. Performed to protect the mother and child and ensure peaceful, safe delivery.",
      "Mentally prepares the mother for labor through uplifting mantras, blessings, and joyful family ceremonies.",
    ],
  },
  {
    title: "Garbhadhan Sanskar Sutra",
    img: "/images/features/garbhsanskar_sutra.jpg",
    tagline: "Sutras to impart mann, buddhi and sanskars in your child",
    body: [
      "Month-by-month developmental sutras tailored to the precise biological and spiritual stage of your fetus.",
      "Turns pregnancy into a joyous, mindful journey that welcomes a wise and physically healthy newborn.",
    ],
  },
  {
    title: "Vaidic Mantra Vrushti",
    img: "/images/features/vaidic_mantra_vrushti.jpg",
    tagline: "Miraculous vaidic chants for the promotion of special qualities in the child",
    body: [
      "Chanted by learned Vaidic scholars following the strict phonetics of Swar, Matra, Balam, and Saama.",
      "Proven to produce measurable calming alpha brainwaves in both mother and baby.",
    ],
  },
  {
    title: "Garbhadhan Sanskar Music",
    img: "/images/features/garbhsanskar_music.jpg",
    tagline: "Music based on specific ragas for the ideal development of a child",
    body: [
      "Ancient Indian classical ragas crafted to balance maternal emotions and stimulate auditory cortex development.",
      "Keeps the mother relaxed, positive, and deeply connected with her baby 24/7.",
    ],
  },
  {
    title: "Jeevan Sutra - The Life Training",
    img: "/images/features/jeevan_sutra.jpg",
    tagline: "Sutra to guide you through the ups and downs of life",
    body: [
      "Live interactive life coaching sessions helping expectant mothers overcome stress, anxiety, and mood fluctuations.",
      "Empowers mothers with emotional equilibrium and positive parenting psychology.",
    ],
  },
  {
    title: "Medi-Mitra Sessions",
    img: "/images/features/medi_mitra_sessions.jpg",
    tagline: "Your friend and guide for all medical & obstetric concerns",
    body: [
      "Guided by experienced obstetricians and AIIMS alumni with 20+ years of high-risk pregnancy expertise.",
      "Gives accurate, compassionate medical answers whenever queries arise.",
    ],
  },
  {
    title: "Isht Mantra",
    img: "/images/features/isht_mantra.jpg",
    tagline: "Personalized Isht Mantra calculated from parents' birth charts",
    body: [
      "Calculated based on astrological Raashi-Yugm of both parents for maximum spiritual resonance.",
      "Protects the womb and invokes divine blessings for the unborn baby.",
    ],
  },
  {
    title: "GarbhSamvad",
    img: "/images/features/garbhsamvad.jpg",
    tagline: "Laying the foundation of a lifetime bond between mother & baby",
    body: [
      "Daily structured conversation guides to communicate love, values, and knowledge to the baby in the womb.",
      "Rooted in both ancient Vedic traditions (Abhimanyu) and modern fetal neuroscience.",
    ],
  },
  {
    title: "Yognidra & Stress Relief",
    img: "/images/features/yognidra.jpg",
    tagline: "Your 20-minute passage to deep restorative inner peace",
    body: [
      "Guided prenatal yoga nidra sessions that lower cortisol, relieve physical fatigue, and induce restful sleep.",
    ],
  },
  {
    title: "Parv (Occasion) Based Sessions",
    img: "/images/features/parv_based_sessions.jpg",
    tagline: "Celebratory festive sanskars for sacred occasions",
    body: [
      "Special discourses and activities aligned with Diwali, Navratri, Ekadashi, and other sacred Indian festivals.",
    ],
  },
  {
    title: "Supraj Santaanotpatti Havan",
    img: "/images/features/santanotpatti_havan.jpg",
    tagline: "Monthly vaidic havan for the protection and vitality of your child",
    body: [
      "Live monthly fire rituals conducted by Astro Baby scholars for the physical and spiritual prosperity of your family.",
    ],
  },
  {
    title: "Yoga & Pranayama Sessions",
    img: "/images/features/yoga_session.jpg",
    tagline: "Safe trimester-specific prenatal yoga led by certified instructors",
    body: [
      "Improves pelvic flexibility, reduces back strain, and prepares your body naturally for smooth labor.",
    ],
  },
  {
    title: "Nutritionist & Diet Guidance",
    img: "/images/features/nutritionist_session.jpg",
    tagline: "Personalized Ayurvedic and modern pregnancy nutrition plans",
    body: [
      "Trimester-wise satvik diet recommendations ensuring peak nourishment for mother and growing baby.",
    ],
  },
];

const FEATURE_CATEGORIES = [
  "All Features",
  "7 Core Pillars",
  "Sanskars & Poojan",
  "Vaidic Mantras & Music",
  "Live Mentoring & Doctors",
  "Mindfulness & Yoga",
];

export default function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Features");
  const [searchQuery, setSearchQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const filteredFeatures = features.filter((f) => {
    const matchesSearch =
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.body.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedCategory === "All Features" || selectedCategory === "7 Core Pillars") return true;
    if (selectedCategory === "Sanskars & Poojan")
      return (
        f.title.includes("Garbhadhan") ||
        f.title.includes("Sanskar") ||
        f.title.includes("Poojan") ||
        f.title.includes("Havan")
      );
    if (selectedCategory === "Vaidic Mantras & Music")
      return f.title.includes("Mantra") || f.title.includes("Music") || f.title.includes("Samvad");
    if (selectedCategory === "Live Mentoring & Doctors")
      return (
        f.title.includes("Jeevan") ||
        f.title.includes("Doctor") ||
        f.title.includes("Medi-Mitra") ||
        f.title.includes("Mentoring")
      );
    if (selectedCategory === "Mindfulness & Yoga")
      return (
        f.title.includes("Yoga") || f.title.includes("Yognidra") || f.title.includes("Nutritionist")
      );

    return true;
  });

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Top Hero / Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#F45B8A] border border-pink-200/80 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>7 Core Pillars & Comprehensive Features</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] leading-[1.1] tracking-tight">
            Vedic Sanskar Courses &{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Interactive Features
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            A complete developmental continuum from pre-conception planning and prenatal
            neuro-development to early childhood and mindful parenting.
          </p>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-semibold">Courses & Features</span>
          </div>

          {/* Search bar */}
          <div className="pt-3 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search features (e.g. Garbhadhan, Mantras, Beej Sanskar, Yoga, Doctors)..."
                className="w-full px-5 py-4 pl-12 pr-10 rounded-full bg-white/95 backdrop-blur-xl text-[#172554] text-sm md:text-base placeholder:text-slate-400 shadow-[0_10px_30px_rgba(23,37,84,0.06)] border border-pink-200 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] transition-all font-normal"
              />
              <Search className="w-5 h-5 text-[#F45B8A] absolute left-4.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4.5 text-slate-400 hover:text-[#F45B8A] p-1 font-bold transition-colors text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 Core Developmental Courses Grid ── */}
      <section className="py-16 md:py-24 bg-white/90 border-b border-pink-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-xs">
              <Layers className="h-3.5 w-3.5" /> 7 Dedicated Course Tracks
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              Choose Your Stage of Parenthood
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal leading-relaxed mt-2">
              Tailored guidance for every sacred step — from conscious conception to flourishing
              childhood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CORE_COURSES.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className={`bg-gradient-to-br ${course.gradient} bg-white/95 rounded-[30px] p-7 border border-pink-100 shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
                >
                  <div>
                    {/* Thematic Image Banner */}
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 group-hover:shadow-md transition-all border border-white/80">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                      {/* Floating Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center backdrop-blur-md shadow-xs ${course.iconBg}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${course.badgeColor}`}
                        >
                          {course.price}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <span className="text-xs font-semibold text-pink-100 uppercase tracking-wide drop-shadow line-clamp-1">
                          {course.subTitle}
                        </span>
                      </div>
                    </div>

                    {/* Titles */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#F45B8A] uppercase tracking-wide mt-1">
                      {course.subTitle}
                    </p>

                    <p className="mt-3 text-sm text-[#475569] leading-relaxed font-normal">
                      {course.desc}
                    </p>

                    {/* Benefit bullets */}
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {course.benefits.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2 text-xs text-slate-600 font-normal"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F45B8A]" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={course.to}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#172554] group-hover:bg-gradient-to-r group-hover:from-[#F45B8A] group-hover:to-[#E91E63] text-white text-xs font-semibold transition-all shadow-xs group-hover:shadow-md cursor-pointer"
                    >
                      <span>View Program</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <span className="text-[11px] font-medium text-slate-400">Available in App</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs ── */}
      <section className="bg-white/90 backdrop-blur-md border-y border-pink-100 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {FEATURE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white shadow-md shadow-[#F45B8A]/30 scale-105"
                      : "bg-white text-[#172554] border border-pink-100 hover:bg-pink-50/70 shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comprehensive Features Catalog ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] min-h-[600px] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172554] leading-[1.2] tracking-tight">
              {selectedCategory === "All Features" ? "All Interactive Features" : selectedCategory}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto mt-3 mb-2"></div>
            <p className="text-xs md:text-sm text-slate-500 font-normal">
              Showing {filteredFeatures.length} specialized tools and rituals
            </p>
          </div>

          <div className="space-y-12">
            {filteredFeatures.map((f, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={f.title + i}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/95 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 md:p-10 border border-pink-100 shadow-[0_15px_45px_rgba(23,37,84,0.06)] grid lg:grid-cols-12 gap-8 items-center group hover:shadow-[0_20px_60px_rgba(244,91,138,0.12)] transition-shadow duration-300"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 overflow-hidden rounded-[24px] bg-slate-900 border-2 border-white shadow-md ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <LazyImage
                      src={f.img}
                      alt={f.title}
                      fallbackSrc="/images/garbh_dan_banner.png"
                      containerClassName="w-full h-[260px] sm:h-[300px]"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <span className="inline-block px-3.5 py-1 rounded-full bg-pink-50 text-[#F45B8A] border border-pink-200/80 text-xs font-semibold uppercase tracking-wider">
                      Interactive Feature 0{i + 1}
                    </span>

                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#172554] group-hover:text-[#F45B8A] transition-colors leading-snug">
                      {f.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#F45B8A]">{f.tagline}</p>

                    <div className="space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                      {f.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="pt-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#172554] hover:bg-[#1e3a8a] text-white text-xs font-semibold transition-all shadow-xs"
                      >
                        <span>Access in Astro Baby App</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
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
