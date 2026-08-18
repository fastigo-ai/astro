import { motion } from "framer-motion";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

const programFeatures = [
  {
    title: "Ayurvedic Consultation",
    img: "/images/features/nutritionist_session.jpg",
    tagline: "Heal the root, not just the symptoms.",
    body: [
      "Our certified Ayurvedic practitioners conduct an in-depth analysis of your Prakriti (body constitution) to design a personalized pre-conception wellness plan for both partners.",
      "From herbal formulations (Rasayanas) that enhance reproductive health to Panchakarma detox protocols that cleanse accumulated toxins—every recommendation is rooted in thousands of years of Vaidic wisdom, backed by modern understanding.",
    ],
  },
  {
    title: "Lifestyle & Diet Consultation",
    img: "/images/features/yoga_session.jpg",
    tagline: "Your daily choices shape your child's future.",
    body: [
      "What you eat, how you sleep, and how you manage stress in the months before conception directly influences the genetic expression of your child. Our experts craft a holistic daily routine covering nutrition, sleep cycles, and mindful habits.",
      "Receive a customized fertility-boosting diet plan with seasonal, Sattvic foods that balance hormones, improve egg and sperm quality, and prepare your body to be the perfect cradle for new life.",
    ],
  },
  {
    title: "Live Yoga (Fertility)",
    img: "/images/features/sankalp_poojan.jpg",
    tagline: "Move with intention. Breathe with purpose.",
    body: [
      "Join live, interactive Yoga sessions led by expert instructors specializing in fertility and pre-conception wellness. These sessions include targeted asanas that improve blood flow to reproductive organs, reduce cortisol levels, and balance hormonal activity.",
      "Combined with Pranayama (breathwork) and guided meditation, each session cultivates a deep mind-body connection—creating the calm, receptive inner environment essential for a blessed conception.",
    ],
  },
  {
    title: "Astrological Consultation",
    img: "/images/features/monthly_calendar.png",
    tagline: "Let the cosmos guide your most sacred moment.",
    body: [
      "In Vaidic science, the exact time of conception is as important as the preparation for it. Our expert astrologers analyze the Janam Kundali of both partners to identify the most auspicious Garbhadhan Muhurat—the ideal cosmic window for conception.",
      "Understand the planetary influences on your fertility, learn which celestial alignments support a healthy pregnancy, and receive Vaidic remedies to neutralize any negative doshas—ensuring your child enters the world under the most favorable stars.",
    ],
  },
  {
    title: "Community Support",
    img: "/images/features/lets_smile_together.jpg",
    tagline: "You are never alone on this journey.",
    body: [
      "The path to parenthood can be emotionally demanding. Our exclusive Beej Sanskar community connects you with hundreds of couples who share the same aspirations, fears, and dreams—creating a powerful support network built on empathy and shared wisdom.",
      "Participate in moderated group sessions, access a library of shared experiences, and receive ongoing encouragement from certified counselors and community mentors who are with you every step of the way.",
    ],
  },
];

export default function BizSanskar() {
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
            src="/images/beej_sanskar_banner.jpg"
            alt="Astro Baby Beej Sanskar"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Contrast Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/50 to-transparent sm:bg-gradient-to-l sm:from-slate-950/95 sm:via-slate-950/75 sm:to-transparent" />
          <div className="absolute inset-0 bg-slate-950/30 sm:bg-transparent" />

          {/* Banner Content Overlay (Right-Aligned) */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-16 w-full flex justify-end">
            <div className="max-w-xl lg:max-w-2xl text-left">
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
                Astro Baby • Sacred Pre-Conception
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Beej Sanskar
                <span className="text-pink-300 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-1.5">
                  Nurture Today, Bless Tomorrow
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-pink-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl font-normal drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Prepare your mind, body, and soul with <strong>Astro Baby Beej Sanskar</strong>.
                Align with sacred Vaidic science, customized Ayurvedic nutrition, cosmic Muhurat
                timing, and fertility yoga to invite a noble, healthy, and blessed child.
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(234,52,132,0.4)] hover:shadow-[0_6px_25px_rgba(234,52,132,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Start Beej Sanskar
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <span className="text-white/85 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  Ayurveda • Yoga • Astrological Muhurat
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Vaidic Philosophy & Intro Section */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-[#EA3484] text-xs font-semibold uppercase tracking-wider mb-5"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Vaidic Foundation
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A3A6C] tracking-tight leading-[1.2] mb-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ancient Wisdom Backed by Science <span className="text-[#EA3484]">🌱</span>
          </motion.h2>
          <motion.p
            className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Just as a farmer meticulously prepares the soil before planting a seed to ensure a
            bountiful harvest, parents must purify and nourish their physical body, mental calmness,
            and spiritual energy before conception. <strong>Beej Sanskar</strong> at Astro Baby
            provides a complete roadmap to lay the strongest foundation for your future generation.
          </motion.p>
        </div>
      </section>

      {/* 4. Deep Dive Features List */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A3A6C] mb-4 leading-[1.2] tracking-tight">
              Inside the Beej Sanskar Program
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {programFeatures.map((f, i) => {
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
                  <div className={`${reverse ? "lg:order-2" : ""} relative group`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-rose-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-white">
                      <img
                        src={f.img}
                        alt={f.title}
                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C]/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 bg-pink-100 text-[#EA3484] font-semibold text-xs px-4 py-2 rounded-full mb-6 w-max">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Phase {i + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E293B] mb-2 tracking-tight leading-tight">
                      {f.title}
                    </h3>
                    <h4 className="text-lg text-[#EA3484] font-semibold mb-6">"{f.tagline}"</h4>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg font-normal">
                      {f.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Contact Us Button */}
                    <div className="mt-8">
                      <a
                        href="/contact-us"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F45B8A] hover:bg-[#d94d7a] text-white font-semibold text-sm shadow-[0_4px_18px_rgba(244,91,138,0.28)] hover:shadow-[0_8px_24px_rgba(244,91,138,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group"
                      >
                        Contact Us
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
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

      {/* 5. Call to Action Banner */}
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

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Join thousands of couples who have embraced Beej Sanskar to lay a flawless foundation
            for their future child's health and intellect.
          </p>
          <button className="relative z-10 bg-white text-[#EA3484] font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
            Consult our Experts Today
          </button>
        </div>
      </motion.section>

      <AppDownloadSection
        title={
          <>
            Start Your Journey with <span className="text-[#EA3484]">Astro Baby</span>
          </>
        }
        subtitle="Download the app to explore all features."
      />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
