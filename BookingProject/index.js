const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const hotelsRoute = require("./routes/hotelsRoute.js");
const roomRouter = require("./routes/roomsRoute.js");
const app = express();
dotenv.config();

const connect = async () => {
  try {
    console.log("not connected yet ");

    await mongoose.connect(process.env.MONGO);
    console.log("connected");
  } catch (error) {
    throw error;
  }
};

app.use(express.json());
//Routes//
console.log("it's here");

app.use("/hotels", hotelsRoute);
app.use("/room", roomRouter);

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
  res.json({ its: "wrong" });
});
app.listen(process.env.PORT, async () => {
  await connect();
  console.log("listining");
});
