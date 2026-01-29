const highlights = [
  "Hands-on experience across multiple crypto ecosystems",
  "Deep understanding of crypto narratives, trends, and audience psychology",
  "Content designed for distribution, not just aesthetics",
  "Strong background in growth marketing, UI/visual design, and content"
]

export function WhyWorkWithMe() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-sans">
              Why Work With Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-8 leading-[1.1]">
              Beyond being a crypto video content creator and video editor — I'm a crypto native.
            </h2>
          </div>
          
          <div className="space-y-12">
            <div>
              <p className="font-serif text-2xl md:text-3xl text-accent mb-8">
                8+ years in crypto & DeFi
              </p>
              
              <ul className="space-y-5">
                {highlights.map((highlight) => (
                  <li 
                    key={highlight}
                    className="flex items-start gap-4 text-muted-foreground font-sans"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="font-serif text-xl md:text-2xl text-foreground italic">
                "I help crypto projects tell better stories."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
