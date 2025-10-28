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
      <div className="flex flex-col md:flex-row max-w-4xl items-center justify-space-between space-y-12 sm:space-y-20 space-x-72">
            
         <div className="order-1 md:order-1 w-full md:w-72 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{drones.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-[12px]">{drones.label}</p>
         </div>
         <motion.div 
         whileHover={{ scale: 1.05 }} 
         transition={{ duration: 0.3 }}
         className="order-1 md:order-2">
            <Image 
                  src={drones.image || "/placeholder.svg"} 
                  alt={drones.title} 
                  width={500} 
                  height={500} 
                  className="object-cover rounded-0 w-80 h-full transform scale-x-[-1]"/>
         </motion.div>
      </div>
   //  </div>
  )
}
