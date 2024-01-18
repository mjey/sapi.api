require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRESDB_DATABASE,
    process.env.POSTGRESDB_USER,
    process.env.POSTGRESDB_ROOT_PASSWORD,
    {
        host: 'localhost',
        port: process.env.POSTGRESDB_LOCAL_PORT,
        dialect: 'postgres',
        logging: false,
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