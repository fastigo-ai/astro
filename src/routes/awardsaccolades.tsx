import { motion, useReducedMotion } from "motion/react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";
import LazyImage from "@/components/common/LazyImage";

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

function Layout({ children }: { children: React.ReactNode; activeLabel?: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      <HeaderNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default function AwardsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Layout activeLabel="Awards & Accolades">
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-[30px] shadow-lg border border-pink-100/90"
        >
          <img
            src="/images/awards_banner.png"
            alt="Awards & Accolades"
            className="w-full h-auto object-cover max-h-[380px] rounded-[30px]"
          />
        </motion.div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
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
        </motion.div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-md border border-pink-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative group">
                <LazyImage
                  src={a.img}
                  alt={a.caption}
                  fallbackSrc="/images/award_card_1.png"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-sm md:text-base text-slate-700 leading-relaxed font-sans font-medium">
                {a.caption}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <AppDownloadSection />
    </Layout>
  );
}
