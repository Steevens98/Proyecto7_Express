'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('especialidad', [
      {
        idEspecialidad: 1,
        nombre:"Oftalmología"
      },
      {
        idEspecialidad: 2,
        nombre:"Cirugía General"
      },
      {
        idEspecialidad: 3,
        nombre:"Dermatología"
      },
      {
        idEspecialidad: 4,
        nombre:"Gastroenterología"
      },
      {
        idEspecialidad: 5,
        nombre:"Hematología"
      },
      {
        idEspecialidad: 6,
        nombre:"Medicina de Rehabilitación"
      },
      {
        idEspecialidad: 7,
        nombre:"Ginegología"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('especialidad', null, {});
  }
};
