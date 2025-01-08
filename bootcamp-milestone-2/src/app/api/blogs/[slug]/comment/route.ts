import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import Blog from "../../../../database/blogSchema";

interface Context {
  params: { slug: string };
}

export async function POST(req: NextRequest, { params }: Context) {
  await connectDB();

  const { slug } = params;

  try {
    const body = await req.json();
    const { user = "anonymous", comment } = body;

    if (!comment || comment.trim() === "") {
      return NextResponse.json({ error: "Comment cannot be empty." }, { status: 400 });
    }

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, date: new Date() } } },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    return NextResponse.json({
      message: "Comment added successfully!",
      comment: { user, comment, date: new Date() },
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Failed to add comment." },
      { status: 500 }
    );
  }
}
