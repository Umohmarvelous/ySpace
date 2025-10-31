
"use client"

import React, { useState, useEffect, memo } from "react"
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


interface NavItemProps {
  link: NavLink;
  isActive: boolean;
  onClick: (href: string) => void;
  theme: 'dark' | 'light'; 
}

const NavItem: React.FC<NavItemProps> = memo(({ link, isActive, onClick, theme }) => {
  const baseClasses = 'text-sm font-medium m-3 p-1 border-b-2 transition duration-200 cursor-pointer ';

  // Dynamic colors based on theme and active state
  const activeColor = theme === 'dark' ? 'text-black border-black' : 'text-black border-black';
  const inactiveColor = theme === 'dark' ? 'text-gray-400 hover:text-black border-transparent ' : 'text-white hover:text-zinc-700 border-transparent ';

  const linkClasses = `${baseClasses} ${isActive ? activeColor : inactiveColor}`;

  return (
    <Link
      key={link.href}
      href={link.href}
      className={linkClasses}
      onClick={() => onClick(link.href)}
    >
      {link.label}
    </Link>
  );
});

NavItem.displayName = 'NavItem';


interface NavigationProps {
  theme: 'dark' | 'light';
}

export default function Navigation({ theme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false)
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false)
  const [activeHref, setActiveHref] = useState<string>('');

  // Define theme-dependent colors
  const inactiveTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const hoverTextColor = theme === 'dark' ? 'hover:text-black' : 'hover:text-gray-900';
  const iconColor = theme === 'dark' ? 'text-white' : 'text-black';
  const mobileBg = theme === 'dark' ? 'text-gray-400' : 'text-white';
  
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
            <Link href="/" className={`text-xl font-bold text-black ${mobileBg}`}>
                <Image src="/Logo.png" width={300} height={300} alt="picture showing a company logo" className="bg-transparent w-20 h-8" />
            </Link>
          </div>

    
          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full items-center justify-center">
            <div className="md:flex md:self-center hidden w-auto md:space-x-0 lg:space-x-0 md:items-center md:justify-between p-1 rounded-full mx-20">
              
              {/* Services Dropdown */}
              <div className="relative group ">
                <button className={`flex items-center gap-1 ${inactiveTextColor} ${hoverTextColor} p-3 rounded-full transition-colors text-sm font-medium`}>
                  Services
                  <ChevronDown className={`w-4 h-4 ${iconColor}`} />
                </button>

                {/* Services Link DropDown Menu */}
                <div className="absolute left-[-10px] mt-4 rounded-md w-44 h-30 flex flex-col bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-[1px] border-gray-200">
                {servicesLinks.map((servicelink: NavLink) => (
                  <Link
                    key={servicelink.href}
                    href={servicelink.href}
                    className="block px-4 py-4 text-black hover:bg-[#EBEBEC] hover:text-black text-sm"
                  >
                    {servicelink.label}
                  </Link>
                ))}
                </div>
              </div>





              {/* Main Nav Links */}
              <div className="">
                <nav className="flex space-x-2 p-2 ">
                      {navLinks.map((link) => (
                        <NavItem
                          key={link.href}
                          link={link}
                          isActive={link.href === activeHref}
                          onClick={setActiveHref}
                          theme={theme}
                        />
                      ))}
                </nav>
              </div>






              {/* More Dropdown */}
              <div className="relative group ">
                <button className={`flex items-center gap-1 ${inactiveTextColor} ${hoverTextColor} p-3 rounded-full transition-colors text-sm font-medium  hover:text-black`}>
                  More
                  <ChevronDown className={`hover:text-black w-4 h-4 ${iconColor}`} />
                </button>

                {/* More Link DropDown Menu */}
                <div className="absolute left-[-72px] mt-4 rounded-md w-40 bg-white border-gray-200 border-[1px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {moreLinks.map((link: NavLink) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700  hover:bg-[#EBEBEC] hover:text-black  text-sm"
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
            <button className={`p-2 rounded-full transition-colors `}>
              <ShoppingCart className={`
                {isServiceOpen ? "w-5 h-5 inline-block " :  ""}
              ${mobileBg}`}
              
              /> 
            </button>
          </div>



          {/* Mobile Menu Button */}
          <div className="md:hidden p-2 flex flex-row-reverse px-6">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className={`w-5 h-5 ${iconColor}`} /> : <Menu className={`w-5 h-5 ${mobileBg}`} />}
            </button>
            <button className="pr-6 rounded-full transition-colors">
              <ShoppingCart className={`  w-5 h-5 ${mobileBg}`} />
            </button> 
          </div>
        </div>


        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden p-5 pr-0 pt-8 pb- z-50 top-0 left-0 right-0 absolute bg-white `}>
              
              {/* Mobile Header: Logo, Cart, Close Button */}
              <div className="flex flex-row w-full justify-between z-50">
                <Link href="/" className="text-xl font-bold text-white">
                    <Image src="/Logo.png" width={300} height={300} alt="picture showing company logo" className="bg-transparent w-20 h-8" />
                </Link>
                <div className="flex flex-row">
                  <button className="pr- rounded-full transition-colors">
                    <ShoppingCart className={`w-5 h-5 `} />
                  </button> 
                  <button
                    onClick={toggleMenu}
                    className=" md:hidden p-2 flex flex-row-reverse px-6"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? <X className={`w-5 h-5 $ text-black`} /> : <Menu className={`w-5 h-5 text-black `} />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 z-50 pt-8 pl-2 items-start self-start pr-4 pb-12">
                              
                  {/* Service dropDown - Mobile */}
                  <div className="border-t-[1px] border-t-zinc-400 pt-8 w-full">
                  <button
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className={`px-5 py-2 text-left ${inactiveTextColor} ${hoverTextColor} rounded-lg transition-colors text-sm font-medium flex items-start self-start justify-between w-full hover:text-[#5c008c] `}
                    >
                    Services
                    <ChevronDown className={`hover:text-black w-4 h-4 transition-transform ${isServiceOpen ? "rotate-180" : ""} ${iconColor}`} />
                  </button>

                  {isServiceOpen && (
                    <div className="w-full bg-transparent flex items-start self-left justify-center flex-col text-center ml-7 border-t-[1px] border-t-gray-200 ">
                      {servicesLinks.map((servicelink: NavLink) => (
                    <Link
                      key={servicelink.href}
                      href={servicelink.href}
                      className="w-full block px-2 py-2 text-gray-600 hover:text-purple-600 rounded-lg transition-colors text-sm text-left"
                      onClick={() => setIsOpen(false)}
                    >
                      {servicelink.label}
                    </Link>
                  ))}
                    </div>
                  )}

                  {/* NavBar Links - Mobile */}
                  {navLinks.map((link: NavLink) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.1 }}
                        className={`w-full px-4 py-4 ${inactiveTextColor} rounded-lg transition-colors text-sm font-medium hover:text-purple-600`}
                      >
                          {link.label}
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* More button Dropdown - Mobile */}
                <div className="w-full">
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className={`px-5 py-2 text-left ${inactiveTextColor} ${hoverTextColor} transition-colors text-sm font-medium flex items-start self-start justify-between w-full hover:text-[#5c008c] rounded-lg`}
                    >
                    More
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? "rotate-180" : ""} ${iconColor}`} />
                  </button>

                  {isMoreOpen && (
                    <div className="w-full bg-transparent flex items-start self-left justify-center flex-col text-center ml-7 border-t-[1px] border-t-gray-200">
                      {moreLinks.map((link: NavLink) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="w-full block px-2 py-2 text-gray-600 hover:text-purple-600 transition-colors text-sm text-left"
                          onClick={() => setIsOpen(false)}
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