const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('./db'); // Asegúrate de que la configuración de la base de datos sea correcta
const bodyParser = require('body-parser');

const app = express();

// Configurar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración CORS
const allowedOrigins = [process.env.FRONTEND_URL];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.static('uploads'));
// Importar y usar las rutas de notas de estudiantes
const studentNotesRouter = require('./routes/student_notes_sheet_routes');
app.use('/api/student_notes', studentNotesRouter);

// Resto de tus rutas y configuraciones
const usuarioRouter = require('./routes/usuario');
app.use('/api/usuarios', usuarioRouter);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
