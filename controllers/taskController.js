const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    const { limit = 10, page = 1 } = req.query;
    const offset = (page - 1) * limit;
    const tasks = await Task.findAll({ limit, offset });
    res.json(tasks);
};

exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, UserId: req.user.userId });
    res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findByPk(id);
    if (task) {
        task.title = title;
        task.description = description;
        task.completed = completed;
        await task.save();
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.destroy({ where: { id } });
    res.status(200).json({ message: 'Task deleted' });
};
