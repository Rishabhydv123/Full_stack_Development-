const express = require('express');
require('dotenv').config();

const { Connection } = require('./config/db');
const { studentRoutes } = require('./routes/students.routes');
const { trainerRoutes } = require('./routes/trainer.routes');

const app = express();

// middleware
app.use(express.json());

// Route
app.use('/student', studentRoutes);
app.use('/trainer', trainerRoutes);

app.listen(process.env.Port, async () => {
    try {
        await Connection;
        console.log('DB is successfully connected ✅');
    } catch (err) {
        console.log('DB is Faild to connect ❌');
    } finally {
        console.log(`port is running on ${process.env.Port}`);
    }
});