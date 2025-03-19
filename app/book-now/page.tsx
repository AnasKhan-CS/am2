"use client"

import { useEffect } from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ChevronLeft, CheckCircle2, Building2 } from "lucide-react"
import { WhatsAppButton } from "@/components/whatapp-button"

// Define types for the AnimatedSection component
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

// Animated section component
const AnimatedSection = ({ children, delay = 0.2 }: AnimatedSectionProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function BookNowPage() {
  const [activeTab, setActiveTab] = useState<string>("upcoming")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container py-4">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="container flex flex-col items-center justify-center px-4 py-16 text-center md:px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600"
          >
            <CheckCircle2 className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-3xl font-bold"
          >
            Booking Request Submitted!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-md text-gray-400"
          >
            Thank you for your interest. Our team will contact you shortly to discuss your property requirements and
            guide you through the next steps.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Return to Home</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-green-900/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Building2 className="h-6 w-6 text-green-500" />
            </Link>
            <span className="text-xl font-bold">Amin Enterpriser</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#projects" className="text-sm font-medium hover:text-green-500 transition-colors">
              Projects
            </Link>
            <Link href="/#properties" className="text-sm font-medium hover:text-green-500 transition-colors">
              Properties
            </Link>
            <Link href="/#payment-plans" className="text-sm font-medium hover:text-green-500 transition-colors">
              Payment Plans
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-green-500 transition-colors">
              About Us
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-green-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/book-now">
              <Button className="hidden md:flex bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <WhatsAppButton phoneNumber="923131591971" message="Hi! I'm interested in booking a property." />

        <div className="container py-4">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-black">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-900/50 px-3 py-1 text-sm text-green-400">
                    Book Now
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Your Perfect Property</h1>
                  <p className="max-w-[900px] text-gray-400 md:text-xl">
                    Browse our available properties and book your viewing today
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mt-12">
              <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-green-900/30">
                  <TabsTrigger
                    value="upcoming"
                    className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-500"
                  >
                    Upcoming Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="completed"
                    className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-500"
                  >
                    Completed Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="available"
                    className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-500"
                  >
                    Available Properties
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="mt-6">
                  <div className="mx-auto grid max-w-6xl gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatedSection delay={0.2}>
                      <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                        <div className="relative h-48 w-full">
                          <Image src="/1.jpg" alt="Emerald Heights" fill className="object-cover" />
                          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                            Coming Soon
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold">Emerald Heights</h3>
                          <p className="text-sm text-gray-400 mt-2">
                            Luxury apartments with panoramic city views, featuring private balconies, a rooftop pool,
                            and state-of-the-art fitness center.
                          </p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-500 font-semibold">Starting at PKR 70,000,000</span>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">Completion: Dec 2024</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">1-3 Bedrooms</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link href={`/pre-book/1`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                Pre-Book Now
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                      <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                        <div className="relative h-48 w-full">
                          <Image src="/1.jpg" alt="Green Valley Commercial Center" fill className="object-cover" />
                          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                            Pre-Launch
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold">Green Valley Commercial Center</h3>
                          <p className="text-sm text-gray-400 mt-2">
                            Modern retail and office spaces in a prime business district, with advanced infrastructure
                            and ample parking.
                          </p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-500 font-semibold">Starting at PKR 50,000,000</span>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">Completion: Mar 2025</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">200-1500 sq ft</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link href={`/pre-book/2`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                Pre-Book Now
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                      <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                        <div className="relative h-48 w-full">
                          <Image src="/1.jpg" alt="Riverside Villas" fill className="object-cover" />
                          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                            Coming Soon
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold">Riverside Villas</h3>
                          <p className="text-sm text-gray-400 mt-2">
                            Exclusive waterfront villas with private gardens, smart home technology, and dedicated
                            concierge services.
                          </p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-500 font-semibold">Starting at PKR 210,000,000</span>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">Completion: Jun 2025</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">4-5 Bedrooms</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link href={`/pre-book/3`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                Pre-Book Now
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="mt-6">
                  <div className="mx-auto grid max-w-6xl gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatedSection delay={0.2}>
                      <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                        <div className="relative h-48 w-full">
                          <Image src="/1.jpg" alt="Parkview Residences" fill className="object-cover" />
                          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                            Move-in Ready
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold">Parkview Residences</h3>
                          <p className="text-sm text-gray-400 mt-2">
                            Urban living at its finest with park access, premium finishes, and community amenities.
                          </p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-500 font-semibold">From PKR 90,000,000</span>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">Completed: 2023</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">90% Occupied</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link href={`/book/4`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                      <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                        <div className="relative h-48 w-full">
                          <Image src="/1.jpg" alt="The Metropolitan" fill className="object-cover" />
                          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                            Last Few Units
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold">The Metropolitan</h3>
                          <p className="text-sm text-gray-400 mt-2">
                            Downtown luxury apartments with skyline views, concierge service, and high-end appliances.
                          </p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-500 font-semibold">From PKR 120,000,000</span>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">Completed: 2022</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">95% Occupied</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link href={`/book/4`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </TabsContent>

                <TabsContent value="available" className="mt-6">
                  <div className="mx-auto grid max-w-6xl gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatedSection delay={0.2}>
                      <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                        <div className="relative h-48 w-full">
                          <Image src="/1.jpg" alt="Luxury Apartment" fill className="object-cover" />
                          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                            Apartment
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold">Luxury 2-Bedroom Apartment</h3>
                          <p className="text-sm text-gray-400 mt-2">
                            Modern 2-bedroom apartment with balcony, open-plan kitchen, and premium fixtures.
                          </p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-500 font-semibold">PKR 98,000,000</span>
                            <div className="text-xs text-gray-400">or from PKR 182,000/month</div>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">1200 sq ft</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">2 Bathrooms</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link href={`/book/5`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                      <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                        <div className="relative h-48 w-full">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Retail Shop"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                            Commercial
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold">Prime Location Retail Shop</h3>
                          <p className="text-sm text-gray-400 mt-2">
                            Strategically located retail space in a high-traffic shopping district with storefront
                            exposure.
                          </p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-green-500 font-semibold">PKR 78,000,000</span>
                            <div className="text-xs text-gray-400">or from PKR 145,000/month</div>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">800 sq ft</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span className="text-gray-400">Corner Unit</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link href={`/book/6`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <AnimatedSection delay={0.5}>
              <div className="mx-auto max-w-4xl mt-16 rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10">
                <h3 className="mb-6 text-center text-2xl font-bold">Request a Booking</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        required
                        className="mt-1 border-green-900/30 bg-black/60 text-white focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="propertyType" className="mb-2 block text-sm font-medium">
                        Property Type
                      </Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        className="w-full rounded-md border border-green-900/30 bg-black/60 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      >
                        <option value="apartment">Apartment</option>
                        <option value="commercial">Commercial</option>
                        <option value="villa">Villa</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="shop">Shop</option>
                        <option value="office">Office</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="mt-1 min-h-[100px] border-green-900/30 bg-black/60 text-white focus:border-green-500"
                      placeholder="Tell us about your specific requirements or any questions you have"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Submit Booking Request"}
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-green-900/30 bg-black py-6 md:py-12">
        <div className="container mt-6 border-t border-green-900/30 pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Amin Enterpriser. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}