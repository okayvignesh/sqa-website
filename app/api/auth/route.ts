import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { AdminUser } from '@/models'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid'

// Simple in-memory session store (in production, use Redis or database)
const sessions = new Map<string, { odUserId: string; expiresAt: Date }>()

// POST /api/auth - Login
export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find admin user
    const admin = await AdminUser.findOne({ email })

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Verify password
    const isValid = await bcrypt.compare(password, admin.passwordHash)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create session
    const sessionId = uuidv4()
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    sessions.set(sessionId, { odUserId: admin._id.toString(), expiresAt })

    // Set session cookie
    const cookieStore = await cookies()
    cookieStore.set('blog_session', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: expiresAt,
      path: '/',
    })

    return NextResponse.json({
      user: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    })
  } catch (error) {
    console.error('Error during login:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}

// GET /api/auth - Check current session
export async function GET() {
  try {
    await connectDB()

    const cookieStore = await cookies()
    const sessionId = cookieStore.get('blog_session')?.value

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const session = sessions.get(sessionId)
    if (!session || session.expiresAt < new Date()) {
      sessions.delete(sessionId)
      return NextResponse.json(
        { error: 'Session expired' },
        { status: 401 }
      )
    }

    const admin = await AdminUser.findById(session.odUserId).select('_id email name')

    if (!admin) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      )
    }

    return NextResponse.json({ user: { id: admin._id, email: admin.email, name: admin.name } })
  } catch (error) {
    console.error('Error checking auth:', error)
    return NextResponse.json(
      { error: 'Auth check failed' },
      { status: 500 }
    )
  }
}

// DELETE /api/auth - Logout
export async function DELETE() {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get('blog_session')?.value

    if (sessionId) {
      sessions.delete(sessionId)
    }

    cookieStore.delete('blog_session')

    return NextResponse.json({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Error during logout:', error)
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    )
  }
}
