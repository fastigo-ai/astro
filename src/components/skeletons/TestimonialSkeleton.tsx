import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function TestimonialSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      <NavbarSkeleton />

      {/* Header Banner Skeleton */}
      <section className="py-8 md:py-12 text-center space-y-3 border-b border-slate-200/50 px-4">
        <Skeleton className="h-6 w-36 mx-auto bg-pink-100/90 rounded-full border border-pink-200" />
        <Skeleton className="h-8 sm:h-12 w-64 sm:w-96 mx-auto bg-[#1a3a6c]/20 rounded-2xl" />
        <Skeleton className="h-4 w-72 sm:w-full max-w-lg mx-auto bg-slate-200/90" />
      </section>

      {/* Filter Tabs Skeleton */}
      <div className="py-6 flex flex-wrap justify-center items-center gap-3 max-w-2xl mx-auto px-4">
        <Skeleton className="h-10 w-36 sm:w-40 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 shadow-xs" />
        <Skeleton className="h-10 w-36 sm:w-40 rounded-full bg-white/90 border border-slate-200/80" />
        <Skeleton className="h-10 w-28 rounded-full bg-white/90 border border-slate-200/80" />
      </div>

      {/* Video Stories Cards Grid Skeleton */}
      <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center px-1">
          <Skeleton className="h-6 w-44 bg-[#1a3a6c]/20 rounded-md" />
          <Skeleton className="h-4 w-24 bg-slate-200/80" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-100/80 shadow-xs p-4 space-y-4">
              <div className="relative">
                <Skeleton className="w-full aspect-video rounded-2xl bg-slate-300/80" />
                <Skeleton className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/80 shadow-md flex items-center justify-center" />
              </div>
              <div className="flex items-center justify-between pt-1">
                <Skeleton className="h-5 w-36 bg-[#1a3a6c]/20 rounded-md" />
                <Skeleton className="h-4 w-20 bg-pink-100/90 rounded-full" />
              </div>
              <Skeleton className="h-3.5 w-24 bg-slate-200/80" />
            </div>
          ))}
        </div>
      </section>

      {/* Written Parent Experience Grid Skeleton */}
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto space-y-6">
        <Skeleton className="h-6 w-52 bg-[#1a3a6c]/20 rounded-md" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-slate-100/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full bg-pink-200/80 shrink-0" />
                <div className="space-y-1.5 w-full">
                  <Skeleton className="h-4 w-32 bg-[#1a3a6c]/20 rounded-md" />
                  <Skeleton className="h-3 w-20 bg-amber-200/80 rounded-md" />
                </div>
              </div>
              <Skeleton className="h-4 w-full bg-slate-200/80" />
              <Skeleton className="h-4 w-full bg-slate-200/80" />
              <Skeleton className="h-4 w-2/3 bg-slate-200/80" />
            </div>
          ))}
        </div>
      </section>

      <FooterSkeleton />
    </div>
  );
}
