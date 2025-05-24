"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'

interface Props {
  href: string
  children: string | React.ReactNode
  className?: string
  exact?: boolean
  ariaLabel?: string
  target?: string
}

export default function NavLink({ href, children, className, exact, ariaLabel, target }: Props) {
  const pathname = usePathname()
  const isActive =  exact ? pathname === href : pathname?.startsWith(href)

  return (
    <Link 
      href={ href }  
      aria-label={ ariaLabel } 
      target={ target ?? undefined } 
      rel={ target ? 'noreferrer' : undefined }
      passHref
      legacyBehavior
    >
      <NavigationMenuLink 
        active={ isActive }
        className={cn('flex items-center gap-2 h-fit p-4 cursor-pointer text-lg rounded-md hover:bg-zinc-800', {
          'bg-zinc-800': isActive,
        }, className)}
      >
        { children }
      </NavigationMenuLink>
    </Link>
  )
}