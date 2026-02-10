import Link from 'next/link'
import React from 'react'

type PrimaryLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  ({ variant = 'outline', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400'

    const variantStyles = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-700 text-white hover:bg-gray-600',
      outline: 'border border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-10',
    }

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <Link
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

PrimaryLink.displayName = 'PrimaryLink'
