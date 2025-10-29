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
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false)


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



  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }




  return (
  <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
    <nav className="relative top-0 z-50 bg-transparent">
      <div className="flex-1 items-center justify-center">

        <div className="pt-5 flex flex-row items-center justify-between w-auto h-auto">


          {/* Logo */}
          <div className=" flex self-start max-w-fit h-auto p-4">
            <Link href="/" className="text-xl font-bold text-white">
                <Image src="/Logo white.png" width={300} height={300} alt="picture showing a shopping cart" className="bg-transparent w-20 h-8" />
            </Link>
          </div>

    
          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full items-center justify-center">

            <div className="md:flex md:self-center hidden w-auto md:space-x-0 lg:space-x-0 md:items-center md:justify-between bg-zinc-200 p-1 rounded-full mx-20">
              <div className="relative group ">
                <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 p-3 rounded-full transition-colors text-sm font-medium">
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
          </div>







          {/* Cart Icon - Desktop */}
          <div className="hidden md:items-end md:justify-self-end md:flex md:flex-row items-center right-0 relative gap-4 mx-6 w-fit">
            <button className="p-2 rounded-full transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <ShoppingCart className="w-5 h-5 inline-block mr-2" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden p-2 text-white flex flex-row-reverse px-6">
            <button
              onClick={toggleMenu}
              className=""
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
            <button className="pr-6 rounded-full transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <ShoppingCart className="w-5 h-5 inline-block mr-6" />
              </svg>
            </button> 
          </div>
        </div>








        {/* Mobile Navigation */}
        {isOpen && (
          <div className=" md:hidden p-5 pr-0 pt-8 pb- z-50 top-0 left-0 right-0 absolute bg-white">
                {/* Mobile Menu Button */}
              <div className="flex flex-row w-full justify-between z-50">
                <Link href="/" className="text-xl font-bold text-white">
                    <Image src="/Logo.png" width={300} height={300} alt="picture showing a shopping cart" className="bg-transparent w-20 h-8" />
                </Link>
                <div className="flex flex-row">
                  <button className="pr- rounded-full transition-colors">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <ShoppingCart className="w-5 h-5 inline-block" />
                    </svg>
                  </button> 
                  <button
                    onClick={toggleMenu}
                    className=" md:hidden p-2 text-black flex flex-row-reverse px-6"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 z-50 pt-8 pl-2 items-start self-start pr-4 pb-12">
                              

                  {/* Service dropDown */}
                  <div className="border-t-[1px] border-t-zinc-400 pt-8 w-full">
                  <button
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="px-5 py-2 text-left text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium flex items-start self-start justify-between w-full"
                    >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServiceOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isServiceOpen && (
                    <div className="w-[480px] bg-transparent flex items-start self-left justify-center flex-col text-center ml-7 border-t-[1px] border-t-gray-200">
                      {servicesLinks.map((servicelink: NavLink) => (
                    <Link
                      key={servicelink.href}
                      href={servicelink.href}
                      className="w-full block px-2 py-2 text-gray-600 hover:text-[#9900E8] rounded-lg transition-colors text-sm text-left"
                    >
                      {servicelink.label}
                    </Link>
                  ))}
                    </div>
                  )}


                  {/* NavBar Dropdown */}
                  {navLinks.map((link: NavLink) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className=" "
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.1 }}
                        className="w-full px-4 py-4 text-gray-500  rounded-lg transition-colors text-sm font-medium hover:text-[#9900E8] "
                      >
                          {link.label}
                      </motion.div>
                    </Link>
                  ))}
                </div>


                {/* More button Dropdown */}
                <div className="w-full">

                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="px-5 py-2 text-left text-gray-500 transition-colors text-sm font-medium flex items-start self-start justify-between w-full"
                    >
                    More
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isMoreOpen && (
                    <div className=" w-[480px] bg-transparent flex items-start self-left justify-center flex-col text-center ml-7 border-t-[1px] border-t-gray-200">
                      {moreLinks.map((link: NavLink) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className=" w-full block px-2 py-2 text-gray-600 hover:text-[#9900E8] transition-colors text-sm text-left"
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
                </div>
              </div>
          </div>
        )}
      </div>
    </nav>
    </motion.nav>
  )
}
