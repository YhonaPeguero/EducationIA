import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Unlock Your True Vocational IA
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover your perfect career path with our revolutionary AI-powered platform. We analyze your unique talents, passions, and personality to guide you towards a fulfilling professional future.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  )
} 