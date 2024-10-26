var blogs = [
    {
        title: "blog 1",
        date: "today",
        description: "this is the blog 1",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt1",
        slug: "sluggssgsgs1"
    },
    {
        title: "blog 2",
        date: "tomorrow",
        description: "this is the blog 2",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt2",
        slug: "sluggssgsgs2"
    },
    {
        title: "blog 3",
        date: "tomorrow",
        description: "this is the blog 3",
        image: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg",
        imageAlt: "this is the image Alt3",
        slug: "sluggssgsgs3"
    }
];
var blogContainer = document.getElementById('blog-container');
function displayBlogs() {
    blogs.forEach(function (blog) {
        var blogElement = document.createElement('div');
        blogElement.classList.add('blog');
        var title = document.createElement('h1');
        title.textContent = blog.title;
        blogElement.appendChild(title);
        var image = document.createElement('img');
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogElement.appendChild(image);
        var description = document.createElement('p');
        description.textContent = blog.description;
        blogElement.appendChild(description);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogElement);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    displayBlogs();
});
