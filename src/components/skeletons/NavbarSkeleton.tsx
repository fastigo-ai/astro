import { Skeleton } from "@/components/ui/skeleton";

export default function NavbarSkeleton() {
  return (
    <div className="w-full bg-white/90 backdrop-blur-md shadow-xs sticky top-0 z-50 border-b border-slate-100">
      {/* Top mini header bar */}
      <div className="bg-[#1a3a6c] text-white py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <Skeleton className="h-3.5 w-64 bg-white/20" />
          <Skeleton className="h-3.5 w-48 bg-white/20" />
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 sm:h-10 w-28 sm:w-36 rounded-xl bg-slate-200" />
        </div>

        {/* Navigation items skeleton */}
        <div className="hidden lg:flex items-center gap-7">
          <Skeleton className="h-4 w-16 bg-slate-200" />
          <Skeleton className="h-4 w-20 bg-slate-200" />
          <Skeleton className="h-4 w-16 bg-slate-200" />
          <Skeleton className="h-4 w-28 bg-slate-200" />
          <Skeleton className="h-4 w-16 bg-slate-200" />
          <Skeleton className="h-4 w-14 bg-slate-200" />
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Skeleton className="h-10 w-36 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 shadow-xs" />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <Skeleton className="h-9 w-28 rounded-full bg-pink-100/90 border border-pink-200 md:hidden" />
          <Skeleton className="h-9 w-9 rounded-xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
