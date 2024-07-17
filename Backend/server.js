const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Adjust the path to your auth routes
require('dotenv').config(); // To load environment variables from .env file

// Create an Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

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
    console.log('User saved:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Data insertion endpoint
app.post('/api/data', async (req, res) => {
  console.log('Received data request:', req.body);
  const newData = new Data(req.body);
  try {
    await newData.save();
    console.log('Data saved:', newData);
    res.status(200).send('Data saved successfully');
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).send(err);
  }
});

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
