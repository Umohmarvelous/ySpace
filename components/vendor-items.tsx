import Image from "next/image"
import { motion } from 'framer-motion';

interface VendorItemsProps {
  title: string
  label: string
  image?: string
}

interface Vendor {
   vendor : VendorItemsProps
}


export default function VendorItem({ vendor }: Vendor) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
      className="">
        <div className="overflow-hidden text-left flex items-start flex-col-reverse w-72 rounded-2xl md:ml-4 md:mb-5">
          <div className="py-3 items-start text-center md:text-left flex flex-col mx-2">
            <h3 className="text-2xl md:text-xl font-medium text-black m-0 p-0 my-2">{vendor.title}</h3>
            <p className="text-gray-500 font-normal w-60 py-3 pt-0 self-start text-start md:text-left mb-6 md:mb-0 text-md md:text-[13px]">{vendor.label}</p>
          </div>

          {vendor.image && (
            <div className=" mx-0 w-full relative overflow-hidden h-80 bottom-0 top-0">
              <Image src={vendor.image || "/placeholder.svg"} alt={vendor.title} width={500} height={500} className="object-cover rounded-2xl w-full h-full transform scale-x-[-1]" />
            </div>
          )}
        </div>
    </motion.div>
  )
}
