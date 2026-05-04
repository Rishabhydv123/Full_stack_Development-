const mongoose = require("mongoose");

require('dotenv').config();

const connection = mongoose.connect(process.env.Mongoose_URL);

const userSchema = new mongoose.Schema(
    {
        name:String,
        age:Number,
        married:Boolean,
        organization:String,
        hobbies:Object,
    },
    {
        versionKey: false,
    },
);

const usermodel = new mongoose.model('user', userSchema);

module.exports = { connection, usermodel};