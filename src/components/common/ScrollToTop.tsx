import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const circleRef = useRef<SVGCircleElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const lenis = useLenis();

  // Scroll to top ONLY when the route actually changes
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      window.scrollTo(0, 0);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, lenis]);

  // Circular progress ring parameters
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;

  // Ultra-performant scroll listener: updates DOM style directly with 0 component re-renders
  useLenis((instance) => {
    const scroll = instance.scroll || 0;
    const progress = Math.min(1, Math.max(0, instance.progress || 0));

    // Update SVG stroke-dashoffset directly without re-rendering
    if (circleRef.current) {
      const offset = circumference - progress * circumference;
      circleRef.current.style.strokeDashoffset = `${offset}px`;
    }

    // Toggle button visibility only when state changes
    const shouldShow = scroll > 260;
    if (shouldShow !== isVisibleRef.current) {
      isVisibleRef.current = shouldShow;
      setIsVisible(shouldShow);
    }
  });

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: shouldReduceMotion ? 0 : 1.2,
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-21 right-4 sm:bottom-23 sm:right-7 z-50 flex items-center justify-center group"
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
              {/* Active animated progress ring updated directly */}
              <circle
                ref={circleRef}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-white transition-none"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
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
