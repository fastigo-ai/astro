import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      <NavbarSkeleton />

      {/* Hero Slider Skeleton */}
      <section className="relative w-full h-screen min-h-[600px] bg-slate-100 overflow-hidden flex items-center">
        {/* Skeleton for Background Image */}
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
        
        {/* Content Container Skeleton */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="w-full max-w-2xl space-y-6">
            {/* Heading Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-12 sm:h-16 md:h-[72px] w-4/5 bg-slate-300/80 rounded-2xl" />
              <Skeleton className="h-12 sm:h-16 md:h-[72px] w-3/4 bg-slate-300/80 rounded-2xl" />
            </div>
            
            {/* Description Skeleton */}
            <div className="space-y-3 pt-4">
              <Skeleton className="h-5 w-full bg-slate-300/60 rounded-lg" />
              <Skeleton className="h-5 w-11/12 bg-slate-300/60 rounded-lg" />
              <Skeleton className="h-5 w-3/4 bg-slate-300/60 rounded-lg" />
            </div>

            {/* Buttons Skeleton */}
            <div className="flex flex-wrap items-center gap-5 pt-8">
              <Skeleton className="h-[52px] w-[200px] bg-pink-200 rounded-full shadow-sm" />
              <Skeleton className="h-[52px] w-[180px] bg-blue-200 rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Media Logos Skeleton */}
      <section className="py-6 bg-white/50 border-y border-slate-200/40 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
          <Skeleton className="h-4 w-40 bg-slate-300/80 rounded-full" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full justify-items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-28 bg-slate-200/80 rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Skeleton */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Skeleton className="h-6 w-32 mx-auto bg-pink-100/90 rounded-full" />
          <Skeleton className="h-8 sm:h-10 w-3/4 mx-auto bg-[#1a3a6c]/20 rounded-xl" />
          <Skeleton className="h-4 w-full mx-auto bg-slate-200/80" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/80 rounded-2xl border border-slate-100 shadow-2xs">
                <Skeleton className="h-10 w-10 rounded-xl bg-pink-100/90 shrink-0" />
                <Skeleton className="h-4 w-full bg-slate-200/80" />
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 flex justify-center py-4">
            <Skeleton className="w-56 sm:w-64 h-[380px] sm:h-[440px] rounded-[40px] bg-slate-300/80 border-4 border-white shadow-xl" />
          </div>
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/80 rounded-2xl border border-slate-100 shadow-2xs">
                <Skeleton className="h-10 w-10 rounded-xl bg-blue-100/90 shrink-0" />
                <Skeleton className="h-4 w-full bg-slate-200/80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Skeleton */}
      <section className="py-10 bg-gradient-to-r from-[#1a3a6c] to-[#0f2547] text-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-2 flex flex-col items-center">
              <Skeleton className="h-8 w-8 bg-white/20 rounded-full" />
              <Skeleton className="h-7 w-24 bg-white/20 rounded-md" />
              <Skeleton className="h-4 w-20 bg-white/10 rounded-md" />
            </div>
          ))}
        </div>
      </section>

      {/* User Stories / Testimonials Slider Skeleton */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <Skeleton className="h-7 sm:h-9 w-64 mx-auto bg-[#1a3a6c]/20 rounded-xl" />
          <Skeleton className="h-4 w-full mx-auto bg-slate-200/80" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-100 space-y-3 p-4">
              <Skeleton className="w-full aspect-video rounded-2xl bg-slate-300/80" />
              <Skeleton className="h-5 w-3/4 bg-[#1a3a6c]/20 rounded-md" />
              <Skeleton className="h-4 w-1/2 bg-slate-200/80" />
            </div>
          ))}
        </div>
      </section>

      <FooterSkeleton />
    </div>
  );
}
