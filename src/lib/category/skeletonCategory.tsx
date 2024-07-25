import { Skeleton } from "@/components/ui/skeleton";
export const SkeletonCategory = () => {
  return (
    <div className="grid grid-cols-2 gap-x-1.5 gap-y-1.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 15 }).map((_, index) => (
        <div key={index} className="relative max-w-full">
          <Skeleton className="h-full min-h-[380px] w-full rounded-2xl bg-marusColor-marron/20" />
        </div>
      ))}
    </div>
  );
};
