"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function HomeSection() {
  const values = [
    {
      number: "01",
      title: "Innovation",
      description:
        "We are at the forefront of building drones — robot technology that solves real problems like merging drone systems with digital commerce, we create smarter, faster, and more efficient delivery solutions that empower communities and connect businesses directly to their customers.",
    },
    {
      number: "02",
      title: "Trust",
      description: "Trust is the foundation of everything we do.",
    },
    {
      number: "03",
      title: "Community",
      description: "Community is at our core.",
    },
    {
      number: "04",
      title: "Sustainability",
      description: "We are committed to sustainable practices.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-purple-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          Our values guide everything we do.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            {values.map((value) => (
              <motion.div key={value.number} variants={itemVariants} className="border-l-2 border-purple-400 pl-6">
                <p className="text-purple-300 text-sm mb-2">{value.number}</p>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-cyan-100 rounded-2xl p-8 text-gray-900 flex flex-col justify-center"
          >
            <Star className="w-8 h-8 text-teal-600 mb-4" />
            <p className="text-lg leading-relaxed">{values[0].description}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
