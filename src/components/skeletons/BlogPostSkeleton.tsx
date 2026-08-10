import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <NavbarSkeleton />

      {/* Article Header Skeleton */}
      <article className="py-8 md:py-14 max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-28 bg-slate-100 rounded-full border border-slate-200" />
          <Skeleton className="h-6 w-28 bg-pink-100/90 rounded-full" />
        </div>
        
        <div className="space-y-3">
          <Skeleton className="h-8 sm:h-12 w-full bg-[#1a3a6c]/20 rounded-2xl" />
          <Skeleton className="h-8 sm:h-12 w-4/5 bg-[#1a3a6c]/20 rounded-2xl" />
        </div>

        {/* Author & Article Metadata Bar Skeleton */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100">
          <div className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full bg-pink-200/80 shrink-0" />
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-36 bg-[#1a3a6c]/20 rounded-md" />
              <Skeleton className="h-3 w-40 bg-slate-200/80" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-8 rounded-full bg-slate-100" />
            <Skeleton className="h-8 w-8 rounded-full bg-slate-100" />
          </div>
        </div>

        {/* Main Article Hero Image Skeleton */}
        <Skeleton className="w-full aspect-[16/9] rounded-3xl bg-slate-300/80 shadow-xs" />

        {/* Article Body Content Skeletons */}
        <div className="space-y-4 pt-6">
          <Skeleton className="h-4 w-full bg-slate-200/90" />
          <Skeleton className="h-4 w-full bg-slate-200/90" />
          <Skeleton className="h-4 w-5/6 bg-slate-200/90" />
          <Skeleton className="h-4 w-4/5 bg-slate-200/90" />

          {/* Highlight Callout Quote Block Skeleton */}
          <div className="p-6 bg-pink-50/70 rounded-3xl border-l-4 border-pink-400 space-y-3 my-8 shadow-2xs">
            <Skeleton className="h-5 w-3/4 bg-pink-200/80 rounded-md" />
            <Skeleton className="h-4 w-full bg-pink-100/80 rounded-md" />
            <Skeleton className="h-4 w-5/6 bg-pink-100/80 rounded-md" />
          </div>

          <Skeleton className="h-4 w-full bg-slate-200/90" />
          <Skeleton className="h-4 w-full bg-slate-200/90" />
          <Skeleton className="h-4 w-3/4 bg-slate-200/90" />
        </div>
      </article>

      <FooterSkeleton />
    </div>
  );
}
