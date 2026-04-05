const express = require('express');
const router = express.Router();

const {
  getDashboard,
  getCategoryBreakdown,
  getMonthlyTrends,
  getRecentTransactions,
  getIncomeVsExpense,
} = require('../controllers/dashboardController');

const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, getDashboard);
router.get('/categories', protect, getCategoryBreakdown);
router.get('/monthly', protect, getMonthlyTrends);
router.get('/recent', protect, getRecentTransactions);
router.get('/pie', protect, getIncomeVsExpense);

module.exports = router;
