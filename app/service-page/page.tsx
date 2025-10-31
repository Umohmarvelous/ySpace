"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function ServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does Yspace's delivery work?",
      answer:
        "Once you place an order or schedule a pickup, our drones handle the delivery — fast, safe, and straight to your doorstep.",
    },
    {
      question: "Can I shop and send packages on the same account?",
      answer: "Yes, one account lets you do both — shop from vendors or send your own items anytime.",
    },
    {
      question: "How fast is drone delivery?",
      answer: "Our drone delivery is incredibly fast, typically completing deliveries within hours of order placement.",
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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 pt-24 flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <Image src="/p_drone4.png" width={300} height={300} alt="Shop from trusted vendors or send packages fast with drone delivery" className="w-full h-full object-fill rounded-lg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6  text-center md:text-left">Services</h1>
            <p className="text-xl text-gray-300 mb-12 md:mb-8 max-w-xl text-center md:text-left ">
              Shop from trusted vendors or send packages fast with drone delivery.
            </p>



            <div className="w-full flex gap-4 flex-col md:flex-row md:w-full items-center">
              <button 
                // onClick={onPrimaryClick}
                className="w-52 px-6 md:px-8 py-3 md:py-4 bg-[#9900E8] hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
                Shop on Marketplace
              </button>
                     
              <button
                  // onClick={onSecondaryClick()}
                  className="w-52 px-6 md:px-8 py-3 md:py-4 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-colors border border-[#9900E8]">
                Send a Package
              </button>   
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Shop on Marketplace Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-16">
            Shop on Marketplace
          </motion.h2>



{/* jkslwljdwjkdkwjekjkewjkkwjekjkwjew */}
          <motion.div variants={itemVariants} className="bg-[#0D524B] rounded-3xl p-12 text-white overflow-hidden">
            <div className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full -mb-6 z-50"
              >
                <div className="flex gap-3 flex-wrap justify-center">
                  {["Food & Groceries", "Electronics", "Fashion & Beauty", "Health & Wellness"].map((item) => (
                    <span key={item} className="bg-[#B9ECE7] px-4 py-3 rounded-full text-[12px] text-black">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Image
                    src="/food_&_groceries_services.png"
                    alt="picture showing a shopping cart"
                    width={800}
                    height={800}
                    className="w-full h-auto max-w-full sm:w-[320px] md:w-[420px]  lg:w-[600px] rounded-2xl p-0 border border-white/20"
                  />
                </motion.div>

                <p className="text-lg leading-relaxed max-w-2xl">
                  Get your daily essentials and favorite meals delivered faster than ever. From fresh produce to
                  ready-to-eat dishes, Yspace connects you to trusted local vendors and delivers straight to your
                  doorstep — fresh, fast, and right on time.
                </p>
              </div>
            </div>
          </motion.div>








        {/* Values Section */}
      {/* <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold text-center md:text-left w-50 md:w-96">Our values guide everything we do.</h2>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-12 md:mt-16">

<div className="space-y-6 md:flex grid grid-row-3 md:flex-col">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedValueIndex(index)}
                  className={`text-left transition-all ${
                    selectedValueIndex === index ? "opacity-100 text-[#1BB1A3]" : " opacity-70 hover:opacity-85"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                    <span className={`text-left transition-all text-[12px] ${
                    selectedValueIndex === index ? "text-[12px] opacity-100 text-[#1BB1A3]" : "opacity-70 hover:opacity-85"
                  }`}>0{index + 1}</span>
                    {value.title}
                  </h3>
                </button>
              ))}
            </div>


<div className="bg-purple-100 text-gray-900 rounded-lg p-8 flex items-center w-50 md:w-[50%]">
              <div>
                <div className="text-3xl mb-4 text-[#116B62]">★</div>
                <p className="text-sm md:text-base leading-relaxed">
                  {values[selectedValueIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

  {/* werljwknefkadk nlrfn vlkrnelkenl */}



        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="w-full  mx-auto bg-[#FFF9E6] px-4 py-20">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="flex flex-col pl-0 md:pl-5 items-center md:items-start pb-12 md:pb-0">
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-2">
                FAQs
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-600">
                Everything You Need to Know
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="flex-1 space-y-4 w-full md:max-w-2xl">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-8 flex items-center justify-between hover:bg-gray-50 transition text-left"
                  >
                    <span className="font-semibold text-gray-900 mb-0">{faq.question}</span>
                    {expandedFaq === index ? (
                      <MinusIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-2 w-[640px] border-t border-gray-200 "
                    >
                      <p className="text-gray-600 text-md">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Send Packages Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="pb-12 px-3"
      >
        <div className="max-w-4xl mx-auto px-6 py-12 text-center flex items-center justify-center flex-col bg-[#E9F9F7] rounded-xl">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-4">
            Send Packages
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 mb-9 w-[350px] md:w-[600px]">
            Need to send something fast? Yspace delivers documents, gifts, and parcels to any location — securely and
            without delay.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button className="bg-[#9900E8] hover:bg-purple-700 text-white px-10 py-5 text-sm">Start Today</Button>
          </motion.div>
        </div>
      </motion.section>

    </div>
  )
}