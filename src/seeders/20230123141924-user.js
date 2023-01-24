'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {     
    await queryInterface.bulkInsert('users', [
      {
        display_name: 'usuario',
        email: "usuariotest@gmail.com",
        password: "test123",
        image: 'null'
      }
    ]);    
  },

  async down (queryInterface, Sequelize) {    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
