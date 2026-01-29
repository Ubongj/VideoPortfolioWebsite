"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById("what-i-do")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Centered layout with image as focal point */}
        <div className="flex flex-col items-center text-center">
          {/* Profile Image - Large and centered */}
          <div className="relative mb-12">
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent blur-3xl rounded-full" />
            
            {/* Image container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-foreground/10">
              <Image
                src="/profile.png"
                alt="Ubong Ephraim - Video Content Creator"
                fill
                className="object-cover object-top grayscale"
                priority
              />
            </div>
            
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-foreground/5" />
          </div>
          
          {/* Text Content */}
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-sans">
            Video Content Creator & Editor
          </p>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-foreground mb-8 text-balance leading-[1.05] max-w-5xl">
            Crafting Visual Stories for Crypto Brands
          </h1>
          
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-sans">
            I create high-impact video content for crypto projects — explainers, ecosystem breakdowns, and short-form videos designed to educate, convert, and build trust.
          </p>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-12 flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
