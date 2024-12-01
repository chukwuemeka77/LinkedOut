// routes/themes.js
const express = require('express');
const Theme = require('../models/Theme');
const router = express.Router();

// Get theme for a user
router.get('/:userId', async (req, res) => {
  const theme = await Theme.findOne({ userId: req.params.userId });
  res.json(theme || {});
});

// Update theme
router.put('/:userId', async (req, res) => {
  const updatedTheme = await Theme.findOneAndUpdate(
    { userId: req.params.userId },
    req.body,
    { new: true, upsert: true }
  );
  res.json(updatedTheme);
});
