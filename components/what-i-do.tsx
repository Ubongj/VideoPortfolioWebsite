const services = [
  {
    title: "Explainer & Launch Videos",
    description: "High-quality videos designed to clearly communicate narratives or launch campaigns/products to new and existing users."
  },
  {
    title: "Ecosystem & Project Spotlights",
    description: "Monthly or bi-weekly ecosystem updates on the latest announcements, developments and integrations."
  },
  {
    title: "Short-Form Content",
    description: "Quick bite-sized vertical videos designed to grab attention and spark interest."
  },
  {
    title: "Video Editing & Repurposing",
    description: "Turn long-form content into multiple high-performing clips."
  }
]

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            I specialize in creating strategic video content for crypto and blockchain projects that want attention, clarity, and growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative p-8 md:p-10 rounded-2xl bg-foreground/5 backdrop-blur-xl border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-500"
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
