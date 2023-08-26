'use strict';

const Especialidad = require('../models').especialidad;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Especialidad.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('especialidad');
  }
};
