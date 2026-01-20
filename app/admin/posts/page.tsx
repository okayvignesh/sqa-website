'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Post {
  id: string
  title: string
  slug: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  featured: boolean
  author: { name: string }
  category: { name: string }
  createdAt: string
  publishedAt: string | null
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    fetchPosts()
  }, [filter])

  async function fetchPosts() {
    try {
      const params = new URLSearchParams()
      if (filter) params.set('status', filter)

      const res = await fetch(`/api/blog?${params}`)
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const res = await fetch(`/api/blog/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        setPosts(posts.filter((p) => p.slug !== slug))
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 bg-[#AD1927] text-white rounded-md font-medium hover:bg-[#8B1420] transition-colors"
        >
          New Post
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === '' ? 'bg-[#AD1927] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('PUBLISHED')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === 'PUBLISHED' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Published
        </button>
        <button
          onClick={() => setFilter('DRAFT')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === 'DRAFT' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Drafts
        </button>
        <button
          onClick={() => setFilter('ARCHIVED')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === 'ARCHIVED' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Archived
        </button>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AD1927] border-t-transparent"></div>
          </div>
        ) : posts.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/posts/${post.slug}`}
                        className="text-gray-900 font-medium hover:text-[#AD1927]"
                      >
                        {post.title}
                      </Link>
                      {post.featured && (
                        <span className="text-yellow-500" title="Featured">⭐</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {post.author?.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {post.category?.name}
                  </td>
                  <td className="px-6 py-4">
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
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right text-sm">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-600"
                        title="View"
                      >
                        👁️
                      </Link>
                      <Link
                        href={`/admin/posts/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                      >
                        ✏️
                      </Link>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="px-6 py-12 text-center text-gray-500">
            <p>No posts found.</p>
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
