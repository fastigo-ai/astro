import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "skeleton-shimmer rounded-xl bg-slate-200/70 dark:bg-slate-800/60 shadow-xs",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
