import { Skeleton } from '@/components/ui/skeleton'
export const SkeletonCategory = () => {
  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <Skeleton className="h-full min-h-[12px] w-[170px] rounded-2xl bg-marusColor-marron/20" />
        <Skeleton className="h-0 w-[150px] rounded-2xl bg-marusColor-marron/20 py-3" />
      </div>
      <div className="grid grid-cols-2 gap-x-1.5 gap-y-1.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="relative max-w-full">
            <Skeleton className="h-full min-h-[380px] w-full rounded-2xl bg-marusColor-marron/20" />
          </div>
        ))}
      </div>
    </>
  )
}
