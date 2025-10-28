"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import TechHeroSection from "@/components/tech_hero_section"
import TechDroneSection from "@/components/sections/tech-drone-section"

export default function TechnologyPage() {
  const features = [
    {
      title: "Smart Delivery Drones",
      description:
        "Our drones are equipped with advanced sensors, GPS, and obstacle detection to ensure safe and efficient delivery — even in challenging terrain.",
      image: "/tech_drone_2.jpg"
    },
    {
      title: "Real-Time Tracking",
      description: "Our system calculates the fastest route and updates every second for full transparency.",
    },
    {
      title: "Intelligent Dispatch System",
      description:
        "Our drones are built with clean, rechargeable energy systems — reducing emissions while improving delivery speed and reliability.",
      image: "/tech_drone_3.jpg"
    },
  ]

  const specs = [
    { label: "HYBRID LIFT SYSTEM", value: "Vertical take-off, fixed-wing efficiency" },
    { label: "PAYLOAD CAPACITY", value: "Up to 5kg" },
    { label: "RANGE", value: "Up to 60km in a single charge" },
    { label: "TOP SPEED", value: "100 km/h" },
    { label: "BATTERY SYSTEM", value: "Sustainable lithium-ion packs" },
    { label: "NAVIGATION", value: "Fully autonomous GPS + obstacle detection" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="relative min-h-auto bg-gradient-to-br from-purple-400 to-purple-600   flex items-center overflow-hidden"
      >
        <TechHeroSection
          title="Flagship VTOL Drone"
          subtitle="Every flight is powered by intelligent systems designed for speed, safety and precision."
          backgroundImage="/technologyPage_bg.png"
        />
        <Image 
          src="/tech_drone_4.png" 
          width={600} 
          height={600} 
          alt="Drone Technology" 
          className="hidden lg:block w-2/5 xl:w-1/2 h-auto object-contain absolute left-8 xl:left-16 top-32 sm:top-48" 
        /> 
      </motion.section>

      {/* Designed for Reliability */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-12 sm:py-20 bg-purple-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-10 sm:mb-16 w-[161px] md:w-[300px]">
            Designed for reliability.
          </motion.h2>

          <TechDroneSection />
        </div>
      </motion.section>

      {/* Product Spec */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-12 sm:py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-right">
            Product Spec
          </motion.h2>
          <div className="my-6 sm:my-8 text-center sm:text-left">
            <motion.p className="text-sm sm:text-base text-gray-700 mb-1">ySpace x50</motion.p>
            <motion.h1 variants={itemVariants} className="text-gray-600 text-base sm:text-lg">
              Overview
            </motion.h1>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {specs.map((spec, index) => (
              <motion.div key={index} variants={itemVariants} className="border-b border-gray-200 pb-4 sm:pb-6">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">{spec.label}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900">{spec.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

    </div>
  )
}