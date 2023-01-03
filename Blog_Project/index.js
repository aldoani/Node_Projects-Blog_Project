const express = require("express");
const mongoose = require("mongoose");
//const dotenv = require("dotenv");
const blogrout = require("./routes/blogsrout.js");
const app = express();

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Blogdb");
    console.log("connected");
  } catch (error) {
    throw error;
  }
};
app.use(express.json());
app.use("/blog", blogrout);

app.use((err, req, res, next) => {
  const errorStates = err.status || 500;
  const errorMeassage = err.message || "Something went wrong";

  res.status(errorStates).json({
    success: false,
    status: errorStates,
    message: errorMeassage,
    stack: err.stack,
  });
  next();
});
app.use((req, res) => {
  res.json("Bad Requset Page");
});

app.listen(3000, async () => {
  await connect();
  console.log("listining");
});
