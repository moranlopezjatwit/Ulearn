const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Ensure the path is correct
const bodyParser = require('body-parser'); // Middleware to parse request bodies

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.get('/getLocalIp', async (req, res) => {
  const internalIp = await import('internal-ip');
  const ip = await internalIp.v4();
  res.json({ ip });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
