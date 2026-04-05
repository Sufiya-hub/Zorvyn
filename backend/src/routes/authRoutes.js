const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// 🔥 IMPORTANT: Use FULL object (not destructuring for safety)
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
