const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware para parsear el body de las peticiones
app.use(bodyParser.json());

// Rutas
app.use('/users', require('./routes/userRoutes'));
app.use('/todos', require('./routes/todoRoutes'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
