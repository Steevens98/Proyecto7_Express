'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cita', [
      {
        idCita: 101,
        fecha:"15/02/2023",
        hora:"16:00",
        motivo_Cita: "revision ocular",
        paciente_idPaciente: 1,
        medico_idMedico: 1
        
      },
      {
        idCita: 102,
        fecha:"15/03/2023",
        hora:"14:00",
        motivo_Cita: "Cirugia",
        paciente_idPaciente: 3,
        medico_idMedico: 2
        
      },
      {
        idCita: 103,
        fecha:"16/02/2023",
        hora:"13:00",
        motivo_Cita: "Colonoscopía",
        paciente_idPaciente: 2,
        medico_idMedico: 4
        
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cita', null, {});
  }
};
