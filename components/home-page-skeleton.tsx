'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for HomePage
 * Displays a loading state while the actual page content is being loaded
 */
export function HomePageSkeletonTemplate() {
  return (
    <main className="w-full">
      {/* Hero Section Skeleton */}
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <SkeletonLoader height="h-96" width="w-4/5" />
      </div>

      {/* Features Section Skeleton */}
      <section className="py-12 md:py-30 px-4 sm:px-6 lg:px-8 mb-16">
        {/* Image Skeleton */}
        <div className="flex items-center justify-center h-100 w-full my-12">
          <SkeletonLoader height="h-80" width="w-3/4" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Title Skeleton */}
          <div className="text-center mb-12">
            <SkeletonLoader height="h-10" width="w-1/2 mx-auto" className="mb-4" />
            <SkeletonLoader height="h-6" width="w-2/3 mx-auto" />
          </div>

          {/* Feature Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                <SkeletonLoader height="h-48" width="w-full" className="rounded-t-lg" />
                <div className="p-6 space-y-3">
                  <SkeletonLoader height="h-6" width="w-3/4" />
                  <SkeletonLoader height="h-4" width="w-full" />
                  <SkeletonLoader height="h-4" width="w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section Skeleton */}
      <section className="max-w-7xl mx-auto flex items-center flex-col px-4">
        <div className="flex flex-col items-center justify-center mb-12 w-full">
          <SkeletonLoader height="h-10" width="w-2/3 mx-auto" className="mb-4" />
          <SkeletonLoader height="h-6" width="w-1/2 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full py-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
              <SkeletonLoader height="h-40" width="w-full" className="rounded-t-lg" />
              <div className="p-4 space-y-2">
                <SkeletonLoader height="h-5" width="w-3/4" />
                <SkeletonLoader height="h-4" width="w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section Skeleton */}
      <section className="py-12 md:py-16 px-4 lg:px-0 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SkeletonLoader height="h-10" width="w-1/3 mx-auto" className="mb-4" />
            <SkeletonLoader height="h-6" width="w-1/2 mx-auto" />
          </div>

          {/* Steps Skeleton */}
          <div className="space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-1 space-y-3">
                  <SkeletonLoader height="h-6" width="w-1/3" />
                  <SkeletonLoader height="h-4" width="w-full" />
                  <SkeletonLoader height="h-4" width="w-5/6" />
                </div>
                <div className="flex-1">
                  <SkeletonLoader height="h-48" width="w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section Skeleton */}
      <section className="my-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
            {/* Title Side */}
            <div className="flex-1 w-full md:max-w-2xl space-y-3">
              <SkeletonLoader height="h-10" width="w-1/2" />
              <SkeletonLoader height="h-6" width="w-3/4" />
            </div>

            {/* FAQ Items Skeleton */}
            <div className="flex-1 space-y-3 w-full md:max-w-2xl">
              {[1, 2, 3, 4, 5].map((i) => (
                <SkeletonLoader key={i} height="h-16" width="w-full" className="rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section Skeleton */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-2xl mx-auto space-y-4">
          <SkeletonLoader height="h-12" width="w-3/4" />
          <SkeletonLoader height="h-6" width="w-full" />
          <SkeletonLoader height="h-6" width="w-4/5" />
          <SkeletonLoader height="h-10" width="w-1/3 mt-8" />
        </div>
      </section>

      {/* Support Section Skeleton */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <SkeletonLoader height="h-10" width="w-2/3 mx-auto" />
          <div className="space-y-3">
            <SkeletonLoader height="h-4" width="w-full" />
            <SkeletonLoader height="h-4" width="w-5/6 mx-auto" />
          </div>

          {/* Progress Bar Skeleton */}
          <div className="bg-gray-100 rounded-lg p-6 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <SkeletonLoader height="h-20" width="w-full md:w-2/3" />
              <SkeletonLoader height="h-12" width="w-full md:w-1/4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
