import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors'
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  }
  const sizes = {
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-8'
  }

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button' 