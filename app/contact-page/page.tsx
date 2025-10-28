import type React from "react"
import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin } from "lucide-react"

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
        "Email: hello@yspace.inc",
        "Phone: +234 [XXX XXX XXXX]",
        "Hours: Mon-Fri, 9:00 AM - 6:00 PM (WAT)",
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "HQ",
      content: ["Yspace HQ", "Lagos, Nigeria"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div className="flex flex-col justify-start space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  {"We're building what's next"}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                {"  Got a question, idea, or partnership in mind? We'd love to hear from you. Because the future moves faster when we build it together."}
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-xl font-semibold text-gray-900">{info.title}</h2>
                    {Array.isArray(info.content) ? (
                      <div className="space-y-1 text-gray-600 text-sm md:text-base">
                        {info.content.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-sm md:text-base">{info.content}</p>
                    )}
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
