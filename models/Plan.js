// models/Plan.js
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Free", "Pro", "Premium"
  price: { type: Number, required: true }, // Monthly price in USD
  features: [{ type: String }], // Feature descriptions
  maxLinks: { type: Number, required: true }, // Limit on links
});

module.exports = mongoose.model('Plan', planSchema);
