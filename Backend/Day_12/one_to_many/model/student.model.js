const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        trainer_ID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trainer',
        },

        name: String,
        batch: String,
        time: Number,
        achivements: [String],

        role: {
            type: String,
            eunm: ['student', 'trainer', 'admin'],
        },
    },
    {
        versionKey: false,
    }
);

const studentModel = mongoose.model('Student', studentSchema);

module.exports = { studentModel };