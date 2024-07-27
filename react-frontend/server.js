const express = require('express');
const internalIp = require('internal-ip');

const app = express();

app.get('/getLocalIp', async (req, res) => {
  const ip = await internalIp.v4();
  res.json({ ip });
});

// Your other routes and middleware
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
