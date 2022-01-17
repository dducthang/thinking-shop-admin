const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shops');

router.get('/', shopController.getShopList);
router.get('/locked', shopController.getLockedShops);
router.get('/:shopId([0-9a-fA-F]{24})', shopController.getShopDetail);
router.get('/:shopId([0-9a-fA-F]{24})/products', shopController.getShopProducts);
router.get('/:shopId([0-9a-fA-F]{24})/products/:productId([0-9a-fA-F]{24})', shopController.getShopProductDetail);

module.exports = router;