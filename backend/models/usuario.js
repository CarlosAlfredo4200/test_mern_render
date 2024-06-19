const mongoose = require('mongoose');

// Definir el esquema para el usuario
const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Añadir más campos según sea necesario
});

// Crear el modelo de usuario
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
