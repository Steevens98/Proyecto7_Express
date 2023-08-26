const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('titulo', {
    especialidad_idEspecialidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'especialidad',
        key: 'idEspecialidad'
      }
    },
    medico_idMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'medico',
        key: 'idMedico'
      }
    }
  }, {
    sequelize,
    tableName: 'titulo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "especialidad_idEspecialidad" },
          { name: "medico_idMedico" },
        ]
      },
      {
        name: "fk_especialidad_has_medico_medico1_idx",
        using: "BTREE",
        fields: [
          { name: "medico_idMedico" },
        ]
      },
      {
        name: "fk_especialidad_has_medico_especialidad1_idx",
        using: "BTREE",
        fields: [
          { name: "especialidad_idEspecialidad" },
        ]
      },
    ]
  });
};
