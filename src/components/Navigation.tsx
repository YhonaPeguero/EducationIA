import React, { FC } from 'react'
import { Globe } from 'lucide-react'
import { Button } from './ui/Button'

export const Navigation: FC = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">Vocational IA</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">About</Button>
          <Button variant="default">Sign In</Button>
          <Button variant="outline">Register</Button>
        </div>
      </div>
    </nav>
  )
} 