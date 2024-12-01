// models/Theme.js
const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  backgroundColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#000000' },
  font: { type: String, default: 'Arial' },
  selectedTemplate: { type: String }, // Template ID
});

module.exports = mongoose.model('Theme', themeSchema);
