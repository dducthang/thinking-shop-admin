exports.getLockedProducts = async (req, res, next) =>{
    res.render('main/lockedProducts')
}

exports.getProductList = async (req, res, next) =>{
    res.render('main/products')
}

exports.getProductDetail = async (req, res, next) =>{
    res.render('main/productDetail')
}