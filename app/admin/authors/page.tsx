'use client'

import { useEffect, useState } from 'react'

interface Author {
  id: string
  name: string
  email: string
  bio: string | null
  avatar: string | null
  _count: { posts: number }
}

export default function AdminAuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [avatar, setAvatar] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchAuthors()
  }, [])

  async function fetchAuthors() {
    try {
      const res = await fetch('/api/authors')
      const data = await res.json()
      setAuthors(data)
    } catch (error) {
      console.error('Error fetching authors:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        const data = await res.json()
        setAvatar(data.url)
      }
    } catch (error) {
      console.error('Error uploading avatar:', error)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    try {
      const res = await fetch('/api/authors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, bio, avatar }),
      })

      if (res.ok) {
        setName('')
        setEmail('')
        setBio('')
        setAvatar('')
        setShowForm(false)
        fetchAuthors()
      } else {
        const error = await res.json()
        alert(error.error || 'Failed to create author')
      }
    } catch (error) {
      console.error('Error creating author:', error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Authors</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-[#AD1927] text-white rounded-md font-medium hover:bg-[#8B1420] transition-colors"
        >
          {showForm ? 'Cancel' : 'New Author'}
        </button>
      </div>

      {/* Add Author Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                  placeholder="Author name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                  placeholder="author@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none resize-none"
                placeholder="Short bio about the author"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Avatar
              </label>
              <div className="flex items-center gap-4">
                {avatar ? (
                  <div className="relative">
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setAvatar('')}
                      className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-gray-300 cursor-pointer hover:border-[#AD1927] transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                    <span className="text-2xl text-gray-400">+</span>
                  </label>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-[#AD1927] text-white rounded-md font-medium hover:bg-[#8B1420] transition-colors disabled:opacity-50"
            >
              {saving ? 'Creating...' : 'Create Author'}
            </button>
          </form>
        </div>
      )}

      {/* Authors List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AD1927] border-t-transparent"></div>
          </div>
        ) : authors.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Posts
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {authors.map((author) => (
                <tr key={author.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {author.avatar ? (
                        <img
                          src={author.avatar}
                          alt={author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          {author.name[0]}
                        </div>
                      )}
                      <span className="font-medium text-gray-900">{author.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {author.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {author.bio || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {author._count?.posts || 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="px-6 py-12 text-center text-gray-500">
            <p>No authors yet.</p>
            <button
              onClick={() => setShowForm(true)}
              className="text-[#AD1927] hover:underline mt-2"
            >
              Create your first author
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
