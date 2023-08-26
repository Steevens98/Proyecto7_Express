'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medico', [
      {
        idMedico: 1,
        nombre:"Hugo",
        apellido:"Pérez",
        especialidad:"Oftalmología"
      },
      {
        idMedico: 2,
        nombre:"Juan",
        apellido:"Rodríguez",
        especialidad:"Cirugía General"
      },
      {
        idMedico: 3,
        nombre:"Rodrigo",
        apellido:"Zambrano",
        especialidad:"Dermatología"
      },
      {
        idMedico: 4,
        nombre:"Michael",
        apellido:"Sánchez",
        especialidad:"Gastroenterología"
      },
      {
        idMedico: 5,
        nombre:"Luisa",
        apellido:"López",
        especialidad:"Hematología"
      },
      {
        idMedico: 6,
        nombre:"Frank",
        apellido:"García",
        especialidad:"Medicina de Rehabilitación"
      },
      {
        idMedico: 7,
        nombre:"Carmen",
        apellido:"Vera",
        especialidad:"Ginegología"
      },
      {
        idMedico: 8,
        nombre:"Alison",
        apellido:"Torres",
        especialidad:"Oftalmología"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medico', null, {});
  }
};