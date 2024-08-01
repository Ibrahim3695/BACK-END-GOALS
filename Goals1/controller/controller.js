// const express = require("express");

// const asyncHandler = require('express-async-handler');

// const Goal = require('../model/model')

// const getGoal = asyncHandler(async (req, res) => {
//     const goal = await Goal.find()
//     res.status(200).json(goal)
// })

// const setGoal = asyncHandler(async (req, res) => {
//     if (!req.body.name && !req.body.text && !req.body.completed) {
//         res.status(404).json
//         throw new Error("Not Found")
//     }

//     const goal = await Goal.create({
//         name: req.body.name,
//         text: req.body.text,
//         completed: req.body.completed
//     })
//     res.status(200).json(goal)
// })

// const updateGoal = asyncHandler(async (req, res) => {
//     const goal = await Goal.findById(req.params.id)

//     if (!goal) {
//         res.status(404)
//         throw new Error("goal not found")
//     }

//     const newUpdatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     res.status(200).json({ goal, newUpdatedGoal })
// });

// const deleteGoal = asyncHandler(async (req, res) => {

//     const goal = await Goal.findById(req.params.id)
//     res.status(200)

//     if (!goal) {
//         res.status(404)
//         throw new Error("goal not found")
//     }

//     await Goal.findByIdAndDelete()
//     res.status(200).json({id: req.params.id})

// })


// module.exports = {
//     getGoal, setGoal, deleteGoal, updateGoal
// }


const asyncHandler = require("express-async-handler")

const Goal = require("../model/model");

const getGoal = asyncHandler(async (req, res) => {

    const gooal = await Goal.find();
    
    res.status(200).json(gooal)

    if (!gooal) {
        res.status(404);

        throw new Error("Not Found")
    }
})

const setGoal = asyncHandler(async (req, res) => {

    const gooalSet = await Goal.create({
        name: req.body.name,
        text: req.body.text,
        completed: req.body.completed
    });

    res.status(201).json(gooalSet)

    if (!gooalSet) {
        res.status(404);
        
        throw new Error("Not Found")
        
    }
    

});

const updateGoal = asyncHandler(async (req, res) => {

    const goalUpdate = await Goal.findById(req.params.id);
    
    if(!goalUpdate) return res.status(404).send({message: 'goal not registered'});

    const newGoalUpdate = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(newGoalUpdate)


})

const deleteGoal = asyncHandler(async (req, res) => {

    const goalDelete = await Goal.findById(req.params.id)
    if(!goalDelete) return res.status(404).send({message: 'Goal not found'})

    await Goal.findByIdAndDelete({_id: req.params.id})
    res.status(200).json('Goal deleted')

})

module.exports = {getGoal, setGoal, updateGoal, deleteGoal}
