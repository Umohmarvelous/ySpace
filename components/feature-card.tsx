import type React from "react"
import { type JSX } from "react"

interface FeatureCardProps {
  title: string
  description: string
  backgroundImage?: string
  icon?: React.ReactNode
}

export default function FeatureCard({ title, description, backgroundImage, icon }: FeatureCardProps): JSX.Element {
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col border-3 border-red-500 z-50 items-end justify-end">
        <div
          className="flex items-end relative w-full h-96 md:h-60 text-white overflow-hidden"
          style={{
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-6 bg-black flex self-start items-left flex-col w-full justify-self-end bottom-0 left-0 right-0 absolute">
              {icon && <div className="mb-4">{icon}</div>}
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{description}</p>
              <button className="flex items-start justify-start self-start border border-gray-100 p-12 rounded-lg mt-4 hover:text-purple-300 font-semibold text-sm transition-colors w-auto mx-auto text-white">
                Learn More 
              </button>
            </div>
          </div>
      </div>
  )
}
