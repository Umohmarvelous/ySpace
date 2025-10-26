"use client"

import { motion } from "framer-motion"

export default function TeamSection() {
  const team = [
    {
      name: "Joshua Olaiya",
      role: "Founder, CEO & Chairman",
      image: "/team-member-portrait.png",
    },
    {
      name: "Marvelous",
      role: "Co-Founder & CTO",
      image: "/diverse-team-member.png",
    },
    {
      name: "Lynda Obitolo",
      role: "UI/UX Designer",
      image: "/diverse-team-member.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-gray-900">
          Meet the Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-6 overflow-hidden rounded-2xl"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
