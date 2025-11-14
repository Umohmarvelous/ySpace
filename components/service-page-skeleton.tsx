'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for ServicePage
 */
export function ServicePageSkeletonTemplate() {
  return (
    <main className="w-full bg-white">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none" />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-gray-300 text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <SkeletonLoader height="h-16" width="w-1/2 md:w-1/3" className="bg-gray-700" />
          <SkeletonLoader height="h-6" width="w-2/3 md:w-1/2" className="bg-gray-700" />

          <div className="flex gap-4 flex-col md:flex-row pt-6">
            <SkeletonLoader height="h-12" width="w-52" className="rounded-lg bg-gray-700" />
            <SkeletonLoader height="h-12" width="w-52" className="rounded-lg bg-gray-700" />
          </div>
        </div>
      </section>

      {/* Shop on Marketplace Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SkeletonLoader height="h-12" width="w-1/2 mb-16" />

          {/* Items Section */}
          <div className="bg-gray-100 rounded-3xl p-12 space-y-8">
            <div className="flex gap-3 flex-wrap justify-center">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonLoader key={i} height="h-8" width="w-32" className="rounded-full" />
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <SkeletonLoader height="h-64" width="w-full md:w-1/2" className="rounded-2xl" />
              <div className="flex-1 space-y-3 w-full">
                <SkeletonLoader height="h-4" width="w-full" />
                <SkeletonLoader height="h-4" width="w-full" />
                <SkeletonLoader height="h-4" width="w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 w-full bg-yellow-50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-2">
            <SkeletonLoader height="h-12" width="w-24" />
            <SkeletonLoader height="h-6" width="w-32" />
          </div>

          <div className="flex-1 space-y-4 w-full md:max-w-2xl">
            {[1, 2, 3].map((i) => (
              <SkeletonLoader key={i} height="h-20" width="w-full" className="rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Send Packages Section */}
      <section className="pb-12 px-3 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center flex items-center justify-center flex-col bg-cyan-50 rounded-xl space-y-6">
          <SkeletonLoader height="h-10" width="w-2/3" />
          <SkeletonLoader height="h-6" width="w-3/4" />
          <SkeletonLoader height="h-12" width="w-40" className="rounded-lg" />
        </div>
      </section>
    </main>
  )
}
