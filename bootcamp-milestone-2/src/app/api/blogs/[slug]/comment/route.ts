import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";

export async function POST(req: NextRequest) {
  // Ensure the database is connected
  await connectDB();

  try {
    // Parse the request body
    const data = await req.json();
    const { slug, user = "anonymous", comment } = data;

    // Validate required fields
    if (!slug || !comment || comment.trim() === "") {
      return NextResponse.json(
        { error: "Slug and comment are required." },
        { status: 400 }
      );
    }

    // Update the blog with the comment
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, date: new Date() } } },
      { new: true }
    );

    // Handle blog not found
    if (!updatedBlog) {
      return NextResponse.json(
        { error: "Blog not found." },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json({
      message: "Comment added successfully!",
      comment: { user, comment, date: new Date() },
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
