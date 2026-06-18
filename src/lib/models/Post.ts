import mongoose, { Schema, type InferSchemaType, type Model } from 'mongoose';

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, default: '' },
    avatar: { type: String, default: '' },
  },
  { _id: false },
);

const PostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    excerpt: { type: String, default: '' },
    content: { type: String, required: true },
    category: { type: String, default: 'General', index: true },
    author: { type: AuthorSchema, required: true },
    publishedAt: { type: Date, default: () => new Date(), index: true },
    readTime: { type: String, default: '5 min read' },
    featuredImage: { type: String, default: '' },
    tags: { type: [String], default: [] },
    published: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export type PostDoc = InferSchemaType<typeof PostSchema> & { _id: string };

export const Post: Model<PostDoc> =
  (mongoose.models.Post as Model<PostDoc>) ||
  mongoose.model<PostDoc>('Post', PostSchema);
