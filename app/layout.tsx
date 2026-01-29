import React from "react"
import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Fraunces, Inter } from 'next/font/google'

// Initialize fonts
const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ["400", "500", "600", "700", "800", "900"]
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});
const playfair = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: 'Video Content Creator & Editor | Crypto Native',
  description: 'Strategic video content for crypto and blockchain projects. 8+ years in crypto & DeFi.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
