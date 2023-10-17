'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cars.belongsTo(models.users, { as: 'createdByUser', foreignKey: 'createdBy' });
      Cars.belongsTo(models.users, { as: 'updatedByUser', foreignKey: 'updatedBy' });
      Cars.belongsTo(models.users, { as: 'deletedByUser', foreignKey: 'deletedBy' });
    }
  }
  Cars.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    size: DataTypes.STRING,
    rentPerDay: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    createdBy: {
      type : DataTypes.UUID,
      foreignKey: true,
    },
    updatedBy: {
      type : DataTypes.UUID,
      foreignKey: true,
    },
    deletedBy: {
      type : DataTypes.UUID,
      foreignKey: true,
      allowNull : true,
    },
  }, {
    sequelize,
    modelName: 'cars',
    paranoid: true,
  });

  return Cars;
};