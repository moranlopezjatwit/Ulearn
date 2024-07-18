const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const User = require('./models/User'); // Ensure the correct path to the User model
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ulearn', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// This should be in authRoutes, so remove it if already defined
app.post('/api/auth/register', async (req, res) => {
  console.log('Received request:', req.body);
  const { username, password, email, role } = req.body;

  if (!username || !password || !email) {
    console.error('Validation error: All fields are required');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newUser = new User({ username, password, email, role });
  try {
    await newUser.save();
    console.log('User saved:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

