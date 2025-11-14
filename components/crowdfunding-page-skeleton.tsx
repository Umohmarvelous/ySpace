'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for CrowdfundingPage
 */
export function CrowdfundingPageSkeletonTemplate() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none" />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SkeletonLoader height="h-16" width="w-full md:w-3/4 mx-auto" />
          <SkeletonLoader height="h-6" width="w-full md:w-2/3 mx-auto" />

          {/* Video Skeleton */}
          <SkeletonLoader height="h-96" width="w-full" className="rounded-2xl" />

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <SkeletonLoader key={i} height="h-24" width="w-full" className="rounded-2xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Why We Need Your Support */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-6">
          <SkeletonLoader height="h-12" width="w-3/4" />
          <SkeletonLoader height="h-6" width="w-full" />
          <SkeletonLoader height="h-6" width="w-5/6" />
        </div>
      </section>

      {/* Where Your Support Goes */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SkeletonLoader height="h-12" width="w-1/2 mx-auto" className="mb-6" />
          <SkeletonLoader height="h-6" width="w-2/3 mx-auto" className="mb-16" />

          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
                <div className="flex-1 space-y-3">
                  <SkeletonLoader height="h-6" width="w-1/2" />
                  <SkeletonLoader height="h-4" width="w-full" />
                </div>
                <SkeletonLoader height="h-48" width="w-full sm:w-1/3" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <SkeletonLoader height="h-6" width="w-2/3 mx-auto" className="mb-12 bg-gray-800" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <SkeletonLoader key={i} height="h-80" width="w-full" className="rounded-lg bg-gray-800" />
            ))}
          </div>

          {/* Progress Bar */}
          <SkeletonLoader height="h-24" width="w-full" className="rounded-lg bg-gray-800" />
        </div>
      </section>
    </main>
  )
}
