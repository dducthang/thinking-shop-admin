const Shop = require('../shop');

exports.getShops = (filter) => {
  return Shop.find(filter);
};

exports.getShop = (shopId) => {
  return Shop.findById(shopId);
};

exports.blockShop = async shopId => {
  const shop = await Shop.findById(shopId);
  shop.isLock = true;
  return shop.save();
};

exports.unblockShop = async shopId => {
  const shop = await Shop.findById(shopId);
  shop.isLock = false;
  return shop.save();
};