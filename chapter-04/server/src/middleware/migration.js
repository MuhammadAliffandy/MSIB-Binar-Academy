const { sequelize } = require('../../../models/db');
const { Car } = require('../../../models/car');

const cars = sequelize.models.cars;

module.exports = { cars };