const http = require('http');
const fs = require('fs');

const PORT = 7080;

const server = http.createServer((req, res) => {
    console.log('req:', req.url);

    if (req.url === '/notes') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello Khan</h1>');
    } 
    else if (req.url === '/data') {
        let data = fs.readFileSync('./index.html', { encoding: 'utf-8' });
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    } 
    else {
        res.end('Please select any path between [notes, data]');
    }
});

server.listen(PORT, () => {
    console.log(`The Port is running on ${PORT}`);
});