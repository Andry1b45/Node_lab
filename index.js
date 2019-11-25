'use strict';
const http = require('http');
const hostname = '0.0.0.0';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello there!\n');
});
server.listen(process.env.PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${process.env.PORT}/`);
});
