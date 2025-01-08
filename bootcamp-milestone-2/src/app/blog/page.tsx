import Link from "next/link";
import React from "react";
import style from "./blog.module.css";
import connectDB from "../database/db";
import Blog from "../database/blogSchema";

async function fetchBlogs() {
  await connectDB(); 

  try {
    const blogs = await Blog.find().sort({ date: -1 }).lean();
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

const BlogPage = async () => {
  const blogs = await fetchBlogs(); 

  return (
    <div id="blog-container" className={style.blogContainer}>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog: any) => (
          <div key={blog._id} className={style.blog}>
            <Link href={`/blog/${blog.slug}`}>
              <h1>{blog.title}</h1>
            </Link>
            <img
              src={blog.image}
              alt={blog.imageAlt}
              className={style.blogImage}
            />
            <p>{blog.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPage;
