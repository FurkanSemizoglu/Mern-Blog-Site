import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";



const app = express();

app.use(bodyParser.json({limit : "30mb" , extended : "true"}));
app.use(bodyParser.urlencoded({ limit : "30mb" , extended : "true"}));

app.use(cors());


app.get("/",(req,res) =>{
    res.send("Its working don't worry :D ")
} );

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log("The surver is running in " + PORT + " port")
})
