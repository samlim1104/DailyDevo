const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://samuellim:11246595@cluster0.ovtmvad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = new User({ username, password: hashed });
    await user.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(400).send("Username already exists");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send("Incorrect password");

  res.send("Login successful");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));