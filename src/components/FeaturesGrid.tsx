import React from 'react'
import { Brain, Target, Users, Sparkles } from 'lucide-react'
import { FeatureCard } from './FeatureCard'

export function FeaturesGrid() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary">AI-POWERED GUIDANCE</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-6">Cutting-Edge Career Guidance</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Unlock your true potential with our advanced AI technology and expert guidance system
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="AI-Powered Insights"
            description="Our advanced AI analyzes your cognitive patterns, emotional intelligence, and natural aptitudes to reveal career paths you'll truly excel in."
          />
          <FeatureCard
            icon={Target}
            title="Precision Matching"
            description="Get matched with careers that align perfectly with your unique combination of skills, values, and aspirations, backed by real-world success data."
          />
          <FeatureCard
            icon={Users}
            title="Expert Mentorship"
            description="Connect with successful professionals who've walked your potential paths and gain invaluable insights from their real-world experience."
          />
        </div>
      </div>
    </section>
  )
} 