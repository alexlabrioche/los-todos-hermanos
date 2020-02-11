const dataType = require('sequelize');
const db = require('../db/config');

const Todo = db.define('todo', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: dataType.UUID,
  },
  task: {
    field: 'task',
    type: dataType.STRING(40),
  },
  done: {
    field: 'done',
    type: dataType.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: dataType.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    allowNull: false,
    type: dataType.DATE,
  },
});

module.exports = Todo;
