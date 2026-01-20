import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import connectDB from '@/lib/mongodb'
import { Media } from '@/models'
import { v4 as uuidv4 } from 'uuid'

// Allowed image types
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const alt = formData.get('alt') as string | null

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG' },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const ext = path.extname(file.name) || `.${file.type.split('/')[1]}`
    const filename = `${uuidv4()}${ext}`

    // Create year/month directory structure
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', String(year), month)

    // Ensure directory exists
    await mkdir(uploadDir, { recursive: true })

    // Write file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = path.join(uploadDir, filename)
    await writeFile(filePath, buffer)

    // URL path for the file
    const url = `/uploads/${year}/${month}/${filename}`

    // Save to database
    const media = await Media.create({
      filename: file.name,
      url,
      mimeType: file.type,
      size: file.size,
      alt: alt || '',
    })

    return NextResponse.json({
      id: media._id,
      url: media.url,
      filename: media.filename,
      alt: media.alt,
    }, { status: 201 })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    )
  }
}

// GET /api/upload - List all media files
export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')
    const page = searchParams.get('page')

    const take = limit ? parseInt(limit) : 20
    const skip = page && limit ? (parseInt(page) - 1) * parseInt(limit) : 0

    const [media, total] = await Promise.all([
      Media.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(take),
      Media.countDocuments(),
    ])

    return NextResponse.json({
      media,
      total,
      page: page ? parseInt(page) : 1,
      totalPages: Math.ceil(total / take),
    })
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json(
      { error: 'Failed to fetch media' },
      { status: 500 }
    )
  }
}
