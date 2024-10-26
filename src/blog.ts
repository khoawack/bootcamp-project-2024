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
        image: "image1.png",
        imageAlt: "this is the image Alt1",
        slug: "sluggssgsgs1"
    },
    {
        title: "blog 2",
        date: "tomorrow",
        description: "this is the blog 2",
        image: "image2.png",
        imageAlt: "this is the image Alt2",
        slug: "sluggssgsgs2"
    }
];

const blogContainer = document.getElementById('blog-container');

function displayBlogs() {
    blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');

        const title = document.createElement('h1');
        title.textContent = blog.title;
        blogElement.appendChild(title);

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
