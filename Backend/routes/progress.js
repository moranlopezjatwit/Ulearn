const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const { requireSignin, isAdmin } = require('../middleware/auth');

// Save progress route (requires sign-in)
router.post('/save', requireSignin, async (req, res) => {
  const { course, progress } = req.body;
  const userId = req.auth._id;

  try {
    let userProgress = await Progress.findOne({ userId, course });
    if (userProgress) {
      userProgress.progress = progress;
    } else {
      userProgress = new Progress({ userId, course, progress });
    }
    await userProgress.save();
    res.status(200).json({ message: 'Progress saved' });
  } catch (error) {
    console.error('Error saving progress', error);
    res.status(500).json({ message: 'Error saving progress' });
  }
});

// Admin-only route example
router.get('/admin-data', requireSignin, isAdmin, (req, res) => {
  res.status(200).json({ message: 'Admin data' });
});

module.exports = router;
