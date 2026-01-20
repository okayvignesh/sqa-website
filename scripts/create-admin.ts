import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import AdminUser from '../models/AdminUser'

const MONGODB_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/simplifyqa_blog'

async function main() {
  await mongoose.connect(MONGODB_URI)

  const email = process.argv[2] || 'admin@simplifyqa.ai'
  const password = process.argv[3] || 'admin123'
  const name = process.argv[4] || 'Admin'

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10)

  // Check if admin exists
  const existing = await AdminUser.findOne({ email })

  if (existing) {
    console.log(`Admin user ${email} already exists.`)
    return
  }

  // Create admin user
  await AdminUser.create({
    email,
    passwordHash,
    name,
  })

  console.log(`Admin user created successfully!`)
  console.log(`Email: ${email}`)
  console.log(`Password: ${password}`)
  console.log(`Name: ${name}`)
}

main()
  .catch(console.error)
  .finally(() => mongoose.disconnect())
