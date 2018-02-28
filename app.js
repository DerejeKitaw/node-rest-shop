const express = require('express');
// excute express
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev')); // need to be befor the route

// add middle ware
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
