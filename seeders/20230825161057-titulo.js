'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('titulo', [
      {
        especialidad_idEspecialidad:1,
        medico_idMedico: 1
      },
      {
        especialidad_idEspecialidad:2,
        medico_idMedico: 2
      },
      {
        especialidad_idEspecialidad:3,
        medico_idMedico: 3
      },
      {
        especialidad_idEspecialidad:4,
        medico_idMedico: 4
      },
      {
        especialidad_idEspecialidad:5,
        medico_idMedico: 5
      },
      {
        especialidad_idEspecialidad:6,
        medico_idMedico: 6
      },
      {
        especialidad_idEspecialidad:7,
        medico_idMedico: 7
      },
      {
        especialidad_idEspecialidad:1,
        medico_idMedico: 8
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('titulo', null, {});
  }
};
