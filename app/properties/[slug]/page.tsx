"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, MapPin, Calendar, Users } from "lucide-react"
import { getPropertyBySlug, formatPrice, calculateMonthlyInstallment } from "@/data/properties"
import { getIconByName } from "@/utils/icons"
import type { Property, PaymentPlan } from "@/types/property"

export default function PropertyDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [property, setProperty] = useState<Property | null>(null)
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      const propertyData = getPropertyBySlug(params.slug as string)
      if (propertyData) {
        setProperty(propertyData)
        setSelectedImage(propertyData.images[0].src)
      }
      setIsLoading(false)
    }
  }, [params])

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
        <p className="mt-4 text-gray-400">The property you are looking for does not exist.</p>
        <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push("/")}>
          Return to Home
        </Button>
      </div>
    )
  }

  const statusBadgeColor =
    property.status === "upcoming" ? "bg-yellow-600" : property.status === "completed" ? "bg-blue-600" : "bg-green-600"

  const statusText =
    property.status === "upcoming" ? "Coming Soon" : property.status === "completed" ? "Completed" : "Available"

  const PropertyIcon = ({ iconName }: { iconName: string }) => {
    const IconComponent = getIconByName(iconName)
    return <IconComponent className="h-5 w-5 text-green-500" />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container py-4">
        <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => router.push("/")}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Left Column - Images and Details */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg">
              <Image src={selectedImage || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              <div
                className={`absolute top-4 left-4 ${statusBadgeColor} px-3 py-1 text-sm font-medium text-white rounded-md`}
              >
                {statusText}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-2">
              {property.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-20 cursor-pointer overflow-hidden rounded-md border-2 ${selectedImage === image.src ? "border-green-500" : "border-transparent"}`}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <div className="mt-2 flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>

              <p className="text-gray-300">{property.description}</p>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {property.bedrooms && (
                  <div className="flex items-center gap-2">
                    <PropertyIcon iconName="bed" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2">
                    <PropertyIcon iconName="bath" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <PropertyIcon iconName="maximize" />
                  <span>{property.area} sq ft</span>
                </div>
                {property.completionDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-500" />
                    <span>{property.completionDate}</span>
                  </div>
                )}
                {property.occupancyPercentage && (
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-500" />
                    <span>{property.occupancyPercentage}% Occupied</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features and Amenities */}
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-black/60 border border-green-900/30">
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-500"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="amenities"
                  className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-500"
                >
                  Amenities
                </TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-4 border border-green-900/30 rounded-md p-4 bg-black/60">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <PropertyIcon iconName={feature.icon} />
                      <span className="text-gray-300">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="amenities" className="mt-4 border border-green-900/30 rounded-md p-4 bg-black/60">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <PropertyIcon iconName={amenity.icon} />
                      <span className="text-gray-300">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Price and Payment Plans */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10"
            >
              <h2 className="text-2xl font-bold">{formatPrice(property.price)}</h2>
              <p className="mt-2 text-gray-400">
                {property.area} sq ft ({Math.round(property.price / property.area).toLocaleString()} PKR/sq ft)
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Payment Plans</h3>
                <div className="space-y-4">
                  {property.paymentPlans.map((plan) => (
                    <PaymentPlanCard key={plan.id} plan={plan} property={property} />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10"
            >
              <h3 className="text-lg font-semibold">Interested in this property?</h3>
              <div className="mt-4 space-y-3">
                {property.status === "upcoming" ? (
                  <Link href={`/pre-book/${property.id}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Pre-Book Now</Button>
                  </Link>
                ) : (
                  <Link href={`/book/${property.id}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                  </Link>
                )}
                <Link href={`/contact?property=${property.id}`}>
                  <Button variant="outline" className="w-full border-green-700 text-green-500 hover:bg-green-900/20">
                    Contact Agent
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PaymentPlanCard({ plan, property }: { plan: PaymentPlan; property: Property }) {
  const monthlyInstallment = calculateMonthlyInstallment(
    property.price,
    plan.downPayment,
    plan.installmentPeriod,
    plan.interestRate,
    plan.discount,
  )

  const downPaymentAmount = property.price * (plan.downPayment / 100)
  const totalAmount =
    plan.installmentPeriod > 0
      ? downPaymentAmount + monthlyInstallment * plan.installmentPeriod
      : property.price * (1 - (plan.discount || 0) / 100)

  return (
    <div className="rounded-lg border border-green-900/30 p-4 bg-black/60 hover:border-green-700 transition-colors">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{plan.name}</h4>
        {plan.interestRate > 0 && (
          <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded">
            {plan.interestRate}% Interest
          </span>
        )}
        {plan.discount && plan.discount > 0 && (
          <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded">{plan.discount}% Discount</span>
        )}
      </div>
      <p className="text-sm mt-2 text-gray-400">{plan.description}</p>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Down Payment:</span>
          <span className="font-medium">{formatPrice(downPaymentAmount)}</span>
        </div>

        {plan.installmentPeriod > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Monthly Installment:</span>
            <span className="font-medium">{formatPrice(monthlyInstallment)}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Total Amount:</span>
          <span className="font-medium">{formatPrice(totalAmount)}</span>
        </div>

        {plan.installmentPeriod > 0 && totalAmount > property.price && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Interest Amount:</span>
            <span className="font-medium">{formatPrice(totalAmount - property.price)}</span>
          </div>
        )}
      </div>
    </div>
  )
}

