import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Post } from '@/models'

// Calculate reading time based on content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const textContent = content.replace(/<[^>]*>/g, '') // Strip HTML tags
  const wordCount = textContent.split(/\s+/).filter(Boolean).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// GET /api/blog - List all posts (with optional filters)
export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const limit = searchParams.get('limit')
    const page = searchParams.get('page')

    const query: any = {}

    // Filter by status
    if (status) {
      query.status = status
    }

    // Filter by category (by slug)
    if (category) {
      const { Category } = await import('@/models')
      const cat = await Category.findOne({ slug: category })
      if (cat) {
        query.category = cat._id
      }
    }

    // Filter by featured
    if (featured === 'true') {
      query.featured = true
    }

    // Pagination
    const take = limit ? parseInt(limit) : undefined
    const skip = page && limit ? (parseInt(page) - 1) * parseInt(limit) : 0

    const [posts, total] = await Promise.all([
      Post.find(query)
        .populate('author', 'id name avatar')
        .populate('category', 'id name slug')
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(take || 100),
      Post.countDocuments(query),
    ])

    return NextResponse.json({
      posts,
      total,
      page: page ? parseInt(page) : 1,
      totalPages: limit ? Math.ceil(total / parseInt(limit)) : 1,
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST /api/blog - Create a new post
export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()

    const {
      title,
      description,
      content,
      featuredImage,
      featuredImageAlt,
      metaTitle,
      metaDescription,
      ogImage,
      categoryId,
      tags,
      authorId,
      status = 'DRAFT',
      featured = false,
    } = body

    // Validate required fields
    if (!title || !description || !content || !categoryId || !authorId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate slug
    let slug = generateSlug(title)

    // Check if slug exists and append number if needed
    const existingPost = await Post.findOne({ slug })
    if (existingPost) {
      const count = await Post.countDocuments({ slug: { $regex: `^${slug}` } })
      slug = `${slug}-${count + 1}`
    }

    // Calculate reading time
    const readingTime = calculateReadingTime(content)

    // Build post data object
    const postData: Record<string, unknown> = {
      title,
      slug,
      description,
      content,
      featuredImage,
      featuredImageAlt,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || description,
      ogImage,
      category: categoryId,
      tags: Array.isArray(tags) ? tags.join(',') : tags || '',
      author: authorId,
      status,
      featured,
      readingTime,
    }

    // Set publishedAt only if status is PUBLISHED
    if (status === 'PUBLISHED') {
      postData.publishedAt = new Date()
    }

    const post = await Post.create(postData)

    const populatedPost = await Post.findById(post._id)
      .populate('author')
      .populate('category')

    return NextResponse.json(populatedPost, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
