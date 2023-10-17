const { v4: uuidv4 } = require('uuid');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize){
    return queryInterface.bulkInsert('users', [{
      id : uuidv4(),
      name : 'Aliffandy',
      phone : '083456785678',
      address: 'Tokyo, Japan',
      role: 'superadmin',
      email : 'aliffandy@gmail.com',
      password: 'fandy12345',
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },
  async down(queryInterface, Sequelize){
    return queryInterface.bulkDelete('users', null, {});
  }
};
