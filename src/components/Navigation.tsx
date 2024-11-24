import React from 'react'
import { Sparkles, BookOpen, Users, LogIn, UserPlus } from 'lucide-react'
import { Button } from './ui/Button'

export function Navigation() {
  return (
    <nav className="bg-background/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Vocational IA
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">
            <BookOpen className="w-4 h-4 mr-2" />
            Features
          </Button>
          <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">
            <Users className="w-4 h-4 mr-2" />
            About
          </Button>
          <Button variant="default" className="bg-primary hover:bg-primary/90 transition-colors">
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          
        </div>
      </div>
    </nav>
  )
} 