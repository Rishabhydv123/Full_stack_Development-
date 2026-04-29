const express = require('express');
const cors = require('cors');


const PORT = 7090;
const server = express();


app.use(cors({
    origin: ['http://127.0.0.1:5500', '*'], 
    methods: ['GET'], 
})
);


server.get('/', (req, res) => {
    res.send('hello');
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});