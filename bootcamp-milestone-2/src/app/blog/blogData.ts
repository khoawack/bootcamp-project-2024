export interface Blog {              // type also works
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

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

export default blogs; // This will allow us to access this data anywhere!