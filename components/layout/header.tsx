'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { Container } from './container'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.split('#')[0])
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        (isScrolled || isMobileMenuOpen)
          ? 'bg-background/95 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-colors rounded-lg relative',
                    isActive
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-1'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-600 dark:bg-brand-400" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a href="https://app.simplifyqa.ai/login" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                Sign In
              </Button>
            </a>
            <Link href="/contact">
              <Button size="sm">Request Demo</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-3 text-base font-medium transition-colors rounded-lg',
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-500/5'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-1'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <a href="https://app.simplifyqa.ai/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="secondary" className="w-full">
                    Sign In
                  </Button>
                </a>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Request Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
