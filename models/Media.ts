import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IMedia extends Document {
  filename: string
  url: string
  mimeType: string
  size: number
  alt?: string
  createdAt: Date
}

const MediaSchema = new Schema<IMedia>(
  {
    filename: { type: String, required: true },
    url: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    alt: { type: String },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
)

const Media: Model<IMedia> = mongoose.models.Media || mongoose.model<IMedia>('Media', MediaSchema)

export default Media
