"use client"
import type { JSX } from "react"

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText = "Learn More",
  secondaryButtonText = "Get Started",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps): JSX.Element {
  return (
    <section
      className="relative w-full h-96 md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">{title}</h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-gray-100 text-balance">{subtitle}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onPrimaryClick}
            className="px-6 md:px-8 py-3 md:py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="px-6 md:px-8 py-3 md:py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors border border-white/50"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  )
}
