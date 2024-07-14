const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models/user'); // Adjust the path to your User model

const secret = process.env.JWT_SECRET; // Use a secure key from environment variable

// Middleware to require login/auth
const requireSignin = expressJwt({
  secret: secret,
  algorithms: ['HS256'],
  userProperty: 'auth'
});

// Middleware to check if the user has admin role
const isAdmin = (req, res, next) => {
  const userId = req.auth._id;
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }
    if (user.role !== 'admin') {
      return res.status(403).json({
        error: 'Admin resource! Access denied'
      });
    }
    req.profile = user;
    next();
  });
};

module.exports = { requireSignin, isAdmin };
