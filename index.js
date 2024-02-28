const express = require("express");
const connectDB = require("./db");
const User = require("./models/userModel");

// DB Connection
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("coming in get request");
  res.status(200).json({ message: "App is ready!" });
});

app.post("/users", async (req, res) => {
  try {
    console.log("?????");
    const { firstName, lastName, email, gender } = req.body;
    if (!firstName || !lastName || !email || !gender) {
      res.status(404).json({ message: "Bad Request" });
    }
    const user = new User({ firstName, lastName, email, gender });
    await user.save();
    res.status(201).json({ user, message: "User Created Successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Port running on 3000");
});
