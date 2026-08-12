import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const AI_AWARD_CARDS = [
  "/images/award_card_1.png",
  "/images/award_card_2.png",
  "/images/award_card_3.png",
];

const awards = [
  {
    img: "/images/award_card_1.png",
    caption:
      "Vedmurti Shri A.T. Narayanan Namboothiri with Hon. Prime Minister Shri Narendra Modi for his invaluable services of Vedas",
  },
  {
    img: "/images/award_card_2.png",
    caption:
      "President Shri Pranab Mukherjee listening to Samvedic Chants by Vedmurti Dr. Sivakaran Thottam Namboothiri",
  },
  {
    img: "/images/award_card_3.png",
    caption:
      "Prof. Vipin Joshi appreciated by Hon. Lok Sabha Speaker Mrs. Sumitra Mahajan for his novel idea of Astro Baby",
  },
  {
    img: "/images/award_card_1.png",
    caption: "Chief Minister Shri Shivraj Singh Chouhan felicitating Prof. Vipin Joshi",
  },
  {
    img: "/images/award_card_2.png",
    caption:
      "Awarded by Hon'ble Cabinet Minister Govt. of India Shri Nitin Gadkari as an 'Emerging Entrepreneur'",
  },
  {
    img: "/images/award_card_3.png",
    caption:
      "President of the News Broadcasters Association of India, Chairman & Senior Editor of India TV, Mr. Rajat Sharma",
  },
  {
    img: "/images/award_card_1.png",
    caption: "Cabinet Minister Shri Satyapal Singh felicitating Prof. Vipin Joshi",
  },
  {
    img: "/images/award_card_2.png",
    caption:
      "Cabinet Health Minister (Govt. of India) Shri S. P. Singh Baghel felicitating Prof. Vipin Joshi with the 'Swasthya Bharat Samman'",
  },
  {
    img: "/images/award_card_3.png",
    caption: "Dr. S. Rangrajan, ISRO Program Director, felicitating Prof. Vipin Joshi",
  },
];

function Layout({ children, activeLabel }: { children: React.ReactNode; activeLabel?: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      <HeaderNavbar />

      {children}

      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.</div>
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

export default function AwardsPage() {
  const awardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!awardsGridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-award-card]",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "opacity,transform",
        },
      );
    }, awardsGridRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout activeLabel="Awards & Accolades">
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-[30px] shadow-lg border border-pink-100/90">
          <img
            src="/images/awards_banner.png"
            alt="Awards & Accolades"
            className="w-full h-auto object-cover max-h-[380px] rounded-[30px]"
          />
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F63D8E] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-sm">
            National Recognition
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A3A6C] tracking-tight">
            Garbhadhan Sanskar Program — <span className="text-[#F63D8E]">Awards & Accolades</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed text-base md:text-lg">
            Astro Baby Garbhadhan Sanskar has been honoured by the highest offices, ministries and
            respected institutions across India for its contribution towards a healthier, wiser and
            more sanskarit generation.
          </p>
        </div>
      </section>

      <section
        ref={awardsGridRef}
        className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]"
      >
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((a, i) => (
            <article
              key={i}
              data-award-card
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-md border border-pink-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative group">
                <img
                  src={a.img}
                  alt={a.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-sm md:text-base text-slate-700 leading-relaxed font-sans font-medium">
                {a.caption}
              </div>
            </article>
          ))}
        </div>
      </section>

      <AppDownloadSection />
    </Layout>
  );
}
