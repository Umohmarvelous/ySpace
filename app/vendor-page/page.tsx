"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function VendorsPage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 pt-24 flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <img src="/vibrant-urban-cityscape.png" alt="background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sell Smarter. Deliver Faster with Yspace
            </h1>
            <p className="text-xl mb-8">
              Join the future of delivery — connect your business to customers through drone-powered logistics.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">Become a Vendor</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96"
        >
          <img src="/drone-delivery-package.jpg" alt="Drone" className="w-full h-full object-contain" />
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
}
