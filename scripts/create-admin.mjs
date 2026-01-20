import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const MONGODB_URI = 'mongodb://localhost:27017/simplifyqa_blog'

const AdminUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
)

async function main() {
  await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB')

  const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', AdminUserSchema)

  const email = process.argv[2] || 'admin@simplifyqa.ai'
  const password = process.argv[3] || 'admin123'
  const name = process.argv[4] || 'Admin'

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10)

  // Check if admin exists
  const existing = await AdminUser.findOne({ email })

  if (existing) {
    console.log(`Admin user ${email} already exists. Updating password...`)
    existing.passwordHash = passwordHash
    await existing.save()
    console.log('Password updated!')
  } else {
    // Create admin user
    await AdminUser.create({
      email,
      passwordHash,
      name,
    })
    console.log(`Admin user created successfully!`)
  }

  console.log(`Email: ${email}`)
  console.log(`Password: ${password}`)
  console.log(`Name: ${name}`)
}

main()
  .catch(console.error)
  .finally(() => mongoose.disconnect())
