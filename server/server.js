const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();


const User = require("./models/User");

const app = express();


app.use(bodyParser.json())
app.use(cors());
// connect to MongoDB
mongoose.connect("mongodb+srv://samloar:lastof12@cluster0.cpsisxv.mongodb.net/eCommerce-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    // Create a new user
    const newUser = new User({ username, password });
    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while registering the user" });
  }
});


// handle authentication
app.post("/api/auth", async (req, res) => {
  const { username, password } = req.body;
  console.log(process.env.JWT_SECRET)

  const user = await User.findOne({ username });

  if (!user) return res.status(400).send("User not found or does not exist");

  if (user.password !== password)
    return res.status(400).send("Incorrect password");

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.send({ token });

});

// start the server
app.listen(3001, () => console.log("Server started on port 3001"));
