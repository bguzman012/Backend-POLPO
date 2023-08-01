const Task = require('../models/Task');
const Todo = require('../models/Todo');

// Datos de muestra para simular todos y tareas
const todos = [
  new Todo(1, 'Universidad', ['estudios', 'importante', 'academia'], 1, [
    new Task(1, 'Estudiar para el examen de programación', false, 1, 1),
    new Task(2, 'Ir a clases', true, 1, 1),
  ]),
  new Todo(2, 'Casa', ['oficio', 'necesario', 'orden'], 1, []),
  new Todo(3, 'Trabajo', ['tareas', 'reuniones'], 2, [
    new Task(3, 'Preparar informe', false, 3, 2),
    new Task(4, 'Asistir a la reunión de equipo', true, 3, 2),
  ]),
];


// Ruta para obtener un todo y sus pendientes por ID
const getTodoWithTasks = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    res.status(404).json({ error: 'Todo no encontrado' });
  } else {
    res.json(todo);
  }
};

// Ruta para crear una nueva tarea (pendiente) en un todo
const createTask = (req, res) => {

  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    res.status(404).json({ error: 'Todo no encontrado' });
  } else {
    const taskId = todo.tasks.length + 1;
    const newTask = new Task(taskId, title, completed, id, todo.userId);
    todo.tasks.push(newTask);
    res.json(newTask);
  }
};

module.exports = {
  getTodoWithTasks,
  createTask,
};