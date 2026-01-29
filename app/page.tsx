import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatIDo } from "@/components/what-i-do"
import { WhyWorkWithMe } from "@/components/why-work-with-me"
import { BrandsWorkedWith } from "@/components/brands-worked-with"
import { Portfolio } from "@/components/portfolio"
import { WorkProcess } from "@/components/work-process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SectionDivider />
      <WhatIDo />
      <SectionDivider />
      <WhyWorkWithMe />
      <SectionDivider />
      <BrandsWorkedWith />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <WorkProcess />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  )
}
