### create api routes for GET and POST for products
```
const express = require('express');
const router = express.Router();

// router.get('/product') - we do not use products here so this module can be reusable
// we call products when we use this route in app.js
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

### use /products route in the app
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

### get special products using id
```
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});
```
run the server
```
node server.js
using postman GET http://localhost:3000/products/123  -- return
{
    "message": "You passed an ID"
}

using postman GET http://localhost:3000/products/special 
```
![return](../../notes/img/GETResponse.png)

### Add path and delete route
```
router.patch('/:productId', (req, res, next) => {
    // notice we do not use return here. Because we do not have other code or do not respond two values
  res.status(200).json({
    message: 'Updated product',
  });
});
router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted Product',
  });
});
```
run the server
```
node server.js
using postman PATCH http://localhost:3000/products/123  -- return
{
    "message": "Updated product"
}
using postman DELETE http://localhost:3000/products/123  -- return
{
    "message": "Deleted Product"
}
```
