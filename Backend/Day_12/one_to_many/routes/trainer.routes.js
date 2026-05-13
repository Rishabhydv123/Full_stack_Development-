const express = require('express');

const { trainerModel } = require('../model/trainer.model');

const trainerRoutes = express.Router();

trainerRoutes.post('/createTrainer', async (req, res) => {

    const trainerData = await trainerModel.create(req.body);

    res.send({ trainer: trainerData });
});

module.exports = { trainerRoutes };

/*

trainer schema

{
    name: "",
    employee_code: "",
    tech_stack: [""],
    exprerience: 2
}

*/