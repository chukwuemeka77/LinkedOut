// utils/payments.js
const stripe = require('stripe')('your_stripe_secret_key');

// Create a subscription
const createSubscription = async (customerId, priceId) => {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent'],
  });
  return subscription;
};

// Create a new customer
const createCustomer = async (email) => {
  const customer = await stripe.customers.create({ email });
  return customer;
};

module.exports = { createSubscription, createCustomer };
