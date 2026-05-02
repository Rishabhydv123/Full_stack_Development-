

const mongoose = require('mongoose');

const main = async () => {
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/Rishabh_db');

        console.log('DB is Connected ✅');

        const userData = new mainModel([
            {
                name: 'parru Don1',
                age: 100,
                married: false,
            }
        ]);

        // await userData.save();

        const data = await mainModel.find({ age: 100 });
        console.log('🚀 ~ data:', data);

        await (await connection).disconnect();

        console.log('DB is disconnected !');

        // console.log('this is connection', connection);

    } catch (error) {
        console.log('DB not Connected ❌');
        console.log('🚀 ~ error:', error);
    }
};


// Schema
const mainSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        married: Boolean,
    },
    {
        versionKey: false,
    }
);

// Model
const mainModel = new mongoose.model('user', mainSchema);

// Run function
main();