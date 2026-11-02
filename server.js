const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Backend CRUD API!',
    status: 'Running',
    endpoints: {
      getAllUsers: 'GET /api/users',
      getUserById: 'GET /api/users/:id',
      createUser: 'POST /api/users',
      updateUser: 'PUT /api/users/:id',
      deleteUser: 'DELETE /api/users/:id',
    },
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
  });
});

// Mount API routes
app.use('/api/users', userRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API route not found',
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Base URL: http://localhost:${PORT}`);
});
