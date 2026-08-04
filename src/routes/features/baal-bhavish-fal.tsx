import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const bhavishPillars = [
  {
    title: "Birth Chart Analysis",
    desc: "A deep dive into the child's Janam Kundali to understand their unique planetary positions at the time of birth.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: "from-amber-100 to-orange-50",
    iconColor: "text-amber-600 bg-amber-100",
  },
  {
    title: "Personality Traits",
    desc: "Decoding the moon sign and nakshatras to reveal the innate strengths, weaknesses, and temperament of your child.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-yellow-100 to-amber-50",
    iconColor: "text-yellow-600 bg-yellow-100",
  },
  {
    title: "Career & Academic",
    desc: "Identifying the fields of study and future professions where your child is naturally inclined to achieve massive success.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-orange-100 to-red-50",
    iconColor: "text-orange-600 bg-orange-100",
  },
  {
    title: "Remedial Measures",
    desc: "Providing Vaidic remedies, specific mantras, and gemstone suggestions to overcome any negative planetary influences.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: "from-red-100 to-rose-50",
    iconColor: "text-red-600 bg-red-100",
  },
];

const programFeatures = [
  {
    title: "Detailed Horoscope Reading",
    img: "/images/features/brainopedia.jpg",
    tagline: "Discover their unique cosmic blueprint.",
    body: [
      "Every child is born with unique astrological alignments that shape their personality and potential. Our expert astrologers analyze the precise planetary positions at the time of birth.",
      "Get a comprehensive report detailing your child's innate strengths, potential challenges, and natural inclinations to provide them with the best environment to thrive."
    ],
  },
  {
    title: "Customized Upbringing Paths",
    img: "/images/features/library.jpg",
    tagline: "Tailor your parenting to their stars.",
    body: [
      "Instead of a one-size-fits-all approach, Baal Bhavish Fal provides specific guidelines based on the child's astrological profile.",
      "Discover the most suitable educational paths, extracurricular activities, and communication styles that will resonate deeply and naturally with your child's soul."
    ],
  },
  {
    title: "Overcoming Future Obstacles",
    img: "/images/features/meditation.jpg",
    tagline: "Proactive guidance and Vaidic remedies.",
    body: [
      "Astrology acts as a guiding light, warning us of potential health or academic hurdles before they manifest. We provide proactive solutions.",
      "Through simple yet effective Vaidic remedies like specific dietary changes, color therapies, and mantras, you can mitigate negative influences and enhance the positive planetary effects."
    ],
  },
];

export default function BaalBhavishFal() {
  const pageRef = useRef<HTMLDivElement>(null);
  const featuresGridRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    
    const timer = setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        // Animate Pillars
        const pillars = pillarsRef.current?.querySelectorAll("[data-pillar]");
        if (pillars) {
          gsap.fromTo(
            pillars,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
              scrollTrigger: { trigger: pillarsRef.current, start: "top 85%", toggleActions: "play none none none", once: true },
            }
          );
        }

        // Animate Features
        const items = featuresGridRef.current?.querySelectorAll("[data-feature-item]");
        items?.forEach((el, index) => {
          const fromLeft = index % 2 === 0;
          gsap.fromTo(
            el,
            { opacity: 0, x: fromLeft ? -60 : 60 },
            {
              opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none", once: true },
              onComplete: () => gsap.set(el, { clearProps: "opacity,transform" }),
            }
          );
        });
      }, pageRef);
      ScrollTrigger.refresh();
      return () => ctx.revert();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-[#FAF5FF] via-white to-[#FFF6FA] text-slate-800 font-sans">
      <HeaderNavbar />

      {/* 1. Hero Banner Section */}
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="overflow-hidden rounded-[30px] shadow-[0_20px_50px_-10px_rgba(245,158,11,0.15)] border border-amber-100/90 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
          <img 
            src="/images/features_banner_2.png" 
            alt="Baal Bhavish Fal" 
            className="w-full h-[250px] md:h-[400px] object-cover object-center block contrast-[1.05] saturate-[1.1] rounded-[30px] transition-transform duration-1000 group-hover:scale-105" 
          />
        </div>
      </section>

      {/* 2. Title & Intro Section */}
      <section className="py-10 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            Vedic Child Astrology
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A3A6C] tracking-tight mb-6">
            Baal Bhavish Fal <span className="text-amber-500">✨</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Every child is born with a unique destiny. <strong>Baal Bhavish Fal</strong> provides profound astrological guidance to help you understand your child's innate potential, allowing you to nurture their talents and secure a bright future.
          </p>
        </div>
      </section>

      {/* 3. The 4 Pillars Grid */}
      <section ref={pillarsRef} className="py-16 md:py-24 bg-gradient-to-br from-white via-amber-50/40 to-orange-50/40 relative border-y border-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">Unlocking the Cosmic Blueprint</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Understand your child deeply through the lens of Vaidic Astrology.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bhavishPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                data-pillar 
                className={`bg-gradient-to-b ${pillar.color} p-8 rounded-[32px] border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${pillar.iconColor}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Features List */}
      <section ref={featuresGridRef} className="py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">Our Astrological Services</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
          </div>
          
          <div className="space-y-16 md:space-y-24">
            {programFeatures.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <article key={f.title} data-feature-item className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                      <img src={f.img} alt={f.title} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 font-bold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                      Expert Analysis
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-4 tracking-tight">{f.title}</h3>
                    <h4 className="text-xl text-amber-600 font-serif italic mb-6">"{f.tagline}"</h4>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                      {f.body.map((p, idx) => (<p key={idx}>{p}</p>))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section className="py-16 px-4 mb-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-amber-600 to-orange-800 rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Discover Your Child's True Potential</h2>
          <p className="text-amber-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Get a comprehensive astrological reading for your child and receive a personalized roadmap for their upbringing and success.
          </p>
          <button className="relative z-10 bg-white text-amber-700 font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
            Request Janam Kundali Report
          </button>
        </div>
      </section>

      <AppDownloadSection title={<>Start Your Journey with <span className="text-[#EA3484]">Astro Baby</span></>} subtitle="Download the app to explore all features." />
      <NewsletterSection />
      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Astro Baby Garbh Sanskar. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
