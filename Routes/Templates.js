// routes/templates.js
const express = require('express');
const Template = require('../models/Template');
const router = express.Router();

// Get all templates
router.get('/', async (req, res) => {
  const templates = await Template.find();
  res.json(templates);
});
