'use strict';

/* IMPORTE El ARCHIVO CON EL MODELO */
const Paciente = require('../models').paciente;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Paciente.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('paciente');
  }
};
