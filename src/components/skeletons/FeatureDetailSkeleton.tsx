import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function FeatureDetailSkeleton({ title }: { title?: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5FF] via-white to-[#FFF6FA] text-slate-800 font-sans">
      <NavbarSkeleton />

      {/* 1. Top Hero Image Banner Skeleton */}
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
        <Skeleton className="w-full h-[220px] sm:h-[320px] md:h-[400px] rounded-[30px] bg-slate-300/80 shadow-xl border border-pink-100/90" />
      </section>

      {/* 2. Title & Intro Section Skeleton */}
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <Skeleton className="h-8 w-48 sm:w-56 mx-auto bg-pink-100/90 rounded-full border border-pink-200" />
          <Skeleton className="h-10 sm:h-14 md:h-16 w-3/4 mx-auto bg-[#1A3A6C]/20 rounded-2xl" />
          <div className="space-y-3 pt-2">
            <Skeleton className="h-4 sm:h-5 w-full mx-auto bg-slate-200/90" />
            <Skeleton className="h-4 sm:h-5 w-5/6 mx-auto bg-slate-200/90" />
            <Skeleton className="h-4 sm:h-5 w-4/5 mx-auto bg-slate-200/90" />
          </div>
        </div>
      </section>

      {/* 3. The 4 Pillars Grid Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-pink-50/30 to-blue-50/30 border-y border-pink-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Skeleton className="h-8 sm:h-10 w-72 md:w-96 mx-auto bg-[#1A3A6C]/20 rounded-xl" />
            <Skeleton className="h-4 sm:h-5 w-full max-w-md mx-auto bg-slate-200/90" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-white/90 backdrop-blur-md border border-white/60 shadow-lg space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Skeleton className="w-16 h-16 rounded-2xl bg-pink-100/90 border border-pink-200/60" />
                  <Skeleton className="h-6 w-3/4 bg-[#1A3A6C]/20 rounded-md" />
                  <Skeleton className="h-4 w-full bg-slate-200/80" />
                  <Skeleton className="h-4 w-5/6 bg-slate-200/80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Features List Skeleton */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-24">
          <div className="flex flex-col items-center text-center space-y-3">
            <Skeleton className="h-8 sm:h-10 w-72 sm:w-80 mx-auto bg-[#1A3A6C]/20 rounded-xl" />
            <Skeleton className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {Array.from({ length: 3 }).map((_, i) => {
              const reverse = i % 2 === 1;
              return (
                <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Image Side */}
                  <div className={`${reverse ? "lg:order-2" : ""}`}>
                    <Skeleton className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[2rem] bg-slate-300/80 border-8 border-white shadow-2xl" />
                  </div>

                  {/* Content Side */}
                  <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center space-y-4`}>
                    <Skeleton className="h-7 w-28 bg-pink-100/90 text-[#EA3484] rounded-full border border-pink-200" />
                    <Skeleton className="h-8 sm:h-10 md:h-12 w-4/5 bg-[#1E293B]/20 rounded-xl" />
                    <Skeleton className="h-6 w-3/4 bg-pink-200/80 rounded-md" />

                    <div className="space-y-3 pt-2">
                      <Skeleton className="h-4 w-full bg-slate-200/90" />
                      <Skeleton className="h-4 w-full bg-slate-200/90" />
                      <Skeleton className="h-4 w-4/5 bg-slate-200/90" />
                    </div>

                    <div className="pt-4">
                      <Skeleton className="h-11 w-36 rounded-full bg-[#F45B8A]/90 shadow-md" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Call to Action Banner Skeleton */}
      <section className="py-16 px-4 mb-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#1A3A6C] to-[#2a5298] rounded-[40px] p-10 md:p-16 text-center space-y-6 shadow-2xl">
          <Skeleton className="h-10 sm:h-14 w-full md:w-3/4 mx-auto bg-white/20 rounded-2xl" />
          <Skeleton className="h-5 w-full md:w-2/3 mx-auto bg-blue-100/20 rounded-md" />
          <Skeleton className="h-14 w-64 mx-auto rounded-full bg-white shadow-lg" />
        </div>
      </section>

      <FooterSkeleton />
    </div>
  );
}
