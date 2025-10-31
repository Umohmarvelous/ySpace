"use client"

import { JSX, useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"
import { motion } from "framer-motion"

interface FAQItemProps {
  question: string
  answer: string
  isOpen?: boolean
}

export default function FAQItem({ question, answer, isOpen }: FAQItemProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(isOpen || false)


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-lg  overflow-hidden"
        >
            <button
            onClick={() => setOpen(!open)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
            >
            <span className="font-semibold text-gray-900">{question}</span>
            {open ? (
                <MinusIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
            ) : (
                <PlusIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
            )}
            </button>

            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                >
                    <p className="text-gray-600 text-sm">{answer}</p>
              </motion.div>
            )}
          </motion.div>
      
    </>
  )
}



