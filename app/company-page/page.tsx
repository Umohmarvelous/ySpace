"use client"
import TeamMemberComponent from "@/components/team-member"

interface Value {
  title: string
  description: string
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
      "Trust is the foundation of everything we do. We're committed to safe, reliable, and transparent service that our customers and partners can depend on.",
  },
  {
    title: "Community",
    description:
      "We believe in building strong connections between businesses and customers. By supporting local merchants and connecting communities, we're creating economic opportunities across Africa.",
  },
  {
    title: "Sustainability",
    description:
      "Drone delivery is cleaner and more efficient than traditional logistics. We're committed to reducing our environmental impact while building a sustainable future for delivery.",
  },
]

const team = [
  {
    name: "Joshua Olaiya",
    role: "Founder, CEO & Chairman",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Umoh Marvelous Sunday",
    role: "Co-Founder & CTO",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Lynda Obitolo",
    role: "UI/UX Designer",
    image: "/professional-woman-headshot.png",
  },
]

export default function CompanyPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="py-12 md:py-10 mt-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-row justify-between">
          <div className="w-500">
            <p className="text-purple-600 font-semibold mb-2 text-sm md:text-base">About Yspace</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              Building Nigerias first indigenous drone delivery company
            </h1>
          </div>
          <div className="w-50 pl-60 flex flex-col self-center">
            <div>
              <p className="text-gray-600 mb-4 text-sm md:text-[13px] leading-relaxed">
                At Yspace, we are reimagining how goods move — combining drone delivery, e-commerce and smart logistics
                into one seamless experience. Whether for businesses or individuals, Yspace is building Africas first
                drone-powered delivery platform.
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm md:text-[13px] leading-relaxed">
                We believe technology should empower people. That is why we are building Africas most innovative delivery
                and commerce platform — connecting businesses directly to their customers through innovation, trust,
                community, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">Customers & Partners</h2>
          <div className="flex justify-center items-center">
            <div className="w-132 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
              <img src="/t-motor.png" alt="picture showing a partnership logo" className="bg-transparent w-100 h-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our values guide everything we do.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
            {/* Values List */}
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                    <span className="text-purple-400">✦</span>
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Values Description */}
            <div className="bg-purple-100 text-gray-900 rounded-lg p-8 flex items-center">
              <div>
                <div className="text-3xl mb-4">★</div>
                <p className="text-sm md:text-base leading-relaxed">
                  At Yspace, innovation is not just about building drones — it is about transforming how people and
                  businesses access goods and services. We are pioneering new delivery solutions that make commerce more
                  accessible, faster, and more sustainable. By combining cutting-edge technology with a commitment to
                  community, we are building the future of delivery in Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900">Meet the Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, index) => (
              <TeamMemberComponent key={index} name={member.name} role={member.role} image={member.image} />
            ))}
          </div>
        </div>
      </section>

    
    </main>
  )
}
