const express = require('express');
// excute express
const app = express();

const productRoutes = require('./api/routes/products');

// add middle ware
app.use('/products', productRoutes);

module.exports = app;
