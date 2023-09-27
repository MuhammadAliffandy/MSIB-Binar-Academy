
const { sequelize } = require('../models/db');
const { DataTypes } = require("sequelize");

const Car = sequelize.define('Car', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rentPerDay: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
});

module.exports = { Car };