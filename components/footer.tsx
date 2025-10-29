"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
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


  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#1d2023] text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-0 flex flex-col md:flex-row justify-between space-x-4">
        
        <h3 className="text-lg font-bold mb-4 flex items-center  md:justify-left">
          <Image src="/Logo white.png" width={100} height={100} alt="Team" className="w-16 h-8 object-fill rounded-lg mb-24" />
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 mb-12">
          
          <div className="ml-0 md:ml-10 pb-12">
            <h4 className="font-semibold mb-4">Email</h4>
            <p className="text-gray-400 text-[11px]">hello@yspace.inc</p>
          </div>

          
          <div className="ml-0 md:ml-10 pb-7">
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/service-page" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technology-page" className="hover:text-white transition">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/vendor-page" className="hover:text-white transition">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/crowdfunding-page" className="hover:text-white transition">
                  Crowdfunding
                </Link>
              </li>
              <li>
                <Link href="/company-page" className="hover:text-white transition">
                  Company
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="ml-0 md:ml-10 pb-12">
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact-page" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/career-page" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/components/faq-item.tsx" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog-page" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="ml-0 md:ml-10 ">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-3 flex flex-col md:flex-row items-left justify-between"
      >
        <p className="text-[13px] text-white font-medium my-5">© 2025 Yspace Limited. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href={"#"} className="rounded-full border-[1px] border-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebookF} className="m-2 w-5 h-4 text-white hover:text-white cursor-pointer transition" />
          </Link>

          <Link href={"https://www.linkedin.com/company/yspace-inc/posts/?feedView=all"} className="rounded-full border-[1px] border-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faLinkedinIn} className="m-2 w-4 h-4 text-white hover:text-white cursor-pointer transition" />
          </Link>

          <Link href={"/"} className="rounded-full border-[1px] border-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faXTwitter} className="m-2 w-4 h-4 text-white hover:text-white cursor-pointer transition" />
          </Link>

          <Link href={"/"} className="rounded-full border-[1px] border-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faYoutube} className="m-2 w-4 h-4 text-white hover:text-white cursor-pointer transition" />
          </Link>

          <Link href={"/"} className="rounded-full border-[1px] border-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} className="m-2 w-4 h-4 text-white hover:text-white cursor-pointer transition" />
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
