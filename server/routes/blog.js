import express from "express";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  getBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlogs);

router.post("/postBlog", createBlog);

router.delete("/blogs/:id", deleteBlog);

router.get("/blogs/:id", getBlog);

export default router;
