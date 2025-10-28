import Image from "next/image"
import { motion } from "framer-motion";


interface DroneItemsProps {
  title: string
  label: string
  image?: string
}

interface Drones {
   drones : DroneItemsProps
}


export default function DronesComp({ drones }: Drones) {
  return (
   //  <div className="text-left flex items-center flex-col md:flex-row w-fit ">
   <div className="p-5">

      <div className="overflow-hidden flex flex-col md:flex-row max-w-4xl items-center justify-space-around space-t-12 sm:space-t-20">
            
         <div className=" w-full md:w-72 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{drones.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-[12px]">{drones.label}</p>
         </div>

         <motion.div 
         whileHover={{ scale: 1.05 }} 
         transition={{ duration: 0.3 }}
         className="flex items-center justify-center">
            <Image 
                  src={drones.image || "/placeholder.svg"} 
                  alt={drones.title} 
                  width={500} 
                  height={500} 
                  className="object-cover rounded-0 max-w-2xl h-full transform scale-x-[-1]"/>
         </motion.div>
      </div>
      <div className="hidden md:flex border-[1px] border-gray-300 w-48 rotate-90 relative top-12 left-8 border-dashed"></div>
   </div>
   //  </div>
  )
}
