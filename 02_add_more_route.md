### create api routes for get and post for products
```
const express = require('express');
const router = express.Router();

// router.get('/product') - we do not use products here so this module can be reusable
// we call products when we use this rout in app.js
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling GET erquest to /products'
    });
});
router.post('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling POST erquest to /products'
    });
});

module.exports = router;
```

### use /products rout inthe app
```
const express = require('express');
// excute express
const app = express();

const productRoutes = require('./api/routes/products');

// add middle ware
app.use('/products', productRoutes);

module.exports = app;
```
### run the server
```
node server.js
using postman GET http://localhost:3000/products  -- return
{
  "message": "Handling GET erquest to /products"
}
using postman POST http://localhost:3000/products  -- return
{
    "message": "Handling POST erquest to /products"
}

using postman PUT http://localhost:3000/products  -- return error

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Error</title>
    </head>
    <body>
        <pre>Cannot PUT /products</pre>
    </body>
</html>
```