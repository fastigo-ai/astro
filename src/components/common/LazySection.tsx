import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface LazySectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function LazySection({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: LazySectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === "none") return { opacity: 0, x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30, x: 0 };
      case "down":
        return { opacity: 0, y: -30, x: 0 };
      case "left":
        return { opacity: 0, x: 30, y: 0 };
      case "right":
        return { opacity: 0, x: -30, y: 0 };
      default:
        return { opacity: 0, y: 30, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn("will-change-[transform,opacity]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
