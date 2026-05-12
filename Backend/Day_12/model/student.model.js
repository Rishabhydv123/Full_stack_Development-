const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        user_ID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
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

const studentModel = mongoose.model('student', studentSchema);

module.exports = { studentModel };