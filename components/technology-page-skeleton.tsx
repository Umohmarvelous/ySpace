'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for TechnologyPage
 */
export function TechnologyPageSkeletonTemplate() {
  return (
    <main className="w-full bg-white">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none" />

      {/* Hero Section */}
      <section className="relative min-h-auto bg-white flex items-center overflow-hidden pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-6">
          <SkeletonLoader height="h-16" width="w-2/3 md:w-1/2" />
          <SkeletonLoader height="h-6" width="w-3/4 md:w-2/3" />
          <SkeletonLoader height="h-12" width="w-1/2" className="rounded-lg" />
        </div>
      </section>

      {/* Designed for Reliability */}
      <section className="pt-12 pb-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <SkeletonLoader height="h-12" width="w-1/2" />

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <SkeletonLoader height="h-6" width="w-2/3" />
                <SkeletonLoader height="h-32" width="w-full" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spec */}
      <section className="bg-white pb-32 pt-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <SkeletonLoader height="h-12" width="w-1/2 mx-auto md:mx-auto" />

          <div className="space-y-4">
            <SkeletonLoader height="h-4" width="w-1/3" />
            <SkeletonLoader height="h-6" width="w-1/2" />
          </div>

          <div className="flex flex-col space-y-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-row items-center justify-between">
                <SkeletonLoader height="h-4" width="w-1/3" />
                <SkeletonLoader height="h-4" width="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
