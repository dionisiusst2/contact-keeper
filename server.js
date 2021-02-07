const express = require('express');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const contextRoutes = require('./routes/contacts');
const userRoutes = require('./routes/users');

const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Init routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contextRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
