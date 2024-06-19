const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Crear una instancia de Express
const app = express();

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Configurar la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres', // Reemplaza con tu usuario de PostgreSQL
  host: 'localhost', // Reemplaza con el host de tu base de datos
  database: 'pruebacpcs', // Reemplaza con el nombre de tu base de datos
  password: 'cpcs2024', // Reemplaza con tu contraseña de PostgreSQL
  port: 5432, // Puerto por defecto de PostgreSQL
});

// Definir el puerto en el que el servidor escuchará
const PORT = 3000;

// Definir una ruta para obtener los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('select * from usuarios');
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los usuarios');
  }
});

// Hacer que el servidor escuche en el puerto definido
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
