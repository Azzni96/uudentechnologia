import React from 'react'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className = '', ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full border border-white border-opacity-20 text-white transition-colors duration-200 hover:bg-white hover:bg-opacity-10 ${className}`}
      {...props}
    />
  )
})

Badge.displayName = 'Badge'
