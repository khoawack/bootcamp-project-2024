import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  user: string;
  comment: string;
  date: Date;
}

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true },
});

export interface IBlog extends Document {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  comments: IComment[];
}

const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  comments: { type: [commentSchema], required: true },
});

const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', blogSchema);
export default Blog;