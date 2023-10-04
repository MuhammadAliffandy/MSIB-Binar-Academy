const imageBuffer = require('./dummyImageBlob');
const { v4: uuidv4 } = require('uuid');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize){
    return queryInterface.bulkInsert('cars', [{
      id : uuidv4(),
      name : 'Mobil VW',
      image : imageBuffer,
      size : 'Large',
      rentPerDay : 400000, 
      description : 'Volkswagen (commonly abbreviated to VW) is an automotive manufacturer based in Wolfsburg , Lower Saxony, Germany .',
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },
  async down(queryInterface, Sequelize){
    return queryInterface.bulkDelete('cars', null, {});
  }
};

console.log(uuidv4())