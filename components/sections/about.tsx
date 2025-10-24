"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-gray-500 mb-4">About Yspace</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Nigeria's first indigenous drone delivery company.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-600 leading-relaxed">
              At Yspace, we're reimagining how goods move — combining drone delivery & commerce, and smart logistics
              into one seamless experience. Whether for businesses or individuals, we provide reliable across every
              city.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe technology should empower people. That's why we're building Africa's most trusted autonomous
              delivery and commerce platform — connecting people and businesses directly through innovation, trust,
              community, and sustainability.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
