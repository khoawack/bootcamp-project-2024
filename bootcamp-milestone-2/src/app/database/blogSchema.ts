import mongoose, { Schema } from "mongoose";

export interface IComment {
	user: string;
	comment: string;
	date: Date;
}

// Comment schema
const commentSchema = new Schema<IComment>({
	user: { type: String, required: true },
	comment: { type: String, required: true },
	date: { type: Date, required: true},
  });

// typescript type (can also be an interface)
type Blog = {
		title: string;
	    slug: string; 
		date: Date;
		description: string; // for preview
	    content: string; // text content for individual blog page
	    image: string; // url for string in public
	    image_alt: string; // alt for image
		comments: Comment[]; // array for comments
};

// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		image: { type: String, required: true },
	    image_alt: { type: String, required: true },
		content: { type: String, required: true },
		comments: { type: [commentSchema], default: [] },
})

// defining the collection and model
const Blog = mongoose.models.Blogs || mongoose.model('Blogs', blogSchema);


export default Blog;