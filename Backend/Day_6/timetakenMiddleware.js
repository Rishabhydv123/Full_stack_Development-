const express = require ('express');
const fs = require ('fs')
const PORT = 7090;

const server = express();

const watchman = (req,res,next) => {
    const startTime = Date.now();
    console.log(`startTime:`,startTime);
    next();
    const endTime = Date.now();
    console.log(`endTime:`, endTime);
    console.log('deffer', endTime-startTime);
};
server.use(watchman);


server.get('/',(req,res) =>{
    console.log("'home':", 'home');
    res.send('home');
});
server.get('/notes', (req,res) =>{
    const fsData = fs.readFileSync('../day-5/data.json', 'utf-8');
    console.log('fsData:',fsData);
    console.log('e');
    res.send(fsData) });

    server.listen(PORT,()=> {
    console.log(`server running on ${PORT}`);
});


