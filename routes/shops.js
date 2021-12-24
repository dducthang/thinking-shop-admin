const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shops');

router.get('/', shopController.getShopList);
router.get('/locked', shopController.getLockedShops);
router.get('/:shopId', shopController.getShopDetail);
router.get('/:shopId/products', shopController.getShopProducts);
router.get('/:shopId/products/:productId', shopController.getShopProductDetail);

module.exports = router;