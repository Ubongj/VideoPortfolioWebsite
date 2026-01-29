import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 text-balance">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-sans mb-12">
          If you're serious about growing your crypto project with video, let's talk.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            size="lg"
            className="font-sans text-base px-8 py-6 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <a href="https://calendly.com/ubongephraim/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="font-sans text-base px-8 py-6 border-border text-foreground hover:bg-card hover:border-foreground transition-all duration-300 bg-transparent"
          >
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ubongephraim@gmail.com" target="_blank" rel="noopener noreferrer">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
