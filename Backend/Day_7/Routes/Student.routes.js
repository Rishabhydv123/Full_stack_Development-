const express = require('express');

const studentRoutes = express.Router();

studentRoutes.get('/', (req, res) => {
    res.send('student home page');
});

studentRoutes.get('/allData', (req, res) => {
    res.send('student all Data');
});

studentRoutes.get('./Student.routes.js', (req, res) => {
    res.send('only boy student name..... ');
});

module.exports = { studentRoutes };