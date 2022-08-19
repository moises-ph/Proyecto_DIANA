const express = require('express');

const router = express.Router();

const Task = require('../models/tasks');

// Traer Tareas

router.get('/', async (req, res)=>{
    const tarea = await Task.find();
    res.json(tarea);
});

router.get('/:id', async (req, res)=>{
    const tarea = await Task.findById(req.params.id);
    res.json(tarea);
});

// Crear Tarea

router.post('/', async (req, res)=>{
    const {title, description} = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'Tarea Creada'});
});

// Actualizar Tarea

router.put('/:id', async (req, res)=>{
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Tarea Actualizada'});
})

// Eliminar Tarea

router.delete('/:id', async (req, res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea Eliminada'});
});

module.exports = router;