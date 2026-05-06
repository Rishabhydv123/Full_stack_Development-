const mongoose = require('mongoose');
require("dotenv").config();

const Connection = mongoose.connect(process.env.Mongoose_URL);

module.exports ={
     Connection, 

};