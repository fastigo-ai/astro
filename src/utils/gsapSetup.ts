import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Unconditionally register ScrollTrigger plugin so Vite production bundler includes it
gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

export { gsap, ScrollTrigger };
