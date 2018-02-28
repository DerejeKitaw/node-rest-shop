const express = require('express');
const router = express.Router();


// router.get('/product')
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