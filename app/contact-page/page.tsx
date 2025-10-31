import type React from "react"
import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Mail } from "lucide-react"
import ContactInfo from "@/components/contact-info";




export const metadata: Metadata = {
  title: "Contact Us - Yspace Drone Delivery",
  description:
    "Get in touch with Yspace for questions, ideas, or partnership opportunities. We're here to help with your drone delivery needs.",
  keywords: ["contact yspace", "drone delivery support", "customer service", "partnership"],
  openGraph: {
    title: "Contact Us - Yspace",
    description: "Reach out to Yspace for support, inquiries, or business partnerships.",
    type: "website",
  },
}



interface HqInfo {
  name: string
  text: string | string[]
}

interface ContactInfoItem {
  icon: React.ReactNode
  title: string
  content: string | string[]
}

export default function ContactPage(): React.ReactElement {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Customer Support",
      content: [
        "Need help with an order or delivery?",
        "Our support team is always within reach.",
      ],
    },
  ]
  
  const HqDetails : HqInfo[] = [
    {
      name: "ySpace HQ",
      text: "Lagos, Nigeria",
    }
  ]

  const customerSupportData = {
    email: 'hello@yspace.inc',
    phone: '+234 [XXX XXX XXXX]',
    hours: 'Mon-Fri, 9:00 AM - 6:00 PM (WAT)',
  };


  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="py-12 md:py-40 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div className="flex flex-col justify-start space-y-12">
              <div className="w-full">
                <h1 className="w-72 md:w-96 text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  {"We're building what's next"}
                </h1>
                <p className="text-lg leading-relaxed w-[500px] md:w-[390px] text-zinc-400">
                {"  Got a question, idea, or partnership in mind? "}
                </p>
                <p className="w-[390px] md:w-[490px] text-zinc-400">
                  {"We'd love to hear from you. Because the future moves faster when we build it together."}
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-8 ">
                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">{info.title}</h2>
                    {Array.isArray(info.content) ? (
                      <div className="space-y-1 text-zinc-400 text-lg md:text-lg">
                        {info.content.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                        <div>   
                          <ContactInfo data={customerSupportData} />
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-600 text-sm md:text-base ">{info.content}</p>
                    )}
                  </div>
                ))}
                {HqDetails.map((info, index)=>(
                  <div key={index} className="flex flex-col">
                    <h1 className="text-2xl font-medium my-2">HQ</h1>
                    <h2 className="text-lg text-zinc-400">{info.name}</h2>
                    <h2 className="text-lg text-zinc-400">{info.text}</h2>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="flex flex-col justify-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Yspace",
            url: "https://yspace.inc",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              telephone: "+234-XXX-XXX-XXXX",
              email: "hello@yspace.inc",
              areaServed: "NG",
              availableLanguage: "en",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Yspace HQ",
              addressLocality: "Lagos",
              addressCountry: "NG",
            },
          }),
        }}
      />
    </main>
  )
}
