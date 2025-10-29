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
   <div className="p-5 pt-0 overflow-hidden">
      <div className="overflow-hidden flex flex-col md:flex-row max-w-8xl items-center justify-space-around space-t-12 sm:space-t-20">
            
         <div className="pr-12 w-full md:w-80 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 w-96">{drones.title}</h3>
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
               className=" object-cover rounded-0 h-full transform "/>
         </motion.div>
      </div>
      
   </div>
  )
}
