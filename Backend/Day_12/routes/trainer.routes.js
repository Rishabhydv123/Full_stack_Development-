const express = require('express');
const { trainerModel } = require('../model/trainer.model');

const trainerRoutes = express.Router();

// read path="/trainer/"
trainerRoutes.get('/', async (req, res) => {
    const trainerData = await trainerModel.find();

    res.send({ msg: 'all trainer data', data: trainerData });
});

// create path="/trainer/createtrainer"
trainerRoutes.post('/createtrainer', async (req, res) => {
    const trainerDataSet = new trainerModel(req.body);

    await trainerDataSet.save();

    res.send(trainerDataSet);
});

// update
trainerRoutes.get('/', (req, res) => {});

// delete
trainerRoutes.get('/', (req, res) => {});

module.exports = { trainerRoutes };