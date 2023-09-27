const { sequelize } = require('../../../models/db');
const { Car } = require('../../../models/car');

const Cars = sequelize.models.Car;

module.exports = { Cars };