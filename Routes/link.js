// routes/links.js
const express = require('express');
const Link = require('../models/Link');
const router = express.Router();

// Get all links for a user
router.get('/:userId', async (req, res) => {
  const links = await Link.find({ userId: req.params.userId }).sort('order');
  res.json(links);
});

// Create a link
router.post('/', async (req, res) => {
  const link = new Link(req.body);
  await link.save();
  res.status(201).json(link);
});

// Update a link
router.put('/:id', async (req, res) => {
  const link = await Link.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(link);
});

// Delete a link
router.delete('/:id', async (req, res) => {
  await Link.findByIdAndDelete(req.params.id);
  res.json({ message: 'Link deleted' });
});
// Limit links based on the user's plan
router.post('/', async (req, res) => {
  const user = await User.findById(req.body.userId).populate('plan');
  const linkCount = await Link.countDocuments({ userId: req.body.userId });

  if (user.plan && linkCount >= user.plan.maxLinks) {
    return res.status(403).json({ message: 'Link limit exceeded for your plan' });
  }

  const link = new Link(req.body);
  await link.save();
  res.status(201).json(link);
});
