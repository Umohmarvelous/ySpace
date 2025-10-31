"use client"
import Image from "next/image"
import TeamMemberComponent from '../../components/team-member';
import { useState } from "react";

interface Value {
  title: string
  description: string
}

interface FounderBioProps {
    name: string
    position: string
    image: string
    background: string[]
    role: string[]
}


const values: Value[] = [
  {
    title: "Innovation",
    description:
      "At Yspace, innovation isn't just about building drones — it's about transforming how people and businesses access goods and services. We're pioneering new delivery solutions that make commerce more accessible, faster, and more sustainable.",
  },
  {
    title: "Trust",
    description:
      "Trust is the foundation of everything we do. We're committed to safe, reliable, and transparent service that our customers and partners can depend on. Every delivery is backed by our commitment to excellence and accountability.",
  },
  {
    title: "Community",
    description:
      "We believe in building strong connections between businesses and customers. By supporting local merchants and connecting communities, we're creating economic opportunities across Africa. Together, we're stronger.",
  },
  {
    title: "Sustainability",
    description:
      "Drone delivery is cleaner and more efficient than traditional logistics. We're committed to reducing our environmental impact while building a sustainable future for delivery. Green technology for a better tomorrow.",
  },
]

const teamMembers = [
  {
    name: "Joshua Olaiya",
    position: "Founder, CEO & Chairman of the board",
    image: "/joshua.png",
    specality:["Robotics Engineer","Tech Instructor","Product Development/Engineer"],
  },
    

  {
    name: "Unknown",
    position: "Co-Founder & Chief Software Officer (CSO)",
    image: "/unknown.jpg",
    specality:[
          "Software Engineer.",
          "Tech Instructor.",
          "Full-stack Developer"
      ],
    },
]

const founderBio : FounderBioProps[]  = [
  {
    name: "Joshua Olaiya",
    position: "Founder, CEO & Chairman",
    image: "/joshua.png",
    background: [
      "Joshua Olaiya, the Founder, CEO and Board Chairman of ySpace, is a young self-taught robotics engineer with seven years of experience. He began coding at 13 with Scratch, Python, and C++, developed his first game and mobile app at 15, and crafted a hand-gesture robot prototype for the disabled at 17.",

      "His achievements, including recognition from Tesla, BBC, Deutsche Welle, T-Motor, Silverbird TV, Anybotics, Agility Robotics and notable social media influencers, place him among the top 200 influencers globally, alongside figures like Bill Gates and other top global leaders.", 
      
      "Additionally, he once held the 25th rank in robotics worldwide by Favikon. Joshua's entrepreneurial spirit earned him an entrepreneur programme from the University of Oxford, where he also holds a diploma in electrical and electronic engineering from the U.K, complemented by City and Guild certification.",
  ],
    role: [
      "Oversees product development ", 
      "strategic planning, and ",
      "overall company operations."
    ]
}]



export default function CompanyPage() {
  const [selectedValueIndex, setSelectedValueIndex] = useState<number>(0)

  return (
    <main className="w-full pt-0 md:pt-32">

      <section className="py-12 md:py-10 pt-32 lg:pt-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row md:justify-between">
          <div className="w-full lg:w-[200%] mb-20 lg:mb-0 text-center lg:text-left">
            <p className="text-[#A2A4A7] font-semibold mb-4 text-sm md:text-base">About Yspace</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900 mx-30 sm:mx-20 lg:mx-0">
              Building Nigerias first indigenous drone delivery company
            </h1>
          </div>
          <div className="w-[90%] lg:w-auto pl-0 lg:pl-50 flex flex-col self-center sm:text-center md:text-justify -mt-12 lg:mt-14 mx-30 sm:mx-40 lg:mx-0">
            <div>
              <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                {"At ySpace, we're reimagining how goods move — combining drone delivery, e-commerce and smart logistics into one seamless experience. Whether for businesses or individuals, ySpace is building Africa's first drone-powered delivery platform."}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {"We believe technology should empower people. That's why we're building Africa's most innovative delivery and commerce platform — connecting businesses directly to their customers through innovation, trust, community, and sustainability."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">Customers & Partners</h2>
          <div className="flex justify-center items-center">
            <div className="w-32 h-16 rounded-lg flex items-center justify-center">
              <Image src="/t-motor.jpg" width={400} height={400} alt="picture showing a partnership logo" className="w-screen bg-transparent object-fill " />            
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold text-center md:text-left w-50 md:w-96">Our values guide everything we do.</h2>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-12 md:mt-16">
            {/* Values List */}
            <div className="space-y-6 md:flex grid grid-row-3 md:flex-col">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedValueIndex(index)}
                  className={`text-left transition-all ${
                    selectedValueIndex === index ? "opacity-100 text-[#1BB1A3]" : " opacity-70 hover:opacity-85"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                    <span className={`text-left transition-all text-[12px] ${
                    selectedValueIndex === index ? "text-[12px] opacity-100 text-[#1BB1A3]" : "opacity-70 hover:opacity-85"
                  }`}>0{index + 1}</span>
                    {value.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Values Description */}
            <div className="bg-purple-100 text-gray-900 rounded-lg p-8 flex items-center w-50 md:w-[50%]">
              <div>
                <div className="text-3xl mb-4 text-[#116B62]">★</div>
                <p className="text-sm md:text-base leading-relaxed">
                  {values[selectedValueIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FounderBio Section */}
      <section className="flex flex-col bg-white items-center py-12 md:py-0 ">
           <div className="py-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
             <h1 className="text-black text-3xl font-bold mb-10">About the Founder</h1>
             {founderBio.map((data, index) => (
              <div key={index} className="mb-12 text-justify md:text-justify flex flex-col md:flex-row justify-between items-center sm:items-center space-x-0 md:space-x-0 lg:space-x-10">
                <div className="flex flex-col items-left md:self-start ">
                  <div className="w-80 sm:w-96 h-96 rounded-3xl">
                    <Image src={data.image} alt={data.name} width={800} height={800} className="object-cover w-98 h-98 transform scale-x-[-1]" />
                  </div>
                </div>

                <ul className="w-30 sm:w-84 md:w-fit px-5 sm:px-10 lg:px-0 flex self-start flex-col">
                  <div className="flex flex-col items-left justify-left sm:justify-start space-x-2 mb-5 mt-0 sm:mt-5 md:mt-0 m-0 p-0">
                    <h3 className="text-2xl font-bold text-gray-900 m-0 p-0">{data.name}</h3>
                    <p className="flex items-start text-gray-800 rounded-sm text-left self-start m-0 p-0">{data.position}</p>
                  </div>
                  <li className="text-black mb-4 text-sm font-normal">Background:  
                  <span className="ml-2">
                    {data.background}
                  </span>
                  </li>
                  <li key={index} className="text-gray-900 mb-4">Role: 
                    <span className="text-gray-600 mb- ml-2">
                    {data.role}
                    </span>
                  </li>
                </ul>
              </div>
              ))}
          </div>
          {/* Team section */}
          <div className="bg-black w-full py-16 items-center justify-start">
            <div className="flex flex-col justify-space-between mx-auto items-center ">
              <h2 className="text-3xl md:text-4xl font-bold flex self-center text-start mb-7 md:mb-10 md:mt-7 text-gray-100 ">Our Team</h2>
              <div className="flex flex-col md:flex-row items-start flex-wrap space-x-0 md:space-x-5 space-y-10 md:space-y-0">
                {teamMembers.map((member, index) => (
                  <TeamMemberComponent key={index} team={member} />
                ))}
              </div>
            </div>
          </div>
      </section>
    </main>
  )
}

