'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      image: {
          type: Sequelize.BLOB,
          allowNull: false
      },
      size: {
          type: Sequelize.STRING,
          allowNull: false
      },
      rentPerDay: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      description:{
          type: Sequelize.STRING,
      },
      createdAt: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};