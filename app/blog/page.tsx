'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, Filter } from 'lucide-react'
import { Container } from '@/components/layout'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GradientOrb } from '@/components/shared'
import { cn } from '@/lib/utils'

interface Post {
  id: string
  title: string
  slug: string
  description: string
  featuredImage: string | null
  status: string
  featured: boolean
  publishedAt: string | null
  createdAt: string
  readingTime: string
  author: {
    id: string
    name: string
    avatar: string | null
  }
  category: {
    id: string
    name: string
    slug: string
  }
}

interface Category {
  id: string
  name: string
  slug: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const [postsRes, categoriesRes] = await Promise.all([
        fetch('/api/blog?status=PUBLISHED'),
        fetch('/api/categories'),
      ])

      const postsData = await postsRes.json()
      const categoriesData = await categoriesRes.json()

      setPosts(postsData.posts || [])
      setCategories(categoriesData || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts
    return posts.filter((post) => post.category?.slug === selectedCategory)
  }, [posts, selectedCategory])

  const featuredPost = posts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured || selectedCategory)
  const showFeatured = !selectedCategory && featuredPost

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AD1927] border-t-transparent"></div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <GradientOrb className="top-0 right-0 translate-x-1/4 -translate-y-1/4" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Blog</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
              Insights on testing, automation, and engineering
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              Learn from our team&apos;s experience building and using test automation at scale.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories Filter */}
      <section className="py-6 border-b border-border bg-surface-1/50">
        <Container>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-text-tertiary mr-2">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                !selectedCategory
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-secondary hover:text-text-primary hover:border-gray-300 dark:hover:border-white/20'
              )}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                  selectedCategory === category.slug
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-secondary hover:text-text-primary hover:border-gray-300 dark:hover:border-white/20'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          {selectedCategory && (
            <p className="mt-4 text-sm text-text-tertiary">
              Showing {regularPosts.length} {regularPosts.length === 1 ? 'post' : 'posts'} in "{categories.find(c => c.slug === selectedCategory)?.name}"
            </p>
          )}
        </Container>
      </section>

      {/* Featured Post */}
      {showFeatured && featuredPost && (
        <section className="section-padding">
          <Container>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="p-0 overflow-hidden hover:shadow-lg transition-all group bg-white dark:bg-white/[0.02] border-gray-200/80 dark:border-white/[0.06]">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-brand-500/10 to-brand-400/5 flex items-center justify-center min-h-[240px] relative overflow-hidden">
                    {featuredPost.featuredImage ? (
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <span className="text-6xl">📝</span>
                        <p className="mt-2 text-sm text-text-tertiary">Featured Article</p>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="primary" className="w-fit mb-4">Featured</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-text-secondary line-clamp-3">
                      {featuredPost.description}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-sm text-text-tertiary">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedAt || featuredPost.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readingTime}
                      </span>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium">
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </Container>
        </section>
      )}

      {/* Posts Grid */}
      <section className={cn('section-padding', showFeatured && 'pt-0')}>
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary">No blog posts yet. Check back soon!</p>
            </div>
          ) : regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary">No posts found in this category.</p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-brand-600 dark:text-brand-400 font-medium hover:underline"
              >
                View all posts
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full p-0 overflow-hidden hover:shadow-lg transition-all group bg-white dark:bg-white/[0.02] border-gray-200/80 dark:border-white/[0.06]">
                    <div className="aspect-video bg-gradient-to-br from-surface-1 to-surface-2 flex items-center justify-center relative overflow-hidden">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-4xl">📄</span>
                      )}
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {post.category?.name || 'Uncategorized'}
                      </Badge>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                        {post.description}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-text-tertiary">
                        <span>{post.author?.name || 'Anonymous'}</span>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
