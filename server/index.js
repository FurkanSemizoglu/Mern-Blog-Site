import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Blog from "./models/blog.js";
import blogRoutes from "./routes/blog.js"
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "false" }));

app.use(cors());


app.use("/" , blogRoutes);

/* 
app.post("/postBlog" , async (req,res) => {

  //res.json({ "message" : "Fomr submir"})

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
 /*  try{
    const  title  = req.body.title;
    const  content  = req.body.content;
    console.log("title" , title);
    const newBlog = new Blog({ title : title, content :content });
    const result = await newBlog.save();
    res.status(201).json(result);
    console.log("Connected to postBlog");

  }catch(error){
    console.log("doesnt Connected to postBlog");
    res.status(404).json({
      message : error.message
      
    })
      ***
  } 
}) 
*/
const PORT = process.env.PORT;

 mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("The server is running on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  }); 



