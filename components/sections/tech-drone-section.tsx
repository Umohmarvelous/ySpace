
import DronesComp from "../tech-drone-components";

const DronesItems = [
  {
    title: "Smart Delivery Drones",
    label: "Our drones are equipped with advanced sensors, GPS, and obstacle detection to ensure safe and efficient delivery — even in challenging terrain.",
    image:"/tech_drone_1.png",
  },
  {
    title: "Real-Time Tracking",
    label: "Our system calculates the fastest route and updates every second for full transparency.",
    image:"/tech_drone_2.png",
  },
  {
    title: "Intelligent Dispatch System",
    label: "Our drones are built with clean, rechargeable energy systems — reducing emissions while improving delivery speed and reliability.",
    image:"/tech_drone_4.png",
  },
]

export default function TechDroneSection() {

   return(
    <>
        {/* <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="pt-12 "
        > */}
      {DronesItems.map((drones, index) => (
        <DronesComp 
            key={index}
            drones={drones}
            />
          ))}
          {/* </motion.section> */}
        <div className="bottom-[350px] relative">
          <div className="hidden md:flex border-[1px] border-gray-300 w-48 rotate-90 relative bottom-96 left-8 mb-12 border-dashed"></div>
          <div className="hidden md:flex border-[1px] border-gray-300 w-48 rotate-90 relative bottom-12 left-8 mb-12 border-dashed"></div>
        </div>
    </>
   )
}