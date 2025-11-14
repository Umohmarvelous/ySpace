# Fade-In Animations & Image Optimization Guide

## Overview

This guide explains how to add scroll-triggered fade-in animations and image optimization to all pages using Framer Motion and Next.js Image optimization.

## Files Created

### 1. Motion Variants Library (`lib/motion-variants.ts`)

Reusable animation variants for consistent animations across all pages:

- `fadeInVariants` - Simple opacity fade
- `fadeInUpVariants` - Fade + slide up
- `fadeInLeftVariants` - Fade + slide left
- `fadeInRightVariants` - Fade + slide right
- `staggerContainerVariants` - Container for staggered animations
- `scaleInVariants` - Fade + scale
- `scrollAnimationConfig` - Standard scroll animation config

**Usage:**

```tsx
import {
  fadeInUpVariants,
  staggerContainerVariants,
  scrollAnimationConfig,
} from "@/lib/motion-variants";

<motion.div {...scrollAnimationConfig} variants={fadeInUpVariants}>
  Content
</motion.div>;
```

### 2. Optimized Image Component (`components/optimized-image.tsx`)

Wrapper around Next.js Image for automatic optimization:

- Lazy loading for below-fold images
- Priority loading for hero/above-fold images
- Responsive `sizes` attribute
- Quality: 75 (good balance between quality and file size)

**Usage:**

```tsx
import { OptimizedImage } from "@/components/optimized-image";

<OptimizedImage
  src="/image.png"
  alt="Description"
  width={300}
  height={300}
  quality={75}
/>;
```

### 3. ScrollFade Component (`components/scroll-fade.tsx`)

Wrapper component for applying scroll animations with one line:

**Usage:**

```tsx
import { ScrollFade } from "@/components/scroll-fade";

<ScrollFade variant="container">
  <ScrollFade>Content 1</ScrollFade>
  <ScrollFade>Content 2</ScrollFade>
</ScrollFade>;
```

## Implementation Pattern

### Step 1: Add Imports

```tsx
import {
  fadeInUpVariants,
  staggerContainerVariants,
  scrollAnimationConfig,
} from "@/lib/motion-variants";
```

### Step 2: Wrap Containers with staggerContainerVariants

```tsx
<motion.section {...scrollAnimationConfig} variants={staggerContainerVariants}>
  {/* Child elements inherit stagger animation */}
</motion.section>
```

### Step 3: Animate Child Elements

```tsx
<motion.div variants={fadeInUpVariants}>
  Title
</motion.div>

<motion.div variants={fadeInUpVariants}>
  Description
</motion.div>
```

### Step 4: Optimize Images

Replace:

```tsx
<Image src="/img.png" width={300} height={300} alt="alt" />
```

With:

```tsx
<Image
  src="/img.png"
  width={300}
  height={300}
  alt="alt"
  quality={75}
  loading="lazy"
  priority={false} // true for hero images
/>
```

## Pages Updated

✅ **Complete:**

- Home Page (`/app/home-page/page.tsx`)
- Blog Page (`/app/blog-page/page.tsx`)

⏳ **In Progress:**

- Career Page
- Company Page
- Contact Page
- Crowdfunding Page
- Service Page
- Technology Page
- Vendor Page

## Quick Apply Template

For each remaining page, follow this pattern:

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// ... other imports
import {
  fadeInUpVariants,
  fadeInVariants,
  staggerContainerVariants,
  scrollAnimationConfig,
} from "@/lib/motion-variants";

export default function PageName() {
  // ... component logic

  return (
    <>
      {/* Section with staggered children */}
      <motion.section
        {...scrollAnimationConfig}
        variants={staggerContainerVariants}
        className="..."
      >
        <motion.h2 variants={fadeInUpVariants}>Title</motion.h2>
        <motion.p variants={fadeInUpVariants}>Description</motion.p>

        <motion.div variants={staggerContainerVariants} className="grid ...">
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeInUpVariants}>
              {/* Item content */}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* For images */}
      <motion.div {...scrollAnimationConfig} variants={fadeInUpVariants}>
        <Image
          src="/image.png"
          alt="description"
          width={300}
          height={300}
          quality={75}
          loading="lazy"
        />
      </motion.div>
    </>
  );
}
```

## Performance Benefits

1. **Animations:**

   - Smooth fade-in on scroll triggers user attention
   - Professional polish to user experience
   - Scroll reveals improve perceived performance

2. **Image Optimization:**
   - Lazy loading reduces initial bundle
   - Quality=75 balances quality and file size
   - Responsive `sizes` attribute reduces bandwidth
   - Priority loading for hero images ensures fast display

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers
- ✅ Respects `prefers-reduced-motion`

## Notes

- All animations trigger when element comes into view
- Only animate once (`viewport: { once: true }`)
- Amount: 0.2 means animation triggers when 20% of element is visible
- Stagger delay: 100ms between each child
- Image quality=75 provides good balance; adjust to 80-85 for high-quality needs
