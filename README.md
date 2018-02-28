# node-rest-shop

### Install Node

### initialize project
```
npm init -y // yes for for all
```
### install express
```
npm install express
```

### create server.js
```
const http = require('http');

// if enviromental variable not set usee 300 as default
const port = process.env.PORT || 3000;

// create server
const server = http.createServer();

// Listen to the server
server.listen(port);
```

### create app.js
```
const express = require('express');
// excute express
const app = express();

// add middle ware
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = app;
```

### run the app in the server
```
const http = require('http');
const app = require('./app');

// if enviromental variable not set usee 300 as default
const port = process.env.PORT || 3000;

// create server
const server = http.createServer(app);

// Listen to the server
server.listen(port);
```
### run the server
```
node server.js

go to http://localhost:3000/  will return: 

{
    "message": "It works!"
}
```

