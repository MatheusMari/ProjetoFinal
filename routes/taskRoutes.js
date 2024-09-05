const express = require('express');
const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    countUserTasks,
} = require('../controllers/taskController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();



router.get('/tasks', authenticate, getAllTasks);
router.get('/tasks/a/:id', authenticate, getTaskById);
router.post('/tasks', authenticate, createTask);
router.put('/tasks/:id', authenticate, updateTask);
router.delete('/tasks/:id', authenticate, deleteTask);
router.get('/tasks/count', authenticate, countUserTasks);

module.exports = router;
