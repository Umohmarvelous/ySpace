"use client"

import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import { useState } from "react"
import { motion } from "framer-motion"
import { MinusIcon, PlusIcon } from "lucide-react"



interface FAQ {
  question: string
  answer: string
}

const faqss: FAQ[] = [
  {
    question: "What is Yspace?",
    answer:
      "Yspace is a drone-powered delivery e-commerce platform that connects local businesses and customers. You can shop, send packages, or partner your business - and we deliver it all instantly.",
  },
  {
    question: "How fast are deliveries?",
    answer:
      "Most deliveries are completed within 30 minutes to 1 hour, depending on distance and weather conditions. Our drone fleet ensures rapid delivery times.",
  },
  {
    question: "What can I order on Yspace?",
    answer:
      "You can order from a wide variety of categories including food & groceries, electronics, clothing, and more. Check our marketplace for available items in your area.",
  },
  {
    question: "How do I send my own package?",
    answer:
      "Simply create an account, specify your package details and destination, and our drones will handle the rest. It's quick, easy, and affordable.",
  },
  {
    question: "Is drone delivery safe?",
    answer:
      "Absolutely. Our drones follow strict flight and safety regulations, with secure packaging and real-time tracking to ensure your package arrives intact and on time.",
  },
  {
    question: "What happens if my delivery fails?",
    answer:
      "If there are any issues with your delivery, our customer support team will assist you immediately. We offer full refunds or redelivery options.",
  },
  {
    question: "Where is Yspace available?",
    answer:
      "Yspace is currently operating in select cities across Nigeria. Check our website to see if we're available in your area.",
  },
]

export default function HomePage() {
   
const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
   
    
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
   <>
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Shop locally. Get it delivered Instantly"
        subtitle="From food to gadgets and more, we deliver what you need when you need it — fast, safe, and reliable."
        backgroundImage="/public/drone-beach.jpg"
      />

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Only Top notch Solution.</h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 text-sm md:text-base">
            Experience the future of delivery with our cutting-edge drone technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              title="Shop on Marketplace"
              description="Discover thousands of products from local merchants and order what you need instantly."
              image="/online-shopping-marketplace.jpg"
            />
            <FeatureCard
              title="Send Packages Instantly"
              description="Need to send something? Our drones can pick it up and deliver it across the city in minutes."
              image="/package-delivery-drone.jpg"
            />
            <FeatureCard
              title="Partner your Business"
              description="Grow your business with our delivery network. Reach more customers faster than ever before."
              image="/business-partnership-delivery.jpg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Any item at all, shop at Yspace.
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 text-sm md:text-base">
            From everyday essentials to specialty items, we have everything you need
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {["Food & Groceries", "Electronics", "Fashion", "Home & Garden"].map((category: string) => (
              <div key={category} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-full h-32 md:h-40 bg-gray-200 rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900">How Yspace Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Shop or Send</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Browse our marketplace or schedule a package pickup. Choose what you need and add it to your cart.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Drone Takes Off</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Once confirmed, our nearest drone is automatically dispatched. It picks up your order and takes off.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Track your delivery in real-time on our app. See exactly where your drone is and when it will arrive.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delivered to Your Doorstep</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Your package arrives safely at your location. Confirm receipt and enjoy your order instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQs Section */}
      <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="my-40 bg-gray-50"
      >
      <div className="max-w-6xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex flex-col">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-2">
               FAQs
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600">
               Everything You Need to Know
            </motion.p>
            </div>

            <motion.div variants={containerVariants} className="flex-1 space-y-4 w-full md:max-w-2xl">
            {faqss.map((faq, index) => (
               <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
               >
                  <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                  >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
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
                     className="px-6 pb-4 bg-purple-50 border-t border-gray-200"
                  >
                     <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                  )}
               </motion.div>
            ))}
            </motion.div>
         </div>
      </div>
      </motion.section>




      {/* Future Plans Section */}
      <section
        className="relative py-16 md:py-60 px-4 sm:px-6 lg:px-8 text-white text-center"
        style={{
          backgroundImage: "/future-drone-delivery-technology.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Future Plans</h2>
          <p className="text-gray-100 mb-8 text-sm md:text-base text-balance">
            We are not just delivering in select locations today. Yspace is building Africans first drone-powered
            e-commerce and logistics network — and you can be part of it.
          </p>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 md:py-60 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Support the Future of Delivery</h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Yspace is building Africans first drone-powered e-commerce and logistics network — and you can be part of
            it. We are raising funds to expand our fleet, onboard more merchants, and reach more cities.
          </p>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            Donate
          </button>
        </div>
      </section>
    </main>
   </>
   )
}