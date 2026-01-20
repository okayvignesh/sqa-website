import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IPost extends Document {
  title: string
  slug: string
  description: string
  content: string
  featuredImage?: string
  featuredImageAlt?: string
  metaTitle?: string
  metaDescription?: string
  ogImage?: string
  category: mongoose.Types.ObjectId
  tags: string
  author: mongoose.Types.ObjectId
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  featured: boolean
  publishedAt?: Date
  readingTime: string
  createdAt: Date
  updatedAt: Date
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    featuredImage: { type: String },
    featuredImageAlt: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
    ogImage: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    tags: { type: String, default: '' },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    status: { type: String, enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED'], default: 'DRAFT' },
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date },
    readingTime: { type: String, default: '5 min read' },
  },
  {
    timestamps: true,
  }
)

// Create indexes
PostSchema.index({ slug: 1 })
PostSchema.index({ status: 1 })
PostSchema.index({ category: 1 })
PostSchema.index({ publishedAt: -1 })

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema)

export default Post
