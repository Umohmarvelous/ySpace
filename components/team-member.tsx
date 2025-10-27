import Image from "next/image"
import type { JSX } from "react"

interface TeamMemberProps {
  name: string
  position: string
  image?: string
  specality: string[]
}

interface Member {
  team : TeamMemberProps
}
export default function TeamMember({ team }: Member): JSX.Element {
  return (
    <div className="text-center w-fit">
      {team.image && (
        <div className="mx-0 relative mb-4 overflow-hidden w-80 h-80">
          <Image src={team.image || "/placeholder.svg"} alt={team.name} width={300} height={300} className="object-cover  rounded-2xl w-72 h-full transform scale-x-[-1]" />
        </div>
      )}
      <div className="text-center md:text-center flex flex-col">
        <h3 className="text-2xl md:text-2xl font-bold text-gray-100 m-0 p-0">{team.name}</h3>
        <p className="text-gray-400 w-48 self-center text-center text-md md:text-sm">{team.position}</p>
      </div>
      
      <ul className="flex align-start flex-col text-left mt-3">
        {/* {team.specality.map((item, index) => (
          <li key={index} className=" text-gray-600 my-1"> - {item}</li>
        ))} */}
      </ul>
    </div>
  )
}
