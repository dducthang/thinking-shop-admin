const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shops');

router.get('/', shopController.getShops);
router.get('/locked', shopController.getLockedShops);
router.get('/:shopId', shopController.getShopDetail);
router.get('/:shopId/products', shopController.getShopProducts);
router.get('/:shopId/products/:productId', shopController.getShopProduct);

module.exports = router;