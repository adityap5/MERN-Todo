const express = require('express');
const router = express.Router();
const Todo = require('../models/todos');
const auth = require('../middleware/auth');

// Create new todo
router.post('/',async (req, res) => {
    const { title , body } = req.body;
    try {
      const todo = new Todo({ title , body });
      await todo.save();
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const todos = await Todo.find({ user: req.user });
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      await todo.deleteOne();
      res.json({ message: 'Todo deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;