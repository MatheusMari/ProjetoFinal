const User = require('../model/User.js');

exports.createAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({ username, password, role: 'admin' });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Admin could not be created' });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id, role: 'user' } });
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ error: 'User could not be deleted' });
    }
};
