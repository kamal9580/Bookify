  
  //entry point
 
  //we install npm i nodemon which restart the server after each changes occur
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
//we found a error when we run on two diff routes backend and frontend jab alag routes
//par chalta hai to to error deta hai uske chalane ke liye cors install karna padta ahi


const app = express()

app.use(cors());//ye ek tarah ka middle ware hota
app.use(express.json());//ye isliye likha hai ki jo ham post req kar rahe the signup karte smay
//wo ja nhi paa rha tha to ham middleware use kar rahe hai taki jo bhi data aa rha hai usko json form mr badal sake


dotenv.config();
 
const PORT=process.env.PORT||4000;
const URI=process.env.MongoDBURI;

//connected to mongodb locally 

try {
    mongoose.connect(URI,{
        useNewUrlParser:true,// we have to write this if we connect it locally
        useUnifiedTopology:true,

    });

    console.log("connected to mongodb");

}  catch (error){
    console.log("error:",error);

}

//defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})