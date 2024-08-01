const express = require('express');

const routers = express.Router();

const { getGoal, setGoal, updateGoal, deleteGoal } = require('../controller/controller')

routers.get('/', getGoal)
routers.post('/', setGoal) 
routers.put('/:id', updateGoal)
routers.delete('/:id', deleteGoal)

module.exports = routers;


