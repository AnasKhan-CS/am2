import type { Property } from "@/types/property"

export const properties: Property[] = [
  {
    id: "1",
    slug: "emerald-heights",
    title: "Emerald Heights",
    description:
      "Luxury apartments with panoramic city views, featuring private balconies, a rooftop pool, and state-of-the-art fitness center. Located in the heart of the city with easy access to shopping centers, restaurants, and public transportation. Each unit is designed with premium finishes and smart home technology.",
    shortDescription:
      "Luxury apartments with panoramic city views, featuring private balconies, a rooftop pool, and state-of-the-art fitness center.",
    type: "apartment",
    status: "upcoming",
    price: 70000000, // PKR 70,000,000
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    location: "B-17, Islamabad",
    completionDate: "Dec 2024",
    features: [
      { icon: "bed", label: "1-3 Bedrooms" },
      { icon: "bath", label: "2 Bathrooms" },
      { icon: "maximize", label: "1200 sq ft" },
      { icon: "wifi", label: "High-speed Internet" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "parking", label: "Reserved Parking" },
    ],
    amenities: [
      { icon: "pool", label: "Swimming Pool" },
      { icon: "dumbbell", label: "Fitness Center" },
      { icon: "trees", label: "Garden Area" },
      { icon: "sofa", label: "Community Lounge" },
      { icon: "utensils", label: "Restaurant" },
      { icon: "gamepad", label: "Game Room" },
    ],
    images: [
      { src: "/1.jpg", alt: "Emerald Heights Exterior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Emerald Heights Living Room" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Emerald Heights Bedroom" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Emerald Heights Kitchen" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Emerald Heights Bathroom" },
    ],
    paymentPlans: [
      {
        id: "eh-cash",
        name: "Cash Payment",
        description: "Full payment upfront with 5% discount",
        downPayment: 100,
        installmentPeriod: 0,
        interestRate: 0,
        discount: 5,
      },
      {
        id: "eh-2year",
        name: "2 Year Plan",
        description: "20% down payment + 24 monthly installments",
        downPayment: 20,
        installmentPeriod: 24,
        interestRate: 10,
      },
      {
        id: "eh-3year",
        name: "3 Year Plan",
        description: "15% down payment + 36 monthly installments",
        downPayment: 15,
        installmentPeriod: 36,
        interestRate: 12,
      },
      {
        id: "eh-4year",
        name: "4 Year Plan",
        description: "10% down payment + 48 monthly installments",
        downPayment: 10,
        installmentPeriod: 48,
        interestRate: 15,
      },
    ],
  },
  {
    id: "2",
    slug: "green-valley-commercial-center",
    title: "Green Valley Commercial Center",
    description:
      "Modern retail and office spaces in a prime business district, with advanced infrastructure and ample parking. The commercial center features high-speed elevators, central air conditioning, backup power, and 24/7 security. Perfect for businesses looking for a prestigious address with excellent connectivity.",
    shortDescription:
      "Modern retail and office spaces in a prime business district, with advanced infrastructure and ample parking.",
    type: "commercial",
    status: "upcoming",
    price: 50000000, // PKR 50,000,000
    area: 800,
    location: "F-8, Islamabad",
    completionDate: "Mar 2025",
    features: [
      { icon: "maximize", label: "200-1500 sq ft" },
      { icon: "wifi", label: "High-speed Internet" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "parking", label: "Ample Parking" },
      { icon: "zap", label: "Backup Power" },
      { icon: "thermometer", label: "Central AC" },
    ],
    amenities: [
      { icon: "coffee", label: "Coffee Shop" },
      { icon: "users", label: "Conference Rooms" },
      { icon: "briefcase", label: "Business Center" },
      { icon: "truck", label: "Loading Dock" },
      { icon: "headphones", label: "IT Support" },
      { icon: "mail", label: "Mail Room" },
    ],
    images: [
      { src: "/1.jpg", alt: "Green Valley Commercial Center Exterior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Green Valley Office Space" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Green Valley Retail Space" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Green Valley Lobby" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Green Valley Conference Room" },
    ],
    paymentPlans: [
      {
        id: "gv-cash",
        name: "Cash Payment",
        description: "Full payment upfront with 5% discount",
        downPayment: 100,
        installmentPeriod: 0,
        interestRate: 0,
        discount: 5,
      },
      {
        id: "gv-2year",
        name: "2 Year Plan",
        description: "30% down payment + 24 monthly installments",
        downPayment: 30,
        installmentPeriod: 24,
        interestRate: 12,
      },
      {
        id: "gv-3year",
        name: "3 Year Plan",
        description: "25% down payment + 36 monthly installments",
        downPayment: 25,
        installmentPeriod: 36,
        interestRate: 15,
      },
    ],
  },
  {
    id: "3",
    slug: "riverside-villas",
    title: "Riverside Villas",
    description:
      "Exclusive waterfront villas with private gardens, smart home technology, and dedicated concierge services. These luxurious villas offer unparalleled privacy and comfort with high ceilings, floor-to-ceiling windows, and premium finishes throughout. Each villa includes a private swimming pool and landscaped garden.",
    shortDescription:
      "Exclusive waterfront villas with private gardens, smart home technology, and dedicated concierge services.",
    type: "villa",
    status: "upcoming",
    price: 210000000, // PKR 210,000,000
    area: 4500,
    bedrooms: 5,
    bathrooms: 6,
    location: "DHA Phase 2, Islamabad",
    completionDate: "Jun 2025",
    features: [
      { icon: "bed", label: "4-5 Bedrooms" },
      { icon: "bath", label: "6 Bathrooms" },
      { icon: "maximize", label: "4500 sq ft" },
      { icon: "wifi", label: "High-speed Internet" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "car", label: "2-Car Garage" },
    ],
    amenities: [
      { icon: "pool", label: "Private Pool" },
      { icon: "trees", label: "Private Garden" },
      { icon: "utensils", label: "Gourmet Kitchen" },
      { icon: "film", label: "Home Theater" },
      { icon: "wind", label: "Smart Climate Control" },
      { icon: "user", label: "Concierge Service" },
    ],
    images: [
      { src: "/1.jpg", alt: "Riverside Villas Exterior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Riverside Villas Living Room" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Riverside Villas Master Bedroom" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Riverside Villas Kitchen" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Riverside Villas Pool" },
    ],
    paymentPlans: [
      {
        id: "rv-cash",
        name: "Cash Payment",
        description: "Full payment upfront with 7% discount",
        downPayment: 100,
        installmentPeriod: 0,
        interestRate: 0,
        discount: 7,
      },
      {
        id: "rv-2year",
        name: "2 Year Plan",
        description: "40% down payment + 24 monthly installments",
        downPayment: 40,
        installmentPeriod: 24,
        interestRate: 8,
      },
      {
        id: "rv-3year",
        name: "3 Year Plan",
        description: "30% down payment + 36 monthly installments",
        downPayment: 30,
        installmentPeriod: 36,
        interestRate: 10,
      },
      {
        id: "rv-4year",
        name: "4 Year Plan",
        description: "25% down payment + 48 monthly installments",
        downPayment: 25,
        installmentPeriod: 48,
        interestRate: 12,
      },
    ],
  },
  {
    id: "4",
    slug: "parkview-residences",
    title: "Parkview Residences",
    description:
      "Urban living at its finest with park access, premium finishes, and community amenities. These modern apartments offer the perfect balance of comfort and convenience with open floor plans, energy-efficient appliances, and stylish interiors. The building features a rooftop terrace with panoramic city views.",
    shortDescription: "Urban living at its finest with park access, premium finishes, and community amenities.",
    type: "apartment",
    status: "completed",
    price: 90000000, // PKR 90,000,000
    area: 1500,
    bedrooms: 3,
    bathrooms: 2,
    location: "F-10, Islamabad",
    completionDate: "2023",
    occupancyPercentage: 90,
    features: [
      { icon: "bed", label: "3 Bedrooms" },
      { icon: "bath", label: "2 Bathrooms" },
      { icon: "maximize", label: "1500 sq ft" },
      { icon: "wifi", label: "High-speed Internet" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "parking", label: "Reserved Parking" },
    ],
    amenities: [
      { icon: "pool", label: "Swimming Pool" },
      { icon: "dumbbell", label: "Fitness Center" },
      { icon: "trees", label: "Park Access" },
      { icon: "coffee", label: "Café" },
      { icon: "users", label: "Community Center" },
      { icon: "sun", label: "Rooftop Terrace" },
    ],
    images: [
      { src: "/1.jpg", alt: "Parkview Residences Exterior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Parkview Residences Living Room" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Parkview Residences Bedroom" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Parkview Residences Kitchen" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Parkview Residences Bathroom" },
    ],
    paymentPlans: [
      {
        id: "pr-cash",
        name: "Cash Payment",
        description: "Full payment upfront with 5% discount",
        downPayment: 100,
        installmentPeriod: 0,
        interestRate: 0,
        discount: 5,
      },
      {
        id: "pr-2year",
        name: "2 Year Plan",
        description: "20% down payment + 24 monthly installments",
        downPayment: 20,
        installmentPeriod: 24,
        interestRate: 10,
      },
      {
        id: "pr-3year",
        name: "3 Year Plan",
        description: "15% down payment + 36 monthly installments",
        downPayment: 15,
        installmentPeriod: 36,
        interestRate: 12,
      },
    ],
  },
  {
    id: "5",
    slug: "luxury-2-bedroom-apartment",
    title: "Luxury 2-Bedroom Apartment",
    description:
      "Modern 2-bedroom apartment with balcony, open-plan kitchen, and premium fixtures. This contemporary apartment features floor-to-ceiling windows, hardwood floors, and a designer kitchen with high-end appliances. The master bedroom includes a walk-in closet and an en-suite bathroom with a rainfall shower.",
    shortDescription: "Modern 2-bedroom apartment with balcony, open-plan kitchen, and premium fixtures.",
    type: "apartment",
    status: "available",
    price: 98000000, // PKR 98,000,000
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    location: "E-11, Islamabad",
    features: [
      { icon: "bed", label: "2 Bedrooms" },
      { icon: "bath", label: "2 Bathrooms" },
      { icon: "maximize", label: "1200 sq ft" },
      { icon: "wifi", label: "High-speed Internet" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "parking", label: "Reserved Parking" },
    ],
    amenities: [
      { icon: "pool", label: "Swimming Pool" },
      { icon: "dumbbell", label: "Fitness Center" },
      { icon: "trees", label: "Garden Area" },
      { icon: "coffee", label: "Café" },
      { icon: "users", label: "Community Center" },
      { icon: "sun", label: "Balcony" },
    ],
    images: [
      { src: "/1.jpg", alt: "Luxury Apartment Exterior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Luxury Apartment Living Room" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Luxury Apartment Bedroom" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Luxury Apartment Kitchen" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Luxury Apartment Bathroom" },
    ],
    paymentPlans: [
      {
        id: "la-cash",
        name: "Cash Payment",
        description: "Full payment upfront with 5% discount",
        downPayment: 100,
        installmentPeriod: 0,
        interestRate: 0,
        discount: 5,
      },
      {
        id: "la-2year",
        name: "2 Year Plan",
        description: "20% down payment + 24 monthly installments",
        downPayment: 20,
        installmentPeriod: 24,
        interestRate: 10,
      },
      {
        id: "la-3year",
        name: "3 Year Plan",
        description: "15% down payment + 36 monthly installments",
        downPayment: 15,
        installmentPeriod: 36,
        interestRate: 12,
      },
      {
        id: "la-4year",
        name: "4 Year Plan",
        description: "10% down payment + 48 monthly installments",
        downPayment: 10,
        installmentPeriod: 48,
        interestRate: 15,
      },
    ],
  },
  {
    id: "6",
    slug: "prime-location-retail-shop",
    title: "Prime Location Retail Shop",
    description:
      "Strategically located retail space in a high-traffic shopping district with storefront exposure. This commercial property offers excellent visibility and foot traffic, making it ideal for retail businesses. The space includes a large display window, storage area, and customer restroom.",
    shortDescription:
      "Strategically located retail space in a high-traffic shopping district with storefront exposure.",
    type: "shop",
    status: "available",
    price: 78000000, // PKR 78,000,000
    area: 800,
    location: "Blue Area, Islamabad",
    features: [
      { icon: "maximize", label: "800 sq ft" },
      { icon: "wifi", label: "High-speed Internet" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "parking", label: "Customer Parking" },
      { icon: "zap", label: "Backup Power" },
      { icon: "thermometer", label: "Central AC" },
    ],
    amenities: [
      { icon: "truck", label: "Loading Area" },
      { icon: "box", label: "Storage Space" },
      { icon: "users", label: "Common Area" },
      { icon: "coffee", label: "Food Court Nearby" },
      { icon: "camera", label: "CCTV Surveillance" },
      { icon: "trash", label: "Waste Management" },
    ],
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Retail Shop Exterior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Retail Shop Interior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Retail Shop Storefront" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Retail Shop Storage Area" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Retail Shop Surroundings" },
    ],
    paymentPlans: [
      {
        id: "rs-cash",
        name: "Cash Payment",
        description: "Full payment upfront with 5% discount",
        downPayment: 100,
        installmentPeriod: 0,
        interestRate: 0,
        discount: 5,
      },
      {
        id: "rs-2year",
        name: "2 Year Plan",
        description: "30% down payment + 24 monthly installments",
        downPayment: 30,
        installmentPeriod: 24,
        interestRate: 12,
      },
      {
        id: "rs-3year",
        name: "3 Year Plan",
        description: "25% down payment + 36 monthly installments",
        downPayment: 25,
        installmentPeriod: 36,
        interestRate: 15,
      },
    ],
    isCornerUnit: true,
  },
]

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find((property) => property.slug === slug)
}

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((property) => property.id === id)
}

export const formatPrice = (price: number): string => {
  return `PKR ${price.toLocaleString()}`
}

export const calculateMonthlyInstallment = (
  propertyPrice: number,
  downPaymentPercentage: number,
  installmentPeriod: number,
  interestRate: number,
  discount = 0,
): number => {
  // Apply discount if paying in cash
  const discountedPrice = downPaymentPercentage === 100 ? propertyPrice * (1 - discount / 100) : propertyPrice

  // Calculate down payment amount
  const downPayment = discountedPrice * (downPaymentPercentage / 100)

  // Calculate remaining amount
  const remainingAmount = discountedPrice - downPayment

  // If no installments (cash payment)
  if (installmentPeriod === 0) {
    return 0
  }

  // Calculate monthly installment with interest
  const monthlyInterestRate = interestRate / 100 / 12
  const installment =
    (remainingAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, installmentPeriod))) /
    (Math.pow(1 + monthlyInterestRate, installmentPeriod) - 1)

  return Math.round(installment)
}

