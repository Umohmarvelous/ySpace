'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for VendorPage
 */
export function VendorPageSkeletonTemplate() {
  return (
    <main className="w-full bg-white">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none" />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 sm:px-6 text-center bg-gray-300 text-white">
        <div className="max-w-2xl mx-auto space-y-6">
          <SkeletonLoader height="h-16" width="w-full md:w-3/4 mx-auto" className="bg-gray-700" />
          <SkeletonLoader height="h-6" width="w-full md:w-2/3 mx-auto" className="bg-gray-700" />
          <SkeletonLoader height="h-12" width="w-80 mx-auto md:w-auto" className="rounded-lg bg-gray-700" />
        </div>
      </section>

      {/* Partner Logo Section */}
      <section className="flex w-full items-center justify-center py-16 bg-white">
        <SkeletonLoader height="h-20" width="w-32" className="rounded-lg" />
      </section>

      {/* Vendor Steps */}
      <section className="flex flex-col md:flex-row items-center md:items-start flex-wrap space-x-0 space-y-10 m-0 md:space-y-0 py-12 md:py-5 px-4 sm:px-6 bg-gray-50">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 min-w-64 space-y-4">
            <SkeletonLoader height="h-40" width="w-full" className="rounded-lg" />
            <SkeletonLoader height="h-6" width="w-3/4" />
            <SkeletonLoader height="h-4" width="w-full" />
            <SkeletonLoader height="h-4" width="w-5/6" />
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="flex items-center justify-center flex-col w-full py-12">
        <SkeletonLoader height="h-6" width="w-1/2 mx-auto" className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonLoader key={i} height="h-72" width="w-full" className="rounded-xl" />
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="flex flex-col md:flex-row items-start justify-between w-full py-24 bg-yellow-50 px-5 md:px-12 gap-12">
        <div className="space-y-3">
          <SkeletonLoader height="h-10" width="w-32" />
          <SkeletonLoader height="h-6" width="w-40" />
        </div>

        <div className="w-full md:w-96 flex space-y-5 flex-col">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonLoader key={i} height="h-16" width="w-full" className="rounded-lg" />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-5 md:p-12 my-5 md:my-0">
        <div className="bg-cyan-50 space-y-8 w-full flex items-center justify-center flex-col py-12 rounded-2xl">
          <SkeletonLoader height="h-8" width="w-2/3 md:w-1/2" />
          <SkeletonLoader height="h-10" width="w-32" className="rounded-md" />
        </div>
      </section>
    </main>
  )
}
