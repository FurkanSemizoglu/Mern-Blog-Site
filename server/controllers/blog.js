import Blog from "../models/blog.js";

export const createBlog = async (req, res) => {
  console.log(req.body);

  try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    const result = await newBlog.save();
    res.status(201).json(result);
    console.log("Connected to postBlog");
  } catch (error) {
    console.log("doesnt Connected to postBlog");
    res.status(404).json({
      message: error.message,
    });
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

  const blogId = req.params.id;
  try {
    //const getBlog = await Blog.findById(blogId);
    const blog = await Blog.findOne({ _id: blogId });

    if (!getBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateBlog = async (req, res) => {
  // Handle updating a blog post by ID
};

export const deleteBlog = async (req, res) => {
  const blogId = req.params.id;

  try {
    // Assume you have a model named Blog and you want to delete a blog post by ID
    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    return res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
