const express = require('express');
const router = express.Router();

// router.get('/product')
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET erquest to /products'
  });
});
router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST erquest to /products'
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
module.exports = router;
