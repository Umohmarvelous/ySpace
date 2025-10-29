"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function VendorsPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 pt-24 flex items-center overflow-hidden pb-48"
      >
        <div className="absolute inset-0 opacity-30 ">
            <Image src="/p_drone3.png" width={300} height={300} alt="Team" className="w-full h-auto object-fill rounded-lg" />
        </div>

        <div className="max-w-auto md:max-w-2xl px-6 pb-3 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white "
          >
            <h1 className=" text-center md:text-left text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sell Smarter. Deliver Faster with Yspace
            </h1>
            <p className="w-auto px-5 md:px-0 text-center md:text-left text-xl md:text-lg mb-8">
              Join the future of delivery — connect your business to customers through drone-powered logistics.
            </p>
            <div className="flex w-full items-center justify-center md:justify-start">
              <button 
                // onClick={onPrimaryClick}
                className="w-80 md:w-auto px-6 md:px-8 py-3 md:py-4 mt-12 md:mt-0 bg-[#9900E8] hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                Become a Vendor
              </button>          
            </div>
            </motion.div>
        </div>









      </motion.section>

      <Footer />
    </div>
  )
}
