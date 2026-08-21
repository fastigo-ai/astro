import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { HelpCircle } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import StoriesSlider from "@/components/StoriesSlider";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HomeBgDrawings from "@/components/HomeBgDrawings";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import StickyLeftNavigation from "@/components/common/StickyLeftNavigation";
import NewsletterSection from "@/components/common/NewsletterSection";
import Footer from "@/components/common/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Home() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      q: t("faqs.items.0.q", "How do I get started with AstroBaby?"),
      a: t("faqs.items.0.a", "Simply sign up on AstroBaby and enter basic details such as your pregnancy stage, expected due date, and birth details if you want personalized astrology-based guidance. AstroBaby will then create a customized journey for you."),
    },
    {
      q: t("faqs.items.1.q", "Can AstroBaby provide personalized pregnancy and baby guidance?"),
      a: t("faqs.items.1.a", "Yes. AstroBaby provides personalized insights, daily or weekly guidance, suggestions, and activities based on your pregnancy stage and the information you provide."),
    },
    {
      q: t("faqs.items.2.q", "How does AstroBaby use astrology to personalize recommendations?"),
      a: t("faqs.items.2.a", "AstroBaby uses birth details and astrological calculations to generate personalized insights and recommendations. These insights are designed for guidance and entertainment and should not replace professional medical advice."),
    },
    {
      q: t("faqs.items.3.q", "Do I need to know my or my partner's exact birth date and time?"),
      a: t("faqs.items.3.a", "Exact birth details can help provide more personalized astrological insights. However, if some details are unavailable, you can still use AstroBaby and access its general pregnancy and baby guidance features."),
    },
    {
      q: t("faqs.items.4.q", "Can I use AstroBaby if I am planning a baby but not pregnant yet?"),
      a: t("faqs.items.4.a", "Yes. AstroBaby can also support users who are planning for pregnancy by providing relevant wellness guidance, preparation tips, and personalized astrology-based insights."),
    },
    {
      q: t("faqs.items.5.q", "Is my personal and pregnancy information safe with AstroBaby?"),
      a: t("faqs.items.5.a", "AstroBaby is designed to handle your information securely and use it to personalize your experience. Your personal details should only be used according to AstroBaby's privacy policy and applicable data protection practices."),
    },
  ];

  return (
    <div className="home-bg min-h-screen text-slate-800">
      {/* SVG background drawings — home page only */}
      <HomeBgDrawings />

      {/* Header & Navbar */}
      <HeaderNavbar />

      {/* Sticky Left Navigation Quick Tools */}
      <StickyLeftNavigation />

      {/* Hero */}
      <HeroSlider />

      {/* About */}
      <AboutSection />

      {/* Features */}
      <FeaturesSection />

      {/* Stories Slider */}
      <StoriesSlider />

      {/* ── FAQ Section with Custom Theme Accordion ── */}
      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-[#FFF5F9] via-[#FFFDFE] to-[#FFF8FD] border-b border-pink-100/70 overflow-hidden">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EA3484] backdrop-blur-sm shadow-2xs">
              <HelpCircle className="h-3.5 w-3.5" /> <span>{t("faqs.badge", "Answers to Your Questions")}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#172554] leading-[1.2] tracking-tight">
              {t("faqs.heading", "Frequently Asked Questions – AstroBaby")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#EA3484] to-[#F45B8A] rounded-full mx-auto my-2"></div>
            <p className="text-sm md:text-base text-[#475569] font-normal leading-relaxed">
              {t("faqs.subtitle", "Everything you need to know about getting started, personalized guidance, astrological calculations, and privacy.")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Accordion type="single" collapsible defaultValue="item-0" variant="theme">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} variant="theme">
                  <AccordionTrigger variant="theme">{f.q}</AccordionTrigger>
                  <AccordionContent variant="theme">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
