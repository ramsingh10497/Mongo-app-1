const express = require("express");
const User = require("../models/userModel");
router = express();

router.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, email, gender } = req.body;
    if (!firstName || !lastName || !email || !gender) {
      res.status(400).json({ message: "Bad Request" });
    }
    const user = new User({ firstName, lastName, email, gender });
    await user.save();
    res.status(201).json({ user, message: "User Created Successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      res.status(404).json({ message: "Bad Request" });
    }
    const user = await User.findOne({ email });

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
