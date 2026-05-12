const mongoose = require('mongoose');

const trainerSchema = mongoose.Schema(
    {
        employee_code: String,
        tech_stack: [String],
        exprerience: Number,
    },
    {
        versionKey: false,
    }
);

const trainerModel = mongoose.model('trainer', trainerSchema);

module.exports = { trainerModel };