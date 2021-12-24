const Shop = require('../shop');

exports.getShops = (filter) => {
  return Shop.find(filter);
};

exports.getShop = (shopId) => {
  return Shop.findById(shopId);
};
