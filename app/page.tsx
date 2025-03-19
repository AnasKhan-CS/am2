"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"
import { WhatsAppButton } from "@/components/whatapp-button"
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Menu,
  MessageSquare,
  Twitter,
  Wallet,
  X,
} from "lucide-react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"


<WhatsAppButton
        phoneNumber="923131591971" // Replace with your actual phone number (no + sign)
        message="Hi! I'm interested in your services." // Optional pre-filled message
      />

// Animated section component
const AnimatedSection = ({ children, delay = 0.2 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

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

// Completion bar component
const CompletionBar = ({ percentage, label, color = "bg-green-500" }) => {
  const barRef = useRef(null)
  const inView = useInView(barRef, { once: true, threshold: 0.1 })

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-40 w-8 bg-black/20 rounded-full overflow-hidden" ref={barRef}>
        <motion.div
          className={`absolute bottom-0 w-full ${color} rounded-full`}
          initial={{ height: 0 }}
          animate={inView ? { height: `${percentage}%` } : { height: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      <p className="text-sm font-medium text-white">{label}</p>
      <p className="text-lg font-bold text-green-400">{percentage}%</p>
    </div>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-green-900/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/#about">
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
            <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col p-4 space-y-3 border-t border-green-900/30 bg-black">
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
              <div className="pt-2 flex flex-col space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <WhatsAppButton
          phoneNumber="923131591971" // Replace with your actual phone number (no + sign)
          message="Hi! I'm interested in your services." // Optional pre-filled message
        />

        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-black relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310b981' fillRule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <AnimatedSection>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Build Your Dream Home Today
                    </h1>
                    <p className="max-w-[600px] text-gray-400 md:text-xl">
                      Premium properties available on easy installments or cash payment. Find your perfect home,
                      apartment, or commercial space with Amin Enterpriser.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Explore Properties</Button>
                    <Button variant="outline" className="gap-1 border-green-700 text-green-500 hover:bg-green-900/20">
                      Book a Viewing <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Easy payment plans available</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div className="flex items-center justify-center">
                  <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl shadow-green-900/20">
                    <Image src="/1.jpg" alt="Modern Luxury Apartment Building" fill className="object-cover" priority />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Project Completion Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-black/90">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-900/50 px-3 py-1 text-sm text-green-400">
                    Project Status
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Current Project Completion</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl">
                    Track the progress of our ongoing developments
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <AnimatedSection delay={0.2}>
                <CompletionBar percentage={85} label="Emerald Heights" color="bg-green-500" />
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <CompletionBar percentage={62} label="Green Valley" color="bg-green-400" />
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <CompletionBar percentage={45} label="Riverside Villas" color="bg-green-600" />
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <CompletionBar percentage={28} label="Business Square" color="bg-green-300" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black to-black/95 relative"
        >
          <div className="container px-4 md:px-6 relative z-10">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-900/50 px-3 py-1 text-sm text-green-400">
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Premium Real Estate Solutions</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl">
                    We offer the finest properties with flexible payment options and excellent customer service.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection delay={0.2}>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-900/30 p-6 bg-black/80 shadow-lg shadow-green-900/10">
                  <div className="rounded-full bg-green-900/30 p-3">
                    <Building2 className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Quality Construct</h3>
                  <p className="text-center text-sm text-gray-400">
                    Premium materials and expert craftsmanship in every building we develop.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-900/30 p-6 bg-black/80 shadow-lg shadow-green-900/10">
                  <div className="rounded-full bg-green-900/30 p-3">
                    <Wallet className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Flexible Payments</h3>
                  <p className="text-center text-sm text-gray-400">
                    Choose between cash purchases or installment plans up to 4 years.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-900/30 p-6 bg-black/80 shadow-lg shadow-green-900/10">
                  <div className="rounded-full bg-green-900/30 p-3">
                    <Home className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Prime Locations</h3>
                  <p className="text-center text-sm text-gray-400">
                    All our properties are situated in the most desirable neighborhoods and areas.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-900/30 p-6 bg-black/80 shadow-lg shadow-green-900/10">
                  <div className="rounded-full bg-green-900/30 p-3">
                    <MessageSquare className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Dedicated Support</h3>
                  <p className="text-center text-sm text-gray-400">
                    Our team provides support throughout the buying process and beyond.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Upcoming Projects Section */}
        <section id="projects" className="w-full py-12 md:py-16 lg:py-20 bg-black">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-900/50 px-3 py-1 text-sm text-green-400">
                    Upcoming Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Future Developments</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl">
                    Secure your investment early in these exciting new developments.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
                      Luxury apartments with panoramic city views, featuring private balconies, a rooftop pool, and
                      state-of-the-art fitness center.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-green-500 font-semibold">Starting at PKR 70,000,000</span>
                      <Link href={`/pre-book/1`}>
                        <Button
                          variant="outline"
                          className="text-xs border-green-700 text-green-500 hover:bg-green-900/20"
                        >
                          Pre-Book Now
                        </Button>
                      </Link>
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
                      Modern retail and office spaces in a prime business district, with advanced infrastructure and
                      ample parking.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-green-500 font-semibold">Starting at PKR 50,000,000</span>
                      <Link href={`/pre-book/1`}>
                        <Button
                          variant="outline"
                          className="text-xs border-green-700 text-green-500 hover:bg-green-900/20"
                        >
                          Pre-Book Now
                        </Button>
                      </Link>
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
                      Exclusive waterfront villas with private gardens, smart home technology, and dedicated concierge
                      services.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-green-500 font-semibold">Starting at PKR 210,000,000</span>
                      <Link href={`/pre-book/1`}>
                        <Button
                          variant="outline"
                          className="text-xs border-green-700 text-green-500 hover:bg-green-900/20"
                        >
                          Pre-Book Now
                        </Button>
                      </Link>
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
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="text-center">
              <Button variant="outline" className="mt-8 border-green-700 text-green-500 hover:bg-green-900/20">
                View All Upcoming Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Completed Projects Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-black/95">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-900/50 px-3 py-1 text-sm text-green-400">
                    Completed Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Signature Developments</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl">
                    Browse our successfully completed projects with available units.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
                      <Link href={`/book/4`}>
                        <Button className="text-xs bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                      </Link>
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
                      <Link href={`/book/4`}>
                        <Button className="text-xs bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                      </Link>
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
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                  <div className="relative h-48 w-full">
                    <Image src="/1.jpg" alt="Business Square" fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                      Commercial Spaces
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Business Square</h3>
                    <p className="text-sm text-gray-400 mt-2">
                      Modern office and retail spaces in the heart of the business district with cutting-edge
                      facilities.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-green-500 font-semibold">From PKR 70,000,000</span>
                      <Link href={`/book/4`}>
                        <Button className="text-xs bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                      </Link>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span className="text-gray-400">Completed: 2021</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span className="text-gray-400">85% Occupied</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="text-center">
              <Button variant="outline" className="mt-8 border-green-700 text-green-500 hover:bg-green-900/20">
                View All Completed Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Property Booking Section */}
        <section id="properties" className="w-full py-12 md:py-16 lg:py-20 bg-black/95">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-900/50 px-3 py-1 text-sm text-green-400">
                    Available Properties
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Book Your Dream Property Today</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl">
                    Browse available apartments, shops, and flats ready for booking with flexible payment options.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
                    <div className="mt-6 flex justify-between">
                      <Link href={`/properties/luxury-2-bedroom-apartment`}>
                        <Button
                          variant="outline"
                          className="text-xs border-green-700 text-green-500 hover:bg-green-900/20"
                        >
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/book/4`}>
                        <Button className="text-xs bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
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
                      Strategically located retail space in a high-traffic shopping district with storefront exposure.
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
                    <div className="mt-6 flex justify-between">
                      <Link href={`/properties/luxury-2-bedroom-apartment`}>
                        <Button
                          variant="outline"
                          className="text-xs border-green-700 text-green-500 hover:bg-green-900/20"
                        >
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/book/4`}>
                        <Button className="text-xs bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-col rounded-lg border border-green-900/30 bg-black/80 overflow-hidden shadow-lg shadow-green-900/10">
                  <div className="relative h-48 w-full">
                    <Image src="/1.jpg" alt="Penthouse Flat" fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
                      Penthouse
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Exclusive Penthouse Flat</h3>
                    <p className="text-sm text-gray-400 mt-2">
                      Luxurious penthouse with panoramic views, private terrace, and premium interior finishes.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-green-500 font-semibold">PKR 182,000,000</span>
                      <div className="text-xs text-gray-400">or from PKR 336,000/month</div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span className="text-gray-400">2500 sq ft</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span className="text-gray-400">3 Bedrooms</span>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <Link href={`/properties/luxury-2-bedroom-apartment`}>
                        <Button
                          variant="outline"
                          className="text-xs border-green-700 text-green-500 hover:bg-green-900/20"
                        >
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/book/4`}>
                        <Button className="text-xs bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="text-center">
              <Button variant="outline" className="mt-8 border-green-700 text-green-500 hover:bg-green-900/20">
                View All Properties
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-16 lg:py-20 bg-black">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-900/50 px-3 py-1 text-sm text-green-400">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl">
                    We're here to help and answer any questions you might have. We look forward to hearing from you.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <AnimatedSection delay={0.2}>
                <div className="flex flex-col items-center justify-center rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10">
                  <div className="mb-4 rounded-full bg-green-900/30 p-3">
                    <FaEnvelope className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Email</h3>
                  <a
                    href="mailto:aminenterpriser@gmail.com"
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    aminenterpriser@gmail.com
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col items-center justify-center rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10">
                  <div className="mb-4 rounded-full bg-green-900/30 p-3">
                    <FaPhone className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Phone</h3>
                  <a href="tel:03355884430" className="text-gray-400 hover:text-green-500 transition-colors">
                    03355884430
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-col items-center justify-center rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10">
                  <div className="mb-4 rounded-full bg-green-900/30 p-3">
                    <FaMapMarkerAlt className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Office</h3>
                  <a
                    href="https://maps.app.goo.gl/QW4WQqgJiUPzoWLa6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    B-17, Islamabad
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.5}>
              <div className="mx-auto max-w-4xl rounded-lg border border-green-900/30 bg-black/80 p-6 shadow-lg shadow-green-900/10">
                <h3 className="mb-6 text-center text-2xl font-bold">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-green-900/30 bg-black/60 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-green-900/30 bg-black/60 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-green-900/30 bg-black/60 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Message subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-green-900/30 bg-black/60 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <div>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Send Message</Button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-green-900/30 bg-black py-6 md:py-12">
        <div className="container flex flex-col gap-6 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:max-w-xs">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold">Amin Enterpriser</span>
            </div>
            <p className="text-sm text-gray-400">
              Premium properties available on easy installments or cash payment. Find your perfect home, apartment, or
              commercial space with Amin Enterpriser.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Properties</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Apartments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Shops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Office Spaces
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Villas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Payment Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Property Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Contracts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                    Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-6 border-t border-green-900/30 pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Amin Enterpriser. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

