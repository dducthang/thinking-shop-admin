exports.getShops = async (req, res, next) =>{
    res.render('main/shops')
}

exports.getLockedShops = async (req, res, next) =>{
    res.render('main/lockedShops')
}

exports.getShopDetail = async (req, res, next) =>{
    res.render('main/shopDetail')
}

exports.getShopProducts = async (req, res, next) =>{
    res.render('main/products')
}

exports.getShopProduct = async (req, res, next) =>{
    res.render('main/productDetail')
}
