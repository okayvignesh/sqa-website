'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

interface AdminUser {
  id: string
  email: string
  name: string
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const res = await fetch('/api/auth')
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else if (!isLoginPage) {
        router.push('/admin/login')
      }
    } catch (error) {
      if (!isLoginPage) {
        router.push('/admin/login')
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    await fetch('/api/auth', { method: 'DELETE' })
    setUser(null)
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AD1927] border-t-transparent"></div>
      </div>
    )
  }

  if (isLoginPage) {
    return <>{children}</>
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin" className="text-xl font-bold text-[#AD1927]">
                Blog Admin
              </Link>
              <div className="ml-10 flex space-x-4">
                <NavLink href="/admin" exact>Dashboard</NavLink>
                <NavLink href="/admin/posts">Posts</NavLink>
                <NavLink href="/admin/categories">Categories</NavLink>
                <NavLink href="/admin/authors">Authors</NavLink>
                <NavLink href="/admin/media">Media</NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}

function NavLink({
  href,
  children,
  exact = false
}: {
  href: string
  children: React.ReactNode
  exact?: boolean
}) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'bg-[#AD1927]/10 text-[#AD1927]'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  )
}
