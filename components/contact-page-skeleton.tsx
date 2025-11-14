'use client'

import { SkeletonLoader } from '@/components/skeleton-loader'

/**
 * Skeleton/Loading template for ContactPage
 */
export function ContactPageSkeletonTemplate() {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-0">
      {/* Navigation */}
      <SkeletonLoader height="h-16" width="w-full" className="rounded-none" />

      {/* Hero Section */}
      <section className="py-12 md:py-40 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col justify-start space-y-12">
              <div className="w-full space-y-4">
                <SkeletonLoader height="h-16" width="w-full md:w-2/3" />
                <SkeletonLoader height="h-6" width="w-full" />
                <SkeletonLoader height="h-6" width="w-4/5" />
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3">
                    <SkeletonLoader height="h-6" width="w-1/2" />
                    <SkeletonLoader height="h-4" width="w-full" />
                    <SkeletonLoader height="h-4" width="w-3/4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex flex-col justify-start space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <SkeletonLoader key={i} height="h-12" width="w-full" className="rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
