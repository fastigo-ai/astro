import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
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
      "Along with an expert team of gynaecologists, scientists and IITians, he researched and made it a mission to revive the Ancient Indian Garbh Sanskar Process — today known as 'Astro Baby Garbh Sanskar'.",
    ],
  },
  {
    img: "award_1680693648.jpg",
    name: "P.P. Shri Praveen Nathji Maharaj",
    title:
      "Garbh Sanskar Expert, M.A. (Sanskrit), Yog Visharad, Jyotish Martand, Prakrutik Chikitsak",
    bio: [
      "Initiated in the Nath Parampara of Sanatan Dharma, Acharya Praveen Nathji Maharaj taught students of science for many years.",
      "Under his Guru's guidance, his intellectual interest in spiritualism led him to the Himalayas. He studied Bhagwad Gita, Ramayana, Dasbodh and earned degrees in Yog Visharad, Jyotish Vidhya and Prakratik Chikitsa.",
      "For the past 22 years, Acharya-Shri has tirelessly worked to revive the ancient Indian Garbh Sanskar process. Under his guidance, thousands of families have given birth to calm, intelligent and sanskarvaan progenies.",
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
      "She has been spreading the science of being positive and stress-free during pregnancy through Garbh Sanskar for the past 17 years.",
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
      "A man of science and a spiritual soul, his research helped shape the most credible and scientific Garbh Sanskar curriculum in the world.",
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

function Layout({ children }: { children: React.ReactNode; activeLabel?: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBDFFF] via-[#F7EEF3] to-[#FBDFFF] text-slate-800">
      <HeaderNavbar />

      {children}

      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Astro Baby Garbh Sanskar. All rights reserved.</div>
          <div className="flex gap-4 text-white/80 text-xs font-semibold">
            <span className="hover:text-white transition">Facebook</span>
            <span>•</span>
            <span className="hover:text-white transition">Instagram</span>
            <span>•</span>
            <span className="hover:text-white transition">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const CATEGORIES = [
  "All",
  "IITians & Scientists",
  "Vedic Scholars",
  "Medical & Gynecologists",
  "Mindfulness & Yoga",
  "Life Coaches & Astrologers",
];

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
              x: fromLeft ? -75 : 75,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.85,
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

    if (selectedCategory === "All") return true;
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
    <Layout activeLabel="Team">
      {/* Banner */}
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="overflow-hidden rounded-[30px] shadow-lg border border-pink-100/90">
          <img
            src="/images/nurturing_life_banner.png"
            alt="Meet our team"
            className="w-full h-auto object-cover max-h-[360px] rounded-[30px]"
          />
        </div>
      </section>

      {/* Header & Search */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] relative z-10 border-b border-pink-200/60">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F63D8E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Expert Advisory Council
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A3A6C] tracking-tight">
            Meet Our Team — <span className="text-[#F63D8E]">The Garbh Sanskar Experts</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            A rare confluence of doctors, IITians, revered Vedic scholars, life coaches, yoga &
            nutrition experts and astrologers — together shaping the world's most trusted Garbh
            Sanskar curriculum.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search experts by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 bg-white/95 backdrop-blur-md rounded-full border border-pink-200 text-[#1A3A6C] placeholder:text-slate-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F63D8E]"
            />
            <svg
              className="w-5 h-5 text-[#F63D8E]/70 absolute left-4 top-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3.5 text-slate-400 hover:text-[#F63D8E] font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4.5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                    active
                      ? "bg-[#EA3484] text-white shadow-md shadow-[#EA3484]/30 scale-105"
                      : "bg-white/90 text-[#1A3A6C] border border-pink-100 hover:bg-pink-50/50 shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section
        ref={teamGridRef}
        className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] relative z-10 min-h-[600px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mb-8 pb-3 border-b border-pink-200/80">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3A6C]">
              {selectedCategory === "All" ? "All Faculty Members" : selectedCategory}
            </h2>
            <span className="text-xs font-bold px-3.5 py-1 bg-white border border-pink-200 rounded-full text-[#F63D8E] shadow-xs">
              Showing {filteredMembers.length} Experts
            </span>
          </div>

          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 bg-white/90 backdrop-blur-md rounded-3xl border border-pink-200 shadow-sm">
              <p className="text-slate-600 text-lg font-medium">
                No experts found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-6 py-2.5 bg-[#F63D8E] text-white text-xs font-bold rounded-full hover:bg-[#E02B7B] transition shadow-sm"
              >
                Clear Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredMembers.map((m, i) => {
                const reverse = i % 2 === 1;
                return (
                  <article
                    key={m.name + i}
                    data-team-card
                    className="grid md:grid-cols-3 gap-8 md:gap-10 items-center bg-gradient-to-br from-white via-[#FFF8FD] to-[#FAF2FF] p-7 md:p-10 rounded-[32px] border border-pink-200/90 shadow-[0_15px_40px_-10px_rgba(244,63,94,0.1)] hover:shadow-[0_25px_50px_-5px_rgba(244,63,94,0.2)] transition-shadow duration-500 overflow-hidden relative group/card"
                  >
                    <div
                      className={`${reverse ? "md:order-2" : ""} md:col-span-1 flex justify-center`}
                    >
                      <div className="relative group w-full max-w-xs">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 rounded-[28px] blur-xs opacity-50 group-hover:opacity-100 transition duration-500" />
                        <img
                          src={
                            i % 2 === 0 ? "/images/team_expert_1.png" : "/images/team_expert_2.png"
                          }
                          alt={m.name}
                          className="relative w-full aspect-square object-cover rounded-[24px] border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div
                      className={`${reverse ? "md:order-1" : ""} md:col-span-2 flex flex-col justify-center`}
                    >
                      <div className="inline-flex items-center gap-1.5 bg-[#EA3484] text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-md shadow-[#EA3484]/30 mb-3.5 self-start">
                        <span>✦</span>
                        <span>Garbh Sanskar Expert</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E293B] mb-2.5 tracking-tight">
                        {m.name}
                      </h3>
                      <div className="text-[#E11D48] font-bold text-xs md:text-sm mb-4 bg-rose-50/90 px-4 py-2 rounded-2xl border border-rose-200/60 inline-block shadow-xs self-start">
                        {m.title}
                      </div>
                      <div className="space-y-3 text-[#475569] leading-relaxed text-sm md:text-base border-t border-rose-100/80 pt-4 font-sans">
                        {m.bio.map((p, idx) => (
                          <p key={idx} className="flex gap-2">
                            <span className="text-[#E11D48] font-bold">✦</span>
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

      {/* CTA */}
      <AppDownloadSection
        title={
          <>
            Experience the Wisdom of Our Experts on{" "}
            <span className="bg-gradient-to-r from-[#5A098F] via-[#7C3AED] to-[#F472B6] bg-clip-text text-transparent font-semibold">
              Astro Baby
            </span>
          </>
        }
        subtitle="Download the Astro Baby Garbh Sanskar app today and begin your positive pregnancy journey."
      />
    </Layout>
  );
}
