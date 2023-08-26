'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('paciente', [
      {
        idPaciente: 1,
        nombre:"Mario",
        apellido:"Cueva",
        fecha_Nacimiento:"05/01/1998",
        direccion:"15 y la Q",
        telefono:"0786548970"
      },
      {
        idPaciente: 2,
        nombre:"Julio",
        apellido:"Álvarez",
        fecha_Nacimiento:"03/08/1970",
        direccion:"Flor de bastion",
        telefono:"0999658569"
      },
      {
        idPaciente: 3,
        nombre:"Anna",
        apellido:"Rodríguez",
        fecha_Nacimiento:"15/12/1965",
        direccion:"29 y la A",
        telefono:"0856740958"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('paciente', null, {});
  }
};

