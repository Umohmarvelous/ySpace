"use client"

import { useRef } from "react"
// import { useScroll } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
// import HeroSection from "@/components/sections/hero"
// import AboutSection from "@/components/sections/about"
// import ValuesSection from "@/components/sections/values"
// import TeamSection from "@/components/sections/team"
// import CustomersSection from "@/components/sections/customers"
import HomePage from "./home-page/page"

export default function Home() {
  const containerRef = useRef(null)
  // const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <div ref={containerRef} className="overflow-y-scroll h-screen bg-white">
      <Navigation />
      <HomePage />

      <Footer /> 
    </div>
  )
}
