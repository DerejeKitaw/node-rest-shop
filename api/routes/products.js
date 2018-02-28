const express = require('express');
const router = express.Router();

// router.get('/product')
router.get('/', (req, res, next) => {
    
  res.status(200).json({
    message: 'Handling GET erquest to /products'
  });
});
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
  res.status(201).json({
    message: 'Handling POST erquest to /products',
    createdProduct: product
  });
});
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

module.exports = router;
