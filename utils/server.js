// server.js
const express = require('express');
const mongoose = require('./utils/db');
const cors = require('cors');

// Import routes
const linkRoutes = require('./routes/links');
const themeRoutes = require('./routes/themes');
const templateRoutes = require('./routes/templates');
const analyticsRoutes = require('./routes/analytics');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/links', linkRoutes);
app.use('/api/themes', themeRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/analytics', analyticsRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
