const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Serial = db.define('Serials', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
Serial.sync({ force: true })
  .then(() => {
    console.log('Serial model synchronized with the database');
  })
  .catch((error) => {
    console.error('Error synchronizing Serial model:', error);
  });

module.exports = Serial;