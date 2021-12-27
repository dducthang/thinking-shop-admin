const Product = require('../product');

exports.getProducts = function getProducts(filters) {
  return Product.find(filters);
};

exports.getProductById = function(productId) {
  return Product.findById(productId);
}

exports.blockShopProducts = function blockShopProducts(shopId){
  return Product.updateMany({"shopId": shopId}, {"$set":{"isLock": true}});
};

exports.unblockShopProducts = function unblockShopProducts(shopId){
  return Product.updateMany({"shopId": shopId}, {"$set":{"isLock": false}});
};
