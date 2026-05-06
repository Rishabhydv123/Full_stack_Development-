const express = require('express');
require('dotenv').config();

const { connection, usermodel } = require('./db');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

// read
app.get('/user', async(req, res) =>{
    let userData = await usermodel.find();
    res.send({msg: 'data found', data: userData });
});

// create
app.post('/userCreate', async(req, res) =>{
    let value = req.body;
    let userData = await usermodel.insertOne(value);
    console.log(userData);
    res.send({msg: 'data Created', data: userData });
});

// update


app.listen(PORT, async () =>{
    try{
        await connection;
        console.log('Db is connection');
    } catch (error) {
        console.log(error);
        console.log('DB is disconnection!');
    } finally{
        console.log(`server is running on ${PORT}`);
        
    }
});
