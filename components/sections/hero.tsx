
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sell Smarter. Deliver Faster with Yspace
            </h1>
            <p className="text-md text-gray-600 mb-8">
              Join the future of delivery — connect your business to customers through drone-powered logistics.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg">
              Become a Vendor
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96"
          >
            <Image
              src="/drone-delivery-package.jpg"
              alt="Drone delivery"
              className="w-full h-full object-cover rounded-lg"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
