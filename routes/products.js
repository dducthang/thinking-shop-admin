const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');

router.get('/lockedProducts', productController.getLockedProducts);
router.get('/:productID', productController.getLockedProducts);

module.exports = router;