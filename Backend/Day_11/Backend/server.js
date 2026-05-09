// Server.js

const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Routes
const { Connection } = require('./config/db');
const { authModel } = require('./model/Auth.model');
const { TodoRoutes } = require('./routes/Todo.routes');
/*const {} = require('./routes/User.routes');*/

const app = express(); // express invoked creating server

// middleware for conversion of body comming from client side
app.use(express.json(), express.text(), cors());

// signup

app.post('/signup', async (req, res) => {
    console.log('🚀 ~ req.body:in signup block', req.body);

    if (
        req.body === undefined ||
        (!req.body.email && !req.body.password)
    ) {
        res.status(404).json({ msg: 'Not Found or undefined' });
    } else {
        const existDBemail = await authModel.find(
            {
                email: req.body.email,
            } || null,
        );

        if (req.body.email === existDBemail[0]?.email) {
            res.send('your are already exist in DB, please login... ');
        } else {
            const userDataSave = new authModel(req.body);

            // console.log('🚀 ~ userDataSave:', userDataSave);

            await userDataSave.save();

            res
                .status(201)
                .send({ msg: 'created data in DB', data: userDataSave });
        }
    }
});

// login

app.post('/login', async (req, res) => {
    if (
        req.body === undefined ||
        (!req.body.email && !req.body.password)
    ) {
        res.status(404).json({ msg: 'Not Found or undefined' });
    }

    // to check the user is present or not.

    const findUser_DB = await authModel.find({
        email: req.body.email,
    } || null);

    console.log('🚀 ~ findUser_DB:', findUser_DB);

    console.log(
        '🚀 ~ findUser_DB[0]:',
        findUser_DB[0]
    );

    if (findUser_DB.length > 0) {
        if (
            req.body.password === findUser_DB[0].password
        ) {
            res.send('profile matched');
        } else {
            res.send('incorrect password');
        }
    } else {
        res.send(
            'you should signup first becz your credintial is not present in DB',
        );
    }

    res.send('login');
});

// routing backend se....

app.use('/todo', TodoRoutes);

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