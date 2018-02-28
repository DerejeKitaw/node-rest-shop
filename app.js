const express = require('express');
// excute express
const app = express();
const morgan = require('morgan');
const bodyParsor = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev')); // need to be befor the route
// parse urlencoded bodies 
app.use(bodyParsor.urlencoded({extended: false}));
// parse json
app.use(bodyParsor.json());

// add middle ware
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Handle error caused by routes other than 'products' and 'order' routes
app.use((req, res, next) =>{
    const error = new Error('Note Found');
    error.status=404;
    next(error);
});

// Handle any error occure in the application other than route
// this error might be dueto database or any problem in the aplication
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
