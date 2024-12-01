// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', default: null }, // User's current plan
  subscriptionActive: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
