import { useState, useEffect } from 'react'

/**
 * Hook to manage skeleton loading state
 * @param initialState - Whether to start in loading state
 * @param duration - How long to show skeleton (in ms)
 * @returns Object with isLoading state
 */
export function useSkeleton(initialState: boolean = true, duration: number = 2000) {
  const [isLoading, setIsLoading] = useState(initialState)

  useEffect(() => {
    if (initialState) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [initialState, duration])

  return { isLoading }
}
