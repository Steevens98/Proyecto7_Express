const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cita', {
    idCita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hora: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    motivo_Cita: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    paciente_idPaciente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paciente',
        key: 'idPaciente'
      }
    },
    medico_idMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'medico',
        key: 'idMedico'
      }
    }
  }, {
    sequelize,
    tableName: 'cita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCita" },
        ]
      },
      {
        name: "fk_cita_paciente_idx",
        using: "BTREE",
        fields: [
          { name: "paciente_idPaciente" },
        ]
      },
      {
        name: "fk_cita_medico1_idx",
        using: "BTREE",
        fields: [
          { name: "medico_idMedico" },
        ]
      },
    ]
  });
};
