import { Skeleton } from "./ui/skeleton"

export function HomePageSkeleton() {
  return (
    <>
      <main className="w-full">
        {/* Hero Section Skeleton */}
        <div className="w-full h-96 bg-gray-100">
          <Skeleton className="w-full h-full" />
        </div>

        {/* Features Section Skeleton */}
        <section className="py-12 md:py-30 px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center justify-center h-100 w-full my-12">
            <Skeleton className="h-96 w-full max-w-4xl" />
          </div>
          <div className="max-w-7xl mx-auto">
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-80 w-full rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section Skeleton */}
        <section className="max-w-7xl mx-auto flex items-center flex-col">
          <div className="flex flex-col items-center justify-center mb-12 w-full">
            <Skeleton className="h-10 w-96 mb-2" />
            <Skeleton className="h-6 w-full max-w-xl" />
          </div>

          <div className="flex flex-col md:flex-row items-start flex-wrap space-x-0 space-y-10 m-0 md:space-y-0 py-12 md:py-5 px-4 sm:px-6 bg-gray-50 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1 min-w-[200px]">
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section Skeleton */}
        <section className="py-2 md:py-16 px-4 lg:px-0 bg-white">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-12" />

            <div className="max-w-3xl mx-auto space-y-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <Skeleton className="h-6 w-40 mb-4" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                  <Skeleton className="h-48 w-48 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section Skeleton */}
        <section className="my-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start space-y-16 md:space-y-0">
              <div className="flex-1 w-full px-6 md:px-0">
                <Skeleton className="h-10 w-32 mb-2" />
                <Skeleton className="h-6 w-40" />
              </div>

              <div className="flex-1 w-full md:max-w-2xl space-y-3">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans Section Skeleton */}
        <section className="relative py-52 md:py-40 px-4 sm:px-6 lg:px-8 text-white text-center mb-0">
          <div className="absolute inset-0 bg-gray-300" />
          <div className="relative max-w-2xl mx-auto top-[70px] left-14 md:left-32">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-24 w-full mb-8" />
            <Skeleton className="h-12 w-40" />
          </div>
        </section>

        {/* Support Section Skeleton */}
        <section className="py-12 md:py-0 px-4 sm:px-6 lg:px-8 my-20">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-10 w-80 mx-auto mb-4" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-16" />

            <div className="bg-gray-100 rounded-lg p-6 max-w-lg mx-auto">
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
