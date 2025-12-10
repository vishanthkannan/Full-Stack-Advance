const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

//Middleware 

app.use(express.json());

// Connect to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/express_crud_db";

mongoose.connect(MONGO_URL).then(() => console.log("connected to mongoodb")).catch((err) => console.error("Error in  Connection",err.message));

// step : 2 -- build schema

const userSchema  =new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
        trim: true
    }
},
    {timestamps: true}
);

// step : 3 -- create model

const User = mongoose.model("User",userSchema);


//create routes

app.get("/users", async(req,res)=> {
    try{
        const users = await User.find();

        res.status(200).json(users);

    }catch(err){
        res.status(500).json({message: "Server Error"});
    }
});

app.post("/users", async(req,res) => {
    try{
    const {name} = req.body;

    if(!name){
        return res.status(200).json({message: "Name is rewuired"});
    }

    const newUser = new User({name}); 
    const savedUser = await newUser.save();

    res.status(201).json({
        message: "User created successfully",
        User: savedUser
    })
    }
    catch(err){
        res.status(500).json({message: "Server Error"});
    }
});

app.put("/users/:id",async(req,res)=> {
    try{
        const userId = req.params.id;
        const {name} = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, {name});

        if(!updatedUser){
            return res.status(404).json({message: "User not found"});
        }
        res.json({
            message: "User updated successfully",
            user: updatedUser
        })
    }catch(err){
        res.status(500).json({message: "Server Issue"});
    }
});

app.delete("/users/:id", async(req,res) => {
    try{
        const userId = req.params.id;
        const deleteUser = await User.findByIdAndDelete(userId);
        
        if(!deleteUser){
            return res.status(404).json({message: "User not found"});
        }

        res.json({
            message: "User Delete Succesfully",
            user: deleteUser
        })
    }catch(err){
        res.status(500).json({message: "Server Issue"});
    }
});