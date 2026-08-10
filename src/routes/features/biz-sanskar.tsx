import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const beejPillars = [
  {
    title: "Physical Purity (Shuddhi)",
    desc: "Detoxifying the body through Ayurvedic principles, wholesome nutrition, and lifestyle changes to create a healthy environment for the seed.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-pink-100 to-rose-50",
    iconColor: "text-rose-500 bg-rose-100",
  },
  {
    title: "Mental Harmony",
    desc: "Achieving a stress-free, positive state of mind through meditation, positive literature, and emotional bonding between partners.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "from-blue-100 to-indigo-50",
    iconColor: "text-blue-500 bg-blue-100",
  },
  {
    title: "Spiritual Awakening",
    desc: "Connecting with divine energies through specific Vaidic Mantras, Sankalp Poojan, and spiritual practices to invite a noble soul.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: "from-amber-100 to-orange-50",
    iconColor: "text-amber-500 bg-amber-100",
  },
  {
    title: "Cosmic Timing",
    desc: "Understanding the astrological alignments and Muhurats to choose the most auspicious time for conception (Garbhadhana Samskara).",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-purple-100 to-fuchsia-50",
    iconColor: "text-purple-500 bg-purple-100",
  },
];

const programFeatures = [
  {
    title: "Personalized Ayurvedic Diet & Nutrition",
    img: "/images/features/nutritionist_session.jpg",
    tagline: "Nourish the soil before planting the seed.",
    body: [
      "Diet is the most critical component of physical preparation. Our Ayurvedic experts provide customized diet plans tailored to the unique body constitution (Prakriti) of both partners.",
      "Learn which foods boost fertility, detoxify the reproductive system, and balance the doshas (Vata, Pitta, Kapha) to ensure optimum physical health prior to conception."
    ],
  },
  {
    title: "Yoga & Meditation for Fertility",
    img: "/images/features/yoga_session.jpg",
    tagline: "Align your mind, body, and breath.",
    body: [
      "Stress is one of the leading causes of conception difficulties. Our program includes guided Yoga Asanas specifically designed to improve blood circulation to the pelvic region and strengthen the reproductive organs.",
      "Coupled with deep meditation and Pranayama, you will learn to release anxiety and embrace a calm, receptive state of mind."
    ],
  },
  {
    title: "Sankalp Poojan & Vaidic Mantras",
    img: "/images/features/sankalp_poojan.jpg",
    tagline: "Invite a divine and noble soul.",
    body: [
      "Beej Sanskar is deeply rooted in spirituality. We guide couples through the sacred Sankalp Poojan—setting a profound intention for the kind of soul they wish to invite into their family.",
      "Receive access to specific Vaidic mantras and chants that purify the aura of the home and the couple, creating a divine atmosphere conducive to a blessed conception."
    ],
  },
];

export default function BizSanskar() {
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
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
          <img 
            src="/images/features_banner_premium.png" 
            alt="Beej Sanskar" 
            className="w-full h-[250px] md:h-[400px] object-cover object-center block contrast-[1.05] saturate-[1.1] rounded-[30px] transition-transform duration-1000 group-hover:scale-105" 
          />
        </div>
      </section>

      {/* 2. Title & Intro Section */}
      <section className="py-10 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-[#EA3484] text-sm font-bold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA3484]"></span>
            </span>
            Pre-Conception Preparation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A3A6C] tracking-tight mb-6">
            Beej Sanskar <span className="text-[#EA3484]">🌱</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Just as a farmer meticulously prepares the soil before planting a seed to ensure a bountiful harvest, parents must prepare their body, mind, and soul before inviting a new life. <strong>Beej Sanskar</strong> is the sacred Vaidic science of pre-conception purification.
          </p>
        </div>
      </section>

      {/* 3. The 4 Pillars Grid */}
      <section ref={pillarsRef} className="py-16 md:py-24 bg-gradient-to-br from-white via-pink-50/30 to-blue-50/30 relative border-y border-pink-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">The 4 Pillars of Beej Sanskar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Holistic preparation requires alignment across all dimensions of your being.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {beejPillars.map((pillar, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">Inside the Beej Sanskar Program</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
          </div>
          
          <div className="space-y-16 md:space-y-24">
            {programFeatures.map((f, i) => {
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
                    <div className="inline-flex items-center gap-2 bg-pink-100 text-[#EA3484] font-bold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      Phase {i + 1}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-4 tracking-tight">{f.title}</h3>
                    <h4 className="text-xl text-[#EA3484] font-serif italic mb-6">"{f.tagline}"</h4>
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
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A3A6C] to-[#2a5298] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Ready to Begin Your Sacred Journey?</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Join thousands of couples who have embraced Beej Sanskar to lay a flawless foundation for their future child's health and intellect.
          </p>
          <button className="relative z-10 bg-white text-[#EA3484] font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
            Consult our Experts Today
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
