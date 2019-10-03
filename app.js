'use strict'

const httpp = require('http');

const port = process.env.PORT || 3000;
const hostname = 'localhost';

const server = httpp.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('App works!!!!!');
    console.log(req.headers);
});

server.listen(port, hostname, () => {
    console.log(`Running server at httpp://${hostname}:${port}`);
})

