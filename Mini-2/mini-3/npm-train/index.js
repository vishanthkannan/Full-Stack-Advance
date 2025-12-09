const express = require("express");
const app = express();

// Start server


 app.use(express.json());
 const userRouter = require("./routes/userRoutes");

 app.use("/users", userRouter);

 app.listen(3000, () => {
    console.log("Server is running on port 3000");
});