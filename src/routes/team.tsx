import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronRight,
  Search,
  Users,
  ArrowRight,
  ChevronLeft,
  X,
  Award,
  BookOpen,
  GraduationCap,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

type Member = {
  img: string;
  name: string;
  title: string;
  category: string;
  experience?: string;
  degrees?: string;
  bio: string[];
};

const members: Member[] = [
  {
    img: "award_1661513636.jpg",
    name: "Prof. Vipin Joshi",
    category: "IITians & Scientists",
    title: "Educationist & Entrepreneur — Founder Director, AstroBaby.com",
    experience: "Founder Director",
    bio: [
      "A man of many talents, Prof. Vipin Joshi is a teacher, an entrepreneur and a visionary. He established CatalyseR Eduventures (i) Pvt. Ltd to train students for competitive entrance examinations and has produced 5 IIT JEE Zone toppers in 4 consecutive years, a national record. He has also produced 750+ NTSE scholars.",
      "He received numerous awards from dignitaries for his contribution in the field of education, including Shri Satyapal Singh, Shri S. P. Singh Baghel, Shri Shivraj Singh Chouhan and Shri Deepak Joshi.",
      "Along with an expert team of gynaecologists, scientists and IITians, he researched and made it a mission to revive the Ancient Indian Garbhadhan Sanskar Process — today known as 'Astro Baby Garbhadhan Sanskar'.",
    ],
  },
  {
    img: "award_1680693648.jpg",
    name: "P.P. Shri Praveen Nathji Maharaj",
    category: "Vedic Scholars",
    title: "Garbhadhan Sanskar Expert, M.A. (Sanskrit), Yog Visharad, Jyotish Martand",
    experience: "22+ Years",
    bio: [
      "Initiated in the Nath Parampara of Sanatan Dharma, Acharya Praveen Nathji Maharaj taught students of science for many years.",
      "Under his Guru's guidance, his intellectual interest in spiritualism led him to the Himalayas. He studied Bhagwad Gita, Ramayana, Dasbodh and earned degrees in Yog Visharad, Jyotish Vidhya and Prakratik Chikitsa.",
      "For the past 22 years, Acharya-Shri has tirelessly worked to revive the ancient Indian Garbhadhan Sanskar process. Under his guidance, thousands of families have given birth to calm, intelligent and sanskarvaan progenies.",
    ],
  },
  {
    img: "award_1680694660.jpg",
    name: "Vedratna Dr. Shivkaran Thottam Namboothiri",
    category: "Vedic Scholars",
    title: "B.A.M.S., P.G.D.Y., Ayurved Ratna, Vaidik Mantrochchar Expert (Samveda)",
    experience: "Living Encyclopedia",
    bio: [
      "Born in the glorious lineage of Adhya Shankaracharya himself, Acharya Shivakaran Thottam Namboothiri has devoted his entire life to the service of the Vedas.",
      "He belongs to one of the two rarest Namboothiri families of Kerala who have conserved the Shastriya tradition of chanting Samaveda.",
      "A living encyclopaedia of Ayurveda, he has amazed Germany, America and many other nations with the miraculous effects of Vaidic Hymns. He leads the Samvaidic chants in Astro Baby.",
    ],
  },
  {
    img: "award_1680694582.png",
    name: "Shri Kothmangalam Vasudevan Namboothiri",
    category: "Vedic Scholars",
    title: "M.STAT., Vaidik Mantrochchar Expert (Rigveda)",
    experience: "Rigveda Authority",
    bio: [
      "One of the most honored and seniormost authorities on Rigveda in India.",
      "From an early age he excelled in academics, achieved gold medals at university level and served as a Rank 1 officer in the Statistical Services of India for many years, before voluntarily retiring to dedicate his life to the Vedas.",
      "He leads the Rigvaidic chants in Astro Baby.",
    ],
  },
  {
    img: "award_1661517820.png",
    name: "Dr. Newalkar",
    category: "Medical & Gynecologists",
    title: "MBBS, MD (Ob-Gyn) — High-Risk Pregnancy Specialist",
    experience: "20+ Years",
    bio: [
      "Known as one of the best gynaecologists in India for high-risk pregnancy cases.",
      "Completed MBBS in 1995 and M.D. (OBS & GYN) in 2001 and has successfully handled more than 1 lakh pregnancy cases in the past 20 years.",
      "She has been spreading the science of being positive and stress-free during pregnancy through Garbhadhan Sanskar for the past 17 years.",
    ],
  },
  {
    img: "award_1661517894.png",
    name: "Prof. Ramesh Nagda",
    category: "IITians & Scientists",
    title: "B.Tech. IIT Mumbai — Astrological Algorithm Expert",
    experience: "IIT Mumbai 1980",
    bio: [
      "An alumnus of the very first batch of IIT Mumbai in 1980, a successful entrepreneur, IIT trainer and counselor, and a member of various revered academic committees.",
      "His technological expertise powers the Isht Mantra feature — astrological calculations of the rashis of pregnant women and their husbands — and the software algorithms behind the Astro Baby application.",
    ],
  },
  {
    img: "award_1680694412.png",
    name: "Prof. Pankaj Pimple",
    category: "IITians & Scientists",
    title: "M.Sc (Gold Medalist), M.Phil, Ph.D. — Curriculum Research",
    experience: "20+ Years Research",
    bio: [
      "For the past 20 years, Prof. Pankaj Pimple has been an inspiration for many research scholars across India.",
      "A man of science and a spiritual soul, his research helped shape the most credible and scientific Garbhadhan Sanskar curriculum in the world.",
    ],
  },
  {
    img: "team_1656592994.png",
    name: "Shri Vivek Ghalsasi",
    category: "Life Coaches & Astrologers",
    title: "International Life Coach & Parental Guidance Expert",
    experience: "45+ Years",
    bio: [
      "M.A. in History/Philosophy and M.A. in Journalism. An expert on family and sanskar related issues with vast experience in Parental Guidance.",
      "He has coached thousands of people on Life Management and Successful Parenthood and has been honoured with various awards by many national organisations.",
    ],
  },
  {
    img: "award_1680694216.png",
    name: "Shri Vijay Shankar Mehta",
    category: "Life Coaches & Astrologers",
    title: "Revered Life Management Coach, Ex Editor Dainik Bhaskar",
    experience: "28+ Years",
    bio: [
      "Bureau adviser and editor-in-charge of the Dharma-peeth desk of Dainik Bhaskar.",
      "As a spiritual life trainer, he has delivered 3500+ lectures all across the country on Shri Ram Katha, Shrimad Bhagwat Katha and Hanuman Chalisa.",
    ],
  },
  {
    img: "award_1680694125.png",
    name: "Shri Siddhant Gadgil",
    category: "Vedic Scholars",
    title: "Ved Murti (Yajurved), Pramukh Acharya - Ved Pathshala, Pune",
    experience: "Ved Pandit Puraskar",
    bio: [
      "Rigved Shodash Granth, Ghanant Adhyayan Karmkand and Rigved Gyan Pariksha certified.",
      "Awarded 'Rigved Acharya Puraskar', 'Ved Pandit Puraskar' and 'Ganpati Puraskar' among many other honours.",
    ],
  },
  {
    img: "award_1680694044.png",
    name: "Ms. Priyamvada Garg",
    category: "Mindfulness & Yoga",
    title: "Certified Pregnancy Meditation & Prenatal Yoga Specialist",
    experience: "13+ Years",
    bio: [
      "A certified pre-natal and post-natal yoga expert with an experience of over 13 years.",
      "Pregnancy meditation specialist and qualified Hatha Yoga practitioner.",
    ],
  },
  {
    img: "award_1680693960.png",
    name: "Mrs. Vinita Jaiswal",
    category: "Mindfulness & Yoga",
    title: "Senior Dietitian, Food Therapist & Nutritionist",
    experience: "18+ Years",
    bio: [
      "Senior dietitian with an M.Sc. in Food & Nutrition.",
      "Pregnancy diet and nutrition expert with over 18 years of experience; has counselled more than 10,000 individuals.",
    ],
  },
  {
    img: "award_1680693883.png",
    name: "Mrs. Vishakha Rajurkar",
    category: "Mindfulness & Yoga",
    title: "Senior Meditation Expert & Pregnancy Counsellor",
    experience: "16+ Years",
    bio: [
      "Senior meditation expert with more than 16 years of experience.",
      "Certified pregnancy counsellor, M.A. in Sociology and an Art of Living trainer.",
    ],
  },
  {
    img: "award_1680693406.png",
    name: "Shri Vidhyadhar Narayan Karandikar",
    category: "Life Coaches & Astrologers",
    title: "Senior Jyotirvid — Khagol, Panchang Ganit, Mantra & Vastu",
    experience: "Prolific Author",
    bio: [
      "Expertise in Jyotish Shastra, Khagol Shastra, Panchang Ganit, Mantra Shastra and Vaastu Shastra.",
      "A prolific writer, he has authored 'Shri Shakti Upasana', 'Buddhi Vardhak Stotra' and 'Panchang Dinvishesh'. Founder of Shri AngiraVed Pathshala in Maharashtra.",
    ],
  },
  {
    img: "award_1680693750.png",
    name: "Shri Vinod Rawal",
    category: "Life Coaches & Astrologers",
    title: "Jyotish Shiromani, Ex Consultant Dainik Bhaskar",
    experience: "25+ Years",
    bio: [
      "Awarded Jyotish Ratna, Jyotish Shiromani, Jyotish Shri and Jyotish Vachaspati.",
      "Ex Vice President of Bhartiya Jyotish Anushandhan Parishad, Bhopal. Consultant for the Bhavishyafal column of Dainik Bhaskar for more than 25 years.",
    ],
  },
  {
    img: "award_1680693372.png",
    name: "Shri Gunesh Daate",
    category: "Life Coaches & Astrologers",
    title: "Chief Editor of 'Daate Panchang' Almanack",
    experience: "30+ Years",
    bio: [
      "Expert in Janm Kundali and Panchang Ganit with 30+ years experience in 'Falit Jyotish'.",
      "His family is the founder of the famous 'Daate Panchang' almanack.",
    ],
  },
];

const CATEGORIES = [
  "All Faculty",
  "IITians & Scientists",
  "Vedic Scholars",
  "Medical & Gynecologists",
  "Mindfulness & Yoga",
  "Life Coaches & Astrologers",
];

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Faculty");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const cylinderContainerRef = useRef<HTMLDivElement>(null);

  // Filter members
  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.bio.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (selectedCategory === "All Faculty") return true;
      return m.category === selectedCategory;
    });
  }, [selectedCategory, searchQuery]);

  // Reset active index when category or search changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory, searchQuery]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMember) return;
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredMembers.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev < filteredMembers.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredMembers.length, selectedMember]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < filteredMembers.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredMembers.length - 1));
  };

  const currentMember = filteredMembers[activeIndex] || filteredMembers[0];

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Compact Header Banner ── */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-10 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#FFFCFE]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-white/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-md shadow-xs">
            <Users className="h-3.5 w-3.5" />
            <span>Multidisciplinary Faculty</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172554] tracking-tight leading-[1.3] md:leading-[1.2] py-1">
            Meet Our Revered{" "}
            <span className="inline-block py-1 bg-gradient-to-r from-[#172554] via-[#EA3484] to-[#F45B8A] bg-clip-text text-transparent">
              Faculty & Experts
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed">
            A prestigious council of doctors, IITians, Vedmurti scholars, and psychologists guiding
            your prenatal journey.
          </p>

          {/* Search bar & Mode Switch */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search scholars by name or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white/95 backdrop-blur-md rounded-full border border-pink-200 text-[#172554] placeholder:text-slate-400 text-xs sm:text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#EA3484]"
              />
              <Search className="w-4 h-4 text-[#EA3484] absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-2.5 text-slate-400 hover:text-[#EA3484] font-bold text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Pills ── */}
      <section className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white shadow-xs scale-105"
                      : "bg-white text-[#172554] border border-pink-100 hover:bg-pink-50/70"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main Showcase Area ── */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#FFF6FA] relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredMembers.length === 0 ? (
            /* No Results state */
            <div className="text-center py-16 bg-white rounded-3xl border border-pink-200 shadow-sm max-w-md mx-auto p-6">
              <p className="text-slate-600 text-sm font-normal">
                No faculty members found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Faculty");
                }}
                className="mt-4 px-5 py-2 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-semibold rounded-full hover:shadow-md transition cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            /* ── 3D CYLINDRICAL SCROLL SHOWCASE ── */
            <div className="flex flex-col items-center">
              {/* Cylindrical Stage */}
              <div
                ref={cylinderContainerRef}
                className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center [perspective:1400px] select-none"
                tabIndex={0}
                aria-label="3D Cylindrical Faculty Carousel"
              >
                {/* Center Backdrop Glow */}
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-pink-300/30 via-rose-300/20 to-amber-200/20 blur-3xl pointer-events-none" />

                {/* 3D Cylindrical Ring Items */}
                {filteredMembers.map((member, index) => {
                  const total = filteredMembers.length;
                  let diff = index - activeIndex;
                  // Handle wrap-around for smooth cylinder
                  if (diff > total / 2) diff -= total;
                  if (diff < -total / 2) diff += total;

                  // Show visible window (-3 to +3 items)
                  const isVisible = Math.abs(diff) <= 3;
                  if (!isVisible) return null;

                  const isCenter = diff === 0;
                  const angle = diff * 28; // Degree spacing
                  const translateX =
                    diff * (typeof window !== "undefined" && window.innerWidth < 640 ? 110 : 210);
                  const translateZ =
                    -Math.abs(diff) *
                    (typeof window !== "undefined" && window.innerWidth < 640 ? 120 : 160);
                  const rotateY = diff * -18;
                  const scale = Math.max(0.72, 1 - Math.abs(diff) * 0.12);
                  const opacity = Math.max(0.2, 1 - Math.abs(diff) * 0.28);
                  const zIndex = 30 - Math.abs(diff);

                  return (
                    <motion.div
                      key={member.name}
                      onClick={() => {
                        if (isCenter) {
                          setSelectedMember(member);
                        } else {
                          setActiveIndex(index);
                        }
                      }}
                      animate={{
                        x: translateX,
                        z: translateZ,
                        rotateY: rotateY,
                        scale: scale,
                        opacity: opacity,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 26,
                        mass: 0.8,
                      }}
                      style={{
                        zIndex: zIndex,
                        transformStyle: "preserve-3d",
                      }}
                      className={`absolute w-[260px] sm:w-[310px] md:w-[340px] cursor-pointer rounded-[28px] p-5 sm:p-6 transition-shadow duration-300 backdrop-blur-xl border ${
                        isCenter
                          ? "bg-white/95 border-pink-300 shadow-[0_20px_50px_rgba(234,52,132,0.22)] ring-2 ring-[#EA3484]/40"
                          : "bg-white/80 border-pink-100 shadow-[0_10px_30px_rgba(23,37,84,0.06)] hover:bg-white"
                      }`}
                    >
                      {/* Photo Thumbnail */}
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-100 group">
                        <img
                          src={
                            index % 2 === 0
                              ? "/images/team_expert_1.png"
                              : "/images/team_expert_2.png"
                          }
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/70 via-transparent to-transparent opacity-80" />

                        {/* Top Category Badge */}
                        <span className="absolute top-2.5 left-2.5 bg-[#172554]/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                          {member.category}
                        </span>

                        {/* Bottom Experience Tag */}
                        {member.experience && (
                          <span className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-md text-[#EA3484] text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
                            {member.experience}
                          </span>
                        )}
                      </div>

                      {/* Info Content */}
                      <div className="space-y-1.5 text-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#172554] truncate leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#EA3484] line-clamp-1">
                          {member.title}
                        </p>
                        <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal pt-1">
                          {member.bio[0]}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4 pt-3 border-t border-pink-100/80 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#172554]">
                          {isCenter ? "Click for Full Profile" : "Click to Focus"}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-pink-50 text-[#EA3484] flex items-center justify-center text-xs font-bold group-hover:bg-[#EA3484] group-hover:text-white transition-colors">
                          →
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Cylindrical Controls & Indicator Bar */}
              <div className="mt-6 flex flex-col items-center gap-4 z-20">
                <div className="flex items-center gap-4">
                  {/* Prev Button */}
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full bg-white border border-pink-200 text-[#172554] shadow-sm flex items-center justify-center hover:bg-gradient-to-r hover:from-[#EA3484] hover:to-[#F45B8A] hover:text-white transition-all cursor-pointer font-bold"
                    aria-label="Previous scholar"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Progress Pill */}
                  <div className="flex items-center gap-2 bg-white/90 border border-pink-200 px-4 py-2 rounded-full shadow-xs text-xs font-semibold text-[#172554]">
                    <span className="text-[#EA3484] font-bold">{activeIndex + 1}</span>
                    <span className="text-slate-400">/</span>
                    <span>{filteredMembers.length} Scholars</span>
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full bg-white border border-pink-200 text-[#172554] shadow-sm flex items-center justify-center hover:bg-gradient-to-r hover:from-[#EA3484] hover:to-[#F45B8A] hover:text-white transition-all cursor-pointer font-bold"
                    aria-label="Next scholar"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 font-medium">
                  ← Swipe or use arrow keys to rotate →
                </p>
              </div>

              {/* Active Member Focus Showcase Card below Cylinder */}
              {currentMember && (
                <div className="mt-8 max-w-2xl w-full bg-white rounded-3xl p-6 border border-pink-200/80 shadow-[0_15px_40px_rgba(23,37,84,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#EA3484] uppercase tracking-wider bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                      <GraduationCap className="w-3 h-3" />
                      {currentMember.degrees || currentMember.experience || currentMember.category}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#172554]">
                      {currentMember.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 font-normal">
                      {currentMember.title}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedMember(currentMember)}
                    className="shrink-0 px-6 py-2.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-semibold rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Read Complete Biography</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── COMPACT PROFILE DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border border-pink-100 p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-pink-100 text-slate-500 hover:text-[#EA3484] flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-slate-100">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#EA3484] shadow-md">
                  <img
                    src="/images/team_expert_1.png"
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1.5 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 bg-pink-50 text-[#EA3484] font-semibold text-xs px-3 py-0.5 rounded-full border border-pink-200/80">
                    <Sparkles className="w-3 h-3" />
                    <span>{selectedMember.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172554] tracking-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#EA3484]">
                    {selectedMember.title}
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="py-5 space-y-3.5 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                {selectedMember.bio.map((para, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA3484] shrink-0 mt-1" />
                    <p>{para}</p>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition cursor-pointer"
                >
                  Close Profile
                </button>
                <Link
                  to="/about-us"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-semibold shadow-sm hover:shadow-md transition flex items-center gap-1.5"
                >
                  <span>Explore Astro Baby Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Compact Origin Story Bridge Section ── */}
      <section className="py-10 bg-white border-t border-pink-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-[#172554]">
            Want to learn how Astro Baby was created?
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] max-w-lg mx-auto font-normal leading-relaxed">
            Read our origin story, core mission pillars, research milestones, and our vision for
            conscious motherhood.
          </p>
          <div className="pt-1">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white px-6 py-2.5 text-xs sm:text-sm font-semibold shadow-sm shadow-[#EA3484]/30 hover:scale-105 transition-all"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── App Download CTA ── */}
      <AppDownloadSection
        title={
          <>
            Experience the Guidance of Our Faculty on{" "}
            <span className="text-black font-semibold">Astro Baby</span>
          </>
        }
        subtitle="Download the Astro Baby Garbhadhan Sanskar app today and begin your positive pregnancy journey."
      />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
