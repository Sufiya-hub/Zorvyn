const express = require('express');
const router = express.Router();

const {
  createRecord,
  getAllRecords,
  updateRecord,
  deleteRecord,
} = require('../controllers/recordController');

const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

// ✅ All logged-in users can VIEW
router.get('/', protect, getAllRecords);

// ✅ Only ADMIN can CREATE
router.post('/', protect, authorizeRoles('admin'), createRecord);
router.put('/:id', protect, authorizeRoles('admin'), updateRecord);
router.delete('/:id', protect, authorizeRoles('admin'), deleteRecord);

module.exports = router;
