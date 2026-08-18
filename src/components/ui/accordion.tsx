import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type AccordionVariant = "default" | "theme" | "soft" | "card" | "bordered";

const AccordionContext = React.createContext<{
  variant?: AccordionVariant;
}>({ variant: "default" });

const accordionItemVariants = cva("transition-all duration-300", {
  variants: {
    variant: {
      default: "border-b border-pink-100/80",
      theme:
        "bg-white/95 backdrop-blur-xl rounded-[22px] border border-pink-100/90 shadow-[0_4px_20px_rgba(23,37,84,0.03)] data-[state=open]:shadow-[0_12px_36px_rgba(234,52,132,0.1)] data-[state=open]:border-pink-200/90 hover:border-pink-200 overflow-hidden",
      soft: "bg-pink-50/70 rounded-[20px] border border-pink-200/60 hover:bg-pink-50 data-[state=open]:bg-white data-[state=open]:border-[#EA3484]/40 data-[state=open]:shadow-md overflow-hidden",
      card: "bg-white rounded-[20px] border border-slate-100 shadow-sm hover:shadow-md data-[state=open]:border-pink-200 data-[state=open]:shadow-md overflow-hidden",
      bordered:
        "rounded-[20px] border-2 border-pink-100 hover:border-[#EA3484]/30 data-[state=open]:border-[#EA3484] bg-white/80 overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between font-medium transition-all duration-300 cursor-pointer text-left focus:outline-hidden",
  {
    variants: {
      variant: {
        default:
          "py-4 text-sm md:text-base font-semibold text-[#172554] hover:text-[#EA3484] [&[data-state=open]>svg]:rotate-180",
        theme:
          "px-5 sm:px-6 py-4.5 sm:py-5 text-sm sm:text-base md:text-[16px] font-semibold text-[#172554] hover:text-[#EA3484] data-[state=open]:text-[#EA3484] group [&[data-state=open]_.accordion-icon-badge]:rotate-180 [&[data-state=open]_.accordion-icon-badge]:bg-gradient-to-r [&[data-state=open]_.accordion-icon-badge]:from-[#EA3484] [&[data-state=open]_.accordion-icon-badge]:to-[#F45B8A] [&[data-state=open]_.accordion-icon-badge]:text-white [&[data-state=open]_.accordion-icon-badge]:border-transparent",
        soft: "px-5 py-4 text-sm sm:text-base font-semibold text-[#172554] hover:text-[#EA3484] data-[state=open]:text-[#EA3484] group [&[data-state=open]_.accordion-icon-badge]:rotate-180 [&[data-state=open]_.accordion-icon-badge]:bg-[#EA3484] [&[data-state=open]_.accordion-icon-badge]:text-white",
        card: "px-5 py-4 text-sm sm:text-base font-semibold text-[#172554] hover:text-[#EA3484] data-[state=open]:text-[#EA3484] group [&[data-state=open]>svg]:rotate-180",
        bordered:
          "px-5 py-4 text-sm sm:text-base font-semibold text-[#172554] hover:text-[#EA3484] data-[state=open]:text-[#EA3484] group [&[data-state=open]>svg]:rotate-180",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const accordionContentVariants = cva(
  "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-all",
  {
    variants: {
      variant: {
        default: "pb-4 pt-0 text-[#475569] leading-relaxed",
        theme:
          "px-5 sm:px-6 pb-5 sm:pb-6 pt-2 text-[#475569] text-xs sm:text-sm md:text-[14.5px] leading-relaxed border-t border-pink-50/80 font-normal",
        soft: "px-5 pb-5 pt-2 text-[#475569] text-xs sm:text-sm leading-relaxed border-t border-pink-100/60 font-normal",
        card: "px-5 pb-5 pt-2 text-[#475569] text-xs sm:text-sm leading-relaxed border-t border-slate-50 font-normal",
        bordered:
          "px-5 pb-5 pt-2 text-[#475569] text-xs sm:text-sm leading-relaxed border-t border-pink-50 font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type AccordionProps = (
  AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps
) & {
  variant?: AccordionVariant;
  className?: string;
  children?: React.ReactNode;
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ variant = "default", className, ...props }, ref) => (
  <AccordionContext.Provider value={{ variant }}>
    {props.type === "multiple" ? (
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(variant !== "default" ? "space-y-3.5" : "", className)}
        {...props}
      />
    ) : (
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(variant !== "default" ? "space-y-3.5" : "", className)}
        {...props}
      />
    )}
  </AccordionContext.Provider>
));
Accordion.displayName = "Accordion";

interface AccordionItemProps
  extends
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant: itemVariant, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const activeVariant = itemVariant || context.variant || "default";

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItemVariants({ variant: activeVariant }), className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {
  iconType?: "chevron" | "badge" | "plus";
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant: triggerVariant, iconType, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const activeVariant = triggerVariant || context.variant || "default";
  const showBadge = iconType === "badge" || (activeVariant === "theme" && iconType !== "chevron");

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants({ variant: activeVariant }), className)}
        {...props}
      >
        <span className="flex-1 pr-3">{children}</span>
        {showBadge ? (
          <div className="accordion-icon-badge shrink-0 ml-3 h-8 w-8 rounded-full bg-pink-50 text-[#EA3484] border border-pink-200/80 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-2xs">
            <ChevronDown className="h-4 w-4 transition-transform duration-300" />
          </div>
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-[#EA3484] transition-transform duration-200 ml-3" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

interface AccordionContentProps
  extends
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
    VariantProps<typeof accordionContentVariants> {}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, variant: contentVariant, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const activeVariant = contentVariant || context.variant || "default";

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(accordionContentVariants({ variant: activeVariant }), className)}
      {...props}
    >
      <div className="pt-2">{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = "AccordionContent";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
};
