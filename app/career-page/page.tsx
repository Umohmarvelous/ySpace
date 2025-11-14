"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Image from "next/image"
import { useSkeleton } from "@/hooks/useSkeleton"
import { CareerPageSkeletonTemplate } from "@/components/career-page-skeleton"

export default function CareerPage() {
  const { isLoading } = useSkeleton(true, 2000)

  if (isLoading) {
    return <CareerPageSkeletonTemplate />
  }
  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "Yspace provide healthy work-life balance with options for remote work and flexible hours.",
    },
    {
      title: "Supportive Team Culture",
      description: "We work to build an inclusive environment in which everyone can suceed.",
    },
    {
      title: "Accelerate Clear Growth",
      description: "yspace offers opportunities to grow your career with well-defined paths where needed.",
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
      <Navigation theme="light"/>

      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-0 md:pb-12 bg-white "
      >
        <div className="md:max-w-7xl mx-auto flex items-center md:items-start flex-col px-6">
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
            className="text-md md:text-lg text-gray-600 max-w-2xl  flex items-center md:items-start text-center md:text-left flex-col md:flex-row"
          >
            We are building a passionate team of engineers, designers, and changemakers shaping how goods move across
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
        className="overflow-x-hidden w-full h-auto py-12 bg-white relative"
      >

        <div className="w-full h-auto relative  flex flex-row justify-between space-x-40 overflow-x-hidden">
          <div className=" w-full h-[700px] flex flex-row items-center justify-between ">
            <div className="md:rounded-tl-none md:rounded-tr-2xl md:rounded-bl md:rounded-br-2xl rounded-none overflow-hidden w-full h-full mr-0 md:mr-2">
                <Image src="/peoplegathering1.jpg" width={600} height={600} alt="Team" className="w-full h-full object-cover rounded-none md:rounded-none" />
            </div>
            <div className="hidden md:flex md:flex-col md:space-y-2 md:justify-between rounded-tl-2xl rounded-tr-none rounded-2xl rounded-br-none  overflow-hidden w-[700px] h-full self-end">
              <div className=" md:flex rounded-tl-2xl rounded-tr-none rounded-2xl rounded-br-none  overflow-hidden w-full h-full">
                  <Image src="/peoplegathering2.png" width={400} height={400} alt="Team" className="w-full h-full object" />            
              </div>
              <div className=" md:flex rounded-tl-2xl rounded-tr-none rounded-2xl rounded-br-none  overflow-hidden w-full h-full">
                  <Image src="/peoplegathering3.jpg" width={300} height={300} alt="Team" className="w-full h-full object" />            
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Working at Yspace */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="pt-12 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2 variants={itemVariants} className="text-4xl font-medium text-gray-900 mb-4 text-center">
            Working at yspace
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-center pb-16">
            {"We're team of a guided values"}
          </motion.p>

          <motion.div variants={containerVariants} className=" grid grid-cols-1 md:grid-cols-2 gap-8 hover:text-white transition">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-gray-700 py-20 hover:bg-black hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3 text-black ">{benefit.title}</h3>
                <p className="text-gray-600 text-center md:text-left">{benefit.description}</p>
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
        className="pt-20 pb-10 bg-white"
      >
        <div className="max-w-7xl mx-auto ">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center px-6">
            Open positions available
          </motion.h2>
          <motion.p variants={itemVariants} className="px-6 text-gray-600 text-center mb-12">
            Join us for exciting opportunities in a team that values growth and innovation
          </motion.p>

          <motion.div variants={itemVariants} className="px-6 md:flex justify-center mb-12">
            {["All", "Development", "Design", "Marketing"].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 m-1 rounded-full transition ${
                  cat === "All" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-0 md:space-y-4 px-0 md:px-6 w-full">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-300 rounded-0 md:rounded-lg py-12 px-5 md:p-6 flex flex-row items-center justify-between hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-x-0 md:space-x-4">
                  <h3 className="text-lg md:text-lg font-bold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                </div>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition">Apply Now</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

    </div>
  )
}
