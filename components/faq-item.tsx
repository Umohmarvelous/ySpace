"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

interface FAQItemProps {
  question: string
  answer: string
  isOpen?: boolean
}

export default function FAQItem({ question, answer, isOpen = false }: FAQItemProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(isOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-semibold text-gray-900 text-left">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 py-4 bg-purple-50 border-t border-gray-200">
          <p className="text-gray-700 text-sm md:text-base">{answer}</p>
        </div>
      )}
    </div>
  )
}
