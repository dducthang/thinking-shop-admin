const ShopService = require('../models/services/shopService');

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
