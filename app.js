require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');

const User = require('./model/User.js');
const Task = require('./model/Tasks.js');

const app = express();

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

app.get('/install', async (req, res) => {
    try {
        await sequelize.sync({ force: true });

        const userCount = await User.count();
        const taskCount = await Task.count();

        if (userCount === 0 && taskCount === 0) {
            await populateDB();
            console.log('Database populated with initial data');
        }

        res.json({
            message: 'Database installed and populated with initial data',
        });
    } catch (error) {
        res.status(500).json({ error: 'Installation failed', e: error });
    }
});

async function populateDB() {
    let tasks = [];
    let users = [];

    for (let x = 0; x < 10; x++) {
        users.push({
            username: `user${x + 1}`,
            password: 'password',
            email: `user${x + 1}@example.com`,
            role: x == 0 ? 'admin' : 'user',
        });

        tasks.push({
            title: `Task ${x + 1}`,
            description:
                'Limpar a casa',
            completed: false,
            UserId: x + 1,
        });
    }

    // Insere os dados no banco de dados
    await User.bulkCreate(users);
    await Task.bulkCreate(tasks);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server rodando na porta ${3000}`));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;