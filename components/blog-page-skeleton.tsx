'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for BlogPage
 */
export function BlogPageSkeletonTemplate() {
  return (
    <main className="w-full bg-white">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none" />

      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SkeletonLoader height="h-16" width="w-1/3" />
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-100 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col justify-between space-y-8">
                <SkeletonLoader height="h-32" width="w-full" />
                <SkeletonLoader height="h-10" width="w-1/2" />
              </div>
              <SkeletonLoader height="h-64" width="w-full" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl overflow-hidden">
                <SkeletonLoader height="h-72" width="w-full" className="rounded-none" />
                <div className="p-5 space-y-3">
                  <SkeletonLoader height="h-6" width="w-3/4" />
                  <SkeletonLoader height="h-4" width="w-full" />
                  <SkeletonLoader height="h-4" width="w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
