type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "blog 1",
        date: "today",
        description: "this is the blog 1",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt1",
        slug: "blog1"
    },
    {
        title: "blog 2",
        date: "tomorrow",
        description: "this is the blog 2",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt2",
        slug: "blog2"
    },
    {
        title: "blog 3",
        date: "tomorrow",
        description: "this is the blog 3",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt3",
        slug: "blog3"
    }
];

const blogContainer = document.getElementById('blog-container');

function displayBlogs() {
    blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');

        const title = document.createElement('h1');
        title.textContent = blog.title;

        const link = document.createElement('a');
        link.href = `blogs/${blog.slug}`;

        link.appendChild(title);
        blogElement.appendChild(link);

        const image = document.createElement('img');
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogElement.appendChild(image);

        const description = document.createElement('p');
        description.textContent = blog.description;
        blogElement.appendChild(description);

        blogContainer?.appendChild(blogElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayBlogs();
});
