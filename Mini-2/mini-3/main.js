const fs = require('fs');
fs.writeFile("hello.txt","Hello World","UTF-8",(err)=>{
    if(err) console.log(err);
    console.log("File created")
});