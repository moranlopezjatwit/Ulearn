const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User schema and model
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});
const User = mongoose.model('User', UserSchema);

// Data schema and model
const dataSchema = new mongoose.Schema({
  name: String,
  value: String,
});
const Data = mongoose.model('Data', dataSchema);

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
  console.log('Received request:', req.body);
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    console.error('Validation error: All fields are required');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newUser = new User({ username, password, email });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Data insertion endpoint
app.post('/api/data', (req, res) => {
  const newData = new Data(req.body);
  newData.save((err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Data saved successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
