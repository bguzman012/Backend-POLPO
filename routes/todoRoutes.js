const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Ruta para obtener un todo y sus pendientes por ID
router.get('/:id', todoController.getTodoWithTasks);

// Ruta para crear una nueva tarea (pendiente) en un todo
router.post('/:id/task', todoController.createTask);

module.exports = router;
