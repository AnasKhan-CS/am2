"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Check } from "lucide-react"
import { getPropertyById, formatPrice } from "@/data/properties"
import type { Property } from "@/types/property"

export default function PreBookingPage() {
  const params = useParams()
  const router = useRouter()
  const [property, setProperty] = useState<Property | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    preferredUnit: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const propertyData = getPropertyById(params.id as string)
      if (propertyData) {
        setProperty(propertyData)
      }
      setIsLoading(false)
    }
  }, [params])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">Property Not Found</h1>
        <p className="mt-4 text-gray-400">The property you are trying to pre-book does not exist.</p>
        <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push("/")}>
          Return to Home
        </Button>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container py-4">
          <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => router.push("/")}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <div className="container flex flex-col items-center justify-center px-4 py-16 text-center md:px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600"
          >
            <Check className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-3xl font-bold"
          >
            Pre-Booking Successful!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-md text-gray-400"
          >
            Thank you for pre-booking {property.title}. Our team will contact you shortly to confirm your pre-booking
            and provide more information about the project.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push("/")}>
              Return to Home
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container py-4">
        <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => router.back()}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="container px-4 py-8 md:px-6">
        <h1 className="text-3xl font-bold">Pre-Book Property</h1>
        <p className="mt-2 text-gray-400">Reserve your spot for {property.title} before it's officially launched</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Pre-Booking Form */}
          <div className="rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cnic">CNIC Number</Label>
                  <Input
                    id="cnic"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleInputChange}
                    required
                    placeholder="00000-0000000-0"
                    className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                  />
                </div>

                {property.type === "apartment" && (
                  <div>
                    <Label htmlFor="preferredUnit">Preferred Unit Type</Label>
                    <RadioGroup
                      value={formData.preferredUnit}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredUnit: value }))}
                      className="mt-2 space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-bedroom" id="1-bedroom" className="border-green-700 text-green-500" />
                        <Label htmlFor="1-bedroom">1 Bedroom</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-bedroom" id="2-bedroom" className="border-green-700 text-green-500" />
                        <Label htmlFor="2-bedroom">2 Bedrooms</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-bedroom" id="3-bedroom" className="border-green-700 text-green-500" />
                        <Label htmlFor="3-bedroom">3 Bedrooms</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                <div>
                  <Label htmlFor="message">Additional Information (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 min-h-[100px] border-green-900/30 bg-black/60 text-white focus:border-green-500"
                    placeholder="Any specific requirements or questions about the property"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-green-900/30 bg-black/60 p-4">
                <h3 className="text-lg font-semibold">Pre-Booking Benefits</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Priority selection of units before public launch</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Special pre-launch pricing with potential appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Flexible payment plans with lower down payment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Exclusive updates on construction progress</span>
                  </li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Confirm Pre-Booking"}
              </Button>
            </form>
          </div>

          {/* Property Summary */}
          <div className="space-y-6">
            <div className="rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
              <div className="relative h-48 w-full">
                <Image
                  src={property.images[0].src || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-yellow-600 text-white px-2 py-1 text-xs rounded">
                  Coming Soon
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{property.title}</h2>
                <p className="mt-1 text-gray-400">{property.location}</p>
                <div className="mt-4 flex justify-between">
                  <span className="text-gray-400">Starting Price:</span>
                  <span className="font-semibold">{formatPrice(property.price)}</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-gray-400">Area:</span>
                  <span>{property.area} sq ft</span>
                </div>
                {property.completionDate && (
                  <div className="mt-2 flex justify-between">
                    <span className="text-gray-400">Expected Completion:</span>
                    <span>{property.completionDate}</span>
                  </div>
                )}
                <div className="mt-4 border-t border-green-900/30 pt-4">
                  <Link href={`/properties/${property.slug}`}>
                    <Button variant="outline" className="w-full border-green-700 text-green-500 hover:bg-green-900/20">
                      View Property Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-green-900/30 bg-black/80 p-4 shadow-lg shadow-green-900/10">
              <h3 className="font-semibold">Pre-Booking Process</h3>
              <ol className="mt-2 space-y-2 text-sm text-gray-300 list-decimal list-inside">
                <li>Fill and submit the pre-booking form</li>
                <li>Our sales team will contact you within 24 hours</li>
                <li>Pay a refundable pre-booking fee of PKR 100,000</li>
                <li>Receive your pre-booking confirmation</li>
                <li>Get priority selection when the project launches</li>
              </ol>
              <p className="mt-4 text-xs text-gray-400">
                Note: The pre-booking fee is fully refundable if you decide not to proceed with the purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

