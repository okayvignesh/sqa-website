'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Stats {
  totalPosts: number
  publishedPosts: number
  draftPosts: number
  totalCategories: number
  totalAuthors: number
  totalMedia: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [recentPosts, setRecentPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const [postsRes, categoriesRes, authorsRes, mediaRes] = await Promise.all([
        fetch('/api/blog'),
        fetch('/api/categories'),
        fetch('/api/authors'),
        fetch('/api/upload'),
      ])

      const posts = await postsRes.json()
      const categories = await categoriesRes.json()
      const authors = await authorsRes.json()
      const media = await mediaRes.json()

      setStats({
        totalPosts: posts.total || 0,
        publishedPosts: posts.posts?.filter((p: any) => p.status === 'PUBLISHED').length || 0,
        draftPosts: posts.posts?.filter((p: any) => p.status === 'DRAFT').length || 0,
        totalCategories: categories.length || 0,
        totalAuthors: authors.length || 0,
        totalMedia: media.total || 0,
      })

      setRecentPosts(posts.posts?.slice(0, 5) || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AD1927] border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 bg-[#AD1927] text-white rounded-md font-medium hover:bg-[#8B1420] transition-colors"
        >
          New Post
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Posts"
          value={stats?.totalPosts || 0}
          icon="📝"
          href="/admin/posts"
        />
        <StatCard
          title="Published"
          value={stats?.publishedPosts || 0}
          icon="✅"
          color="green"
        />
        <StatCard
          title="Drafts"
          value={stats?.draftPosts || 0}
          icon="📋"
          color="yellow"
        />
        <StatCard
          title="Categories"
          value={stats?.totalCategories || 0}
          icon="🏷️"
          href="/admin/categories"
        />
        <StatCard
          title="Authors"
          value={stats?.totalAuthors || 0}
          icon="👤"
          href="/admin/authors"
        />
        <StatCard
          title="Media Files"
          value={stats?.totalMedia || 0}
          icon="🖼️"
          href="/admin/media"
        />
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
        </div>
        {recentPosts.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {recentPosts.map((post) => (
              <div key={post.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <Link
                    href={`/admin/posts/${post.slug}`}
                    className="text-gray-900 font-medium hover:text-[#AD1927]"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <span>{post.author?.name}</span>
                    <span>{post.category?.name}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    post.status === 'PUBLISHED'
                      ? 'bg-green-100 text-green-700'
                      : post.status === 'DRAFT'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-12 text-center text-gray-500">
            <p>No posts yet.</p>
            <Link
              href="/admin/posts/new"
              className="text-[#AD1927] hover:underline mt-2 inline-block"
            >
              Create your first post
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
  color = 'blue',
  href,
}: {
  title: string
  value: number
  icon: string
  color?: 'blue' | 'green' | 'yellow' | 'red'
  href?: string
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600',
  }

  const Card = (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  )

  if (href) {
    return <Link href={href}>{Card}</Link>
  }

  return Card
}
