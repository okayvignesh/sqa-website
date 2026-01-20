import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Category, Post } from '@/models'

// Generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// GET /api/categories - List all categories
export async function GET() {
  try {
    await connectDB()

    const categories = await Category.find().sort({ name: 1 })

    // Get post counts for each category
    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const postCount = await Post.countDocuments({ category: category._id })
        return {
          ...category.toObject(),
          _count: { posts: postCount },
        }
      })
    )

    return NextResponse.json(categoriesWithCounts)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}

// POST /api/categories - Create a new category
export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const { name, description } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    const slug = generateSlug(name)

    // Check if category already exists
    const existing = await Category.findOne({
      $or: [{ name }, { slug }],
    })

    if (existing) {
      return NextResponse.json(
        { error: 'Category already exists' },
        { status: 400 }
      )
    }

    const category = await Category.create({
      name,
      slug,
      description,
    })

    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    )
  }
}
