"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber: string // International format without + (e.g., "1234567890")
  message?: string // Optional pre-filled message
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  showPopupOnHover?: boolean
}

export function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
  position = "bottom-right",
  showPopupOnHover = true,
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  }
  
  const handleWhatsAppClick = () => {
    // Format the URL for WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }
  
  return (
    <div
      className={`fixed ${positionClasses[position]} z-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popup message on hover */}
      {showPopupOnHover && isHovered && (
        <div
          className="absolute bottom-full mb-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-sm text-black dark:text-white"
          style={{
            minWidth: "150px",
            textAlign: "center",
            right: position.includes("left") ? "auto" : "0",
            left: position.includes("left") ? "0" : "auto",
          }}
        >
          Chat with us on WhatsApp
          <div
            className={cn(
              "absolute w-2 h-2 bg-white dark:bg-gray-800 transform rotate-45",
              "bottom-[-4px]",
              position.includes("left") ? "left-3" : "right-3",
            )}
          />
        </div>
      )}
      
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className={cn(
          "rounded-full w-14 h-14 shadow-lg flex items-center justify-center",
          "bg-[#25D366] hover:bg-[#20BD5C] transition-all duration-300",
        )}
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </Button>
    </div>
  )
}

// WhatsApp SVG Icon function
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}