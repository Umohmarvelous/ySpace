/**
 * Animated skeleton loading component
 */
export function SkeletonLoader({ className = '', height = 'h-20', width = 'w-full' }: { 
  className?: string
  height?: string
  width?: string
}) {
  return (
    <div
      className={`${width} ${height} ${className} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse`}
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 2s infinite',
      }}
    />
  )
}

/**
 * Keyframes animation for shimmer effect
 */
export const shimmerAnimation = `
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`
