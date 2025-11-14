'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for CompanyPage
 */
export function CompanyPageSkeletonTemplate() {
  return (
    <main className="w-full bg-white pt-32">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none mb-12" />

      {/* About Section */}
      <section className="py-12 md:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SkeletonLoader height="h-12" width="w-2/3 mx-auto md:mx-0" className="mb-6" />
          <SkeletonLoader height="h-6" width="w-3/4 mx-auto md:mx-0" className="mb-12" />
          <div className="flex gap-6 flex-col md:flex-row">
            <SkeletonLoader height="h-24" width="w-full md:w-1/2" />
            <SkeletonLoader height="h-24" width="w-full md:w-1/2" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <SkeletonLoader height="h-12" width="w-1/2 mx-auto" className="mb-12" />
          <SkeletonLoader height="h-20" width="w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-purple-900">
        <div className="max-w-7xl mx-auto">
          <SkeletonLoader height="h-12" width="w-3/4" className="mb-12 bg-purple-800" />
          
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="space-y-6 md:flex grid grid-row-3 md:flex-col w-full md:w-1/3">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonLoader key={i} height="h-8" width="w-full md:w-2/3" className="bg-purple-800 rounded-none" />
              ))}
            </div>

            <SkeletonLoader height="h-48" width="w-full md:w-1/2" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="flex flex-col bg-white items-center py-12 md:py-20">
        <div className="py-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full">
          <SkeletonLoader height="h-10" width="w-1/2 mx-auto md:mx-0" className="mb-10" />

          <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <SkeletonLoader height="h-96" width="w-80" className="rounded-3xl" />
            <div className="flex-1 space-y-6 w-full">
              <SkeletonLoader height="h-8" width="w-2/3" />
              <SkeletonLoader height="h-6" width="w-1/2" />
              <SkeletonLoader height="h-20" width="w-full" />
              <SkeletonLoader height="h-20" width="w-full" />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-black w-full py-16 items-center justify-start">
          <div className="flex flex-col justify-center mx-auto items-center">
            <SkeletonLoader height="h-12" width="w-1/3 mx-auto" className="mb-10 bg-gray-800" />

            <div className="flex flex-col md:flex-row items-start flex-wrap space-x-0 md:space-x-5 space-y-10 md:space-y-0">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <SkeletonLoader height="h-64" width="w-80" className="rounded-lg bg-gray-800" />
                  <SkeletonLoader height="h-6" width="w-64 mx-auto" className="bg-gray-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
