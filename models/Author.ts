import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IAuthor extends Document {
  name: string
  email: string
  bio?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

const AuthorSchema = new Schema<IAuthor>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
)

const Author: Model<IAuthor> = mongoose.models.Author || mongoose.model<IAuthor>('Author', AuthorSchema)

export default Author
