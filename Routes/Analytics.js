// routes/analytics.js
const express = require('express');
const Link = require('../models/Link');
const router = express.Router();

// Track a link click
router.post('/click/:id', async (req, res) => {
  const link = await Link.findById(req.params.id);
  link.clicks += 1;
  await link.save();
  res.json({ message: 'Click recorded' });
});

// Get analytics for a user
router.get('/:userId', async (req, res) => {
  const links = await Link.find({ userId: req.params.userId });
  const analytics = links.map((link) => ({ title: link.title, clicks: link.clicks }));
  res.json(analytics);
});
           
