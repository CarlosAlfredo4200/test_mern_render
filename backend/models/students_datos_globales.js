// models/Student.js
const mongoose = require('mongoose');

const StudentSGlobaleschema = new mongoose.Schema({
  codigo_matricula: { type: String, required: true },
  primer_nombre: { type: String, required: true },
  segundo_nombre: { type: String },
  primer_apellido: { type: String, required: true },
  segundo_apellido: { type: String, required: true },
  tipo_documento: { type: String, required: true },
  numero_identificacion: { type: String, required: true },
  municipio_exp_documento: { type: String, required: true },
  fecha_nacimiento: { type: Date, required: true },
  municipio_nacimiento: { type: String, required: true },
  telefono: { type: String },
  celular: { type: String },
  email: { type: String },
  direccion: { type: String },
  pais: { type: String },
  municipio_direccion: { type: String },
  barrio_direccion: { type: String },
  sexo: { type: String },
  estrato: { type: Number },
  tipo_sangre: { type: String },
  eps: { type: String },
  ars: { type: String },
  grupo_sisben: { type: String },
  zona: { type: String },
  estado: { type: String },
  tiene_subsidio: { type: Boolean },
  ips: { type: String },
  numero_carnet_sisben: { type: String },
  fuente_recursos: { type: String },
  madre_cabeza_familia: { type: Boolean },
  beneficiario_heroe_nacion: { type: Boolean },
  beneficiario_madre_cabeza_familia: { type: Boolean },
  beneficiario_veterano_fuerza_publica: { type: Boolean },
  proviene_sector_privado: { type: Boolean },
  proviene_otro_municipio: { type: Boolean },
  institucion_bienestar_origen: { type: String },
  poblacion_victima_conflicto: { type: Boolean },
  municipio_expulsor: { type: String },
  tipo_discapacidad: { type: String },
  capacidad_excepcional: { type: String },
  etnia: { type: String },
  folio: { type: String },
  fecha_matricula: { type: Date },
  sede: { type: String },
  formalizada: { type: Boolean },
  jornada: { type: String },
  grupo: { type: String },
  grado: { type: String },
  ano_lectivo: { type: Number },
  nivel: { type: String },
  usuario: { type: String },
  ultima_fecha_actualizacion: { type: Date },
  edad: { type: Number },
  pertenece_regimen_contributivo: { type: Boolean }
});

module.exports = mongoose.model('Students_datos_globales', StudentSGlobaleschema);
