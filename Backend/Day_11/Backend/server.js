const express = require('express');
require('dotenv').config();

// Routes
const { Connection } = require('./config/db');
const { authModel } = require('./model/Auth.model');
// const {} = require('./routes/Todo.routes');
// const {} = require('./routes/User.routes');

const app = express(); // express invoked creating server

// middleware for conversion of body coming from client side
app.use(express.json(), express.text());


// signup
app.post('/signup', async (req, res) => {
    console.log('🚀 ~ req.body:', req.body);

    if (
        req.body === undefined ||
        (!req.body.email && !req.body.password)
    ) {
        res.status(404).json({ msg: 'Not Found or undefined' });
    } else {
        const userDataSave = new authModel(req.body);

        console.log('🚀 ~ userDataSave:', userDataSave);

        await userDataSave.save();

        res
            .status(201)
            .send({ msg: 'created data in DB', data: userDataSave });
    }
});


// login
app.post('/login', (req, res) => {
    res.send('login');
});


// routing backend se.....


// server start
app.listen(process.env.PORT, async () => {
    try {
        await Connection;

        console.log('DB is Connected✅');
    } catch (err) {
        console.log('🚀 ~ err:', err);
        console.log('DB is disconnected !');
    } finally {
        console.log(`server is running on ${process.env.PORT}`);
    }
});