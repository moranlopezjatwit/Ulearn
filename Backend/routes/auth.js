const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/register', async (req, res) => {
  console.log('Received request:', req.body);
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    console.error('Validation error: All fields are required');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword, email });
  try {
    await newUser.save();
    console.log('User saved:', newUser);
    const token = jwt.sign({ _id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

module.exports = router;


