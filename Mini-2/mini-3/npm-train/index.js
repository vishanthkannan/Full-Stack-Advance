// const express = require("express");
// const { connect } = require("mongoose");
// const connectDB = require("./config/db");
// const userrouter = require("./routes/userRoutes");
// const user = require("../config/model/User");

// const app = express();
// const port = 3000;

// //Middleware 
// app.use(express.json());

// // Connect to MongoDB
// connectDB();



// app.use("/", userrouter);


// // step : 3 -- create model


// //create routes


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
