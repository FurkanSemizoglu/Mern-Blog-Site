import Blog from "../models/blog.js";

export const createBlog = async (req, res) => {
  // Handle creating a new blog post and save it to the database
};

export const getBlogs = async (req, res) => {
  try{
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  }catch(error){
    res.status(404).json({
      message : error.message
    });
  }
};

export const getBlog = async (req, res) => {
  // Retrieve a single blog post by ID from the database
};

export const updateBlog = async (req, res) => {
  // Handle updating a blog post by ID
};

export const deleteBlog = async (req, res) => {
  // Handle deleting a blog post by ID
};
