const ProductService = require('../models/services/productService');
const ShopService = require('../models/services/shopService');

exports.getLockedProducts = async (req, res, next) =>{
    const lockedProducts = await ProductService.getProducts({isLock: true});
    res.render('main/lockedProducts', {lockedProducts});
}

exports.getProductList = async (req, res, next) =>{
    res.render('main/products')
}

exports.getProductDetail = async (req, res, next) =>{
    res.render('main/productDetail')
}