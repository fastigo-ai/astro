import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const dhanPillars = [
  {
    title: "Physical Readiness",
    desc: "Ensuring optimal health, right age, and physical vitality of both partners to provide the best biological foundation for the child.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-green-100 to-emerald-50",
    iconColor: "text-green-600 bg-green-100",
  },
  {
    title: "Ayurvedic Detox",
    desc: "Cleansing the body through Panchakarma and herbal remedies to remove toxins (Ama) and boost fertility naturally.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-teal-100 to-cyan-50",
    iconColor: "text-teal-600 bg-teal-100",
  },
  {
    title: "Astrological Muhurat",
    desc: "Aligning with the cosmic stars to select the most auspicious date and time for conception to invite a highly evolved soul.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-emerald-100 to-green-50",
    iconColor: "text-emerald-600 bg-emerald-100",
  },
  {
    title: "Sacred Intention",
    desc: "The mental and spiritual state of the couple during conception heavily influences the child's psychological blueprint.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-lime-100 to-green-50",
    iconColor: "text-lime-600 bg-lime-100",
  },
];

const programFeatures = [
  {
    title: "Pre-Conception Diet & Detox",
    img: "/images/features/nutritionist_session.jpg",
    tagline: "Purify your body for a healthy conception.",
    body: [
      "Before inviting a new life, the physical vessel must be absolutely pure. Our Garbh Dhan program offers specialized Ayurvedic diets tailored to the mother and father to balance their doshas.",
      "Learn natural detoxification methods that clear out physical impurities, balance hormones, and significantly enhance fertility and egg/sperm quality."
    ],
  },
  {
    title: "Choosing the Right Muhurat",
    img: "/images/features/monthly_calendar.png",
    tagline: "Harness the power of planetary alignments.",
    body: [
      "In Vaidic science, the exact moment of conception plays a massive role in the child's destiny and character. We analyze the Janam Kundali (birth charts) of both parents.",
      "Based on astrological calculations, our experts provide specific dates and times (Muhurats) that are highly auspicious for conception."
    ],
  },
  {
    title: "The Garbh Dhan Sanskar Ritual",
    img: "/images/features/santanotpatti_havan.jpg",
    tagline: "A divine invocation for a noble soul.",
    body: [
      "Garbh Dhan is not merely a biological act, but a sacred spiritual ritual. We guide couples through the Santanotpatti Havan and specific Vaidic mantras.",
      "By chanting these mantras and performing the ritual with a pure heart and clear intention, couples invite a healthy, virtuous, and spiritually evolved soul into their lives."
    ],
  },
];

export default function GarbhDhan() {
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
        <div className="overflow-hidden rounded-[30px] shadow-[0_20px_50px_-10px_rgba(34,197,94,0.15)] border border-green-100/90 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
          <picture className="w-full h-auto block">
            <source media="(max-width: 767px)" srcSet="/images/garbh_dan_mobile_banner.png" />
            <img 
              src="/images/garbh_dan_banner.png" 
              alt="Garbh Dan - A Gift of Life, A Legacy of Love" 
              className="w-full h-auto object-cover object-center block contrast-[1.02] saturate-[1.05] rounded-[30px] transition-transform duration-700 group-hover:scale-[1.01]" 
            />
          </picture>
        </div>
      </section>

      {/* 2. Title & Intro Section */}
      <section className="py-10 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            A Gift of Life, A Legacy of Love 💙
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A3A6C] tracking-tight mb-6">
            Garbh Dan <span className="text-green-500">🌱</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Garbh Dan is a noble initiative to support couples who dream of parenthood. Your kindness can light up a life forever. Combined with Vaidic planning, Ayurveda, Astrology, and Spirituality, it prepares couples for a divine conception.
          </p>
        </div>
      </section>

      {/* 3. The 4 Pillars Grid */}
      <section ref={pillarsRef} className="py-16 md:py-24 bg-gradient-to-br from-white via-green-50/40 to-teal-50/40 relative border-y border-green-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">The Pillars of Conception</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Aligning your body, mind, and the universe to welcome a divine soul.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {dhanPillars.map((pillar, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">Our Garbh Dhan Program</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
          </div>
          
          <div className="space-y-16 md:space-y-24">
            {programFeatures.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <article key={f.title} data-feature-item className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-200 via-teal-200 to-emerald-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                      <img src={f.img} alt={f.title} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Step {i + 1}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-4 tracking-tight">{f.title}</h3>
                    <h4 className="text-xl text-green-600 font-serif italic mb-6">"{f.tagline}"</h4>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                      {f.body.map((p, idx) => (<p key={idx}>{p}</p>))}
                    </div>

                    {/* Contact Us Button */}
                    <div className="mt-8">
                      <a
                        href="/contact-us"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] text-white font-bold text-sm shadow-[0_4px_18px_rgba(244,91,138,0.28)] hover:shadow-[0_8px_24px_rgba(244,91,138,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group"
                      >
                        Contact Us
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
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
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-green-700 to-emerald-900 rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Prepare for a Beautiful Beginning</h2>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Ensure the physical and spiritual purity required to invite a healthy and happy child into your family.
          </p>
          <button className="relative z-10 bg-white text-green-700 font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
            Book a Garbh Dhan Consultation
          </button>
        </div>
      </section>

      <AppDownloadSection title={<>Start Your Journey with <span className="text-[#EA3484]">Astro Baby</span></>} subtitle="Download the app to explore all features." />
      <NewsletterSection />
      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
