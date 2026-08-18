import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function AboutUsSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      <NavbarSkeleton />

      {/* Page Title Header Banner Skeleton */}
      <section className="py-8 md:py-12 border-b border-slate-200/50 text-center space-y-3 px-4">
        <Skeleton className="h-8 sm:h-12 w-48 sm:w-64 mx-auto bg-[#1a3a6c]/20 rounded-2xl" />
        <div className="flex justify-center items-center gap-2 pt-1">
          <Skeleton className="h-4 w-12 bg-pink-200/80 rounded-full" />
          <span className="text-slate-300">/</span>
          <Skeleton className="h-4 w-20 bg-blue-200/80 rounded-full" />
        </div>
      </section>

      {/* Main Hero & About Detail Section Skeleton */}
      <section className="py-10 md:py-16 px-4 md:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side Image Skeleton */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            <Skeleton className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl bg-slate-300/80 shadow-md" />
            <Skeleton className="absolute -bottom-4 -right-4 h-16 w-36 rounded-2xl bg-pink-200/90 shadow-lg border-2 border-white hidden sm:block" />
          </div>
        </div>

        {/* Right Side Detail Content Skeleton */}
        <div className="lg:col-span-7 space-y-5">
          <Skeleton className="h-6 w-36 bg-pink-100/90 rounded-full border border-pink-200" />
          <Skeleton className="h-8 sm:h-10 md:h-12 w-11/12 bg-[#1a3a6c]/20 rounded-xl" />
          <Skeleton className="h-8 sm:h-10 w-4/5 bg-[#1a3a6c]/20 rounded-xl" />

          <div className="space-y-3.5 pt-2">
            <Skeleton className="h-4 w-full bg-slate-200/90" />
            <Skeleton className="h-4 w-full bg-slate-200/90" />
            <Skeleton className="h-4 w-5/6 bg-slate-200/90" />
            <Skeleton className="h-4 w-3/4 bg-slate-200/90" />
          </div>

          {/* Quick Highlight Stats Grid Skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 bg-white/90 backdrop-blur-md rounded-2xl space-y-2 border border-slate-100 shadow-xs"
              >
                <Skeleton className="h-6 sm:h-8 w-16 bg-blue-200/80 rounded-lg" />
                <Skeleton className="h-3.5 w-20 bg-slate-200/80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Mission & Vision Grid Skeleton */}
      <section className="py-12 md:py-16 bg-white/60 backdrop-blur-xs border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Skeleton className="h-6 w-32 mx-auto bg-pink-100 rounded-full" />
            <Skeleton className="h-7 sm:h-9 w-3/4 mx-auto bg-[#1a3a6c]/20 rounded-xl" />
            <Skeleton className="h-4 w-full mx-auto bg-slate-200/80" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-3xl shadow-xs border border-slate-100/80 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Skeleton className="h-12 w-12 rounded-2xl bg-pink-100/90 border border-pink-200/60" />
                  <Skeleton className="h-6 w-3/4 bg-[#1a3a6c]/20 rounded-lg" />
                  <Skeleton className="h-4 w-full bg-slate-200/80" />
                  <Skeleton className="h-4 w-5/6 bg-slate-200/80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expert Roles Pills Skeleton */}
      <section className="py-12 px-4 max-w-7xl mx-auto space-y-6">
        <Skeleton className="h-7 w-64 mx-auto bg-[#1a3a6c]/20 rounded-xl" />
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-8 w-28 sm:w-32 rounded-full bg-white/90 border border-slate-200/80"
            />
          ))}
        </div>
      </section>

      {/* Milestones Timeline Skeleton */}
      <section className="py-12 md:py-16 max-w-4xl mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-3">
          <Skeleton className="h-8 w-60 mx-auto bg-[#1a3a6c]/20 rounded-xl" />
          <Skeleton className="h-4 w-80 mx-auto bg-slate-200/80" />
        </div>

        <div className="space-y-4 sm:space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-4 items-start bg-white/90 p-5 rounded-3xl border border-slate-100 shadow-xs"
            >
              <Skeleton className="h-9 w-20 bg-blue-100/90 text-blue-600 rounded-xl shrink-0" />
              <div className="space-y-2.5 w-full">
                <Skeleton className="h-5 sm:h-6 w-48 bg-[#1a3a6c]/20 rounded-md" />
                <Skeleton className="h-4 w-full bg-slate-200/80" />
                <Skeleton className="h-4 w-4/5 bg-slate-200/80" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSkeleton />
    </div>
  );
}
