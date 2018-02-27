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
