const express = require('express')
const Workout = require('../models/WorkoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET a new workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)


//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a new workout
router.patch('/:id', updateWorkout)

module.exports = router