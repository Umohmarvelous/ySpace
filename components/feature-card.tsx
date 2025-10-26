import Image from "next/image"
import type React from "react"
import { type JSX } from "react"

interface FeatureCardProps {
  title: string
  description: string
  image?: string
  icon?: React.ReactNode
}

export default function FeatureCard({ title, description, image, icon }: FeatureCardProps): JSX.Element {
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative w-full h-48 md:h-56">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
        <button className="mt-4 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
          Learn More →
        </button>
      </div>
    </div>
  )
}
