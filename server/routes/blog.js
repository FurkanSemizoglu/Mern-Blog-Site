import express from "express";
import {  getBlogs , createBlog } from "../controllers/blog.js";

const router = express.Router();


router.get("/" , getBlogs)

router.post("/postBlog" , createBlog)


export default router;
