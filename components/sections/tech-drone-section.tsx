
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
      {DronesItems.map((drones, index) => (
         <DronesComp 
            key={index}
            drones={drones}
         />
      ))}
      </>
   )
}