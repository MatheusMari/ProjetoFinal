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
const { getTaskCounts} = require('../controllers/taskController');
const { countCompletedTasksByUser } = require('../controllers/taskController');
const router = express.Router();



router.get('/tasks', authenticate, getAllTasks);
router.get('/tasks/a/:id', authenticate, getTaskById);
router.post('/tasks', authenticate, createTask);
router.put('/tasks/:id', authenticate, updateTask);
router.delete('/tasks/:id', authenticate, deleteTask);
router.get('/tasks/count', authenticate, countUserTasks);
router.get('/tasks/countnum', authenticate, getTaskCounts);
router.get('/tasks/qt', authenticate, countCompletedTasksByUser);

module.exports = router;
