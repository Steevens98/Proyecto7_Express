'use strict';

const Medico = require('../models').medico;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Medico.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medico');
  }
};
