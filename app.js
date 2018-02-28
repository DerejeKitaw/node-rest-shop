const express = require('express');
// excute express
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// add middle ware
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
