import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top automatically when navigating to a new route
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Track scroll depth and percentage for floating button
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 260);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  // Circular progress ring parameters
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-5 sm:right-7 z-50 flex items-center justify-center group"
        >
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#EA3484] via-[#F45B8A] to-[#FF70A6] text-white shadow-[0_8px_25px_rgba(234,52,132,0.45)] hover:shadow-[0_12px_32px_rgba(234,52,132,0.65)] transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-3 focus:ring-pink-300/80"
          >
            {/* Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none"
              viewBox={`0 0 ${size} ${size}`}
            >
              {/* Background ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-white/20"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Active animated progress ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-white transition-all duration-150"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Icon */}
            <ArrowUp className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
