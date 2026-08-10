import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsapSetup";

export function useGsapReveal<T extends HTMLElement>(options?: {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
}) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Reveal headers and text headings
      const headings = containerRef.current?.querySelectorAll(
        "[data-gsap='heading'], h1, h2, h3, .gsap-heading",
      );
      headings?.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: options?.y ?? 30 },
          {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 0.8,
            delay: options?.delay ?? 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: options?.start ?? "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 2. Stagger grid items, cards, and list items
      const cards = containerRef.current?.querySelectorAll(
        "[data-gsap='card'], .gsap-card, article",
      );
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: options?.stagger ?? 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: options?.start ?? "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [options]);

  return containerRef;
}
