const express = require('express');
const cors = require('cors');
const internalIp = require('internal-ip');
const authRoutes = require('./routes/auth'); // Make sure the path is correct
const bodyParser = require('body-parser'); // Middleware to parse request bodies

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Endpoint to get local IP address
app.get('/getLocalIp', async (req, res) => {
  const ip = await internalIp.v4();
  res.json({ ip });
});

// Authentication routes
app.use('/api/auth', authRoutes);

// Add any additional middleware or routes here
// Example: app.use('/api/someRoute', someRouteHandler);

// Your other routes and middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
