// load the environment variable
require("dotenv").config();

const express = require("express");
// import mongoose
const mongoose = require("mongoose");
const cors = require("cors");

// setup an express app
const app = express();

// setup a middleware to handle JSON request
app.use(express.json());

// setup cors policy
app.use(cors());

// connect to MongoDB using Mongoose
async function connectToMongoDB() {
  try {
    // wait for the MangoDB to connect
    await mongoose.connect("mongodb://localhost:27017/store");
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
}

// trigger the connection with MongoDB
connectToMongoDB();

// setup root route
app.get("/", (req, res) => {
  res.send("Happy coding");
});

// import router
const productRouter = require("./routes/product");
app.use("/products", productRouter);
app.use("/orders", require("./routes/order"))

// start the express
app.listen(5201, () => {
  console.log("Server in running at http://localhost:5201");
});
