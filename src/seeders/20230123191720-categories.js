'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.bulkInsert('categories', [
    {
      name: "Tecnologia",    
    },
    {
      name: "Esporte"
    },
    {
      name: "Games",
    },
    {
      name: "Conhecimentos Gerais"
    }
  ], {});    
  },

  async down (queryInterface, Sequelize) {   
    await queryInterface.bulkDelete('categories', null, {});
     
  }
};
