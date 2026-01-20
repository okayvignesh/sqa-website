import 'dotenv/config'
import mongoose from 'mongoose'
import { Category, Author } from '../models'

const MONGODB_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/simplifyqa_blog'

async function main() {
  await mongoose.connect(MONGODB_URI)

  // Create categories
  const categories = [
    { name: 'Test Automation', slug: 'test-automation', description: 'Articles about test automation best practices and strategies' },
    { name: 'Testing Tips', slug: 'testing-tips', description: 'Practical tips for better testing' },
    { name: 'Product Updates', slug: 'product-updates', description: 'Latest updates and features from SimplifyQA' },
    { name: 'Case Studies', slug: 'case-studies', description: 'Real-world success stories and implementations' },
    { name: 'Engineering', slug: 'engineering', description: 'Technical deep dives and engineering insights' },
  ]

  for (const category of categories) {
    const existing = await Category.findOne({ slug: category.slug })

    if (!existing) {
      await Category.create(category)
      console.log(`Created category: ${category.name}`)
    } else {
      console.log(`Category already exists: ${category.name}`)
    }
  }

  // Create default author
  const author = {
    name: 'SimplifyQA Team',
    email: 'team@simplifyqa.ai',
    bio: 'The SimplifyQA team shares insights on test automation and quality engineering.',
    avatar: null,
  }

  const existingAuthor = await Author.findOne({ email: author.email })

  if (!existingAuthor) {
    await Author.create(author)
    console.log(`Created author: ${author.name}`)
  } else {
    console.log(`Author already exists: ${author.name}`)
  }

  console.log('\nSeed data created successfully!')
}

main()
  .catch(console.error)
  .finally(() => mongoose.disconnect())
