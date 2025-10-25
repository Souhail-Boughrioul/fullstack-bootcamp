const express = require('express');
const router = express.Router();

const todos = [];

// Get all to-do items
router.get('/', (req,res)=>{
    res.json(todos);
})

// Add a new to-do item
router.post('/', (req,res) => {
    const {title, completed} = req.body;

    if(!title || !completed){
        return res.json({message: 'Title and completed fields are required'});
    }

    const newTodo = {
        id: todos.length + 1,
        title,
        completed
    }
    todos.push(newTodo);
    res.json(newTodo);
})

// Update a to-do item by ID
router.put('/:todosId', (req,res)=>{
    const id = Number(req.params.todosId);
    const index = todos.findIndex(todo => todo.id === id);

    if(index === -1){
        return res.json({message: 'Todo not found'})
    }

    const {title, completed} = req.body;

    if(!title || !completed){
        return res.json({message: 'Title and completed fields are required'});
    }

    const updateTodo = {
        id: todos[index].id,
        title,
        completed
    }
    todos[index] = updateTodo;

    res.json(updateTodo);
})

// Delete a to-do item by ID
router.delete('/:todosId', (req,res)=>{
    const id = Number(req.params.todosId);
    const index = todos.findIndex(todo => todo.id === id);

    if(index === -1){
       return res.json({message: 'Todo not found'});
    }

    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
})


module.exports = router;