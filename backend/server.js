const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const authRoutes = require('./src/routes/authRoutes');
const recordRoutes = require('./src/routes/recordRoutes');
const dashboardRoutes = require('./src/routes/dashboardRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);

app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('API running...');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.log(err));
