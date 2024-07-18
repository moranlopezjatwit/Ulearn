const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/register', async (req, res) => {
  console.log('Register endpoint hit');
  const { username, password, email, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, email, role });
    await user.save();

    const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;

