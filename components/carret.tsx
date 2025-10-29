import Image from "next/image"
import { motion } from 'framer-motion';

interface StoreItemsProps {
  title: string
  label: string
  image?: string
}

interface Store {
   store : StoreItemsProps
}


export default function CarretItem({ store }: Store) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
      className="">
        <div className="overflow-hidden text-left flex items-start flex-col-reverse w-72 border-[1px] border-gray-300 rounded-2xl md:ml-4 md:mb-5">
          <div className="py-3 items-start text-center md:text-left flex flex-col mx-2">
            <h3 className="text-2xl md:text-2xl font-bold text-[#E8B006] m-0 p-0 my-2">{store.title}</h3>
            <p className="text-[#6B5103] font-extralight w-60 py-3 pt-0 self-start text-start md:text-left mb-6 md:mb-0 text-md md:text-[10px]">{store.label}</p>
          </div>

          {store.image && (
            <div className=" mx-0 w-full relative overflow-hidden h-80 bottom-0 top-0">
              <Image src={store.image || "/placeholder.svg"} alt={store.title} width={500} height={500} className="object-cover rounded-0 w-full h-full transform scale-x-[-1]" />
            </div>
          )}
        </div>
    </motion.div>
  )
}
