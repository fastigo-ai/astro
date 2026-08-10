import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <NavbarSkeleton />

      {/* Blog Hero & Search Bar Skeleton */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-center space-y-4 px-4 border-b border-slate-100">
        <Skeleton className="h-6 w-36 mx-auto bg-pink-100/90 rounded-full border border-pink-200" />
        <Skeleton className="h-8 sm:h-12 w-64 sm:w-96 mx-auto bg-[#1a3a6c]/20 rounded-2xl" />
        <Skeleton className="h-4 w-72 sm:w-full max-w-lg mx-auto bg-slate-200/90" />
        
        {/* Search Bar Input Skeleton */}
        <div className="max-w-xl mx-auto pt-3">
          <Skeleton className="h-12 w-full rounded-2xl bg-white shadow-sm border border-slate-200/80" />
        </div>

        {/* Category Filter Pills Skeleton */}
        <div className="flex items-center justify-start sm:justify-center gap-2 max-w-4xl mx-auto pt-4 overflow-x-auto no-scrollbar pb-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-28 sm:w-32 rounded-full bg-white border border-slate-200/80 shrink-0 shadow-2xs" />
          ))}
        </div>
      </section>

      {/* Featured Article Banner Card Skeleton */}
      <section className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50/80 backdrop-blur-md rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <Skeleton className="w-full aspect-[16/10] rounded-2xl bg-slate-300/80 shadow-xs" />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-28 bg-pink-100/90 rounded-full" />
              <Skeleton className="h-4 w-20 bg-slate-200/80" />
            </div>
            <Skeleton className="h-7 sm:h-9 w-full bg-[#1a3a6c]/20 rounded-xl" />
            <Skeleton className="h-7 sm:h-9 w-4/5 bg-[#1a3a6c]/20 rounded-xl" />
            <Skeleton className="h-4 w-full bg-slate-200/80" />
            <Skeleton className="h-4 w-5/6 bg-slate-200/80" />
            
            <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
              <Skeleton className="h-10 w-10 rounded-full bg-pink-200/80 shrink-0" />
              <div className="space-y-1.5 w-full">
                <Skeleton className="h-4 w-32 bg-[#1a3a6c]/20 rounded-md" />
                <Skeleton className="h-3 w-24 bg-slate-200/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Blog Posts Skeleton */}
      <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs space-y-4 p-4 flex flex-col justify-between">
              <div className="space-y-3.5">
                <Skeleton className="w-full aspect-[16/10] rounded-2xl bg-slate-300/80 shadow-2xs" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-24 bg-pink-100/90 rounded-full" />
                  <Skeleton className="h-3.5 w-16 bg-slate-200/80" />
                </div>
                <Skeleton className="h-6 w-full bg-[#1a3a6c]/20 rounded-md" />
                <Skeleton className="h-4 w-5/6 bg-slate-200/80" />
              </div>

              <div className="pt-3 flex justify-between items-center border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-7 w-7 rounded-full bg-blue-100/90" />
                  <Skeleton className="h-3.5 w-24 bg-slate-200/80" />
                </div>
                <Skeleton className="h-3.5 w-16 bg-slate-200/80" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar Skeleton */}
        <div className="flex justify-center items-center gap-2 pt-6">
          <Skeleton className="h-10 w-10 rounded-xl bg-slate-200/80" />
          <Skeleton className="h-10 w-10 rounded-xl bg-pink-200/90" />
          <Skeleton className="h-10 w-10 rounded-xl bg-slate-200/80" />
        </div>
      </section>

      <FooterSkeleton />
    </div>
  );
}
