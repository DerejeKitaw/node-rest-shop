const express = require('express');
const router = express.Router();

// Handle incomming GET requests to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders was created'
    });
});
// Get information about individual order
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order detail',
        orderId: req.params.orderId
    });
});
// Delete individual order
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted'
    });
});
module.exports = router;
