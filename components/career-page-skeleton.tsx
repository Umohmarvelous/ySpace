'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for CareerPage
 */
export function CareerPageSkeletonTemplate() {
  return (
    <main className="w-full bg-white">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none" />

      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SkeletonLoader height="h-16" width="w-1/2" className="mb-4" />
          <SkeletonLoader height="h-6" width="w-3/4" />
        </div>
      </section>

      {/* Team Images */}
      <section className="overflow-x-hidden w-full h-auto py-12 bg-white relative">
        <div className="flex flex-row justify-between">
          <SkeletonLoader height="h-96" width="w-full md:w-2/3" className="rounded-none md:rounded-tr-2xl" />
          <div className="hidden md:flex md:flex-col md:space-y-2 w-1/3">
            <SkeletonLoader height="h-48" width="w-full" className="rounded-none" />
            <SkeletonLoader height="h-48" width="w-full" className="rounded-none" />
          </div>
        </div>
      </section>

      {/* Working at Yspace Section */}
      <section className="pt-12 bg-gray-50 pb-12">
        <div className="max-w-5xl mx-auto px-8">
          <SkeletonLoader height="h-12" width="w-1/2 mx-auto" className="mb-6" />
          <SkeletonLoader height="h-6" width="w-1/3 mx-auto" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonLoader key={i} height="h-48" width="w-full" className="rounded-2xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <SkeletonLoader height="h-12" width="w-1/2 mx-auto" className="mb-4" />
          <SkeletonLoader height="h-6" width="w-2/3 mx-auto" className="mb-12" />

          <div className="px-6 flex justify-center mb-12 gap-2 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonLoader key={i} height="h-8" width="w-24" className="rounded-full" />
            ))}
          </div>

          <div className="space-y-4 px-6">
            {[1, 2].map((i) => (
              <SkeletonLoader key={i} height="h-20" width="w-full" className="rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
