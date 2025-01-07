type Blog = {
    title: string;
    content: string;
  };
  
  const fetchBlogData = async (slug: string): Promise<Blog | undefined> => {
    const blogs: Record<string, Blog> = {
      blog1: {
        title: "Blog Post 1",
        content: "This is the content for blog post 1.",
      },
      blog2: {
        title: "Blog Post 2",
        content: "This is the content for blog post 2.",
      },
      blog3: {
        title: "Blog Post 3",
        content: "This is the content for blog post 3.",
      },
    };
  
    return blogs[slug];
  };
  
  export default async function BlogPost({ params }: { params: { slug: string } }) {
    const blogData = await fetchBlogData(params.slug);
  
    if (!blogData) {
      return <div>Blog post not found</div>;
    }
  
    return (
      <div>
        <h1>{blogData.title}</h1>
        <p>{blogData.content}</p>
      </div>
    );
  }
  