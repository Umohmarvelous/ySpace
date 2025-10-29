import { motion } from "framer-motion"


interface TechHeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function TechHeroSection({
  title,
  subtitle,
  backgroundImage,
}: TechHeroSectionProps){
  return (
    <section
      className=" relative w-full h-96 md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
         <div className="max-w-7xl mx-auto px-6 w-full z-20 text-left mt-40 md:mt-72">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-white"
            >
               <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6">{title}</h1>
               <p className="text-sm mb-8 max-w-sm md:max-w-lg md:text-lg">
               {subtitle}
               </p>
            </motion.div>
         </div>
    </section>
  )
}
