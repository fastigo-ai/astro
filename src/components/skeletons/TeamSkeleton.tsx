import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function TeamSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      <NavbarSkeleton />

      {/* 1. Top Hero Image Banner Skeleton */}
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
        <Skeleton className="w-full h-[180px] sm:h-[260px] md:h-[340px] rounded-[30px] bg-slate-300/80 shadow-md border border-pink-100" />
      </section>

      {/* 2. Header & Search Bar Skeleton */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] border-b border-pink-200/60 px-4 text-center">
        <div className="max-w-6xl mx-auto space-y-4">
          <Skeleton className="h-7 w-48 mx-auto bg-[#F63D8E]/90 rounded-full" />
          <Skeleton className="h-8 sm:h-12 md:h-14 w-full md:w-3/4 mx-auto bg-[#1A3A6C]/20 rounded-2xl" />
          <Skeleton className="h-4 sm:h-5 w-full max-w-2xl mx-auto bg-slate-200/90" />
          <Skeleton className="h-4 sm:h-5 w-4/5 max-w-xl mx-auto bg-slate-200/90" />

          {/* Search bar skeleton */}
          <div className="mt-8 max-w-md mx-auto pt-2">
            <Skeleton className="h-12 w-full rounded-full bg-white shadow-sm border border-pink-200/80" />
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs Skeleton */}
      <section className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <Skeleton className="h-9 w-20 rounded-full bg-[#EA3484] shrink-0" />
            <Skeleton className="h-9 w-36 rounded-full bg-white border border-pink-100 shrink-0" />
            <Skeleton className="h-9 w-32 rounded-full bg-white border border-pink-100 shrink-0" />
            <Skeleton className="h-9 w-44 rounded-full bg-white border border-pink-100 shrink-0" />
            <Skeleton className="h-9 w-40 rounded-full bg-white border border-pink-100 shrink-0" />
            <Skeleton className="h-9 w-48 rounded-full bg-white border border-pink-100 shrink-0" />
          </div>
        </div>
      </section>

      {/* 4. Members Alternating Row Cards Skeleton */}
      <section className="py-12 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Section Sub-header */}
          <div className="flex justify-between items-center pb-3 border-b border-pink-200/80">
            <Skeleton className="h-7 w-48 bg-[#1A3A6C]/20 rounded-lg" />
            <Skeleton className="h-7 w-36 bg-pink-100/90 rounded-full border border-pink-200" />
          </div>

          {/* Member Card Items */}
          {Array.from({ length: 4 }).map((_, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={i}
                className="grid md:grid-cols-3 gap-8 md:gap-10 items-center bg-gradient-to-br from-white via-[#FFF8FD] to-[#FAF2FF] p-6 sm:p-8 md:p-10 rounded-[32px] border border-pink-200/90 shadow-md"
              >
                {/* Image Side */}
                <div className={`${reverse ? "md:order-2" : ""} md:col-span-1 flex justify-center`}>
                  <Skeleton className="w-full max-w-xs aspect-square rounded-[24px] bg-slate-300/80 shadow-lg border-4 border-white" />
                </div>

                {/* Content Side */}
                <div
                  className={`${reverse ? "md:order-1" : ""} md:col-span-2 space-y-4 flex flex-col justify-center`}
                >
                  <Skeleton className="h-7 w-44 bg-[#EA3484]/90 rounded-full shadow-xs" />
                  <Skeleton className="h-8 sm:h-10 w-3/4 bg-[#1E293B]/20 rounded-xl" />
                  <Skeleton className="h-8 w-full sm:w-4/5 bg-rose-50 border border-rose-200/60 rounded-2xl" />

                  <div className="space-y-3 border-t border-rose-100/80 pt-4">
                    <div className="flex gap-2 items-center">
                      <Skeleton className="h-3.5 w-3.5 rounded-full bg-rose-400 shrink-0" />
                      <Skeleton className="h-4 w-full bg-slate-200/90" />
                    </div>
                    <div className="flex gap-2 items-center">
                      <Skeleton className="h-3.5 w-3.5 rounded-full bg-rose-400 shrink-0" />
                      <Skeleton className="h-4 w-full bg-slate-200/90" />
                    </div>
                    <div className="flex gap-2 items-center">
                      <Skeleton className="h-3.5 w-3.5 rounded-full bg-rose-400 shrink-0" />
                      <Skeleton className="h-4 w-4/5 bg-slate-200/90" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FooterSkeleton />
    </div>
  );
}
