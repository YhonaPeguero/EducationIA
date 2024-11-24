import React from 'react'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import { cn } from '../lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn(
      "group bg-white/90 backdrop-blur transition-all duration-300 hover:shadow-xl border-primary/10",
      "hover:border-primary/30",
      className
    )}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  )
} 