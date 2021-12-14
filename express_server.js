const express = require('express');
const server = express();
const mongo_db_url = 'mongodb+srv://winnie319:One$imus1@cluster0.zzkbb.mongodb.net/todos_db?retryWrites=true&w=majority';
const mongoose = require('mongoose');

server.get('/task', function(req, res){
    res.status(200).json('All task has been given');
});
server.post('/task', function(req, res){
    res.status(200).json('All a new task');
});
server.put('/task', function(req, res){
    res.status(200).json('Update task');
});
server.delete('/task', function(req, res){
    res.status(200).json('Delete a task');
});

server.listen(4000, function(){
    console.log('Server has started to run in express');
});