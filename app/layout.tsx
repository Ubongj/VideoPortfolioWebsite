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
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
