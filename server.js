const http = require('http');

// if enviromental variable not set usee 300 as default
const port = process.env.PORT || 3000;

// create server
const server = http.createServer();

// Listen to the server
server.listen(port);