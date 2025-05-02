const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const multer = require("multer");
const User = require("./user");
const Devo = require("./devo");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://samuellim:11246595@cluster0.ovtmvad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = new User({ username, password: hashed });
    await user.save();
    res.status(201).send("User created!");
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

  res.send("Login successful!");
});

function formatDate(date = new Date()) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = date.getDate();
  const year = date.getFullYear();
  const month = months[date.getMonth()];

  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return `${month} ${day}${getOrdinal(day)}, ${year}`;
}

app.post("/api/upload-devo", upload.single("file"), async (req, res) => {
  const { username, password } = req.body;

  if (!req.file || !username || !password) {
    return res.status(400).send("Missing file or credentials");
  }

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Incorrect password");

    const devo = new Devo({
      fileName: req.file.originalname,
      fileBuffer: req.file.buffer,
      uploadDate: formatDate(),
      username, // ✅ save who uploaded it
    });

    await devo.save();
    console.log("File saved to database:", devo);
    res.status(200).send("Upload successful!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Upload failed");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));