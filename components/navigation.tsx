"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md "
    >
      <div className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
            <img src="/Logo.png" alt="picture showing a shopping cart" className="bg-transparent w-28 h-10" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/service-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
            Services
          </Link>
          <Link href="/technology-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
            Technology
          </Link>
          <Link href="/vendor-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
            Vendors
          </Link>
          <Link href="/crowdfunding-page" className="text-sm text-purple-600 hover:text-purple-700 transition font-medium">
            Crowdfunding
          </Link>
          <Link href="/company-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
            Company
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-purple-600 transition">
            More
          </Link>
        </div>

        <ShoppingCart className="w-5 h-5 text-gray-900" />
      </div>
    </motion.nav>
  )
}
