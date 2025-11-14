'use client'

import React, { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'
import {
  fadeInUpVariants,
  staggerContainerVariants,
  scrollAnimationConfig,
} from '@/lib/motion-variants'

interface ScrollFadeProps extends Omit<MotionProps, 'children'> {
  children: ReactNode
  delay?: number
  variant?: 'fadeUp' | 'container'
  className?: string
}

/**
 * Wrapper component for scroll-triggered fade-in animations
 * Makes it easy to apply consistent animations across all pages
 */
export function ScrollFade({
  children,
  delay = 0,
  variant = 'fadeUp',
  className = '',
  ...props
}: ScrollFadeProps) {
  const selectedVariant = variant === 'container' ? staggerContainerVariants : fadeInUpVariants
  
  return (
    <motion.div
      className={className}
      {...scrollAnimationConfig}
      variants={selectedVariant}
      transition={delay > 0 ? { delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
