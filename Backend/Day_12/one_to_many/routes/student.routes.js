const express = require('express');

const { studentModel } = require('../model/student.model');
const { trainerModel } = require('../model/trainer.model');

const studentRoutes = express.Router();

studentRoutes.get('/', async (req, res) => {

    const studentData = await studentModel.find().populate('trainer_ID');

    res.send(studentData);
});

studentRoutes.post('/createStudent', async (req, res) => {

    try {

        const findTrainer = await trainerModel.find({
            tech_stack: req.body.batch
        });

        console.log(' ~ findTrainer:', findTrainer);

        const studentData = await studentModel.create({
            ...req.body,
            trainer_ID: findTrainer[0]._id,
        });

        res.send({ student: studentData, trainer: findTrainer });

    } catch (error) {

        console.log('🚀 ~ error:', error);
    }
});

module.exports = { studentRoutes };

/*

student schema:-

{
    "name":"rishab",
    "batch":"FSD",
    "time":11,
    "achivements":["mern","python","node"],
    "role":"student"
}

*/