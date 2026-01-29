import Image from "next/image"

const brands = [
  { name: "Metamask", logo: "/brands/metamask.svg" },
  { name: "Layerdrone", logo: "/brands/layerdrone.svg" },
  { name: "Starknet", logo: "/brands/starknet.svg" },
  { name: "SCOR", logo: "/brands/scor.svg" },
]

export function BrandsWorkedWith() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-sans">
            Trusted By
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6">
            Brands I've Worked With
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            I've worked with leading crypto projects, ecosystems, and brands across different narratives — DeFi, infrastructure, RWAs, gaming and more.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 md:gap-x-24">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image 
                src={brand.logo || "/placeholder.svg"} 
                alt={brand.name} 
                width={140} 
                height={48}
                className="h-10 md:h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
