const express = require('express');
const bodyparser = require('body-parser');

const todosController = require('../controllers/todos.controller');

const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));

router.get('/', async (request, response) => {
  const todos = await todosController.getAll();
  response.render('home', { todos });
});

router.get('/update/:id', (request, response) => {
  const { id } = request.params;
  const { task, done } = request.query;
  const isDone = done === 'on' ? true : false;
  todosController.updateOne(id, { task, done: isDone });
  response.redirect('/');
});

router.post('/add', (request, response) => {
  const { task, done } = request.body;
  todosController.addOne({ task, done });
  response.redirect('/');
});

router.get('/remove/:id', (request, response) => {
  const id = request.params.id;
  todosController.deleteOne(id);
  response.redirect('/');
});

module.exports = router;
