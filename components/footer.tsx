"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react"

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gray-900 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-row justify-between space-x-4">
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">
            <img src="/Logo white.png" alt="picture showing a shopping cart" className="bg-transparent w-30 h-12" />
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 mb-12">
          <motion.div variants={itemVariants}
          className="ml-10">
            <h4 className="font-semibold mb-4">Email</h4>
            <p className="text-gray-400 text-[11px]">hello@yspace.inc</p>
          </motion.div>

          <motion.div variants={itemVariants}
          className="ml-10">
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="hover:text-white transition">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Crowdfunding
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white transition">
                  Company
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}
          className="ml-10">
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}
          className="ml-7">
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
          </motion.div>
        </div>

      </div>
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"
      >
        <p className="text-sm text-gray-400">© 2025 Yspace Limited. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
          <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
          <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
          <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
        </div>
      </motion.div>
    </motion.footer>
  )
}
