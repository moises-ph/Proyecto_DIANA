// Cargar Modulos
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const mongoose = require('./database');

// Inicializar variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas


app.use('/api/tasks', require('./routes/task.routes'));


// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});