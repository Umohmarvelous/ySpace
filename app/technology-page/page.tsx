"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import TechHeroSection from "@/components/tech_hero_section"

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
      // image: [
      //   src="/tech_drone_1.png" 
      //   width={1000}
      //   height={1000}
      //   alt="Team" 
      //   className="w-full h-full object-scale-down rounded-lg
      // ],

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
        className="relative min-h-screen bg-gradient-to-br from-purple-400 to-purple-600 pt-24 flex items-center overflow-hidden"
      >
        <TechHeroSection
          title="Flagship VTOL Drone"
          subtitle="Every flight is powered by intelligent systems designed for speed, safety and precision."
          backgroundImage="/technologyPage_bg.png"
        />
        <Image src="/tech_drone_4.png" width={600} height={600} alt="Team" className="w-full h-full object-contain rounded-lg absolute left-16 top-48" /> 
      </motion.section>

      {/* Designed for Reliability */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-purple-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-16">
            Designed for reliability.
          </motion.h2>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  {/* <Image
                    src="/drone-feature-.jpg?height=300&width=300&query=drone" feature ${index}
                    alt={feature.title}
                    className="w-full rounded-lg"
                  /> */}
                  {feature.image}
                  <Image src="/tech_drone_2.png" width={1000} height={1000} alt="Team" className="z-50 w-full h-full object-scale-down rounded-lg" />

                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Product Spec */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white border-2 border-red-300"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4 text-right">
            Product Spec
          </motion.h2>
          <div className="my-22">
            <motion.p>ySpace x50</motion.p>
            <motion.h1 variants={itemVariants} className="text-gray-600 text-left ">
              Overview
            </motion.h1>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((spec, index) => (
              <motion.div key={index} variants={itemVariants} className="border-b border-gray-200 pb-6">
                <p className="text-sm text-gray-500 mb-2">{spec.label}</p>
                <p className="text-lg font-semibold text-gray-900">{spec.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

<Image src="/tech_drone_1." width={600} height={600} alt="Team" className="w-full h-full object-fill rounded-lg" /> 
