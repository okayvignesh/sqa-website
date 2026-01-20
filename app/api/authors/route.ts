import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Author, Post } from '@/models'

// GET /api/authors - List all authors
export async function GET() {
  try {
    await connectDB()

    const authors = await Author.find().sort({ name: 1 })

    // Get post counts for each author
    const authorsWithCounts = await Promise.all(
      authors.map(async (author) => {
        const postCount = await Post.countDocuments({ author: author._id })
        return {
          ...author.toObject(),
          _count: { posts: postCount },
        }
      })
    )

    return NextResponse.json(authorsWithCounts)
  } catch (error) {
    console.error('Error fetching authors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch authors' },
      { status: 500 }
    )
  }
}

// POST /api/authors - Create a new author
export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const { name, email, bio, avatar } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if author already exists
    const existing = await Author.findOne({ email })

    if (existing) {
      return NextResponse.json(
        { error: 'Author with this email already exists' },
        { status: 400 }
      )
    }

    const author = await Author.create({
      name,
      email,
      bio,
      avatar,
    })

    return NextResponse.json(author, { status: 201 })
  } catch (error) {
    console.error('Error creating author:', error)
    return NextResponse.json(
      { error: 'Failed to create author' },
      { status: 500 }
    )
  }
}
