const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.cresteserver((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');



})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });