"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import VendorItem from "@/components/vendor-items"
import FAQItem from "@/components/faq-item"
import Link from "next/link"
import AllBenefitsCard from "@/components/all-benefits-card"


interface FAQItemProps {
  question: string
  answer: string
  isOpen?: boolean
}
export default function VendorsPage() {


  const faqss: FAQItemProps[] = [
    {
      question: "How fast can i start selling on Yspace?",
      answer:
        "Right after your business is verified - list your products and start receiving orders within minutes."
    },
    {
      question: "How does Yspace handle deliveries?",
      answer:
        "Most deliveries are completed within 30 minutes to 1 hour, depending on distance and weather conditions. Our drone fleet ensures rapid delivery times.",
    },
    {
      question: "What makes Yspace diferent?",
      answer:
        "You can order from a wide variety of categories including food & groceries, electronics, clothing, and more. Check our marketplace for available items in your area.",
    },
    {
      question: "Is it free to join?",
      answer:
        "Yes! It's free to get started as a vendor. You only pay small fees per delivery once you begin selling.",
    },
  ]

const vendorCards = [
  {
    title: "Sign Up & Get Verified",
    label: "Create your vendor account and verify your business in minutes.",
    image:"/sugnup_and_get_verified.png",
  },
  {
    title: "List Your Products",
    label: "Add your items, prices, and images - your store goes live instantly.",
    image:"/list_your_product.png",
  },
  {
    title: "Deliver by Drone",
    label: "Once customers order, Yspace drone pick up and deliver straight to their doorsteps - fast, reliable, and trackable.",
    image:"/deliver_by_drone.png",
  },
]



  return (
    
    <div className="bg-white">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-96 bg-gradient-to-br from-gray-800 to-gray-900 pt-40 flex items-center overflow-hidden pb-48
        "
      >
        <div className="absolute">
            <Image src="/Vendor_Hero_Img.svg" width={300} height={300} alt="Vendor receiving package" className="w-full h-auto object-contain rounded-lg" />
        </div>

        <div className="max-w-auto md:max-w-2xl px-6 pb-3 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white "
          >
            <h1 className=" text-center md:text-left text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sell Smarter. Deliver Faster with Yspace
            </h1>
            <p className="w-auto px-5 md:px-0 text-center md:text-left text-xl md:text-lg mb-8">
              Join the future of delivery — connect your business to customers through drone-powered logistics.
            </p>
            <div className="flex w-full items-center justify-center md:justify-start">
              <button 
                // onClick={onPrimaryClick}
                className="w-80 md:w-auto px-6 md:px-8 py-3 md:py-4 mt-12 md:mt-0 bg-[#9900E8] hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                Become a Vendor
              </button>          
            </div>
            </motion.div>
        </div>
      </motion.section>

      <section className="flex w-full items-center justify-center py-16">
        <Image
          src="/t-motor.jpg"
          width={600}
            height={600} 
            alt="Drone Technology" 
            className=" lg:block w-32 h-auto object-fill relative" 
          />
      </section>

      <section>
          <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap space-x-0 space-y-10 m-0 md:space-y-0 py-12 md:py-5 px-4 sm:px-6 bg-gray-50">
            {vendorCards.map((item, index) => (
              <VendorItem key={index} vendor={item} />
            ))}
          </div>
      </section>

      <section className="flex items-center justify-center flex-col  w-full ">
        <h4 className="text-[#116B62] pb-20 pt-5 text-xl font-medium">Your business takes off - literally.</h4>
        <div className="flex flex-row items-center justify-space-between w-auto">
          <div className="border-[0.3px] border-gray-200 w-44 md:w-60"></div>
          <h5 className="text-gray-500 font-medium text-sm px-3">All Benefits</h5>
          <div className="border-[0.3px] border-gray-200 w-44 md:w-60"></div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap w-full space-x-2 items-start justify-center p-12 md:p-0 my-12">

          <div className="bg-[#11461D] rounded-xl p-3 m-2 w-full md:w-52 h-80 md:h-72 text-white text-bold flex flex-col items-start justify-start">
            <AllBenefitsCard 
                title ="Reach More Customers"
                image ="/mdi_marketplace.png"
            />
          </div>

          <div className="bg-[#6B5103] rounded-xl p-3 m-2 w-full md:w-52 h-80 md:h-72 text-white text-bold flex flex-col items-start justify-start">
            <AllBenefitsCard 
                title ="Reduce Delivery Costs"
                image = "/solar_delivery-bold.png"
            />
          </div>

          <div className="bg-[#0D524B] rounded-xl p-3 m-2 w-full md:w-52 h-80 md:h-72 text-white text-bold flex flex-col items-start justify-start">
            <AllBenefitsCard 
                title ="Faster, Smarter Logistics"
                image = "/lsicon_marketing-filled.png"
            />
          </div>

          <div className="bg-[#47006B] rounded-xl p-3 m-2 w-full md:w-52 h-80 md:h-72 text-white text-bold flex flex-col items-start justify-start">
            <AllBenefitsCard 
                title ="Track orders in Real Time"
                image = "/mdi_track-light.png"
            />
          </div>
          
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-start justify-between w-full py-24 bg-[#FFF9E6] px-5 md:px-12">
        <div className="mb-12 mb:mb-0 flex flex-col text-center md:text-left justify-start w-full md:w-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">FAQs</h2>
          <h4 className="text-gray-500">Everything You Need to Know</h4>
        </div>

        <div className="w-full md:w-[600px] flex space-y-5 flex-col">
          {faqss.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))} 
        </div>
      </div>

      <div className="p-5 md:p-12 my-5 md:my-0 flex justify-between">
        <div className="bg-[#E9F9F7] space-y-12  w-full flex items-center justify-center flex-col py-12 rounded-2xl">
              <h3 className="font-medium text-xl md:text-2xl text-center w-60 md:w-full">
                {"Be part of Africa's next delivery revolution"}
              </h3>
              <Link href={"#"} className="flex bg-[#9900E8] text-white px-12 py-2 rounded-md text-[12px]">
                  Get Started
              </Link>
        </div>
      </div>
    </div>
  )
}
