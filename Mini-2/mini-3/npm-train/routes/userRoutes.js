const express = require('express');
const router = express();

app.use(express.json());

let users = [
    { id: 1, name: "rohan" }
];

// GET route
app.get("/users", (req, res) => {
    res.status(200).send(users);
});

app.get ("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
});

// POST route
app.post("/users", (req, res) => {
    const newuser = req.body;

    const user = {
        id: users.length + 1,
        name: newuser.name
    };

    users.push(user);

    res.status(201).json({
        message: "User Created successfully",
        user: user,
    });
});

app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[userIndex].name = updatedUser.name;

    res.status(200).json({
        message: `User ${userId} updated successfully`,
        updatedUser: users[userIndex],
    });
});

app.delete("/users/:id",(req,res)=>{
    const deleteId=parseInt(req.params.id);
    const filteredUsers=users.filter(user=> user.id !== deleteId)
    if(filteredUsers.length=== users.length){
        return res.status(404).json({message: "User not found buddy"});
    }
    users = filteredUsers;
    res.json({message:`User ${deleteId} deleted `});
 });

module.exportsm = router;