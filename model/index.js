const sequelize = require('../config/database');
const User = require('./User');
const Task = require('./Task');

// Definir relacionamentos
User.hasMany(Task, { foreignKey: 'UserId' });
Task.belongsTo(User, { foreignKey: 'UserId' });

// Sincronizar modelos com o banco de dados
const initializeDatabase = async () => {
    try {
        await sequelize.sync({ force: false }); 
        console.log('Database synchronized');
    } catch (error) {
        console.error('Failed to synchronize database:', error);
    }
};

module.exports = {
    sequelize,
    User,
    Task,
    initializeDatabase,
};
