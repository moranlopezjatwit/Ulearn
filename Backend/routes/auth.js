const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const recommendationController = require('../controllers/recommendationController');

// Get recommendations
router.get('/', authMiddleware, (req, res) => {
    recommendationController.getRecommendations(req, res);
});

module.exports = router;
