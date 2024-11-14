const express = require('express');
const router = express.Router();
const Thought = require('../../models/Thought');

// Get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new thought
router.post('/', async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    const savedThought = await newThought.save();
    res.json(savedThought);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Other routes...

module.exports = router;