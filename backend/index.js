const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno desde .env

// Crear una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Verificar si la URI de MongoDB está definida
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('Error: La URI de MongoDB no está definida en las variables de entorno');
  process.exit(1);
}

// Configurar la conexión a la base de datos MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Definir el puerto en el que el servidor escuchará
const PORT = process.env.SERVER_PORT || 3000;

// Importar el router de usuarios
const usuarioRouter = require('./routes/usuario');

// Usar el router de usuarios
app.use('/usuarios', usuarioRouter);

// Hacer que el servidor escuche en el puerto definido
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
