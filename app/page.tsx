"use client"

import { useRef } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HomePage from "./home-page/page"

export default function Home() {
  const containerRef = useRef(null)
  // const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <div ref={containerRef} className="overflow-y-scroll h-screen bg-white">
      <Navigation />
      <HomePage />
      {/* <BlogPage /> */}

      <Footer /> 
    </div>
  )
}
