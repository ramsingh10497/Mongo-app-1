const express = require("express");
const connectDB = require("./db");
const User = require("./models/userModel");
const userRouter = require("./routes/userRoutes.js");

// DB Connection
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

app.get("/", (req, res) => {
  console.log("Get Request working properly");
  res.status(200).json({ message: "App is ready!" });
});

app.listen(3000, () => {
  console.log("Port running on 3000");
});
