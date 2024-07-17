const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure the correct path to the User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // To load environment variables from .env file

router.post('/register', async (req, res) => {
  console.log('Register endpoint hit'); // Add this line
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists'); // Add this line
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user', error); // Add this line
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;

