const ShopService = require('../models/services/shopService');
const ProductService = require('../models/services/productService');

exports.getShopList = async (req, res, next) =>{
    const shops = await ShopService.getShops({isLock: false});
    res.render('main/shops', {shops});
}

exports.getLockedShops = async (req, res, next) =>{
    const lockedShops = await ShopService.getShops({isLock: true});
    res.render('main/lockedShops', {lockedShops});
}

exports.getShopDetail = async (req, res, next) =>{
    const shop = await ShopService.getShop(req.params.shopId);
    res.render('main/shopDetail', {shop});
}

exports.getShopProducts = async (req, res, next) =>{
    const products = await ProductService.getProducts({shopId: req.params.shopId});
    res.render('main/products', {products});
}

exports.getShopProductDetail = async (req, res, next) =>{
    const product = await ProductService.getProductById(req.params.productId);
    res.render('main/productDetail', {product});
}