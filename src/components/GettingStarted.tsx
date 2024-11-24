import React from 'react'
import { Button } from './ui/Button'
import { Rocket, Brain, ChartBar, Compass } from 'lucide-react'
import img from '../assets/img.jpg'

// Cambiamos la exportación para que coincida con el estilo de los otros componentes
const GettingStarted = () => {
  const steps = [
    {
      icon: Brain,
      title: "Discover Your Potential", 
      description: "Take our comprehensive assessment that goes beyond basic personality tests to uncover your true professional potential." 
    },
    {
      icon: ChartBar, 
      title: "Get Deep Insights", 
      description: "Receive a detailed analysis of your strengths, ideal work environments, and personalized career recommendations." 
    },
    {
      icon: Compass,
      title: "Chart Your Path", 
      description: "Access tailored resources, educational pathways, and connect with mentors who can guide your professional journey." 
    },
  ]

  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Transform Your Career Journey
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              <Rocket className="w-4 h-4 mr-2" />
              Begin Your Discovery
            </Button>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300">
            <div className="aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={img} 
                alt="Career guidance illustration"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Exportación por defecto
export default GettingStarted 