const http = require('http');

const server = http.createServer((req, res) =>
{
    // console.log(req.url, req.method);
    // res.end('Hello Rishabh');
    if(req.url ==='/note'){
        res.end('note has been created..');
    }
   else if(req.url ==='/book'){
        res.end('harry potter..');
    }
    else if(req.url ==='/help'){
        res.end('how may i hel you..');
    }
     else {
        res.end('please select any path between [note, book, help')
     }
});

server.listen(7000, () => {
    console.log(`the port is running on 7000`);
    
});