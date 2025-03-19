import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amin Enterpriser',
  description: 'Amin Enterpriser',
  generator: 'Amin Enterpriser',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
