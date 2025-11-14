"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Navigation from "@/components/navigation"
import { useSkeleton } from "@/hooks/useSkeleton"
import { BlogPageSkeletonTemplate } from "@/components/blog-page-skeleton"
import { 
  fadeInUpVariants, 
  staggerContainerVariants,
  scrollAnimationConfig 
} from "@/lib/motion-variants"

export default function BlogPage() {
  const { isLoading } = useSkeleton(true, 2000)

  if (isLoading) {
    return <BlogPageSkeletonTemplate />
  }
  const posts = [
    {
      title: "From Vision to Velocity",
      description: "Turning bold ideas into real connections through smart drone delivery",
      image: "/from_vision_to_velocity.png",
    },
    {
      title: "Innovation That Lifts Communities",
      description: "Every flight delivers access, opportunity, and progress.",
      image: "/innovation_that_lifts_communities.png",
    },
    {
      title: "Africa's Future Takes Flight",
      description: "Building a connected Africa through next-gen drone technology.",
      image: "/africas_future_takes_flight.png",
    },
  ]

  return (
    <div className="bg-white">
            <Navigation theme="light"/>
      {/* Header */}
      <section
        className="pt-32 pb-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            Blog
          </motion.h1>
        </div>
      </section>

      {/* Featured Post */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="py-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeInUpVariants} className="bg-[#6B5103] rounded-3xl p-12 text-white overflow-hidden">
            <div className="">
              <motion.div 
                className="flex items-end justify-start bg-white px-4 py-2 rounded-full text-sm mb-12 flex-row w-fit space-x-2"
                variants={fadeInUpVariants}
              >
                <span className="">
                    <FontAwesomeIcon icon={faStar} color="#116B62"/>
                </span>
                <h6 className="text-black text-[12px] font-medium"> Featured</h6>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col justify-between h-full">
                  
                  <div className="w-72">
                      <motion.h2 
                        className="text-4xl font-bold mb-4"
                        {...scrollAnimationConfig}
                        variants={fadeInUpVariants}
                      >
                        Stories Behind the Flight
                      </motion.h2>
                      <motion.p 
                        className="text-md mb-8 leading-relaxed"
                        {...scrollAnimationConfig}
                        variants={fadeInUpVariants}
                      >
                        Discover how Yspace is shaping the future of delivery, innovation, and community across Africa.
                      </motion.p>
                  </div>


                  <motion.button 
                    className="flex items-center gap-2 hover:gap-3 transition"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>Read More</span>
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Image 
                    src="/blog_layout.png" 
                    width={300} 
                    height={300} 
                    alt="Blog featured post" 
                    className="w-full h-full object-fill rounded-lg"
                    quality={75}
                    priority={false}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={staggerContainerVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.1 }}
                className="bg-white border-[1px] border-gray-300 rounded-2xl overflow-hidden transition"
              >
              
                <div className="">
                  <div className="w-full">
                    <Image 
                      src={post.image} 
                      width={300} 
                      height={300} 
                      alt={post.title} 
                      className="w-full h-72 object-cover mb-4"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <motion.h3 
                      className="w-36 text-xl font-bold text-gray-900 mb-3"
                      variants={fadeInUpVariants}
                    >
                      {post.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 mb-4 text-sm"
                      variants={fadeInUpVariants}
                    >
                      {post.description}
                    </motion.p>
                    <motion.button 
                      className="flex items-center gap-2 text-gray-900 hover:gap-3 transition font-semibold"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Read More</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

