const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const User = require("./models/User");

const route = express.Router()


//Registration-------------------------------------------------------------------------------------

Router.post("/register",async (req,res)=>{
    const {name,email,password} = req.body; //get these stuffs


    const hashPassword = await bcrypt.hash(password, 10); // encypt the password 

    const user = new User({  // save hashed pass
        name: name,
        email: email,
        pasword: hashPassword
    });

    await user.save();   // save the password
    res.status(201).json({message: "User Registered Successfully"})
})


// Login------------------------------------------------------------------------------------------
Router.post("/login",async (req,res) => {
    const {email,password} = req.body;

    const user = await user.findOne({email});

if(!user){
    return res.status(400).json({message: "Wrong password"})
}

const isMatch = await bcrypt.compare(password.user.password);

id(!isMatch){
    return res.status(400).json({message: "Wrong password"});
}

const token = jwt.sign({id: user.id},process.env.env.JWT_SECRET);

res.json({message: "Login sucess"},token)

})

