import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";

// POST handler for adding comments to a specific blog
export async function POST(
  req: NextRequest,
  context: { params: { slug: string } } // Correct type for dynamic route context
): Promise<NextResponse> {
  await connectDB();

  // Extract the slug from the context
  const { slug } = context.params;

  try {
    // Parse the request body
    const body = await req.json();
    const { user = "anonymous", comment } = body;

    // Validate the input
    if (!comment || comment.trim() === "") {
      return NextResponse.json(
        { error: "Comment cannot be empty." },
        { status: 400 }
      );
    }

    // Find the blog by slug and add the comment
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, date: new Date() } } },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { error: "Blog not found." },
        { status: 404 }
      );
    }

    // Return a success response
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
