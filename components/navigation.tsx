"use client"

import React, { useState, useEffect, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  { label: "Shop on Marketplace", href: "/marketplace" },
  { label: "Send Packages", href: "/send-packages" },
]

interface NavItemProps {
  link: NavLink;
  isActive: boolean;
  theme: "dark" | "light"; 
}

const NavItem: React.FC<NavItemProps> = memo(({ link, isActive, theme }) => {
  const baseClasses = "text-sm font-medium m-3 p-1 border-b-2 transition duration-200 cursor-pointer";

  // Active link always gets the theme's primary color with underline
  const activeColor = theme === "dark" 
    ? "text-black border-black" 
    : "text-black border-black";
  
  // Inactive links are subtle with no underline
  const inactiveColor = theme === "dark" 
    ? "text-white hover:text-white border-transparent" 
    : "text-black hover:text-black border-transparent";

  const linkClasses = `${baseClasses} ${isActive ? activeColor : inactiveColor}`;

  return (
    <Link
      href={link.href}
      className={linkClasses}
    >
      {link.label}
    </Link>
  );
});

NavItem.displayName = "NavItem";

interface NavigationProps {
  theme: "dark" | "light"; 
}

export default function Navigation({ theme }: NavigationProps) {
  const pathname = usePathname(); // Get current path
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false)
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false)

  // Theme-based color definitions
  const colors = {
    // Desktop dropdown button text
    dropdownText: theme === "dark" ? "text-white" : "text-black",
    
    dropdownHover: theme === "dark" ? "hover:text-white" : "hover:text-black",
    
    // Icons (menu, cart, chevron)
    icon: theme === "dark" ? "text-white" : "text-black",
    
    // Mobile menu text
    mobileText: theme === "dark" ? "text-gray-300" : "text-gray-600",
    
    mobileHover: theme === "dark" ? "hover:text-white" : "hover:text-black",

    imageCol: theme === "dark" ? "/Logo white.png" : "/Logo.png",
  };

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
      <div className="flex-1 items-center justify-center">
        <div className="pt-5 flex flex-row items-center justify-between w-auto h-auto">

          {/* Logo */}
          <div className="flex self-start max-w-fit h-auto p-4">
            <Link href="/" className="text-xl font-bold">
              <Image 
                src={`${colors.imageCol}`} 
                width={300} 
                height={300} 
                alt="company logo" 
                className="bg-transparent w-20 h-8" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full items-center justify-center">
            <div className="md:flex md:self-center hidden w-auto md:space-x-0 lg:space-x-0 md:items-center md:justify-between p-1 rounded-full mx-20">
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 ${colors.dropdownText} ${colors.dropdownHover} p-3 rounded-full transition-colors text-sm font-medium`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ${colors.icon}`} />
                </button>

                {/* Services Dropdown Menu */}
                <div className="absolute left-[-10px] mt-4 rounded-md w-44 flex flex-col bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-[1px] border-gray-200 shadow-lg">
                  {servicesLinks.map((servicelink: NavLink) => (
                    <Link
                      key={servicelink.href}
                      href={servicelink.href}
                      className="block px-4 py-4 text-gray-700 hover:bg-[#EBEBEC] hover:text-[#9900E8] text-sm first:rounded-t-md last:rounded-b-md"
                    >
                      {servicelink.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Nav Links */}
              <div>
                <nav className="flex space-x-2 p-2">
                  {navLinks.map((link) => (
                    <NavItem
                      key={link.href}
                      link={link}
                      isActive={pathname === link.href}
                      theme={theme}
                    />
                  ))}
                </nav>
              </div>

              {/* More Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 ${colors.dropdownText} ${colors.dropdownHover} p-3 rounded-full transition-colors text-sm font-medium`}
                >
                  More
                  <ChevronDown className={`w-4 h-4 ${colors.icon}`} />
                </button>

                {/* More Dropdown Menu */}
                <div className="absolute left-[-72px] mt-4 rounded-md w-40 bg-white border-gray-200 border-[1px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  {moreLinks.map((link: NavLink) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#EBEBEC] hover:text-black text-sm first:rounded-t-md last:rounded-b-md"
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
              <ShoppingCart className={`w-5 h-5 ${colors.icon}`} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden p-2 flex flex-row-reverse px-6">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className={`w-5 h-5 ${colors.icon}`} />
              ) : (
                <Menu className={`w-5 h-5 ${colors.icon}`} />
              )}
            </button>
            <button className="pr-6 rounded-full transition-colors">
              <ShoppingCart className={`w-5 h-5 ${colors.icon}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden p-5 pr-0 pt-8 z-50 top-0 left-0 right-0 absolute bg-white">
            
            {/* Mobile Header */}
            <div className="flex flex-row w-full justify-between z-50">
              <Link href="/" className="text-xl font-bold">
                <Image 
                  src="/Logo.png" 
                  width={300} 
                  height={300} 
                  alt="company logo" 
                  className="bg-transparent w-20 h-8" 
                />
              </Link>
              <div className="flex flex-row">
                <button className="rounded-full transition-colors">
                  <ShoppingCart className="w-5 h-5 text-black" />
                </button>
                <button
                  onClick={toggleMenu}
                  className="md:hidden p-2 flex flex-row-reverse px-6"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 z-50 pt-8 pl-2 items-start self-start pr-4 pb-12">
              
              {/* Services Dropdown - Mobile */}
              <div className="border-t-[1px] border-t-zinc-400 pt-8 w-full">
                <button
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="px-5 py-2 text-left text-gray-600 hover:text-[#9900E8] rounded-lg transition-colors text-sm font-medium flex items-start self-start justify-between w-full"
                >
                  Services
                  <ChevronDown 
                    className={`w-4 h-4 text-black transition-transform ${isServiceOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {isServiceOpen && (
                  <div className="w-full bg-transparent flex items-start self-left justify-center flex-col text-center ml-7 border-t-[1px] border-t-gray-200">
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
                {navLinks.map((link: NavLink) => {
                  const isActiveMobile = pathname === link.href;
                  return (
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
                        className={`w-full px-4 py-4 rounded-lg transition-colors text-sm font-medium ${
                          isActiveMobile 
                            ? "text-purple-600 font-semibold" 
                            : "text-gray-600 hover:text-purple-600"
                        }`}
                      >
                        {link.label}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* More Dropdown - Mobile */}
              <div className="w-full">
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="px-5 py-2 text-left text-gray-600 hover:text-[#9900E8] transition-colors text-sm font-medium flex items-start self-start justify-between w-full rounded-lg"
                >
                  More
                  <ChevronDown 
                    className={`w-4 h-4 text-black transition-transform ${isMoreOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {isMoreOpen && (
                  <div className="w-full bg-transparent flex items-start self-left justify-center flex-col text-center ml-7 border-t-[1px] border-t-gray-200">
                    {moreLinks.map((link: NavLink) => {
                      const isActiveMobile = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`w-full block px-2 py-2 transition-colors text-sm text-left ${
                            isActiveMobile 
                              ? "text-purple-600 font-semibold" 
                              : "text-gray-600 hover:text-purple-600"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}