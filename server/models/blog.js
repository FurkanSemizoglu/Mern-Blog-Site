import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
 /*  image: {type :String}, */
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
