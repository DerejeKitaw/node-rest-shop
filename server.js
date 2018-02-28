const http = require('http');
const app = require('./app');

// if enviromental variable not set usee 300 as default
const port = process.env.PORT || 3000;

// create server
const server = http.createServer(app);

// Listen to the server
server.listen(port);