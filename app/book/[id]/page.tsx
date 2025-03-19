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
import { getPropertyById, formatPrice, calculateMonthlyInstallment } from "@/data/properties"
import type { Property } from "@/types/property"

export default function BookingPage() {
  const params = useParams()
  const router = useRouter()
  const [property, setProperty] = useState<Property | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
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
        // Set default payment plan
        if (propertyData.paymentPlans.length > 0) {
          setSelectedPlan(propertyData.paymentPlans[0].id)
        }
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
        <p className="mt-4 text-gray-400">The property you are trying to book does not exist.</p>
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
            Booking Successful!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-md text-gray-400"
          >
            Thank you for booking {property.title}. Our team will contact you shortly to confirm your booking and guide
            you through the next steps.
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

  const selectedPaymentPlan = property.paymentPlans.find((plan) => plan.id === selectedPlan)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container py-4">
        <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => router.back()}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="container px-4 py-8 md:px-6">
        <h1 className="text-3xl font-bold">Book Property</h1>
        <p className="mt-2 text-gray-400">Complete the form below to book {property.title}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Booking Form */}
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

                <div>
                  <Label htmlFor="message">Additional Information (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 min-h-[100px] border-green-900/30 bg-black/60 text-white focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Select Payment Plan</h3>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="mt-4 space-y-3">
                  {property.paymentPlans.map((plan) => {
                    const monthlyInstallment = calculateMonthlyInstallment(
                      property.price,
                      plan.downPayment,
                      plan.installmentPeriod,
                      plan.interestRate,
                      plan.discount,
                    )

                    const downPaymentAmount = property.price * (plan.downPayment / 100)

                    return (
                      <div
                        key={plan.id}
                        className={`rounded-lg border p-4 transition-colors ${
                          selectedPlan === plan.id
                            ? "border-green-500 bg-green-900/20"
                            : "border-green-900/30 bg-black/60 hover:border-green-700"
                        }`}
                      >
                        <div className="flex items-start">
                          <RadioGroupItem
                            value={plan.id}
                            id={plan.id}
                            className="mt-1 border-green-700 text-green-500"
                          />
                          <div className="ml-3 flex-1">
                            <label htmlFor={plan.id} className="block font-medium">
                              {plan.name}
                            </label>
                            <p className="text-sm text-gray-400">{plan.description}</p>
                            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-gray-400">Down Payment:</span>
                                <span className="ml-1 font-medium">{formatPrice(downPaymentAmount)}</span>
                              </div>
                              {plan.installmentPeriod > 0 && (
                                <div>
                                  <span className="text-gray-400">Monthly:</span>
                                  <span className="ml-1 font-medium">{formatPrice(monthlyInstallment)}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Confirm Booking"}
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
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{property.title}</h2>
                <p className="mt-1 text-gray-400">{property.location}</p>
                <div className="mt-4 flex justify-between">
                  <span className="text-gray-400">Price:</span>
                  <span className="font-semibold">{formatPrice(property.price)}</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-gray-400">Area:</span>
                  <span>{property.area} sq ft</span>
                </div>
                {property.bedrooms && (
                  <div className="mt-2 flex justify-between">
                    <span className="text-gray-400">Bedrooms:</span>
                    <span>{property.bedrooms}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="mt-2 flex justify-between">
                    <span className="text-gray-400">Bathrooms:</span>
                    <span>{property.bathrooms}</span>
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

            {selectedPaymentPlan && (
              <div className="rounded-lg border border-green-900/30 bg-black/80 p-4 shadow-lg shadow-green-900/10">
                <h3 className="font-semibold">Selected Payment Plan</h3>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Plan:</span>
                    <span>{selectedPaymentPlan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Down Payment:</span>
                    <span>{selectedPaymentPlan.downPayment}%</span>
                  </div>
                  {selectedPaymentPlan.installmentPeriod > 0 && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Installment Period:</span>
                        <span>{selectedPaymentPlan.installmentPeriod} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Interest Rate:</span>
                        <span>{selectedPaymentPlan.interestRate}%</span>
                      </div>
                    </>
                  )}
                  {selectedPaymentPlan.discount && selectedPaymentPlan.discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discount:</span>
                      <span>{selectedPaymentPlan.discount}%</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

