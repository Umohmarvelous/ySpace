'use client'

import Image from 'next/image'
import React from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

/**
 * Optimized Image component wrapper
 * Uses Next.js Image optimization with proper loading strategies
 */
export function OptimizedImage({
  src,
  alt,
  width = 300,
  height = 300,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 75,
}: OptimizedImageProps) {
  // Use priority for above-the-fold images
  const isAboveFold = priority || src.includes('hero') || src.includes('Hero')

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      priority={isAboveFold}
      loading={isAboveFold ? 'eager' : 'lazy'}
      quality={quality}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      placeholder={fill ? undefined : 'empty'}
    />
  )
}
