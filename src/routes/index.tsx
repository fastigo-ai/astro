import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import StoriesSlider from "@/components/StoriesSlider";
import MobileFeatureSlider from "@/components/MobileFeatureSlider";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HomeBgDrawings from "@/components/HomeBgDrawings";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import NewsletterSection from "@/components/common/NewsletterSection";

const featuredLogos = [
  "astrobaby-garbh-sanskar-dainik-bhaskar.jpg",
  "astrobaby-garbh-sanskar-dainik-divya-marathi.jpg",
  "astrobaby-garbh-sanskar-nav-bharat-times.jpg",
  "astrobaby-garbh-sanskar-times-of-india.jpg",
  "astrobaby-garbh-sanskar-zee-news.jpg",
  "astrobaby-garbh-sanskar-bharat-24.jpg",
];

const featuresLeft = [
  "Sankalp Poojan",
  "Punsavan Sanskar",
  "Simantonnayana Sanskar",
  "Garbhsanskar Sutra",
  "Vaidic Mantra Vrushti",
  "Garbhsanskar Music",
  "Jeevan Sutra - The Life Training",
  "Medi-Mitra Sessions",
  "Isht Mantra",
  "Garbhsamvad",
  "Yognidra - The stress-relief session",
  "Parv (Occasion) Based Sessions",
];

const featuresRight = [
  "Supraj Santanotpatti Havan",
  "Meditation",
  "Monthly Calendar",
  "Garbh Sanskar QnA",
  "Let's Smile Together",
  "Sandhya Prarthana",
  "Yoga Session",
  "Nutritionist Session",
  "Mentoring",
  "Brainopedia",
  "Library",
  "Doctor's Session",
];

const stats = [
  { icon: "feature1.svg", num: "1 Lakh+", label: "Downloads" },
  { icon: "feature2.svg", num: "1200000+", label: "YouTube Views" },
  { icon: "feature3.svg", num: "62+", label: "Countries" },
  { icon: "feature4.svg", num: "4.6 Stars", label: "Rating on Google Play Store" },
  { icon: "feature5.svg", num: "Thousands", label: "of Happy, Healthy & Stress free Pregnancies" },
];

const userStories = [
  {
    img: "experience_1727683696.jpg",
    yt: "vEltMP4qvhw",
    name: "Mr. & Mrs. Patil",
    loc: "Kolhapur",
  },
  {
    img: "experience_1724400221.jpg",
    yt: "5YhDhV9Eq4M",
    name: "Mrs. Preeti Shree",
    loc: "Dhanbad",
  },
  {
    img: "experience_1724396585.jpg",
    yt: "Q8V0cuHGBx4",
    name: "Mr. & Mrs. Chaturkar",
    loc: "Pune",
  },
  {
    img: "experience_1723106769.jpg",
    yt: "wGaFK-N_-eo",
    name: "Mr. & Mrs. Sinha",
    loc: "Bangalore",
  },
  { img: "experience_1698234576.jpg", yt: "tkXuMEOJCKo", name: "Mr. & Mrs. Dubey", loc: "Gwalior" },
  { img: "experience_1697802459.jpg", yt: "6MgQ1sZ_tlI", name: "Mr. & Mrs. Jalan", loc: "Delhi" },
];

const scientificEvidences = [
  {
    img: "Scientific-Evidence-03.jpg",
    text: "Maternal Music exposure during pregnancy influences neonatal behavior",
    src: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3299264/",
  },
  {
    img: "Scientific-Evidence-04.jpg",
    text: "Garbhsanskar: Knowledge, attitude & practice among antenatal mothers...",
    src: "https://www.researchgate.net/publication/285618390",
  },
  {
    img: "Scientific-Evidence-01.jpg",
    text: "Babies Listen & Learn while in the womb",
    src: "https://www.webmd.com/baby/news/20130102/babies-learn-womb",
  },
  {
    img: "Scientific-Evidence-02.jpg",
    text: "Language Learning begins in Utero, new study finds",
    src: "https://www.plu.edu/news/archive/2012/12/01/language-learning-begins-in-utero-new-study-finds/",
  },
  {
    img: "Scientific-Evidence-05.jpg",
    text: "Effects of selected aspect of Garbhsanskar on stress, coping",
    src: "https://www.ijsr.net/archive/v5i3/NOV161925.pdf",
  },
  {
    img: "Scientific-Evidence-06.jpg",
    text: "Mother - The Architect of Child",
    src: "http://www.iosrjournals.org/iosr-jhss/papers/Vol.%2022%20Issue8/Version-1/K2208017378.pdf",
  },
];

const faqs = [
  {
    q: "How to start with Astro Baby GarbhSanskar?",
    a: "To start using Astro Baby Garbhsanskar, you need to simply download 'Astro Baby' mobile application on your android device from the playstore. After installing the application just enter your basic details on the app for the free trial. After the free demo, to access full content you can select a premium plan to continue using it as per your pregnancy stage.",
  },
  {
    q: "Can I use Astro Baby on my laptop or desktop computer?",
    a: "No, 'Astro Baby Garbhsanskar' is a mobile application only service. You can access and use Astro Baby on your Android & Apple Mobile and tablet devices.",
  },
  {
    q: "I am in the 5th month of my pregnancy; am I too late to start GarbhSanskar with Astro Baby?",
    a: "Whether you are in your 1st month of pregnancy or in 9th month of pregnancy, it is never too late to start the process of garbhsanskar. Astro Baby is prepared in such a scientific way that even late joiners can benefit from this curriculum. Moreover, you can always subscribe to watch episodes of previous months of pregnancy that you've missed.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="home-bg min-h-screen text-slate-800">
      {/* SVG background drawings — home page only */}
      <HomeBgDrawings />

      {/* Header & Navbar */}
      <HeaderNavbar />

      {/* Hero */}
      <HeroSlider />

      <AboutSection />

      <FeaturesSection />

      {/* Stories Slider */}
      <StoriesSlider />

      {/* Stats */}
      <section className="py-14 relative z-10 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] border-b border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl md:text-4xl font-semibold text-[#1a3a6c] mb-10"
          >
            A Glimpse of <span className="text-red-600">Positive motherhood</span> and happier
            lives...
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((st, i) => (
              <motion.div
                key={st.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="stat-card text-center p-4 bg-white/70 backdrop-blur-md rounded-xl hover:shadow-md transition-all border border-white/80"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#F63D8E]/10 text-[#F63D8E] flex items-center justify-center font-bold text-lg">
                  ✦
                </div>
                <div className="text-xl font-bold text-[#1a3a6c]">{st.num}</div>
                <div className="text-sm text-slate-600 mt-1">{st.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 relative z-10 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] border-b border-pink-100/60">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-10"
          >
            Frequently Asked Questions (FAQs)
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="faq-item border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left px-5 py-4 bg-[#eef1f5] hover:bg-slate-200 transition-colors"
                >
                  <span className="font-semibold text-[#1a3a6c]">{f.q}</span>
                  <span className="text-[#1a3a6c] text-2xl leading-none">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 text-slate-700 leading-relaxed bg-white"
                  >
                    {f.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
