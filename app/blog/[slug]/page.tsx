'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, ChevronRight, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { GradientOrb } from '@/components/shared'
import { cn } from '@/lib/utils'

interface Post {
  id: string
  title: string
  slug: string
  description: string
  content: string
  featuredImage: string | null
  featuredImageAlt: string | null
  metaTitle: string | null
  metaDescription: string | null
  ogImage: string | null
  tags: string
  status: string
  featured: boolean
  publishedAt: string | null
  createdAt: string
  readingTime: string
  author: {
    id: string
    name: string
    bio: string | null
    avatar: string | null
  }
  category: {
    id: string
    name: string
    slug: string
  }
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-surface-1 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-500 to-brand-600"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : ''

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-text-tertiary mr-1">Share:</span>
      <button
        onClick={shareOnTwitter}
        className="w-9 h-9 rounded-full bg-surface-1 hover:bg-surface-2 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="w-9 h-9 rounded-full bg-surface-1 hover:bg-surface-2 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>
      <button
        onClick={copyLink}
        className={cn(
          'w-9 h-9 rounded-full flex items-center justify-center transition-colors',
          copied
            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600'
            : 'bg-surface-1 hover:bg-surface-2 text-text-secondary hover:text-text-primary'
        )}
        aria-label="Copy link"
      >
        <LinkIcon className="w-4 h-4" />
      </button>
    </div>
  )
}

function AuthorCard({ author }: { author: Post['author'] }) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-2xl bg-surface-1 border border-gray-200/80 dark:border-white/[0.06]">
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt={author.name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-bold text-white">{author.name.charAt(0)}</span>
        </div>
      )}
      <div>
        <p className="font-semibold text-text-primary">{author.name}</p>
        <p className="text-sm text-text-secondary">{author.bio || 'SimplifyQA'}</p>
      </div>
    </div>
  )
}

function TableOfContents({ content }: { content: string }) {
  // Extract headings from HTML content
  const headingMatches = content.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi) || []
  const headings = headingMatches.map(match => {
    const level = parseInt(match.charAt(2))
    const text = match.replace(/<[^>]*>/g, '')
    return { level, text }
  })

  if (headings.length < 3) return null

  return (
    <div className="p-6 rounded-2xl bg-surface-1 border border-gray-200/80 dark:border-white/[0.06]">
      <h4 className="text-sm font-semibold text-text-primary mb-4">In this article</h4>
      <nav className="space-y-2">
        {headings.slice(0, 6).map((heading, index) => (
          <div
            key={index}
            className={cn(
              'text-sm text-text-secondary hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors',
              heading.level === 2 && 'pl-0',
              heading.level === 3 && 'pl-4'
            )}
          >
            {heading.text}
          </div>
        ))}
      </nav>
    </div>
  )
}

function RelatedPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full p-6 hover:shadow-lg transition-all group bg-white dark:bg-white/[0.02] border-gray-200/80 dark:border-white/[0.06]">
        <Badge variant="outline" className="mb-3">
          {post.category?.name || 'Uncategorized'}
        </Badge>
        <h3 className="font-semibold text-text-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 font-medium">
          Read more
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </Card>
    </Link>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  const [post, setPost] = useState<Post | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchPost()
  }, [slug])

  // Update document meta tags when post loads
  useEffect(() => {
    if (post) {
      document.title = post.metaTitle || post.title

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', post.metaDescription || post.description)

      // Update OG tags
      updateMetaTag('og:title', post.metaTitle || post.title)
      updateMetaTag('og:description', post.metaDescription || post.description)
      updateMetaTag('og:type', 'article')
      updateMetaTag('og:url', `${window.location.origin}/blog/${post.slug}`)
      if (post.ogImage || post.featuredImage) {
        updateMetaTag('og:image', post.ogImage || post.featuredImage || '')
      }

      // Update Twitter tags
      updateMetaTag('twitter:card', 'summary_large_image')
      updateMetaTag('twitter:title', post.metaTitle || post.title)
      updateMetaTag('twitter:description', post.metaDescription || post.description)
      if (post.ogImage || post.featuredImage) {
        updateMetaTag('twitter:image', post.ogImage || post.featuredImage || '')
      }
    }
  }, [post])

  function updateMetaTag(property: string, content: string) {
    let tag = document.querySelector(`meta[property="${property}"]`) ||
              document.querySelector(`meta[name="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(property.startsWith('og:') ? 'property' : 'name', property)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }

  async function fetchPost() {
    try {
      const [postRes, postsRes] = await Promise.all([
        fetch(`/api/blog/${slug}`),
        fetch('/api/blog?status=PUBLISHED&limit=4'),
      ])

      if (!postRes.ok) {
        setError(true)
        return
      }

      const postData = await postRes.json()
      const postsData = await postsRes.json()

      setPost(postData)
      setRelatedPosts(
        (postsData.posts || [])
          .filter((p: Post) => p.slug !== slug)
          .slice(0, 3)
      )
    } catch (err) {
      console.error('Error fetching post:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AD1927] border-t-transparent"></div>
      </div>
    )
  }

  if (error || !post) {
    notFound()
  }

  const tags = post.tags ? post.tags.split(',').filter(Boolean) : []

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GradientOrb className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-tertiary mb-8">
            <Link href="/blog" className="hover:text-text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-secondary truncate">{post.title}</span>
          </nav>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="primary" className="mb-6">
                {post.category?.name || 'Uncategorized'}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight">
                {post.title}
              </h1>
              <p className="mt-6 text-xl text-text-secondary leading-relaxed">
                {post.description}
              </p>

              {/* Meta info */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{post.author.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-text-primary">{post.author.name}</p>
                    <p className="text-xs text-text-tertiary">{post.author.bio || 'SimplifyQA'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-tertiary">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="pb-8">
          <Container>
            <div className="max-w-4xl">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Content */}
      <section className="pb-20">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <article className="max-w-3xl">
                <div
                  className="prose prose-lg dark:prose-invert max-w-none text-text-secondary
                    prose-headings:text-text-primary prose-strong:text-text-primary
                    prose-a:text-brand-600 dark:prose-a:text-brand-400
                    prose-img:rounded-xl prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-sm font-medium text-text-tertiary mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Share and author section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <ShareButtons title={post.title} slug={post.slug} />
                  <Link href="/blog">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Blog
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Author card on mobile */}
              <div className="mt-8 lg:hidden">
                <AuthorCard author={post.author} />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="hidden lg:block space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-24 space-y-6">
                <AuthorCard author={post.author} />
                <TableOfContents content={post.content} />
                <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/5 border border-brand-500/20">
                  <p className="font-semibold text-text-primary mb-2">Get started with SimplifyQA</p>
                  <p className="text-sm text-text-secondary mb-4">See how SimplifyQA can transform your testing workflow.</p>
                  <Link href="/contact">
                    <Button size="sm" className="w-full">Request a Demo</Button>
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-surface-1">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-text-primary">
                Related Articles
              </h2>
              <Link href="/blog" className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline">
                View all posts
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
