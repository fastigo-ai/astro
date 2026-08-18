import { Skeleton } from "@/components/ui/skeleton";
import NavbarSkeleton from "./NavbarSkeleton";
import FooterSkeleton from "./FooterSkeleton";

export default function AwardsSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF] text-slate-800">
      <NavbarSkeleton />

      {/* Header Banner Skeleton */}
      <section className="py-12 text-center space-y-3 border-b border-slate-200/50">
        <Skeleton className="h-10 w-72 mx-auto bg-slate-300" />
        <Skeleton className="h-4 w-96 mx-auto bg-slate-200" />
      </section>

      {/* Awards Grid Skeleton */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm p-5 space-y-4"
            >
              <Skeleton className="w-full aspect-[4/3] rounded-2xl bg-slate-200" />
              <Skeleton className="h-5 w-4/5 bg-slate-300" />
              <Skeleton className="h-4 w-2/3 bg-blue-100" />
              <Skeleton className="h-3.5 w-full bg-slate-200" />
              <Skeleton className="h-3.5 w-4/5 bg-slate-200" />
            </div>
          ))}
        </div>
      </section>

      <FooterSkeleton />
    </div>
  );
}
