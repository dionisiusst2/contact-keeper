const express = require('express');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const contextRoutes = require('./routes/contexts');
const userRoutes = require('./routes/users');

const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Init routes
app.use('/api/auth', authRoutes);
app.use('/api/context', contextRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
