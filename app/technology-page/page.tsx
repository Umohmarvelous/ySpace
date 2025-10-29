"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import TechHeroSection from "@/components/tech_hero_section"
import TechDroneSection from "@/components/sections/tech-drone-section"

export default function TechnologyPage() {
  const specs = [
    { label: 
      "HYBRID LIFT SYSTEM", 
      value: "Vertical take-off, fixed-wing efficiency." },
      
    { label: 
      "PAYLOAD CAPACITY", 
      value: "Up to 5kg." },

    { label: 
      "RANGE", 
      value: "Up to 60km in a single charge." },

    { label: 
      "TOP SPEED", 
      value: "100 km/h." },

    { label: 
      "BATTERY SYSTEM", 
      value: "Swappable lithium-ion packs." },
      
    { label: "NAVIGATION", 
      value: "Fully autonomous GPS + obstacle detection." },
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
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="relative min-h-auto bg-white flex items-center overflow-hidden"
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
          className=" lg:block w-[1000px] sm:max-w-30 md:w-[1250px] h-auto object-fill absolute left-8 xl:left-16 top-32 sm:top-20 md:top-32" 
        /> 
      </motion.section>

      {/* Designed for Reliability */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="pt-12 "
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-10 sm:mb-0 w-[161px] md:w-[300px]">
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
        className=" bg-white pb-32 pt-12"
      >
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-32 text-center sm:text-right">
            Product Spec
          </motion.h2>
          <div className="my-6 md:mb-20 md:mt-12 text-center sm:text-left">
            <motion.p className="text-sm md:text-base text-gray-400 font-medium -mb-1">ySpace x500</motion.p>
            <motion.h1 variants={itemVariants} className="text-black text-base md:text-2xl font-bold">
              Overview
            </motion.h1>
          </div>

          <motion.div variants={containerVariants} className="flex flex-col space-y-6 sm:space-y-8">
            {specs.map((spec, index) => (
              <motion.div key={index} variants={itemVariants} className="">

                <div className="flex flex-row items-center justify-between">
                  <p className="text-xs sm:text-sm text-gray-800 ">{spec.label}
                  </p>

                  <p className="w-48 text-left text-base sm:text-sm font-medium text-gray-400">{spec.value}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}