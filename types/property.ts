export type PropertyType = "apartment" | "commercial" | "penthouse" | "villa" | "shop" | "office"
export type PropertyStatus = "upcoming" | "completed" | "available"

export interface PropertyImage {
  src: string
  alt: string
}

export interface PropertyFeature {
  icon: string
  label: string
}

export interface PropertyAmenity {
  icon: string
  label: string
}

export interface PaymentPlan {
  id: string
  name: string
  description: string
  downPayment: number // percentage
  installmentPeriod: number // months
  interestRate: number // percentage
  discount?: number // percentage
}

export interface Property {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  type: PropertyType
  status: PropertyStatus
  price: number
  area: number // square feet
  bedrooms?: number
  bathrooms?: number
  location: string
  completionDate?: string
  occupancyPercentage?: number
  features: PropertyFeature[]
  amenities: PropertyAmenity[]
  images: PropertyImage[]
  paymentPlans: PaymentPlan[]
  isCornerUnit?: boolean
}

