const ProductService = require('../models/services/productService');

exports.getLockedProducts = async (req, res, next) =>{
    const lockedProducts = await ProductService.getProducts({isLock: true});
    res.render('main/lockedProducts', {lockedProducts});
}
