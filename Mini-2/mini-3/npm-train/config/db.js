const mongoose = require("mongoose");

const connectDB = async () => {

const MONGO_URL = "mongodb://127.0.0.1:27017/express_crud_db";
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
  }
};
module.exports = connectDB;
