import { motion } from "framer-motion";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const garbhFeaturesList = [
  {
    title: "Vaidic Mantra Vrushti",
    img: "/images/features/vaidic_mantra_vrushti.jpg",
    tagline: "Miraculous chants for the promotion of special qualities.",
    body: [
      "The Vedas mention special mantras for pregnancy, which have miraculous effects on the fetus. These powerful sound vibrations penetrate the womb and stimulate the baby's developing nervous system.",
      "Chanted by knowledgeable Vaidic brahmins, these mantras have been scientifically proven to have a divine and positive effect, ensuring a calm and highly intelligent child.",
    ],
  },
  {
    title: "Garbhadhan Sanskar Music Therapy",
    img: "/images/features/garbhsanskar_music.jpg",
    tagline: "Music based on specific ragas for ideal development.",
    body: [
      "Music is the language of the soul. Indian classical ragas and Garbhadhan Sanskar music have a profound impact on the mood, mind, and body of both the mother and the baby.",
      "Our curated musical tracks enhance virtues in the fetus, boost cognitive development, and keep the pregnant woman relaxed, stress-free, and positive throughout her 9-month journey.",
    ],
  },
  {
    title: "Yoga Nidra & Deep Relaxation",
    img: "/images/features/yognidra.jpg",
    tagline: "Unlocking the power of the subconscious mind.",
    body: [
      "Pregnancy can bring physical fatigue and emotional mood swings. Yoga Nidra (yogic sleep) is a powerful technique to release deep-seated stress and tension.",
      "Through guided visualization, the mother achieves a state of profound relaxation, allowing maximum blood flow and oxygen to reach the baby, fostering exceptional growth.",
    ],
  },
];

export default function GarbhSanskarFeature() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5FF] via-white to-[#FFF6FA] text-slate-800 font-sans">
      <HeaderNavbar />

      {/* 1. Hero Banner Section with Text Overlay */}
      <section className="relative z-10">
        <motion.div
          className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex items-center"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Background Banner Image */}
          <img
            src="/images/garbh_sanskar_banner.jpg"
            alt="Astro Baby Garbhadhan Sanskar"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Contrast Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-transparent sm:via-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent sm:hidden" />

          {/* Banner Content Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-16 w-full">
            <div className="max-w-2xl text-left">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-semibold mb-4 shadow-sm"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-400"></span>
                </span>
                Astro Baby • Holistic Pregnancy Care
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Garbhadhan Sanskar
                <span className="text-pink-300 font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-1.5 font-normal">
                  Nurturing Genius & Virtue from the Womb
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl font-normal drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience a joyful, spiritually uplifting 9 months with <strong>Astro Baby Garbhadhan Sanskar</strong>. Shape your child's character, intellect, and emotional quotient in the womb through Vedic mantras, classical Raga therapy, yoga, and meditation.
              </motion.p>

              {/* Action Buttons & Highlights */}
              <motion.div
                className="flex flex-wrap items-center gap-3 pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-bold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Begin Pregnancy Care
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <span className="text-white/85 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  Mantra Vrushti • Music Therapy • Yoga Nidra
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Philosophy & Intro Section */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-[#EA3484] text-sm font-bold mb-5"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Science Meets Spirituality
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A3A6C] tracking-tight mb-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Shaping Your Child Right From the Womb <span className="text-[#EA3484]">🤰</span>
          </motion.h2>
          <motion.p
            className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <strong>Garbhadhan Sanskar</strong> is not just about physical health, but shaping the character, intellect, and emotional quotient of your child right from the womb. Experience a joyful, stress-free 9-month pregnancy empowered by ancient Vedic rituals and scientific wellness.
          </motion.p>
        </div>
      </section>

      {/* 3. Deep Dive Features List */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6C] mb-4">Inside the Garbhadhan Sanskar App</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {garbhFeaturesList.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={f.title}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  <div className={`${reverse ? "lg:order-2" : ""} relative`}>
                    <div className="relative rounded-[2rem] overflow-hidden">
                      <img src={f.img} alt={f.title} className="w-full h-auto max-h-[380px] md:max-h-[420px] object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>

                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-pink-100 text-[#EA3484] font-bold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                      Feature {i + 1}
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
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Call to Action Banner */}
      <motion.section
        className="py-16 px-4 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A3A6C] to-[#2a5298] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Give Your Child the Best Start in Life</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Join the Astro Baby Garbhadhan Sanskar program today and embark on a 9-month journey of love, spirituality, and science.
          </p>
          <button className="relative z-10 bg-white text-[#EA3484] font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
            Download App & Start Free Trial
          </button>
        </div>
      </motion.section>

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
