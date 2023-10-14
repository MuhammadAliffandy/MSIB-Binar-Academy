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
      createdAt: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
      },
      createdBy: {
          type: Sequelize.UUID,
          allowNull: false
      },
      updatedBy: {
          type: Sequelize.UUID,
          allowNull: false
      },
      deletedBy: {
          type: Sequelize.UUID,
          allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};

