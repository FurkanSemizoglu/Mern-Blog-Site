import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Blog from "./models/blog.js";
import postRoutes from "./routes/blog.js"
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Its working don't worry :D ");
});

app.use("/blogs" , postRoutes);

const PORT = process.env.PORT;

/* mongoose
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
  }); */


app.listen(PORT , () => {
    console.log("The surver is running in " + PORT + " port")
})


