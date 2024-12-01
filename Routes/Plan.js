// routes/plans.js
const express = require('express');
const Plan = require('../models/Plan');
const router = express.Router();

// Get all plans
router.get('/', async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
});

// Create a new plan (Admin only)
router.post('/', async (req, res) => {
  const plan = new Plan(req.body);
  await plan.save();
  res.status(201).json(plan);
});

module.exports = router;
