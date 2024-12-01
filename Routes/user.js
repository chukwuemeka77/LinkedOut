// routes/users.js
const express = require('express');
const User = require('../models/User');
const Plan = require('../models/Plan');
const { createCustomer, createSubscription } = require('../utils/payments');
const router = express.Router();

// Subscribe a user to a plan
router.post('/:userId/subscribe', async (req, res) => {
  const { userId } = req.params;
  const { planId, paymentMethodId } = req.body;

  const user = await User.findById(userId);
  const plan = await Plan.findById(planId);

  if (!user || !plan) return res.status(404).json({ message: 'User or Plan not found' });

  const customer = await createCustomer(user.email);
  const subscription = await createSubscription(customer.id, plan.price);

  // Update user subscription
  user.plan = planId;
  user.subscriptionActive = true;
  await user.save();

  res.json({ message: 'Subscription successful', subscription });
});

module.exports = router;
