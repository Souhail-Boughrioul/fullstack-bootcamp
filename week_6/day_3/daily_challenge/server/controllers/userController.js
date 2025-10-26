const bcrypt = require('bcrypt');
const db = require('../config/db');
const userModel = require('../models/userModel');
const hashModel = require('../models/hashModel');

// POST /register
const registerUser = async (req,res) => {
    const {email, username, first_name, last_name, password} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.transaction(async (trx) => {
            await userModel.addUser(trx, {email, username, first_name, last_name});
            await hashModel.addHashedPassword(trx, {username, password: hashedPassword});
        })

        res.status(201).json({ message: 'User registered successfully!' });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

// POST /login
const loginUser = async (req,res) =>{
    const {username, password} = req.body;

    try{
        const userHash = await hashModel.getPasswordByUsername(username);
        if(!userHash) return res.status('404').json({message: 'User not found'});

        const valid = await bcrypt.compare(password, userHash.password);
        if(!valid) return res.status('401').json({message: 'Invalid password'});

        res.json({message: 'Login successful'});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

// GET /users
const getAllUsers = async (req,res)=>{
    try{
        const users = await userModel.getAllUsers();
        res.json(users);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
    
}

// GET /users/:id
const getUserById = async (req,res)=>{
    try{
        const user = await userModel.getUserById(req.params.id);
        if(!user) return res.status('404').json({message: 'User not found'});
        res.json(user);

    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

// PUT /users/:id
const updateUser = async (req,res)=>{
    try{
        const updated = await userModel.updateUser(req.params.id, req.body);
        res.json(updated);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports = {getAllUsers, getUserById, loginUser,registerUser,updateUser}