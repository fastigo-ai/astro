import { useState, useEffect, useRef } from "react";
import { gsap } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";

type Feature = { title: string; img: string; tagline: string; body: string[] };

const features: Feature[] = [
  {
    title: "Sankalp Poojan",
    img: "/images/features/sankalp_poojan.jpg",
    tagline: "Live Sankalp Poojan before starting Garbh Sanskar",
    body: [
      "In Vaidic Indian tradition, every auspicious work starts with Sankalp poojan. At Astro Baby, Vaidic Sankalp poojan is done live under the guidance of our Vaidic Brahmin. Through Sankalp Poojan, you pray to God, the Navagrahas and the Nakshatras to give strength and determination to carry this pregnancy for the whole term and to bless you and your child with the divine qualities of wisdom, health and positivity.",
      "Within 24 hours of subscribing to Astro Baby Garbh Sanskar, our representative will get in touch with you to inform you about the samagri required for poojan. Soon after that, we'll schedule a one-to-one live Sankalp Poojan for you as per your convenience on a pre-decided Sankalp muhurat. Both the husband and the wife must be present in this Sankalp poojan.",
    ],
  },
  {
    title: "Punsavan Sanskar",
    img: "/images/features/punsavan_sanskar.jpg",
    tagline: "An important sanskar performed during the third month of pregnancy",
    body: [
      "The first mention of Punsavan Sanskar has been found in Atharva Veda. As per Vaidic tradition, it is the second sanskar of the sixteen sanksars. This sanskar is considered to be one of the most important rites for human life. The vaidic brahman group at Astro Baby perform this sanskar during the third month of pregnancy as this is when the baby's nervous system starts developing.",
      "The purpose of this sanskar is to give mental strength, superior intelligence and sanskar to the unborn child. If, for some reason, this sanskar could not be performed in the third month of pregnancy, then it should be performed during the seventh month.",
    ],
  },
  {
    title: "Simantonnayana Sanskar",
    img: "/images/features/simantonnayana_sanskar.jpg",
    tagline: "An important sanskar performed during the seventh/eighth month of pregnancy",
    body: [
      "Simantonnayana Sanskar is the third sanskar of the sixteen sanskars according to vaidic tradition. This sanskar is performed in order to prevent miscarriage, to ensure the safety of the baby in the womb, and to develop the baby's fortune.",
      "The purpose of this sanskar is to mentally prepare the pregnant lady for delivery by guiding her with positive thoughts. This sanskar is performed in a live session under the guidance of a vaidic brahman group at Astro Baby. It must be done during the eighth month of pregnancy.",
    ],
  },
  {
    title: "GarbhSanskar Sutra",
    img: "/images/features/garbhsanskar_sutra.jpg",
    tagline: "Sutras to impart mann, buddhi and sanskars in your child",
    body: [
      "During the 9 months of pregnancy, each month, there is a phased development of the various physical and mental dimensions of the baby. Astro Baby is a pure science, which provides Garbh Sanskar Sutras, according to the present developmental stage of the fetus. These sutras turn your pregnancy into a wonderful, joyous experience and prepares you to welcome a wise, sanskari and healthy baby.",
    ],
  },
  {
    title: "Vaidic Mantra Vrushti",
    img: "/images/features/vaidic_mantra_vrushti.jpg",
    tagline: "Miraculous vaidic chants for the promotion of special qualities in the child",
    body: [
      "The Vedas mention special mantras for pregnancy, which have miraculous effects on the fetus. Originated from Rigveda, Yajurveda, Samaveda and Atharvaveda these mantras are available in the Astro Baby App.",
      "They are chanted by the world's most knowledgeable Vaidic brahmins, following the stern and uncompromising rules of Varn, Swar, Matra, Balam, Saama and Santana. These Vaidic Garbh Sanskar Mantras have been found to have a divine and positive effect on both the child and the mother.",
    ],
  },
  {
    title: "GarbhSanskar Music",
    img: "/images/features/garbhsanskar_music.jpg",
    tagline: "Music based on specific ragas for the ideal development of a child",
    body: [
      "Indian ragas and Garbh Sanskar music have a positive impact on our mood, mind and body. This fact is now recognized by the world's top scientists and universities as well. Children who have been exposed to traditional ragas before birth develop many qualities such as intelligence, health and calmness in nature.",
      "The Garbh Sanskar music in Astro Baby App has been developed on the basis of Indian ragas, which not only enhance the virtues in the fetus, but also keep the pregnant woman calm, relaxed and positive.",
    ],
  },
  {
    title: "Jeevan Sutra - The Life Training",
    img: "/images/features/jeevan_sutra.jpg",
    tagline: "Sutra to guide you through the ups and downs of life",
    body: [
      "The influence of the mother's state of mind during pregnancy has a huge impact on the baby and its effects can last for the rest of their life. A pregnant woman faces many ups and downs and has to deal with negative emotions like worry, stress, sadness etc. while still keeping her mind stable, calm, and positive.",
      "In the live Jeevan Sutra sessions, nationally-renowned life trainers will guide you on how to stay positive even while dealing with negative emotions and situations, helping you to become the best version of yourself and ultimately become a better mother.",
    ],
  },
  {
    title: "Medi-Mitra Sessions",
    img: "/images/features/medi_mitra_sessions.jpg",
    tagline: "Your friend and guide for all your medical concerns",
    body: [
      "During pregnancy, the role of doctors should not be limited to medical prescriptions, they should be like a friend or an elder member of the family. Someone who can gently and accurately guide you through the physical and mental issues that arise during pregnancy.",
      "In the Medi-Mitra section, Dr. Newalkar will be playing the exact same role. With 22 years of experience, including at the world renowned AIIMS institute, she is well versed in handling high-risk pregnancies.",
    ],
  },
  {
    title: "Isht Mantra",
    img: "/images/features/isht_mantra.jpg",
    tagline: "Unique Isht Mantra calculated according to the parents' date and time of birth",
    body: [
      "Astro Baby App calculates a raashi-yugm based on the time and date of birth of the mother and father-to-be. This calculation is based on astrology and there is a unique Isht mantra for each parent-couple.",
      "The pregnant woman has to chant this personal Isht Mantra 108 times a day during her pregnancy. Isht Dev especially blesses children born by Isht Mantra's chanting. If due to some reason, a pregnant woman is not able to chant the Isht Mantra 108 times, it must at least be chanted either 51 or 11 times a day.",
    ],
  },
  {
    title: "GarbhSamvad",
    img: "/images/features/garbhsamvad.jpg",
    tagline: "Laying the foundation of the bond of a lifetime",
    body: [
      "Samvad - dialogue or communication, is one of the most crucial aspects of Garbh Sanskar. Your baby may not be able to listen or understand your words especially during early pregnancy but they can certainly sense the emotions and feelings behind your words.",
      "This communication, once prescribed by ancient Indian Rishis, is now a widely accepted practice proven by various scientific studies. Rejoice in these joyous moments of pregnancy and forge the bond that will last a lifetime.",
    ],
  },
  {
    title: "Yognidra - The stress-relief session",
    img: "/images/features/yognidra.jpg",
    tagline: "Your passage to inner peace",
    body: [
      "During pregnancy you are continuously dealing with many things that include ongoing physical changes, concerns for your baby, the nervousness of delivery, and unwarranted do's and don'ts from friends and family. So physical and mental fatigue is imminent.",
      "This is exactly why team Astro Baby created these guided yognidra sessions. A 20 - 25 minute session helps you find a more calm and refreshed version of yourself.",
    ],
  },
  {
    title: "Parv (Occasion) Based Sessions",
    img: "/images/features/parv_based_sessions.jpg",
    tagline: "Garbh Sanskar sessions for important festivals",
    body: [
      "Garbh Sanskar is not just limited to mantra and music. It is a 24/7 lifestyle and pregnancy is a period where a pregnant lady transforms into a mother. The Parvnimitt or occasion-based session includes important time-specific activities with respect to garbhsanskar.",
      "It also includes discourses that plant sanskaras subconsciously in the mother as well as the baby. For instance, the occasions include Holi, Diwali, Navratri, Ekadashi, Ram Navami and much more.",
    ],
  },
  {
    title: "Supraj Santaanotpatti Havan",
    img: "/images/features/santanotpatti_havan.jpg",
    tagline: "Monthly vaidic havan for the safety and health of your child",
    body: [
      "Once a month during pregnancy, the pregnant woman and her husband and, if possible, all the family members perform a live Supraj Santaanotpatti Havan, under the guidance of the Vaidic Brahmin at Astro Baby.",
      "The main purpose of the Havan is to pray to the deities and the Navagrahas for the protection of the child and the enhancement of virtues. The date, time and samagri required for the Havan are shared with the subscribers in advance.",
    ],
  },
  {
    title: "Meditation",
    img: "/images/features/meditation.jpg",
    tagline: "To de-stress yourself",
    body: [
      "Meditation is an important aspect of garbh sanskar and is beneficial for the body as it de-stresses the mind. It involves getting into a zero state of mind, which can help bring peace and tranquility, and enhance concentration. Visualizing good things about the baby while doing meditation during pregnancy is also a great way to bond with the baby.",
    ],
  },
  {
    title: "Monthly Calendar",
    img: "/images/features/monthly_calendar.png",
    tagline: "Planner for all monthly garbh sanskar activities",
    body: [
      "The monthly activity planner provided in Astro Baby Garbh Sanskar app gives you the complete information, in advance, about the various activities lined up for the month. It gives you details about the date, time, and the expert associated with the respective activities/sessions.",
    ],
  },
  {
    title: "Garbh Sanskar QnA",
    img: "/images/features/garbhsanskar_qna.jpg",
    tagline:
      "All of your questions, queries & concerns related to Garbh Sanskar & Life… Answered by our experts Live.",
    body: [
      "During pregnancy you often find yourself facing situations where you require guidance from a trusted friend & mentor. With GarbhSanskar QnA Session you get the guidance of Prof. Vipin Joshi Live.",
      "Be it questions related to Garbh Sanskar, Shastras, situations related to day-to-day challenges of life, or dynamics of spouse relationships or in-laws. Users from India & abroad get their absolute guidance through this session.",
    ],
  },
  {
    title: "Let's Smile Together",
    img: "/images/features/lets_smile_together.jpg",
    tagline:
      "Live Interactive sessions full of fun, excitement & giveaways for pregnant ladies around the world.",
    body: [
      "Let's smile together, as the name suggests is a session that acts as a gust of fresh air for pregnant ladies. This session is a gateway to fun group activities away from the daily doldrums of physical issues, stress & tensions.",
      "Exciting competitions, prizes, and fun interactions with fellow pregnant moms are all hosted by Astro Baby Hosts in a power-packed live online session.",
    ],
  },
  {
    title: "Sandhya Prarthana",
    img: "/images/features/sandhya_prarthana.jpg",
    tagline:
      "Hundreds of Pregnant ladies across the world participate daily at the same time for 'Garbh-raksha' prarthna Live.",
    body: [
      "Sandhya Prarthna is a session of uninterrupted tranquility for pregnant women. Protective Ramraksha Stotra, effective Mantras, powerful Santan Gopal Mantra, and sacred Garbh Kalyan Prarthna will relieve pregnant women from daily life's hassles.",
      "Regular chanting of these prayers and mantras with Astro Baby Garbh Sanskar's mentor protects the mother's womb from any kind of mishaps and ensures the baby's better future.",
    ],
  },
  {
    title: "Yoga Session",
    img: "/images/features/yoga_session.jpg",
    tagline:
      "Safe Yogasans for pregnancy demonstrated by Yogasan experts as per your pregnancy month Live.",
    body: [
      "Yoga during pregnancy is an ideal way to stay in shape, tone the muscles, and improve blood circulation– all with negligible impact on your joints. Prenatal Yoga also reduces stress, improves flexibility, lowers back pain, and prepares your body for labor and delivery.",
      "With Astro Baby Garbh Sanskar's expert Yoga instructors, it's extremely easy to perform quick and effective Yoga exercises from the comfort of your home.",
    ],
  },
  {
    title: "Nutritionist Session",
    img: "/images/features/nutritionist_session.jpg",
    tagline:
      "What To eat, What not to eat - Guidance of Nutritionists for various months of pregnancy.",
    body: [
      "Balanced diet is the basic fundamental of a healthy pregnancy. The growth of the baby in the womb depends on the diet of the expectant mother. Astro Baby's nutritionist session guided by experts makes it easy to stay nourished and healthy at every stage of pregnancy.",
      "In this session, you will also get a chance to ask anything to the expert about diet during pregnancy.",
    ],
  },
  {
    title: "Mentoring",
    img: "feature_1675749179.png",
    tagline: "Live mentoring sessions to guide you through life problems keeping you up at night.",
    body: [
      "Pregnancy is one of the most rewarding experiences a woman can have. But, at times you may have mixed feelings, insecurities, self-doubt, overwhelming feelings, anxiety, etc. Combat these negative feelings easily with Astro Baby Garbh Sanskar's mentoring session.",
    ],
  },
  {
    title: "Brainopedia",
    img: "feature_1675749182.png",
    tagline: "Live brain exercises, games & activities to stimulate the mental growth.",
    body: [
      "A special Brainopedia session for pregnant women includes engaging games, challenging puzzles, a range of quizzes, and other brain-sharpening activities. In this great one-hour session, our amazing host will ensure you will have a lot of fun and joy with other expectant mothers.",
    ],
  },
  {
    title: "Library",
    img: "feature_1675749185.png",
    tagline:
      "Handpicked Stories, biographies & inspirational stories from the golden history of India to impart the traits in your baby.",
    body: [
      "What you read during pregnancy has a great influence on a baby's mental development. Get access to a unique collection of educational stories through the library section. The perfect blend of entertainment and inspirational stories of saints, deities, sages, and great kings will induce good virtues in your baby.",
    ],
  },
  {
    title: "Doctor's Session",
    img: "feature_1675749188.png",
    tagline:
      "Answers to all of your medical issues or concerns from the top gynecologists of the nation in a Live session.",
    body: [
      "Pregnant women often lack access to essential medical advice since they can't afford to visit a gynecologist every time they have a question. Get regular answers to all of your pregnancy-related questions through gynecologist sessions.",
      "Astro Baby Garbh Sanskar's experienced gynecologist is available to answer any questions you may have.",
    ],
  },
];

const FEATURE_CATEGORIES = [
  "All Features",
  "Sanskars & Poojan",
  "Vaidic Mantras & Music",
  "Live Mentoring & Doctors",
  "Mindfulness & Yoga",
  "Interactive Games & Library",
];

export default function FeaturesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Features");
  const [searchQuery, setSearchQuery] = useState("");
  const featuresGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!featuresGridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-feature-item]",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }, featuresGridRef);
    return () => ctx.revert();
  }, [selectedCategory, searchQuery]);

  const filteredFeatures = features.filter((f) => {
    const matchesSearch =
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.body.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedCategory === "All Features") return true;
    if (selectedCategory === "Sanskars & Poojan")
      return f.title.includes("Sanskar") || f.title.includes("Poojan") || f.title.includes("Havan");
    if (selectedCategory === "Vaidic Mantras & Music")
      return f.title.includes("Mantra") || f.title.includes("Music") || f.title.includes("Prarthana");
    if (selectedCategory === "Live Mentoring & Doctors")
      return (
        f.title.includes("Jeevan Sutra") ||
        f.title.includes("Doctor") ||
        f.title.includes("Medi-Mitra") ||
        f.title.includes("Mentoring") ||
        f.title.includes("QnA")
      );
    if (selectedCategory === "Mindfulness & Yoga")
      return (
        f.title.includes("Yoga") ||
        f.title.includes("Yognidra") ||
        f.title.includes("Meditation") ||
        f.title.includes("Nutritionist")
      );
    if (selectedCategory === "Interactive Games & Library")
      return (
        f.title.includes("Brainopedia") ||
        f.title.includes("Library") ||
        f.title.includes("Smile") ||
        f.title.includes("Calendar")
      );

    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBDFFF] via-[#F7EEF3] to-[#FBDFFF] text-slate-800">
      {/* Header & Navbar */}
      <HeaderNavbar />

      {/* Hero Banner Image */}
      <section className="w-full relative z-10 border-b border-pink-200/60 overflow-hidden bg-[#FAF2FF]">
        <img
          src="/images/nurturing_life_banner.png"
          alt="Nurturing Life, Inspiring Futures - Garbh Sanskar"
          className="w-full h-auto object-cover block contrast-[1.03] saturate-[1.02]"
        />
      </section>

      {/* Header & Search */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] relative z-10 border-b border-pink-200/60">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F63D8E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
            23+ Comprehensive Features
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A3A6C] tracking-tight">
            Garbh Sanskar <span className="text-[#F63D8E]">Course & Features</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            A unique combination of ancient Shaastra wisdom & modern obstetric science delivered through an intuitive mobile application.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search features (e.g., Mantra, Music, Yoga, Doctor)..."
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
            {FEATURE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4.5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${active
                      ? "bg-gradient-to-r from-[#F63D8E] to-[#E02B7B] text-white shadow-md shadow-pink-500/20 scale-105"
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

      {/* Feature blocks Grid */}
      <section ref={featuresGridRef} className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] relative z-10 min-h-[600px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mb-8 pb-3 border-b border-pink-200/80">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3A6C]">
              {selectedCategory === "All Features" ? "All Course Features" : selectedCategory}
            </h2>
            <span className="text-xs font-bold px-3.5 py-1 bg-white border border-pink-200 rounded-full text-[#F63D8E] shadow-xs">
              Showing {filteredFeatures.length} Features
            </span>
          </div>

          {filteredFeatures.length === 0 ? (
            <div className="text-center py-16 bg-white/90 backdrop-blur-md rounded-3xl border border-pink-200 shadow-sm">
              <p className="text-slate-600 text-lg font-medium">
                No features found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Features");
                }}
                className="mt-4 px-6 py-2.5 bg-[#F63D8E] text-white text-xs font-bold rounded-full hover:bg-[#E02B7B] transition shadow-sm"
              >
                Clear Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredFeatures.map((f, i) => {
                const reverse = i % 2 === 1;
                return (
                  <article
                    key={f.title}
                    data-feature-item
                    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-pink-100 shadow-md shadow-pink-500/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`${reverse ? "md:order-2" : ""} flex justify-center`}>
                      <div className="relative group w-full max-w-md">
                        <img
                          src={f.img ? (f.img.startsWith('/') ? f.img : `/images/${f.img}`) : "/images/story_thumb_1.png"}
                          alt={f.title}
                          className="w-full h-64 md:h-72 object-cover rounded-2xl border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={`${reverse ? "md:order-1" : ""}`}>
                      <span className="inline-block bg-[#F63D8E]/10 text-[#F63D8E] font-bold text-xs px-3.5 py-1 rounded-full mb-3">
                        ✦ Feature {i + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A3A6C] mb-2 tracking-tight">
                        {f.title}
                      </h2>
                      <p className="text-[#F63D8E] font-semibold italic text-sm md:text-base mb-4">
                        "{f.tagline}"
                      </p>
                      <div className="space-y-3 text-[#475569] leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4 font-sans">
                        {f.body.map((p, idx) => (
                          <p key={idx}>{p}</p>
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
            Experience All 23+ Features on{" "}
            <span className="bg-gradient-to-r from-[#5A098F] via-[#7C3AED] to-[#F472B6] bg-clip-text text-transparent font-semibold">
              Astro Baby
            </span>
          </>
        }
        subtitle="Download the Astro Baby Garbh Sanskar app and begin your positive pregnancy journey today."
      />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
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
