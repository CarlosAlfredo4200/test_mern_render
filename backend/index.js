const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // Cargar variables de entorno desde .env

// Crear una instancia de Express
const app = express();

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Configurar la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Definir el puerto en el que el servidor escuchará
const PORT = process.env.SERVER_PORT || 3000;

// Definir una ruta para obtener los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send({
      user: result.rows(0).now,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los usuarios');
  }
});

// Hacer que el servidor escuche en el puerto definido
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
