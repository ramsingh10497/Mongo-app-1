const express = require("express");
const connectDB = require("./db");
// const User = require("./models/userModel");
// const Url = require("./models/url.js");
const userRoute = require("./routes/userRoutes.js");
const urlRoute = require("./routes/url.js");

// DB Connection
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRoute);
app.use("/url", urlRoute);

app.get("/", (req, res) => {
  console.log("Get Request working properly");
  res.status(200).json({ message: "App is ready!" });
});

app.listen(3000, () => {
  console.log("Port running on 3000");
});
