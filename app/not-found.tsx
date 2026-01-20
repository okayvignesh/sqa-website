import Link from 'next/link'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { GradientOrb } from '@/components/shared'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <GradientOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-8xl font-bold text-coral-500 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Page not found
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
          <Link href="/">
            <Button className="gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
