const express = require('express');
const blogRoutes = require('./src/routes/blogRoutes');
const errorHandler = require('./src/middleware/errorHandler'); // Ensure this file exists

const app = express();

// Middleware
app.use(express.json());  // Parses JSON requests

// Routes
app.use('/api', blogRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
