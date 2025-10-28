"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, ShoppingCart, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Technology", href: "/technology-page" },
  { label: "Vendors", href: "/vendor-page" },
  { label: "Crowdfunding", href: "/crowdfunding-page" },
  { label: "Company", href: "/company-page" },
]

const moreLinks: NavLink[] = [
  { label: "Contact Us", href: "/contact-page" },
  { label: "Careers", href: "/career-page" },
  { label: "Blog", href: "/blog-page" },
]

const servicesLinks: NavLink[] = [
  { label: "Shop on Marketplace", href: "/contact-page" },
  { label: "Send Packages", href: "/career-page" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false)


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
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md w-auto flex self-center justify-center mx-auto mt-10 pt-0 rounded-2xl sm:rounded-lg"
    >
    <nav className="w-full sticky top-0 z-50 bg-transparent">
      <div className="py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-1">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
              <Image src="/Logo white.png" alt="picture showing a shopping cart" width={300} height={300} className="bg-transparent w-28 sm:w-20 sm:h-8 md:w-28 h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className=" hidden md:flex md:space-x-2 lg:space-x-10 items-center justify-around bg-zinc-200 p-2 rounded-full">
            <div className="relative group ">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900  p-3 rounded-full transition-colors text-sm font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Services Link DropDown Menu */}
              <div className="absolute left-[-10px] mt-4 rounded-xl w-44 h-30 flex flex-col bg-gray-300 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {servicesLinks.map((servicelink: NavLink) => (
                <Link
                  key={servicelink.href}
                  href={servicelink.href}
                  className="block px-4 py-4 text-gray-700 hover:bg-gray-700 hover:text-white first:rounded-t-lg last:rounded-b-lg transition-colors text-sm"
                >
                  {servicelink.label}
                </Link>
              ))}
              </div>
            </div>

            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium hover:bg-gray-300 p-3 rounded-full" 
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group ">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 p-3 rounded-full transition-colors text-sm font-medium">
                More
                <ChevronDown className="w-4 h-4" />
              </button>


              {/* More Link DropDown Menu */}
              <div className="absolute left-[-72px] mt-4 rounded-xl w-40 bg-gray-300 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {moreLinks.map((link: NavLink) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-700 hover:text-white first:rounded-t-lg last:rounded-b-lg transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}

              </div>
            </div>
                
          </div>

          {/* Cart Icon - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 bg-gray-300 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <ShoppingCart className="w-5 h-5 inline-block mr-2" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 bg-gray-300 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-0 border-t border-gray-400 mt-7">
            <div className="flex flex-col gap-3 pt-7 items-center">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}



              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="px-4 py-2 text-left text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium flex items-center justify-between"
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
              </button>

              {isMoreOpen && (
                <div className="py-3 px-4 bg-gray-300 rounded-xl flex items-center self-center justify-center flex-col text-center">
                  {moreLinks.map((link: NavLink) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false)
                        setIsMoreOpen(false)
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}



              <button className="px-4 py-2 text-left text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
                <ShoppingCart className="w-5 h-5 inline-block mr-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </motion.nav>
  )
}


