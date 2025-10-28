"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  firstName: string
  lastName: string
  countryCode: string
  mobileNumber: string
  email: string
  companyName: string
  jobRole: string
  address: string
  additionalComments: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    countryCode: "+234",
    mobileNumber: "",
    email: "",
    companyName: "",
    jobRole: "",
    address: "",
    additionalComments: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const countryCodes = [
    { code: "+234", country: "Nigeria" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+27", country: "South Africa" },
    { code: "+255", country: "Tanzania" },
    { code: "+256", country: "Uganda" },
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleCountryCodeChange = (value: string): void => {
    setFormData((prev) => ({
      ...prev,
      countryCode: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", formData)
      setSubmitSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        countryCode: "+234",
        mobileNumber: "",
        email: "",
        companyName: "",
        jobRole: "",
        address: "",
        additionalComments: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setErrors({ submit: "Failed to submit form. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {submitSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            {"Thank you! We've received your message and will get back to you soon."}
          </p>
        </div>
      )}

      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">{errors.submit}</p>
        </div>
      )}

      {/* First Name */}
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-gray-700 font-medium">
          First Name
        </Label>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
          className={`bg-gray-300 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 ${
            errors.firstName ? "ring-2 ring-red-500" : ""
          }`}
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
        />
        {errors.firstName && (
          <p id="firstName-error" className="text-red-500 text-sm">
            {errors.firstName}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-gray-700 font-medium">
          Last Name
        </Label>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
          className={`bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 ${
            errors.lastName ? "ring-2 ring-red-500" : ""
          }`}
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
        />
        {errors.lastName && (
          <p id="lastName-error" className="text-red-500 text-sm">
            {errors.lastName}
          </p>
        )}
      </div>

      {/* Mobile Number */}
      <div className="space-y-2">
        <Label htmlFor="mobileNumber" className="text-gray-700 font-medium">
          Mobile Number
        </Label>
        <div className="flex gap-2">
          <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
            <SelectTrigger className="w-24 bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-purple-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((item) => (
                <SelectItem key={item.code} value={item.code}>
                  {item.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="0810975183"
            className={`flex-1 bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 ${
              errors.mobileNumber ? "ring-2 ring-red-500" : ""
            }`}
            aria-invalid={!!errors.mobileNumber}
            aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
          />
        </div>
        {errors.mobileNumber && (
          <p id="mobileNumber-error" className="text-red-500 text-sm">
            {errors.mobileNumber}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          className={`bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 ${
            errors.email ? "ring-2 ring-red-500" : ""
          }`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-gray-700 font-medium">
          Company Name <span className="text-gray-500 text-sm">(Optional)</span>
        </Label>
        <Input
          id="companyName"
          name="companyName"
          type="text"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="Your company name"
          className="bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Job Role */}
      <div className="space-y-2">
        <Label htmlFor="jobRole" className="text-gray-700 font-medium">
          Job Role <span className="text-gray-500 text-sm">(Optional)</span>
        </Label>
        <Input
          id="jobRole"
          name="jobRole"
          type="text"
          value={formData.jobRole}
          onChange={handleInputChange}
          placeholder="Your job role"
          className="bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address" className="text-gray-700 font-medium">
          Address <span className="text-gray-500 text-sm">(Optional)</span>
        </Label>
        <Input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Your address"
          className="bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Additional Comments */}
      <div className="space-y-2">
        <Label htmlFor="additionalComments" className="text-gray-700 font-medium">
          Additional Comments
        </Label>
        <Textarea
          id="additionalComments"
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleInputChange}
          placeholder="Tell us more about your inquiry..."
          rows={6}
          className="bg-gray-300 border-0 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        {isSubmitting ? "Submitting..." : "Submit Information"}
      </Button>
    </form>
  )
}
