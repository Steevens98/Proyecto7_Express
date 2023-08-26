'use strict';

const Cita = require('../models').cita;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Cita.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cita');
  }
};
