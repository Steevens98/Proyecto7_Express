var DataTypes = require("sequelize").DataTypes;
var _cita = require("./cita");
var _especialidad = require("./especialidad");
var _medico = require("./medico");
var _paciente = require("./paciente");
var _titulo = require("./titulo");

function initModels(sequelize) {
  var cita = _cita(sequelize, DataTypes);
  var especialidad = _especialidad(sequelize, DataTypes);
  var medico = _medico(sequelize, DataTypes);
  var paciente = _paciente(sequelize, DataTypes);
  var titulo = _titulo(sequelize, DataTypes);

  especialidad.belongsToMany(medico, { as: 'medico_idMedico_medicos', through: titulo, foreignKey: "especialidad_idEspecialidad", otherKey: "medico_idMedico" });
  medico.belongsToMany(especialidad, { as: 'especialidad_idEspecialidad_especialidads', through: titulo, foreignKey: "medico_idMedico", otherKey: "especialidad_idEspecialidad" });
  titulo.belongsTo(especialidad, { as: "especialidad_idEspecialidad_especialidad", foreignKey: "especialidad_idEspecialidad"});
  especialidad.hasMany(titulo, { as: "titulos", foreignKey: "especialidad_idEspecialidad"});
  cita.belongsTo(medico, { as: "medico_idMedico_medico", foreignKey: "medico_idMedico"});
  medico.hasMany(cita, { as: "cita", foreignKey: "medico_idMedico"});
  titulo.belongsTo(medico, { as: "medico_idMedico_medico", foreignKey: "medico_idMedico"});
  medico.hasMany(titulo, { as: "titulos", foreignKey: "medico_idMedico"});
  cita.belongsTo(paciente, { as: "paciente_idPaciente_paciente", foreignKey: "paciente_idPaciente"});
  paciente.hasMany(cita, { as: "cita", foreignKey: "paciente_idPaciente"});

  return {
    cita,
    especialidad,
    medico,
    paciente,
    titulo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
