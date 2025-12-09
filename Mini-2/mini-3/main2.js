const path = require('path');
const filepath = "E:\IMG_20251207_191909.jpg";
console.log("BAse Name:", path.basename(filepath));
console.log("Dir name: ", path.dirname(filepath));
console.log("Extension name: ", path.extname(filepath));

const joinedpath = path.join(__dirname, "test", "hello.html");
console.log("Joined Path: ", joinedpath);