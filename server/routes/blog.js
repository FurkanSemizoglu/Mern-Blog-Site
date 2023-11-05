import express from "express";
import {  getBlogs } from "../controllers/blog.js";

const router = express.Router();


router.get("/" , getBlogs)


export default router;
