import { Link } from "react-router-dom";
import { useState } from "react";
import AboutAstroBabyDetail from "@/components/AboutAstroBabyDetail";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const missionPoints = [
  {
    icon: "feature1.svg",
    title: "Positive Pregnancy",
    text: "Empower every couple with knowledge, wisdom & tools for a happy and healthy pregnancy journey.",
  },
  {
    icon: "feature2.svg",
    title: "Great Children",
    text: "Nurture the growing baby in the womb with good values, health and virtues for a brighter next generation.",
  },
  {
    icon: "feature3.svg",
    title: "Global Reach",
    text: "Take the science of Garbh Sanskar to every home across the world, breaking language & geographical barriers.",
  },
  {
    icon: "feature4.svg",
    title: "Scientific Approach",
    text: "Combine ancient Indian Garbh Sanskar wisdom with modern medical & psychological science.",
  },
];

const teamRoles = [
  "IITians",
  "Scientists",
  "Gynaecologists",
  "Garbh Sanskar Experts",
  "Vedmurti Brahmins",
  "Life Trainers",
  "Yoga Experts",
  "Meditators",
  "Nutritionists",
  "Revered Astrologers",
  "Musicians",
  "Child Psychologists",
];

const stats = [
  { icon: "feature1.svg", num: "1 Lakh+", label: "Downloads" },
  { icon: "feature2.svg", num: "1200000+", label: "YouTube Views" },
  { icon: "feature3.svg", num: "62+", label: "Countries" },
  { icon: "feature4.svg", num: "4.6 Stars", label: "Rating on Google Play Store" },
  { icon: "feature5.svg", num: "Thousands", label: "of Happy, Healthy & Stress free Pregnancies" },
];

const milestones = [
  {
    year: "2018",
    title: "The Vision",
    text: "Astro Baby was envisioned as a bridge between ancient Garbh Sanskar wisdom and modern-day pregnant couples.",
  },
  {
    year: "2019",
    title: "Research & Development",
    text: "Years of research by IITians, doctors, scientists & Vedic scholars shaped the curriculum.",
  },
  {
    year: "2020",
    title: "App Launch",
    text: "The Astro Baby Garbh Sanskar mobile application launched on Android & iOS platforms.",
  },
  {
    year: "2022",
    title: "1 Lakh Downloads",
    text: "Reached 1,00,000+ downloads across 62+ countries, changing lives across the globe.",
  },
  {
    year: "Today",
    title: "A Movement",
    text: "Now the world's most trusted Garbh Sanskar app, appreciated by dignitaries of national stature.",
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      {/* Header & Navbar */}
      <HeaderNavbar />

      {/* Page title banner */}
      <section className="py-10 border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1a3a6c]">About Us</h1>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-[#1a3a6c]">About Us</span>
          </p>
        </div>
      </section>

      {/* Premium About Astro Baby Section */}
      <AboutAstroBabyDetail />

      {/* Journey / Milestones */}
      <section className="py-14 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-10">
            Our Journey
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1a3a6c]/20 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                    i % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  <div
                    className={`${i % 2 === 0 ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}`}
                  >
                    <div className="inline-block bg-[#1a3a6c] text-white font-bold px-4 py-1 rounded-full text-sm mb-2">
                      {m.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a3a6c] mb-2">{m.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{m.text}</p>
                  </div>
                  <div className={`${i % 2 === 0 ? "" : "md:order-1"} hidden md:block`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <AppDownloadSection />

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
