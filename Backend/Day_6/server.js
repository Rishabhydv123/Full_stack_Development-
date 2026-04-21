const express = require("express");
const fs = require("fs");

const PORT = 7080;

const server = express();

// first middleware
server.use((req, res, next) => {
    console.log('a');
    next();
    console.log('b');
});

// second middleware
server.use((req, res, next) => {
    console.log('c');
    next();
    console.log('d');
});

// home route
server.get('/', (req, res) => {
    console.log('home');
    res.send('home');
});

// notes route 

server.get('/notes', (req, res) => {
    const fsData = fs.readFileSync('../Day_5/data.json', 'utf-8');
        console.log(fsdata);
        console.log('e');
        res.send(fsData);
        
        


//     fs.readFile('../Day_5/data.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send('Error reading file');
//         }
//         console.log(data);
//         console.log('e');
//         res.send(data);
//     });
});

// start server
server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});













