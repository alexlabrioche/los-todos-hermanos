const express = require('express');
const todosRouter = require('./todos.routes');

const router = express.Router();

router.get('/', (request, response) => {
  response.redirect('/todos');
});

router.use('/todos', todosRouter);

router.use('*', (request, response) => {
  response.status(404).render('error404.ejs');
});

module.exports = router;
