const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');

router.get('/', productController.getProductList);
router.get('/locked', productController.getLockedProducts);
router.get('/:productID', productController.getLockedProducts);

module.exports = router;