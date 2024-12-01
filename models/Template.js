// models/Template.js
const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  layout: { type: String, required: true }, // Reference CSS class
  thumbnail: { type: String, required: true }, // Image URL
});

module.exports = mongoose.model('Template', templateSchema);
