import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({

    title : {type : String , required : true},
    content : {type : String , required : true},
    image : String,
    createdAt : {
        type : Date,
        default : new Date()
    }


})

const Blog = mongoose.model("Blog" , blogSchema);


export default Blog;
