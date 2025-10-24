"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "From Vision to Velocity",
      description: "Turning bold ideas into real connections through smart drone delivery",
      image: "/drone-beach.jpg",
    },
    {
      title: "Innovation That Lifts Communities",
      description: "Every flight delivers access, opportunity, and progress.",
      image: "/market-vendors.jpg",
    },
    {
      title: "Africa's Future Takes Flight",
      description: "Building a connected Africa through next-generation technology.",
      image: "/vibrant-african-community.png",
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
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            Blog.
          </motion.h1>
        </div>
      </motion.section>

      {/* Featured Post */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="bg-yellow-800 rounded-3xl p-12 text-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">⭐ Featured</span>
                <h2 className="text-4xl font-bold mb-4">Stories Behind the Flight</h2>
                <p className="text-lg mb-8 leading-relaxed">
                  Discover how Yspace is shaping the future of delivery, innovation, and community across Africa.
                </p>
                <button className="flex items-center gap-2 hover:gap-3 transition">
                  <ArrowRight className="w-5 h-5" />
                  <span>Read More</span>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src="/workers-drone-sunset.jpg" alt="Featured" className="w-full rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button className="flex items-center gap-2 text-gray-900 hover:gap-3 transition font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    <span>Read More</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
