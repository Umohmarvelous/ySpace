"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CompanyPage() {
  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "We provide healthy work-life balance with options for remote work and flexible hours.",
    },
    {
      title: "Supportive Team Culture",
      description: "We work to build an inclusive environment where every voice is heard and valued.",
    },
    {
      title: "Accelerate Clear Growth",
      description: "Yspace offers opportunities to grow your career with well-defined paths where needed.",
    },
    {
      title: "Comprehensive Benefits Package",
      description: "Receive competitive compensation, comprehensive health coverage, and a range of vacation perks.",
    },
  ]

  const jobs = [
    {
      title: "Drone Software Engineer",
      location: "Lagos (Remote)",
    },
    {
      title: "Marketing Executive",
      location: "Lagos (Onsite)",
    },
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

      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Careers.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl"
          >
            We aregit building a passionate team of engineers, designers, and changemakers shaping how goods move across
            Africa — faster, cleaner, and smarter.
          </motion.p>
        </div>
      </motion.section>

      {/* Team Images */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="md:col-span-2 rounded-2xl overflow-hidden h-96">
              <img src="/collaborative-teamwork.png" alt="Team" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-96">
              <img src="/team-collaboration.png" alt="Team" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-96">
              <img src="/modern-office-workspace.png" alt="Office" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2 rounded-2xl overflow-hidden h-96">
              <img src="/diverse-team-meeting.png" alt="Team" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Working at Yspace */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Working at yspace
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-center mb-12">
            We are part of a global culture
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Open positions available
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-center mb-12">
            Join us for exciting opportunities in a team that values growth and innovation
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
            {["All", "Development", "Design", "Marketing"].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full transition ${
                  cat === "All" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                </div>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition">Apply Now</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
