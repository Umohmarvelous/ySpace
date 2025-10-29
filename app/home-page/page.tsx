"use client"

import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import { useState } from "react"
import { motion } from "framer-motion"
import { MinusIcon, PlusIcon } from "lucide-react"
import Image from "next/image"
import CarretItemComponent from "@/components/carret"



interface FAQ {
  question: string
  answer: string
}

const faqss: FAQ[] = [
  {
    question: "What is Yspace?",
    answer:
      "Yspace is a drone-powered delivery e-commerce platform that connects local businesses and customers. You can shop, send packages, or partner your business - and we deliver by drone straight to your doorstep."
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
      "Absolutely. Yspace drones follow strict flight and safety regulations, with secure packaging and real-time tracking for every delivery",
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

const shopCart = [
  {
    title: "Food & Groceries",
    label: "Shop household items from your trusted stores and supermarkets nearby.",
    image:"/food_and_groceries.png",
  },
  {
    title: "Electronics",
    label: "Any kind of electronics from your trusted stores and supermarkets nearby.",
    image:"/electronics.png",
  },
  {
    title: "Medications",
    label: "Any health and wellness items from your trusted and supermarkets nearby.",
    image:"/medications.png",
  },
  {
    title: "Fashion",
    label: "Any kind of wears from your trusted stores and supermarkets nearby.",
    image:"/fashion_home.png",
  }
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
          subtitle="From food to gadgets and more, shop as a boss and get it delivered right to your doorstep- fast, and safe, all powered by drons. "
          backgroundImage="/p_drone2.png"
        />

      {/* Features Section */}
      <section className="py-12 md:py-30 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-center h-100 w-full my-12">
          <Image src="/t-motor.jpg" width={1500} height={1500} alt="picture showing a donation icon" className="h-fit w-fit object-contain flex items-center justify-center " />
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-1 mt-10 text-gray-900">Only Top notch Solution.</h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 text-sm md:text-base">
            Experience the future of delivery with our cutting-edge drone technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full  bg-transparent">
            <FeatureCard
              title="Shop on Marketplace"
              description="Discover local vendors, explor categories, and order what you need - from foom to tech. 
              Delivered by Drone, right to your doorstep."
              backgroundImage="/shop_on_marketplace.png"
            />
            <FeatureCard
              title="Send Packages Instantly"
              description="Need to send something across town? 
              Book a drone, drop it off, and track it live as it flies to the destination."
              backgroundImage="/send_packages_instantly.png"
            />
            <FeatureCard
              title="Partner your Business"
              description="Join Yspace to reach more customers and get your products delivered by drone within minutes."
              backgroundImage="/patner_your_business.png"
            />
          </div>
        </div>
      </section>



        {/* Categories Section */}
      <section className="max-w-7xl mx-auto flex items-center flex-col">
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl md:text-3xl font-bold text-center mb-2 text-gray-900">
                Any item at all, shop at Yspace.
              </h2>
              <p className="text-center text-gray-600 md:mb-0 text-sm md:text-base">
                From everyday essentials to specialty items, we have everything you need
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start flex-wrap space-x-0 space-y-10 m-0 md:space-y-0 py-12 md:py-5 px-4 sm:px-6 bg-gray-50">
              {shopCart.map((item, index) => (
                <CarretItemComponent key={index} store={item} />
              ))}
            </div>
      </section>

      {/* How It Works Section */}
      <section className="py-2 md:py-16 px-4 lg:px-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center  text-gray-900">How Yspace Works</h2>
          <p className="text-center text-gray-600 mb-6 md:mb-8 text-sm md:text-[15px] mt-4">
            From order to doorstep - our drones make delivery seamless, fast, and reliable.
          </p>
          <div className="max-w-3xl mx-auto ">




            <div className="hidden md:flex flex-row relative top-[480px] left-0 right-0 bottom-0 rotate-90">
              <div className="flex flex-row rounded-lg bg-gray-300 w-full h-1 relative">
                <div className="rounded-lg  bg-purple-900 w-80 h-1 relative">
                </div>
                <div className="bg-purple-900 rounded-full relative right-3 bottom-[5px] rotate-60 w-4 h-4"></div>
              </div>
            </div>



            {/* Step 1 */}
            <div className=" my-12 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="max-w-xl md:w-72 m-9 md:m-0 flex flex-col items-center md:items-start md:text-left text-justify justify-center">
                  <h3 className="flex md:self-start text-xl font-bold text-gray-900 mb-5 md:mb-4">Shop or Send</h3>
                  <p className="text-gray-600 text-sm md:text-[12px] text-center md:text-justify">
                    Browse your favorite stores or send your own packages through the Yspace platform. Choose what you need, add it to your cart, or schedule a pickup
                  </p>
                </div>
                <Image src="/shop_or_send.png" objectFit="contain" width={200} height={200} alt="Our Future Plans" className="w-100 h-100 "/>
              </div>
            </div>
            {/* Step 2 */}
            <div className=" flex flex-col items-start md:items-center">
              <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                <div className="md:my-32 max-w-xl md:w-72 m-9 md:m-0 flex flex-col items-center md:items-start text-justify justify-center pl-0 md:pl-12">
                  <h3 className="flex md:self-start text-xl font-bold text-gray-900 mb-5 md:mb-4">Drone Takes Off</h3>
                  <p className="text-gray-600 text-sm md:text-[12px] text-center md:text-justify">
                    Once confirmed, the nearest drone is automatically dispatched. It picks up your order and flies the fastest route to your location.
                  </p>
                </div>
                <Image src="/drone_takes_off.png" objectFit="contain" width={200} height={200} alt="Our Future Plans" className="w-100 h-100"/>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="max-w-xl md:w-72 m-9 md:m-0 flex flex-col items-center md:items-start md:text-left text-justify justify-center">
                  <h3 className="flex md:self-start text-xl font-bold text-gray-900 mb-5 md:mb-4">Track in Real Time</h3>
                  <p className="text-gray-600 text-sm md:text-[13px] text-center md:text-justify">
                    {"Stay updated every second. You can view your drone's location, estimated arrival, and drop-off time - all live on the map."}
                  </p>
                </div>
                <Image src="/track_in_realtime.png" objectFit="contain" width={200} height={200} alt="Our Future Plans" className="w-100 h-100"/>
              </div>
            </div>
            {/* Step 4 */}
            <div className=" my-24 flex flex-col md:flex-row-reverse items-start md:items-center">
              <div className="flex flex-col md:flex-row-reverse items-center justify-between  w-full">
                <div className="max-w-xl md:w-72 flex flex-col items-center md:items-start md:text-center text-justify justify-center m-9 md:m-0">
                  <h3 className="flex md:self-center text-xl font-bold text-gray-900 mb-5 md:mb-3">Delivered to Your Doorstep</h3>
                  <p className="text-gray-600 text-sm md:text-[12px] text-center md:text-justify">
                    The drone lands safely at the designated drop zone - your items arrives intact and on time.
                  </p>
                </div>
                <Image src="/delivered_to_your_doorstep.png" objectFit="contain" width={200} height={200} alt="Our Future Plans" className="w-100 h-100 m-0 p-0"/>
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
      className="my-14 bg-gray-50"
      >
      <div className="max-w-6xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-start space-y-16 md:space-y-0">
            <div className="flex-1 w-full px-6 md:px-0 md:max-w-2xl flex-col text-center md:text-left">
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-2">
                FAQs
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-600">
                Everything You Need to Know
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="flex-1 space-y-1 w-full md:max-w-2xl">
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
                     className="px-6 pb-4"
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
        className="relative py-52 md:py-60 px-4 sm:px-6 lg:px-8 text-white text-center mb-0 "
        style={{
          backgroundImage: "/our_future_plan.png",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image src="/our_future_plan.png" layout="fill" objectFit="cover" alt="Our Future Plans" />
        <div className="absolute inset-0 bg-black/50" />
          <div className="flex items-start  flex-col text-justify w-[260px] md:w-[260px] relative max-w-2xl mx-auto top-[70px] left-14 md:left-32">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Future Plans</h2>
            <p className="text-gray-100 mb-8 text-md md:text-base text-balance">
              {"We're not just delivering - we're redefining distance. From drones today to rockets tommorrow, Yspace is building Africa's leap into ultra-fast, borderless delivery."}
            </p>
            <button className="w-full px-6 md:px-8 py-3 md:py-4 bg-[#9900E8] hover:bg-purple-700 text-white font-normal rounded-lg transition-colors text-sm">
              Learn More
            </button>
          </div>
      </section>

      {/* Support Section */}
      <section className="py-12 md:py-0 px-4 sm:px-6 lg:px-8 my-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">Support the Future of Delivery</h2>
          <p className="text-gray-600 text-sm md:text-md">
            {"Yspace is building Africa's first drone-powered e-commerce and logistics network — and you can be part of it."}
            <br />
            We are raising funds to expand our fleet, onboard more merchants, and reach more cities.
          </p>
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg p-6 mt-16 flex items-center justify-between max-w-lg mx-auto flex-col md:flex-row"
            >
                <div className=" w-full flex items-center space-x-4">
                  <div className="w-12 md:w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
                    <Image src="/box-usd 1.png" width={300} height={300} alt="picture showing a donation icon" className="w-6 h-6 md:w-6 md:h-6 object-fill text-white" />
                  </div>
                  <div className=" w-fill flex items-start flex-col justify-between space-y-4">
                    <div className="text-white font-extralight flex self-start justify-start text-[20px] md:text-[16px]">$10 raised of $50,000 goal</div>
                    <div className="w-52 h-2 bg-zinc-700 rounded-full mt-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "10%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 3, delay: 0.8 }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#9900E8] hover:bg-purple-700 text-white font-bold py-3 px-8 my-3 mt-8 md:my-0 w-full md:w-fit rounded transition"
                >
                  Donate
                </motion.button>
             </motion.div>
        </div>
      </section>
    </main>
   </>
   )
}


