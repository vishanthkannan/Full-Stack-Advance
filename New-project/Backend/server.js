const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const   PORT = 3000;
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", userRouter);

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("MongoDB connected")).catch((err)=> 
    console.log("Error",err))

ap.listen(PORT, ()=>{
    console.log("server connected");
})
