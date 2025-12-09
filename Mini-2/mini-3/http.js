// const http = require('http');

// const server = http.createServer((req,res)=> {
//     res.writeHead(200, {"content-type": "text/plain"});

//     if(req.url === "/"){
//         res.end("Welcome to my node server");
//     } else if (res.url === "about"){
//         res.end("WElcome to About Page");
//     } else {
//         res.statusCode = 404;
//         res.end("404 Page Not Found");
//     }
// });

// server.listen(3000, ()=>{
//     console.log("server is Listerning,... on 3000 port")
// })


const express = require("express");
const app = express();

// middleware to read JSON body
app.use(express.json());

let users = [
    {id: 1,name: "rohan"}
];
app.get("/users", (req,res)=>{
    res.status(200).send(users);
});

app.post("/users",(req,res)=>{
    const newuser = req.body
});

const user = {
    id : users.length +1,
    name: newuser.name
}

users.push(user);
res.status(201).json ({
    message: "User Created successfully"
});
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});