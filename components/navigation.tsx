// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ShoppingCart } from "lucide-react"

// export default function Navigation() {
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md "
//     >
//       <div className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
//         <Link href="/" className="text-xl font-bold text-white">
//             <img src="/Logo.png" alt="picture showing a shopping cart" className="bg-transparent w-28 h-10" />
//         </Link>

//         <div className="hidden md:flex items-center gap-8">
//           <Link href="/service-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
//             Services
//           </Link>
//           <Link href="/technology-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
//             Technology
//           </Link>
//           <Link href="/vendor-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
//             Vendors
//           </Link>
//           <Link href="/crowdfunding-page" className="text-sm text-purple-600 hover:text-purple-700 transition font-medium">
//             Crowdfunding
//           </Link>
//           <Link href="/company-page" className="text-sm text-gray-400 hover:text-purple-600 transition">
//             Company
//           </Link>
//           <Link href="/" className="text-sm text-gray-400 hover:text-purple-600 transition">
//             More
//           </Link>
//         </div>

//         <ShoppingCart className="w-5 h-5 text-gray-900" />
//       </div>
//     </motion.nav>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Services", href: "/service-page" },
  { label: "Technology", href: "/technology-page" },
  { label: "Vendors", href: "/vendor-page" },
  { label: "Crowdfunding", href: "/crowdfunding-page" },
  { label: "Company", href: "/company-page" },
  { label: "More", href: "#more" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md "
    >
    <nav className="w-full sticky top-0 z-50 bg-transparent ">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
              <img src="/Logo.png" alt="picture showing a shopping cart" className="bg-transparent w-28 h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
                Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </motion.nav>
  )
}


