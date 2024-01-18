require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'serials',
    'postgres',
    'Admin123@',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        logging: true,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: false
        }
    }
);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));

module.exports = sequelize;