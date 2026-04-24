const express = require('express');
const fs =require('fs');

const PORT = 7009;

const server = express();

// eg:1 watchman middleware
const watchman = (req, res, next) =>{
    if(3 + 3 == 6){
        res.send('Bye');
        console.log('Watchman middleware, if block invoked');
    }else{
        next();
        console.log('watchman middleware, else block and after next function invoked');
    }
};

// ex:2 auth middleware
const auth = (req, res, next) =>{
    const auth = true;
    if(!auth){
        res.send('Bye you are not authorize');
        console.log('Watchman middleware, if block invoked');
    }else{
        next();
        console.log('watchman middleware, else block and after next function invoked');
    }
};


const system = (req,res,next) => {
    const startTime = Date.now();
    console.log(`startTime:`,startTime);
    next();
    const endTime = Date.now();
    console.log(`endTime:`, endTime);
    console.log('deffer', endTime-startTime);
};
server.use(watchman, auth, system);

server.get('/', (req, res) => {
    console.log('home');
    res.send('home');
});

server.get('/notes', (req, res) =>{
    const fsData = fs.readFileSync('../Day_5/data.json', 'utf-8');
    console.log(fsData);
    console.log('e');

    res.send(fsData);
});

// start server part
server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    
});