const User = require('../models/User');
const Todo = require('../models/Todo');

// Datos de muestra para simular una base de datos
const users = [
  new User(1, 'Juan', 'Flores', 'juan@ejemplouno.com'),
  new User(2, 'Diego', 'Fernandez', 'diego@exampledos.com'),
];

const todos = [
  new Todo(1, 'Universidad', ['estudios', 'importante', 'academia'], 1),
  new Todo(2, 'Casa', ['oficio', 'necesario', 'orden'], 1),
  new Todo(3, 'Trabajo', ['tareas', 'reuniones'], 2),
];

// Ruta para obtener todos los usuarios
const getAllUsers = (req, res) => {
  res.json(users);
};

// Ruta para obtener un usuario por ID
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).json({ error: 'Usuario no encontrado' });
  } else {
    res.json(user);
  }
};

// Ruta para crear un nuevo usuario
const createUser = (req, res) => {
  const { firstName, lastName, email } = req.body;
  const id = users.length + 1;
  const newUser = new User(id, firstName, lastName, email);
  users.push(newUser);
  res.json(newUser);
};

// Ruta para obtener un usuario por ID y todos sus todos
const getUserWithTodos = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).json({ error: 'Usuario no encontrado' });
  } else {
    const userTodos = todos.filter((todo) => todo.userId === id);
    const userWithTodos = new User(user.id, user.firstName, user.lastName, user.email);
    userWithTodos.todos = userTodos;
    res.json(userWithTodos);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  getUserWithTodos,
};
