
"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { Play, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function CrowdfundingPage() {
  const [expandedTier, setExpandedTier] = useState<number | null>(null)

  const tiers = [
    {
      name: "Nano Supporter",
      price: "$10",
      frequency: "one-time",
      benefits: ["Thank you email"],
    },
    {
      name: "Micro Innovator",
      price: "$50",
      frequency: "one-time",
      benefits: ["Thank you email", "Digital wallpaper"],
    },
    {
      name: "Meso Pioneer",
      price: "$250",
      frequency: "one-time",
      benefits: ["Thank you email", "Digital wallpaper", "Exclusive project updates"],
    },
    {
      name: "Macro Visionary",
      price: "$1,000",
      frequency: "one-time",
      benefits: ["Thank you email", "Digital wallpaper", "Exclusive project updates", "Yspace merchandise"],
    },
    {
      name: "Cosmic Hero",
      price: "$5,000",
      frequency: "one-time",
      benefits: [
        "Thank you email",
        "Digital wallpaper",
        "Exclusive project updates",
        "Yspace merchandise",
        "Name engraved on a drone",
      ],
    },
  ]

  const supportAreas = [
    {
      title: "Build More Drones",
      description: "Help scale our technology and reach.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crowdfunding%202-uriFcA6T7MnexnWWNeb5V7mSnGZR3n.jpg",
      position: "right",
    },
    {
      title: "Expand Access",
      description: "Bring delivery to remote and underserved areas.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crowdfunding%202-uriFcA6T7MnexnWWNeb5V7mSnGZR3n.jpg",
      position: "left",
    },
    {
      title: "Empower Local Vendors",
      description: "Enable small businesses to reach more customers.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crowdfunding%202-uriFcA6T7MnexnWWNeb5V7mSnGZR3n.jpg",
      position: "right",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation theme="light"/>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2"
          >
            Join Us in Building Africans Drone Delivery Future
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 px-2"
          >
            Support Yspace as we scale drone-powered logistics to connect businesses and communities faster than ever
          </motion.p>

          {/* Video Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-video bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12"
          >
            <Image src="/peoplegathering1.jpg" width={300} height={300} alt="Team" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
              </motion.button>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm font-medium">
              WATCH OUR STORY
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-green-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
          >
            <motion.div variants={itemVariants} className="text-center py-4 sm:py-0">
              <div className="text-3xl sm:text-4xl font-bold mb-2">1,000+</div>
              <div className="text-xs sm:text-sm">successful deliveries tested</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-green-600 py-4 sm:py-0">
              <div className="text-3xl sm:text-4xl font-bold mb-2">23+</div>
              <div className="text-xs sm:text-sm">Businesses</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center border-t sm:border-t-0 py-4 sm:py-0">
              <div className="text-3xl sm:text-4xl font-bold mb-2">1,000+</div>
              <div className="text-xs sm:text-sm">successful deliveries tested</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why We Need Your Support */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-8 sm:py-10 px-4 sm:px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-8"
          >
            Why We Need Your Support
          </motion.h2>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            We are on a mission to make drone delivery accessible to every business and home. Your contribution helps us
            expand our drone fleet, build smarter delivery hubs, and bring reliable service to more communities across
            Africa.
          </motion.p>
        </div>
      </motion.section>

      {/* Where Your Support Goes */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 sm:mb-4"
          >
            Where Your Support Goes
          </motion.h2>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-2"
          >
            Every contribution directly fuels our mission to advance rocket technology in Africa. We operate with zero
            salaries, ensuring all funds are dedicated to development.
          </motion.p>

          <div className="space-y-10 sm:space-y-16">
            {supportAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${area.position === "left" ? "sm:flex-row-reverse" : "sm:flex-row"} items-center gap-6 sm:gap-12`}
              >
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{area.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{area.description}</p>
                </div>
                <div className="flex-1 w-full">
                  <Image
                    width={400}
                    height={400}
                    src="/peoplegathering1.jpg"
                    alt={area.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Tiers */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-6 sm:mb-4 text-sm sm:text-base px-2"
          >
            Select a reward tier to support our mission of advancing rocket technology in Africa. Each tier offers
            unique benefits, from a simple thank you to exclusive access and recognition
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 sm:mb-12"
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-purple-500 transition cursor-pointer"
                onClick={() => setExpandedTier(expandedTier === index ? null : index)}
              >
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400 text-xs sm:text-sm ml-2">{tier.frequency}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4 transition text-sm sm:text-base"
                >
                  Select
                </motion.button>

                <div className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm"
                    >
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-base">$10</span>
              </div>
              <div className="w-full sm:w-auto">
                <div className="text-white font-bold text-sm sm:text-base text-center sm:text-left">raised of $50,000 goal</div>
                <div className="w-full sm:w-64 h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "20%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-purple-600"
                  />
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded transition text-sm sm:text-base w-full sm:w-auto"
            >
              Donate
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}