const uuid = require('uuid/v4');

const Todo = require('../models/todos.model');

module.exports = {
  addOne: async ({ task, done }) => {
    try {
      Todo.create({
        id: uuid(),
        task,
        done,
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  getAll: async () => {
    try {
      const todos = await Todo.findAll({
        raw: true,
        order: [['createdAt', 'ASC']],
      });
      return todos;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateOne: async (id, { task, done }) => {
    try {
      const todoToUpdate = await Todo.findByPk(id);
      todoToUpdate.task = task;
      todoToUpdate.done = done;
      await todoToUpdate.save();
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteOne: async (id) => {
    try {
      const todoToDelete = await Todo.findByPk(id);
      todoToDelete.destroy();
    } catch (error) {
      throw new Error(error);
    }
  },
};
