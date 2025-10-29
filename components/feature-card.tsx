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
    <div className="bg-gray-900 h-auto m-5 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col z-50 items-end justify-end">
        <div
          className=" relative w-full h-96 bg-transparent text-white overflow-hidden "
          style={{
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
              backgroundSize: "200%",
              backgroundPosition: "0px -2px",
            }}
          >
            <div className="border-3 border-blue-500 p-8 bg-transparent flex self-start items-left flex-col w-full justify-self-end bottom-0 left-0 right-0 absolute">
              {icon && <div className="mb-4">{icon}</div>}
              <h3 className="text-xl font-bold my-5">{title}</h3>
              <p className="text-gray-300 text-sm md:text-md">{description}</p>
              <button className="flex items-start justify-start self-start border border-white p-3 px-6 rounded-lg hover:text-purple-300 font-light text-[12px] transition-colors w-auto text-white mt-7">
                Learn More 
              </button>
            </div>
          </div>
      </div>
  )
}
