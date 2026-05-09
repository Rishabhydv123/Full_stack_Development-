// Todo.routes.js

const express = require('express');
const { todoModel } = require('../model/Todo.model');

const TodoRoutes = express.Router();

//read path="/todo/"
TodoRoutes.get('/', async (req, res) => {
    const todoData = await todoModel.find();

    res.send({ msg: 'all todo data', data: todoData });
});

// create path="/todo/createTodo"
TodoRoutes.post('/createTodo', async (req, res) => {
    const todoDataSet = new todoModel(req.body);

    await todoDataSet.save();

    res.send(todoDataSet);
});

// update
TodoRoutes.get('/', (req, res) => {});

//delete
TodoRoutes.get('/', (req, res) => {});

module.exports = { TodoRoutes };