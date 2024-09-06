const express = require('express');
const { register, login, updateUser } = require('../controllers/authControllers.js');
const { authenticate } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.put('/update/:id', authenticate, updateUser);
module.exports = router;
