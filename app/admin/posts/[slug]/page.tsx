'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const RichTextEditor = dynamic(() => import('@/components/admin/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />,
})

interface Category {
  id: string
  name: string
  slug: string
}

interface Author {
  id: string
  name: string
  email: string
}

export default function EditPostPage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [authors, setAuthors] = useState<Author[]>([])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [tags, setTags] = useState('')
  const [featuredImage, setFeaturedImage] = useState('')
  const [featuredImageAlt, setFeaturedImageAlt] = useState('')
  const [metaTitle, setMetaTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [ogImage, setOgImage] = useState('')
  const [status, setStatus] = useState<'DRAFT' | 'PUBLISHED' | 'ARCHIVED'>('DRAFT')
  const [featured, setFeatured] = useState(false)

  useEffect(() => {
    fetchData()
  }, [slug])

  async function fetchData() {
    try {
      const [postRes, categoriesRes, authorsRes] = await Promise.all([
        fetch(`/api/blog/${slug}`),
        fetch('/api/categories'),
        fetch('/api/authors'),
      ])

      if (!postRes.ok) {
        router.push('/admin/posts')
        return
      }

      const post = await postRes.json()
      const categoriesData = await categoriesRes.json()
      const authorsData = await authorsRes.json()

      setCategories(categoriesData)
      setAuthors(authorsData)

      // Populate form
      setTitle(post.title)
      setDescription(post.description)
      setContent(post.content)
      setCategoryId(post.categoryId)
      setAuthorId(post.authorId)
      setTags(post.tags || '')
      setFeaturedImage(post.featuredImage || '')
      setFeaturedImageAlt(post.featuredImageAlt || '')
      setMetaTitle(post.metaTitle || '')
      setMetaDescription(post.metaDescription || '')
      setOgImage(post.ogImage || '')
      setStatus(post.status)
      setFeatured(post.featured)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
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
        setFeaturedImage(data.url)
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    try {
      const res = await fetch(`/api/blog/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          content,
          categoryId,
          authorId,
          tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
          featuredImage,
          featuredImageAlt,
          metaTitle: metaTitle || title,
          metaDescription: metaDescription || description,
          ogImage: ogImage || featuredImage,
          status,
          featured,
        }),
      })

      if (res.ok) {
        alert('Post saved successfully!')
      } else {
        const error = await res.json()
        alert(error.error || 'Failed to save post')
      }
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Failed to save post')
    } finally {
      setSaving(false)
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
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edit Post</h1>
        <Link
          href={`/blog/${slug}`}
          target="_blank"
          className="text-[#AD1927] hover:underline"
        >
          View Post →
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                  placeholder="Post title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none resize-none"
                  placeholder="Brief description for the post"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content *
                </label>
                <RichTextEditor
                  content={content}
                  onChange={setContent}
                  placeholder="Write your post content here..."
                />
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">SEO Settings</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                  placeholder="Defaults to post title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none resize-none"
                  placeholder="Defaults to post description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  OG Image URL
                </label>
                <input
                  type="text"
                  value={ogImage}
                  onChange={(e) => setOgImage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                  placeholder="Defaults to featured image"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Publish</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 text-[#AD1927] rounded focus:ring-[#AD1927]"
                />
                <label htmlFor="featured" className="text-sm text-gray-700">
                  Featured post
                </label>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full py-2 px-4 bg-[#AD1927] text-white rounded-md font-medium hover:bg-[#8B1420] transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>

            {/* Category & Author */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author *
                </label>
                <select
                  value={authorId}
                  onChange={(e) => setAuthorId(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                >
                  {authors.map((author) => (
                    <option key={author.id} value={author.id}>
                      {author.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                  placeholder="tag1, tag2, tag3"
                />
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Featured Image</h2>

              {featuredImage ? (
                <div className="relative">
                  <img
                    src={featuredImage}
                    alt={featuredImageAlt || 'Featured image'}
                    className="w-full rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setFeaturedImage('')}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <label className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#AD1927] transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <span className="text-gray-500">Click to upload image</span>
                </label>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={featuredImageAlt}
                  onChange={(e) => setFeaturedImageAlt(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AD1927] focus:border-transparent outline-none"
                  placeholder="Describe the image"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
