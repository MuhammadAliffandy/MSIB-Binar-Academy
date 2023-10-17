const { v4: uuidv4 } = require('uuid');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize){
    return queryInterface.bulkInsert('cars', [{
      id : uuidv4(),
      name : 'Mobil VW',
      image : 'https://firebasestorage.googleapis.com/v0/b/binar-car-402108.appspot.com/o/car-1697535658059.jpg?alt=media&token=b438d8d1-cbdb-4e5c-9423-da816a7ab00d',
      size : 'Large',
      rentPerDay : 400000, 
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },
  async down(queryInterface, Sequelize){
    return queryInterface.bulkDelete('cars', null, {});
  }
};
