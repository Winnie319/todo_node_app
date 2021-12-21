const express = require('express');
const server = express();
const mongo_db_url = 'mongodb+srv://winnie319:One$imus1@cluster0.zzkbb.mongodb.net/todos_db?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');



server.listen(4000, function () {
    console.log('Server has started to run in express');
    mongoose.connect(mongo_db_url)
        .then(function () {
            server.get('/todo', todoController.getAllTodos);
            server.post('/todo', todoController.insertTodo);
            server.put('/todo', todoController.updateTodoById);
            server.delete('/todo', todoController.deleteTodoById);
            console.log('DB is connected');
        })
        .catch(function (error) {
            console.log('DB is not connected:', console.message);

        });
});