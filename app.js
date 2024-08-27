require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

app.get('/install', async (req, res) => {
    try {
        await sequelize.sync({ force: true });
        res.json({ message: 'Database installed and populated with initial data' });
    } catch (error) {
        res.status(500).json({ error: 'Installation failed' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
