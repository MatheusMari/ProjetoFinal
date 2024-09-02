const express = require('express');
const { createAdmin, deleteUser } = require('../controllers/userController');
const { authenticate, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/admin/create', [authenticate, isAdmin], createAdmin);
router.delete('/admin/delete/:id', [authenticate, isAdmin], deleteUser);

module.exports = router;
