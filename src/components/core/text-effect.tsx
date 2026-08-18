import React from "react";
import { motion, type TargetAndTransition, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type PresetType = "blur" | "fade-in-blur" | "scale" | "fade" | "slide";
type PerType = "word" | "char" | "line";

type TextEffectProps = {
  children: string;
  per?: PerType;
  as?: keyof typeof motion;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  segmentWrapperClassName?: string;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const presetVariants: Record<
  PresetType,
  { container?: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } },
      exit: { opacity: 0, filter: "blur(12px)", transition: { duration: 0.2 } },
    },
  },
  "fade-in-blur": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35 } },
      exit: { opacity: 0, y: -12, filter: "blur(8px)", transition: { duration: 0.2 } },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.2 } },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    },
  },
};

export function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
  segmentWrapperClassName,
}: TextEffectProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };

  const containerVariants: Variants = {
    hidden: { ...(variants?.container?.hidden || selectedVariants.container?.hidden) },
    visible: {
      ...(variants?.container?.visible || selectedVariants.container?.visible),
      transition: {
        delayChildren: delay,
        staggerChildren:
          (variants?.container?.visible as TargetAndTransition)?.transition?.staggerChildren ??
          (selectedVariants.container?.visible as TargetAndTransition)?.transition?.staggerChildren ??
          (per === "char" ? 0.03 : 0.08),
      },
    },
    exit: { ...(variants?.container?.exit || selectedVariants.container?.exit) },
  };

  const itemVariants: Variants = {
    hidden: { ...(variants?.item?.hidden || selectedVariants.item.hidden) },
    visible: { ...(variants?.item?.visible || selectedVariants.item.visible) },
    exit: { ...(variants?.item?.exit || selectedVariants.item.exit) },
  };

  const MotionComponent = (motion[as as keyof typeof motion] || motion.p) as React.ElementType;

  if (per === "char") {
    const words = children.split(/(\s+)/);
    return (
      <MotionComponent
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
        exit="exit"
        variants={containerVariants}
        onAnimationComplete={onAnimationComplete}
        className={cn("whitespace-normal", className)}
      >
        {words.map((word, wordIndex) => {
          if (word.match(/^\s+$/)) {
            return (
              <span key={`space-${wordIndex}`} className="inline-block whitespace-pre">
                {" "}
              </span>
            );
          }
          return (
            <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`char-${wordIndex}-${charIndex}`}
                  variants={itemVariants}
                  className={cn("inline-block", segmentWrapperClassName)}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          );
        })}
      </MotionComponent>
    );
  }

  if (per === "word") {
    const words = children.split(/(\s+)/);
    return (
      <MotionComponent
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
        exit="exit"
        variants={containerVariants}
        onAnimationComplete={onAnimationComplete}
        className={cn("whitespace-normal", className)}
      >
        {words.map((word, wordIndex) => {
          if (word.match(/^\s+$/)) {
            return (
              <span key={`space-${wordIndex}`} className="inline-block whitespace-pre">
                {" "}
              </span>
            );
          }
          return (
            <motion.span
              key={`word-${wordIndex}`}
              variants={itemVariants}
              className={cn("inline-block whitespace-nowrap", segmentWrapperClassName)}
            >
              {word}
            </motion.span>
          );
        })}
      </MotionComponent>
    );
  }

  // line
  const lines = children.split("\n");
  return (
    <MotionComponent
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
      onAnimationComplete={onAnimationComplete}
      className={cn("whitespace-pre-wrap", className)}
    >
      {lines.map((line, lineIndex) => (
        <motion.span
          key={`line-${lineIndex}`}
          variants={itemVariants}
          className={cn("block", segmentWrapperClassName)}
        >
          {line}
        </motion.span>
      ))}
    </MotionComponent>
  );
}

export function TextEffectWithCustomDelay() {
  return (
    <div className="flex flex-col space-y-0">
      <TextEffect
        per="char"
        delay={0.5}
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        Animate your ideas
      </TextEffect>
      <TextEffect per="char" delay={1.5}>
        with motion-primitives
      </TextEffect>
      <TextEffect
        per="char"
        delay={2.5}
        className="pt-12 text-xs"
        preset="blur"
      >
        (and delay!)
      </TextEffect>
    </div>
  );
}
