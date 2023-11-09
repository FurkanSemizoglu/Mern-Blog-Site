import Blog from "../models/blog.js";

export const createBlog = async (req, res) => {
/*   try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    const result = await newBlog.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  } */

  console.log(req.body)

  try {
    const {title ,content} = req.body
    const newBlog = new Blog({title, content})
    const result = await newBlog.save()
    res.status(201).json(result);
    console.log("Connected to postBlog");
  } catch (error) {
    console.log("doesnt Connected to postBlog");
    res.status(404).json({
      message : error.message
      
    })
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({
      message: error.message,
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
