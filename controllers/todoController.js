const todo = require('../models/todo');

function insertTodo(req,res){
    try {
        await todo.create(req.body),then(function (data){
            res.status(200).json({success:true});
        });
    }catch {
        (function (error){
            res.status(401).json("Not created"+error.message);

        });
    }

}

function updateTodoById(req,res){
    //const {id} = req.params;
    const id = req.params.id;
    const {isCompleted} = req.body;
    todo.findByIdAndUpdate(id, {isCompleted:isCompleted})
    .then(function(data){
        res.status(200).json({success:true,message:'Todo updated successfully',data});
    })
    .catch(function(err){
        res.status(404).json({success:false,message:'Todo cant update.Try again'});
    })

    
}

function deleteTodoById(req,res){
    const _id = req.params.id;
    todo.findByIdAndDelete(_id)
    .then(function(){
        res
        .status(200)
        .json({success:true,message:"Todo is deleted successfully"});
    })
    .catch(function (error){
        res.status(404).json({success:false,message:error.message});
    });
}

function getTodoById(req,res){
    const id = req.params.id;
    todo.findById({_id:id})
    .then(function (data){
        res.status(200).json({
            success:true,
            data,
        });
    })

}

function getAllTodos(req,res){
    todo.find()
        .then(function (data){
            res.status(200).json({success:true,total:data.length,data});
        })
        .catch(function (error){
            res.status(404).json({
                success:false,
                error:error.message,
            });
        });

}

module.exports = {
    insertTodo, updateTodoById, deleteTodoById,getTodoById,getAllTodos
}