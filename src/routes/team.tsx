import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import { Sparkles, Heart, ChevronRight, Search, Star, Users, BookOpen, Activity, ArrowRight } from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

type Member = {
  img: string;
  name: string;
  title: string;
  bio: string[];
};

const members: Member[] = [
  {
    img: "award_1661513636.jpg",
    name: "Prof. Vipin Joshi",
    title: "Educationist & Entrepreneur — Founder Director, AstroBaby.com",
    bio: [
      "A man of many talents, Prof. Vipin Joshi is a teacher, an entrepreneur and a visionary. He established CatalyseR Eduventures (i) Pvt. Ltd to train students for competitive entrance examinations and has produced 5 IIT JEE Zone toppers in 4 consecutive years, a national record. He has also produced 750+ NTSE scholars.",
      "He received numerous awards from dignitaries for his contribution in the field of education, including Shri Satyapal Singh, Shri S. P. Singh Baghel, Shri Shivraj Singh Chouhan and Shri Deepak Joshi.",
      "Along with an expert team of gynaecologists, scientists and IITians, he researched and made it a mission to revive the Ancient Indian Garbhadhan Sanskar Process — today known as 'Astro Baby Garbhadhan Sanskar'.",
    ],
  },
  {
    img: "award_1680693648.jpg",
    name: "P.P. Shri Praveen Nathji Maharaj",
    title:
      "Garbhadhan Sanskar Expert, M.A. (Sanskrit), Yog Visharad, Jyotish Martand, Prakrutik Chikitsak",
    bio: [
      "Initiated in the Nath Parampara of Sanatan Dharma, Acharya Praveen Nathji Maharaj taught students of science for many years.",
      "Under his Guru's guidance, his intellectual interest in spiritualism led him to the Himalayas. He studied Bhagwad Gita, Ramayana, Dasbodh and earned degrees in Yog Visharad, Jyotish Vidhya and Prakratik Chikitsa.",
      "For the past 22 years, Acharya-Shri has tirelessly worked to revive the ancient Indian Garbhadhan Sanskar process. Under his guidance, thousands of families have given birth to calm, intelligent and sanskarvaan progenies.",
    ],
  },
  {
    img: "award_1680694660.jpg",
    name: "Vedratna Dr. Shivkaran Thottam Namboothiri",
    title: "B.A.M.S., P.G.D.Y., Ayurved Ratna, Vaidik Mantrochchar Expert (Samveda)",
    bio: [
      "Born in the glorious lineage of Adhya Shankaracharya himself, Acharya Shivakaran Thottam Namboothiri has devoted his entire life to the service of the Vedas.",
      "He belongs to one of the two rarest Namboothiri families of Kerala who have conserved the Shastriya tradition of chanting Samaveda.",
      "A living encyclopaedia of Ayurveda, he has amazed Germany, America and many other nations with the miraculous effects of Vaidic Hymns. He leads the Samvaidic chants in Astro Baby.",
    ],
  },
  {
    img: "award_1680694582.png",
    name: "Shri Kothmangalam Vasudevan Namboothiri",
    title: "M.STAT., Vaidik Mantrochchar Expert (Rigveda)",
    bio: [
      "One of the most honored and seniormost authorities on Rigveda in India.",
      "From an early age he excelled in academics, achieved gold medals at university level and served as a Rank 1 officer in the Statistical Services of India for many years, before voluntarily retiring to dedicate his life to the Vedas.",
      "He leads the Rigvaidic chants in Astro Baby.",
    ],
  },
  {
    img: "award_1661517820.png",
    name: "Dr. Newalkar",
    title: "MBBS, MD (Ob-Gyn) — Exp: 20+ years",
    bio: [
      "Known as one of the best gynaecologists in India for high-risk pregnancy cases.",
      "Completed MBBS in 1995 and M.D. (OBS & GYN) in 2001 and has successfully handled more than 1 lakh pregnancy cases in the past 20 years.",
      "She has been spreading the science of being positive and stress-free during pregnancy through Garbhadhan Sanskar for the past 17 years.",
    ],
  },
  {
    img: "award_1661517894.png",
    name: "Prof. Ramesh Nagda",
    title: "B.Tech. IIT Mumbai",
    bio: [
      "An alumnus of the very first batch of IIT Mumbai in 1980, a successful entrepreneur, IIT trainer and counselor, and a member of various revered academic committees.",
      "His technological expertise powers the Isht Mantra feature — astrological calculations of the rashis of pregnant women and their husbands — and the software algorithms behind the Astro Baby application.",
    ],
  },
  {
    img: "award_1680694412.png",
    name: "Prof. Pankaj Pimple",
    title: "M.Sc (Gold Medalist), M.Phil, Ph.D.",
    bio: [
      "For the past 20 years, Prof. Pankaj Pimple has been an inspiration for many research scholars across India.",
      "A man of science and a spiritual soul, his research helped shape the most credible and scientific Garbhadhan Sanskar curriculum in the world.",
    ],
  },
  {
    img: "team_1656592994.png",
    name: "Shri Vivek Ghalsasi",
    title: "International Life Coach — Exp: 45+ Years",
    bio: [
      "M.A. in History/Philosophy and M.A. in Journalism. An expert on family and sanskar related issues with vast experience in Parental Guidance.",
      "He has coached thousands of people on Life Management and Successful Parenthood and has been honoured with various awards by many national organisations.",
    ],
  },
  {
    img: "award_1680694216.png",
    name: "Shri Vijay Shankar Mehta",
    title: "Revered Life Management Coach, Ex Editor Dainik Bhaskar — 28+ Years",
    bio: [
      "Bureau adviser and editor-in-charge of the Dharma-peeth desk of Dainik Bhaskar.",
      "As a spiritual life trainer, he has delivered 3500+ lectures all across the country on Shri Ram Katha, Shrimad Bhagwat Katha and Hanuman Chalisa.",
    ],
  },
  {
    img: "award_1680694125.png",
    name: "Shri Siddhant Gadgil",
    title: "Ved Murti (Yajurved), Pramukh Acharya - Ved Pathshala, Pune",
    bio: [
      "Rigved Shodash Granth, Ghanant Adhyayan Karmkand and Rigved Gyan Pariksha certified.",
      "Awarded 'Rigved Acharya Puraskar', 'Ved Pandit Puraskar' and 'Ganpati Puraskar' among many other honours.",
    ],
  },
  {
    img: "award_1680694044.png",
    name: "Ms. Priyamvada Garg",
    title: "Certified Pregnancy Meditation and Yoga Specialist — 13+ Years",
    bio: [
      "A certified pre-natal and post-natal yoga expert with an experience of over 13 years.",
      "Pregnancy meditation specialist and qualified Hatha Yoga practitioner.",
    ],
  },
  {
    img: "award_1680693960.png",
    name: "Mrs. Vinita Jaiswal",
    title: "Senior Dietitian, Food Therapist and Nutritionist — 18+ Years",
    bio: [
      "Senior dietitian with an M.Sc. in Food & Nutrition.",
      "Pregnancy diet and nutrition expert with over 18 years of experience; has counselled more than 10,000 individuals.",
    ],
  },
  {
    img: "award_1680693883.png",
    name: "Mrs. Vishakha Rajurkar",
    title: "Senior Meditation Expert — 16+ Years",
    bio: [
      "Senior meditation expert with more than 16 years of experience.",
      "Certified pregnancy counsellor, M.A. in Sociology and an Art of Living trainer.",
    ],
  },
  {
    img: "award_1680693406.png",
    name: "Shri Vidhyadhar Narayan Karandikar",
    title: "Senior Jyotirvid — Khagol, Panchang Ganit, Mantra & Vastu Shastra",
    bio: [
      "Expertise in Jyotish Shastra, Khagol Shastra, Panchang Ganit, Mantra Shastra and Vaastu Shastra.",
      "A prolific writer, he has authored 'Shri Shakti Upasana', 'Buddhi Vardhak Stotra' and 'Panchang Dinvishesh'. Founder of Shri AngiraVed Pathshala in Maharashtra.",
    ],
  },
  {
    img: "award_1680693750.png",
    name: "Shri Vinod Rawal",
    title: "Jyotish Shiromani, Ex Consultant Dainik Bhaskar — 25+ Years",
    bio: [
      "Awarded Jyotish Ratna, Jyotish Shiromani, Jyotish Shri and Jyotish Vachaspati.",
      "Ex Vice President of Bhartiya Jyotish Anushandhan Parishad, Bhopal. Consultant for the Bhavishyafal column of Dainik Bhaskar for more than 25 years.",
    ],
  },
  {
    img: "award_1680693372.png",
    name: "Shri Gunesh Daate",
    title: "Chief Editor of 'Daate Panchang' — 30+ years",
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
  const teamGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!teamGridRef.current) return;
    const timer = setTimeout(() => {
      if (!teamGridRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const items = teamGridRef.current?.querySelectorAll("[data-team-card]");
        items?.forEach((el, index) => {
          const fromLeft = index % 2 === 0;
          gsap.fromTo(
            el,
            {
              opacity: 0,
              x: fromLeft ? -60 : 60,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true,
              },
              onComplete: () => {
                gsap.set(el, { clearProps: "opacity,transform" });
              },
            },
          );
        });
      }, teamGridRef);
      ScrollTrigger.refresh();
      return () => ctx.revert();
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bio.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedCategory === "All Faculty") return true;
    if (selectedCategory === "IITians & Scientists")
      return m.name.includes("Vipin Joshi") || m.title.includes("IIT") || m.title.includes("Ph.D.");
    if (selectedCategory === "Vedic Scholars")
      return (
        m.name.includes("Namboothiri") ||
        m.name.includes("Maharaj") ||
        m.name.includes("Ved") ||
        m.title.includes("Vaidik")
      );
    if (selectedCategory === "Medical & Gynecologists") return m.title.includes("MBBS");
    if (selectedCategory === "Mindfulness & Yoga")
      return (
        m.title.includes("Yoga") || m.title.includes("Meditation") || m.title.includes("Dietitian")
      );
    if (selectedCategory === "Life Coaches & Astrologers")
      return (
        m.title.includes("Coach") ||
        m.title.includes("Jyotish") ||
        m.title.includes("Panchang") ||
        m.title.includes("Dainik Bhaskar")
      );

    return true;
  });

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      <HeaderNavbar />

      {/* ── Page Hero Banner: Team ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-md shadow-sm mb-4">
            <Users className="h-3.5 w-3.5" />
            <span>Multidisciplinary Advisory Council</span>
          </div>

          <h1 className="font-['DM_Serif_Display',Georgia,serif] text-4xl sm:text-5xl md:text-6xl font-normal text-[#172554] tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Meet Our Revered{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Faculty & Experts
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto font-['Manrope',sans-serif] leading-relaxed">
            A prestigious confluence of doctors, IITians, Vedmurti scholars, and psychologists who guide every step of your prenatal journey.
          </p>

          {/* Breadcrumbs */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link to="/about-us" className="hover:text-[#F45B8A] transition-colors">
              About Us
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">Team</span>
          </div>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search faculty by name, specialty or discipline..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 bg-white/95 backdrop-blur-md rounded-full border border-pink-200 text-[#172554] placeholder:text-slate-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F45B8A]"
            />
            <Search className="w-4.5 h-4.5 text-[#F45B8A] absolute left-4 top-3.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3 text-slate-400 hover:text-[#F45B8A] font-bold text-sm"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs ── */}
      <section className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
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

      {/* ── Members Grid ── */}
      <section
        ref={teamGridRef}
        className="py-14 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] relative z-10 min-h-[600px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-pink-200/80">
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-2xl md:text-3xl font-normal text-[#172554]">
              {selectedCategory === "All Faculty" ? "All Faculty Members" : selectedCategory}
            </h2>
            <span className="text-xs font-bold px-4 py-1.5 bg-white border border-pink-200 rounded-full text-[#F45B8A] shadow-sm">
              Showing {filteredMembers.length} Scholars
            </span>
          </div>

          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 bg-white/90 backdrop-blur-md rounded-3xl border border-pink-200 shadow-sm max-w-xl mx-auto">
              <p className="text-slate-600 text-base font-medium">
                No faculty members found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Faculty");
                }}
                className="mt-4 px-6 py-2.5 bg-[#F45B8A] text-white text-xs font-bold rounded-full hover:bg-[#d94d7a] transition shadow-sm"
              >
                Clear Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredMembers.map((m, i) => {
                const reverse = i % 2 === 1;
                return (
                  <article
                    key={m.name + i}
                    data-team-card
                    className="grid md:grid-cols-12 gap-8 items-center bg-white/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-[32px] border border-pink-100 shadow-[0_12px_40px_rgba(23,37,84,0.06)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] transition-shadow duration-500 overflow-hidden relative group/card"
                  >
                    {/* Portrait Image Column */}
                    <div
                      className={`${reverse ? "md:order-2" : ""} md:col-span-4 flex justify-center`}
                    >
                      <div className="relative group w-full max-w-[280px]">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-sky-300 to-amber-200 rounded-[28px] blur-sm opacity-50 group-hover:opacity-100 transition duration-500" />
                        <img
                          src={
                            i % 2 === 0 ? "/images/team_expert_1.png" : "/images/team_expert_2.png"
                          }
                          alt={m.name}
                          className="relative w-full aspect-square object-cover rounded-[24px] border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Member Information Column */}
                    <div
                      className={`${reverse ? "md:order-1" : ""} md:col-span-8 flex flex-col justify-center space-y-3`}
                    >
                      <div className="inline-flex items-center gap-1.5 bg-[#F45B8A]/10 text-[#F45B8A] font-bold text-xs px-3.5 py-1 rounded-full border border-pink-200/60 self-start">
                        <Sparkles className="h-3 w-3" />
                        <span>Garbhadhan Sanskar Faculty</span>
                      </div>

                      <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl lg:text-4xl font-normal text-[#172554] tracking-tight">
                        {m.name}
                      </h3>

                      <div className="text-[#3B82F6] font-bold text-xs sm:text-sm bg-blue-50/80 px-4 py-2 rounded-2xl border border-blue-200/60 inline-block self-start font-['Plus_Jakarta_Sans',sans-serif]">
                        {m.title}
                      </div>

                      <div className="space-y-2.5 text-[#475569] leading-relaxed text-sm md:text-[15px] border-t border-slate-100 pt-3.5 font-['Manrope',sans-serif]">
                        {m.bio.map((p, idx) => (
                          <p key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#F45B8A] font-bold mt-1 text-xs">✦</span>
                            <span>{p}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Separate Bridge Section: Read Our Story ── */}
      <section className="py-14 bg-white border-t border-pink-100">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl md:text-3xl text-[#172554]">
            Want to learn how Astro Baby was created?
          </h3>
          <p className="text-sm text-[#475569] max-w-xl mx-auto font-['Manrope',sans-serif]">
            Read our origin story, core mission pillars, research milestones, and our vision for conscious motherhood.
          </p>
          <div className="pt-2">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#172554] hover:bg-[#1e3a8a] text-white px-7 py-3.5 text-sm font-bold shadow-md hover:scale-105 transition-all"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <AppDownloadSection
        title={
          <>
            Experience the Guidance of Our Faculty on{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#3B82F6] to-[#F45B8A] bg-clip-text text-transparent font-semibold">
              Astro Baby
            </span>
          </>
        }
        subtitle="Download the Astro Baby Garbhadhan Sanskar app today and begin your positive pregnancy journey."
      />

      {/* ── Footer ── */}
      <footer className="bg-[#172554] text-white/80 py-10 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.
          </div>
          <div className="flex gap-4 text-white/80 text-xs font-semibold">
            <span className="hover:text-white transition cursor-pointer">Facebook</span>
            <span>•</span>
            <span className="hover:text-white transition cursor-pointer">Instagram</span>
            <span>•</span>
            <span className="hover:text-white transition cursor-pointer">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
