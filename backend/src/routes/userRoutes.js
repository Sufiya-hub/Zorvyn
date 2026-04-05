const express = require('express');
const router = express.Router();

const { getAllUsers } = require('../controllers/userController');

router.get('/', getAllUsers);

// test route (for debugging)
router.get('/test', (req, res) => {
  res.send('User route working');
});

module.exports = router;
