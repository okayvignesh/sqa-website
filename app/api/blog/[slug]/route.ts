import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Post } from '@/models'

// Calculate reading time based on content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const textContent = content.replace(/<[^>]*>/g, '')
  const wordCount = textContent.split(/\s+/).filter(Boolean).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

// GET /api/blog/[slug] - Get a single post
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const post = await Post.findOne({ slug: params.slug })
      .populate('author', 'id name bio avatar')
      .populate('category', 'id name slug')

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

// PUT /api/blog/[slug] - Update a post
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
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
      status,
      featured,
    } = body

    // Check if post exists
    const existingPost = await Post.findOne({ slug: params.slug })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    // Prepare update data
    const updateData: any = {}

    if (title !== undefined) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (content !== undefined) {
      updateData.content = content
      updateData.readingTime = calculateReadingTime(content)
    }
    if (featuredImage !== undefined) updateData.featuredImage = featuredImage
    if (featuredImageAlt !== undefined) updateData.featuredImageAlt = featuredImageAlt
    if (metaTitle !== undefined) updateData.metaTitle = metaTitle
    if (metaDescription !== undefined) updateData.metaDescription = metaDescription
    if (ogImage !== undefined) updateData.ogImage = ogImage
    if (categoryId !== undefined) updateData.category = categoryId
    if (tags !== undefined) updateData.tags = Array.isArray(tags) ? tags.join(',') : tags
    if (authorId !== undefined) updateData.author = authorId
    if (featured !== undefined) updateData.featured = featured

    // Handle status change
    if (status !== undefined) {
      updateData.status = status
      // Set publishedAt when publishing for the first time
      if (status === 'PUBLISHED' && !existingPost.publishedAt) {
        updateData.publishedAt = new Date()
      }
    }

    const post = await Post.findOneAndUpdate(
      { slug: params.slug },
      updateData,
      { new: true }
    )
      .populate('author')
      .populate('category')

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

// DELETE /api/blog/[slug] - Delete a post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const post = await Post.findOne({ slug: params.slug })

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    await Post.deleteOne({ slug: params.slug })

    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
