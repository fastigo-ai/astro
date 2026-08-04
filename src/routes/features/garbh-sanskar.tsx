import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const garbhPillars = [
  {
    title: "Garbh Samvad",
    desc: "The beautiful art of talking to your unborn baby. Establish a deep, eternal emotional bond with your child even before birth.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: "from-rose-100 to-pink-50",
    iconColor: "text-rose-500 bg-rose-100",
  },
  {
    title: "Garbh Sangeet",
    desc: "Specially curated Vaidic mantras and ragas that promote brain development and instil peace in both mother and baby.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    color: "from-purple-100 to-fuchsia-50",
    iconColor: "text-purple-500 bg-purple-100",
  },
  {
    title: "Prenatal Yoga",
    desc: "Gentle physical exercises and Pranayama designed to reduce pregnancy discomfort and prepare the body for a smooth delivery.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    color: "from-blue-100 to-cyan-50",
    iconColor: "text-blue-500 bg-blue-100",
  },
  {
    title: "Positive Literature",
    desc: "Reading inspiring stories and spiritual texts (like the Ramayana or Gita) to shape the child's moral character in the womb.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "from-orange-100 to-amber-50",
    iconColor: "text-orange-500 bg-orange-100",
  },
];

const garbhFeaturesList = [
  {
    title: "Vaidic Mantra Vrushti",
    img: "/images/features/vaidic_mantra_vrushti.jpg",
    tagline: "Miraculous chants for the promotion of special qualities.",
    body: [
      "The Vedas mention special mantras for pregnancy, which have miraculous effects on the fetus. These powerful sound vibrations penetrate the womb and stimulate the baby's developing nervous system.",
      "Chanted by knowledgeable Vaidic brahmins, these mantras have been scientifically proven to have a divine and positive effect, ensuring a calm and highly intelligent child."
    ],
  },
  {
    title: "Garbh Sanskar Music Therapy",
    img: "/images/features/garbhsanskar_music.jpg",
    tagline: "Music based on specific ragas for ideal development.",
    body: [
      "Music is the language of the soul. Indian classical ragas and Garbh Sanskar music have a profound impact on the mood, mind, and body of both the mother and the baby.",
      "Our curated musical tracks enhance virtues in the fetus, boost cognitive development, and keep the pregnant woman relaxed, stress-free, and positive throughout her 9-month journey."
    ],
  },
  {
    title: "Yoga Nidra & Deep Relaxation",
    img: "/images/features/yognidra.jpg",
    tagline: "Unlocking the power of the subconscious mind.",
    body: [
      "Pregnancy can bring physical fatigue and emotional mood swings. Yoga Nidra (yogic sleep) is a powerful technique to release deep-seated stress and tension.",
      "Through guided visualization, the mother achieves a state of profound relaxation, allowing maximum blood flow and oxygen to reach the baby, fostering exceptional growth."
    ],
  },
];

export default function GarbhSanskarFeature() {
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
        <div className="overflow-hidden rounded-[30px] shadow-[0_20px_50px_-10px_rgba(234,52,132,0.15)] border border-pink-100/90 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
          <img 
            src="/images/features_banner_astrobaby.png" 
            alt="Garbh Sanskar" 
            className="w-full h-[250px] md:h-[400px] object-cover object-center block contrast-[1.05] saturate-[1.1] rounded-[30px] transition-transform duration-1000 group-hover:scale-105" 
          />
        </div>
      </section>

      {/* 2. Title & Intro Section */}
      <section className="py-10 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#EA3484] text-sm font-bold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA3484]"></span>
            </span>
            Holistic Pregnancy Care
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A3A6C] tracking-tight mb-6">
            Garbh Sanskar <span className="text-[#EA3484]">🤰</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Science meets spirituality. <strong>Garbh Sanskar</strong> is not just about physical health, but shaping the character, intellect, and emotional quotient of your child right from the womb. Experience a joyful, stress-free 9 months.
          </p>
        </div>
      </section>

      {/* 3. The 4 Elements Grid */}
      <section ref={pillarsRef} className="py-16 md:py-24 bg-gradient-to-br from-white via-rose-50/40 to-purple-50/40 relative border-y border-pink-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">The Essentials of Garbh Sanskar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Four powerful practices to nurture a genius, healthy, and happy baby.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {garbhPillars.map((pillar, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">Inside the Garbh Sanskar App</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"></div>
          </div>
          
          <div className="space-y-16 md:space-y-24">
            {garbhFeaturesList.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <article key={f.title} data-feature-item className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-rose-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                      <img src={f.img} alt={f.title} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-[#EA3484] font-bold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                      Premium Feature
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-4 tracking-tight">{f.title}</h3>
                    <h4 className="text-xl text-[#EA3484] font-serif italic mb-6">"{f.tagline}"</h4>
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
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#E11D48] to-[#9F1239] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Give Your Child the Best Start in Life</h2>
          <p className="text-rose-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Join the Astro Baby Garbh Sanskar program today and embark on a 9-month journey of love, spirituality, and science.
          </p>
          <button className="relative z-10 bg-white text-[#E11D48] font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
            Download App & Start Free Trial
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
