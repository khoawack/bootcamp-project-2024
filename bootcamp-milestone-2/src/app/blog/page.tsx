import React from "react";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";
import style from "./blog.module.css";
import Comment from "@/app/components/Comment";
import { IBlog } from "@/app/database/blogSchema";

type PageProps = {
  params: {
    slug: string;
  };
};

async function getBlog(slug: string): Promise<IBlog | null> {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).lean<IBlog>();
    return blog;
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}


export default async function BlogPage({ params }: PageProps) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return (
      <div className={style.notFound}>
        <h1>Blog not found</h1>
        <p>We couldn’t find a blog post with the slug "{params.slug}".</p>
      </div>
    );
  }

  return (
    <div className={style.blogContainer}>
      <h1 className={style.blogTitle}>{blog.title}</h1>
      <p className={style.blogDate}>{new Date(blog.date).toLocaleDateString()}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className={style.blogImage}
      />
      <div className={style.blogContent}>
        <p>{blog.content}</p>
      </div>

      <div className={style.commentContainer}>
        <h2 className={style.commentTitle}>Comments</h2>
        {blog.comments.length === 0 ? (
          <p className={style.noComments}>
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className={style.commentList}>
            {blog.comments.map((comment, index) => (
              <li key={index} className={style.comment}>
                <Comment comment={comment} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
