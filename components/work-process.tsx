const steps = [
  {
    number: "01",
    title: "Brief & Goals",
    description: "We align on your message, audience, and distribution plan"
  },
  {
    number: "02",
    title: "Script & Direction",
    description: "Clear structure, strong hooks, no fluff"
  },
  {
    number: "03",
    title: "Production & Editing",
    description: "Clean visuals, pacing, and storytelling"
  },
  {
    number: "04",
    title: "Delivery & Optimization",
    description: "Ready to publish across platforms"
  }
]

export function WorkProcess() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-sans">
            The Process
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            How We Work Together
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="group">
              <span className="font-serif text-5xl md:text-6xl text-border group-hover:text-accent transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
