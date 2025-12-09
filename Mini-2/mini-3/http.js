const http = require('http');

const server = http.createServer((req,res)=> {
    res.writeHead(200, {"content-type": "text/plain"});

    if(req.url === "/"){
        res.end("Welcome to my node server");
    } else if (res.url === "about"){
        res.end("WElcome to About Page");
    } else {
        res.statusCode = 404;
        res.end("404 Page Not Found");
    }
});

server.listen(3000, ()=>{
    console.log("server is Listerning,... on 3000 port")
})
