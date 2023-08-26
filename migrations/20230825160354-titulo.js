'use strict';

const Titulo = require('../models').titulo;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Titulo.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('titulo');
  }
};
