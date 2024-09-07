const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/User.js');
const { STRING } = require('sequelize');



exports.register = async (req, res) => {
    const { username, password } = req.body;

    // Verificar se o username é um número
    if (!isNaN(username)) {
        return res.status(400).json({ error: 'o usuario não pode ser feito com numeros' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            password: hashedPassword,
            role: 'user',
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'User could not be created' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password)) || (user.password == password)) {
        const token = jwt.sign(
            { userId: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    try {
        if (req.user.userId == id || req.user.role == 'admin') {
            const oldUser = await User.findByPk(id);

            if (!oldUser) {
                return res.status(404).json({
                    error: 'Usuário não encontrado.',
                });
            }

            const hashedPassword = password ? await bcrypt.hash(password, 10) : oldUser.password; // Hash a senha se fornecida

            const newUser = await oldUser.update({
                username: username,
                password: hashedPassword,
            });

            res.status(200).json({
                newUser,
            });
        } else {
            return res.status(403).json({
                error: 'Só é permitido alteração de suas próprias credenciais.',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Usuário não pode ser atualizado' });
    }
}