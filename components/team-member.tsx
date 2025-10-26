import Image from "next/image"
import type { JSX } from "react"

interface TeamMemberProps {
  name: string
  role: string
  image?: string
}

export default function TeamMember({ name, role, image }: TeamMemberProps): JSX.Element {
  return (
    <div className="text-center">
      {image && (
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      )}
      <h3 className="text-lg md:text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600 text-sm md:text-base">{role}</p>
    </div>
  )
}
