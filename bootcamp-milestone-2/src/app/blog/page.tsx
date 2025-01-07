"use client";

import Link from "next/link";
import React from 'react';
import style from './blog.module.css';

export const blogs = [
    {
        title: "blog 1",
        date: "today",
        description: "this is the blog 1",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt1",
        slug: "blog1", 
    },
    {
        title: "blog 2",
        date: "tomorrow",
        description: "this is the blog 2",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt2",
        slug: "blog2", 
    },
    {
        title: "blog 3",
        date: "tomorrow",
        description: "this is the blog 3",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt3",
        slug: "blog3",
    },
];


const BlogPage: React.FC = () => {
    return (
        <div id="blog-container" className={style.blogContainer}>
            {blogs.map((blog, index) => (
                <div key={index} className={style.blog}>
                <Link href={`/blog/${blog.slug}`}>
                    <h1>{blog.title}</h1>
                </Link>
                    <img src={blog.image} alt={blog.imageAlt} className={style.blogImage} />
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
