import { Skeleton } from "@/components/ui/skeleton";

export default function FooterSkeleton() {
  return (
    <footer className="bg-[#0f2547] text-white py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Skeleton className="h-10 w-40 bg-white/10 rounded-lg" />
          <Skeleton className="h-4 w-full bg-white/10" />
          <Skeleton className="h-4 w-3/4 bg-white/10" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-5 w-28 bg-white/10" />
          <Skeleton className="h-4 w-36 bg-white/10" />
          <Skeleton className="h-4 w-32 bg-white/10" />
          <Skeleton className="h-4 w-40 bg-white/10" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-5 w-28 bg-white/10" />
          <Skeleton className="h-4 w-36 bg-white/10" />
          <Skeleton className="h-4 w-28 bg-white/10" />
          <Skeleton className="h-4 w-32 bg-white/10" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-5 w-32 bg-white/10" />
          <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
          <Skeleton className="h-9 w-32 bg-white/10 rounded-full" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <Skeleton className="h-4 w-64 bg-white/10" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-16 bg-white/10" />
          <Skeleton className="h-4 w-16 bg-white/10" />
          <Skeleton className="h-4 w-16 bg-white/10" />
        </div>
      </div>
    </footer>
  );
}
