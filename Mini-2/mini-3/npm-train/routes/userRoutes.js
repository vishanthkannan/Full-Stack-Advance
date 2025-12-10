// const express = require('express');
// const router = express.Router();


// router.get("/users", async(req,res)=> {
//     try{
//         const users = await User.find();

//         res.status(200).json(users);

//     }catch(err){
//         res.status(500).json({message: "Server Error"});
//     }
// });

// router.post("/users", async(req,res) => {
//     try{
//     const {name} = req.body;

//     if(!name){
//         return res.status(200).json({message: "Name is rewuired"});
//     }

//     const newUser = new User({name}); 
//     const savedUser = await newUser.save();

//     res.status(201).json({
//         message: "User created successfully",
//         User: savedUser
//     })
//     }
//     catch(err){
//         res.status(500).json({message: "Server Error"});
//     }
// });

// router.put("/users/:id",async(req,res)=> {
//     try{
//         const userId = req.params.id;
//         const {name} = req.body;

//         const updatedUser = await User.findByIdAndUpdate(userId, {name},
//             {new: true, runValidators: true}
//         );

//         if(!updatedUser){
//             return res.status(404).json({message: "User not found"});
//         }
//         res.json({
//             message: "User updated successfully",
//             user: updatedUser
//         })
//     }catch(err){
//         res.status(500).json({message: "Server Issue"});
//     }
// });

// router.delete("/users/:id", async(req,res) => {
//     try{
//         const userId = req.params.id;
//         const deleteUser = await User.findByIdAndDelete(userId);
        
//         if(!deleteUser){
//             return res.status(404).json({message: "User not found"});
//         }

//         res.json({
//             message: "User Delete Succesfully",
//             user: deleteUser
//         })
//     }catch(err){
//         res.status(500).json({message: "Server Issue"});
//     }
// });


const express = require("express");
const router = express.Router();
const User = require("../model/User");

// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST create user
router.post("/users", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const newUser = new User({ name });
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User created", user: savedUser });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT update user
router.put("/users/:id", async (req, res) => {
  try {
    const { name } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Server Issue" });
  }
});

// DELETE user
router.delete("/users/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted", user: deleteUser });
  } catch (err) {
    res.status(500).json({ message: "Server Issue" });
  }
});

module.exports = router;
