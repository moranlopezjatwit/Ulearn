// server.js
import express from 'express';
import cors from 'cors';
import internalIp from 'internal-ip';
import authRoutes from './routes/auth';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.get('/getLocalIp', async (req, res) => {
  const ip = await internalIp.v4();
  res.json({ ip });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
