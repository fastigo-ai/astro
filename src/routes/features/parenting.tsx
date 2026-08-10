import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const parentingPillars = [
  {
    title: "Emotional Intelligence",
    desc: "Helping children identify, understand, and manage their emotions, building strong empathy and resilience for the future.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-blue-100 to-indigo-50",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    title: "Positive Discipline",
    desc: "Moving away from punishments and yelling. Learning how to set firm boundaries with love, mutual respect, and clear communication.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-sky-100 to-cyan-50",
    iconColor: "text-sky-600 bg-sky-100",
  },
  {
    title: "Cognitive Growth",
    desc: "Engaging activities and methodologies that stimulate the child's IQ, creativity, and problem-solving skills organically.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "from-indigo-100 to-purple-50",
    iconColor: "text-indigo-600 bg-indigo-100",
  },
  {
    title: "Spiritual Grounding",
    desc: "Instilling core values, ethics, and a sense of spiritual connection to ensure the child grows up grounded and compassionate.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-violet-100 to-purple-50",
    iconColor: "text-violet-600 bg-violet-100",
  },
];

const programFeatures = [
  {
    title: "Mindful Communication",
    img: "/images/features/garbhsanskar_qna.jpg",
    tagline: "Speak so your kids will listen.",
    body: [
      "The foundation of a strong parent-child relationship is effective communication. We teach parents how to listen actively and validate their child's feelings.",
      "Learn techniques to handle tantrums gracefully, resolve conflicts without anger, and foster a home environment where the child feels safe to express themselves."
    ],
  },
  {
    title: "Age-Appropriate Milestones",
    img: "/images/features/garbhsamvad.jpg",
    tagline: "Guide them gently through every stage.",
    body: [
      "Every phase of childhood brings new challenges and milestones. Our parenting experts provide you with a comprehensive roadmap for physical, emotional, and cognitive development.",
      "Understand what to expect at each age, how to encourage independence, and how to introduce new learning concepts seamlessly into their daily routine."
    ],
  },
  {
    title: "Building a Strong Family Bond",
    img: "/images/features/lets_smile_together.jpg",
    tagline: "Create lifelong memories of joy and trust.",
    body: [
      "Parenting is not just about raising a child, but growing together as a family. We emphasize the importance of quality time, shared rituals, and emotional availability.",
      "Discover fun, engaging activities that strengthen the family unit, promote laughter, and build a resilient bond that will support your child throughout their entire life."
    ],
  },
];

export default function Parenting() {
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
        <div className="overflow-hidden rounded-[30px] shadow-[0_20px_50px_-10px_rgba(59,130,246,0.15)] border border-blue-100/90 relative group bg-slate-900/5">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
          <img 
            src="/images/features/lets_smile_together.jpg" 
            alt="Parenting Session" 
            className="w-full h-auto max-h-[450px] object-cover object-center block contrast-[1.03] saturate-[1.05] rounded-[30px] transition-transform duration-700 group-hover:scale-[1.01]" 
          />
        </div>
      </section>

      {/* 2. Title & Intro Section */}
      <section className="py-10 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            Conscious Upbringing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A3A6C] tracking-tight mb-6">
            Parenting <span className="text-blue-500">👨‍👩‍👧‍👦</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Parenting is the most profound journey of a lifetime. Our <strong>Conscious Parenting</strong> programs combine modern child psychology with ancient Vaidic wisdom to help you raise happy, resilient, and deeply connected children.
          </p>
        </div>
      </section>

      {/* 3. The 4 Pillars Grid */}
      <section ref={pillarsRef} className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 relative border-y border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">The Art of Mindful Parenting</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Guiding your child's growth across all dimensions of their personality.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {parentingPillars.map((pillar, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">Our Parenting Masterclasses</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
          </div>
          
          <div className="space-y-16 md:space-y-24">
            {programFeatures.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <article key={f.title} data-feature-item className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-indigo-200 to-sky-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl bg-slate-900/5">
                      <img src={f.img} alt={f.title} className="w-full h-auto max-h-[380px] md:max-h-[420px] object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-bold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      Parenting Course
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-4 tracking-tight">{f.title}</h3>
                    <h4 className="text-xl text-blue-600 font-serif italic mb-6">"{f.tagline}"</h4>
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
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#F45B8A] to-[#c93b68] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Empower Your Parenting Journey</h2>
          <p className="text-pink-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Join thousands of parents who have transformed their family dynamics through our conscious parenting workshops and courses.
          </p>
          <button className="relative z-10 bg-white text-[#F45B8A] font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
            Explore Parenting Workshops
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
