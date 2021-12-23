const Shop = require('../shop');

exports.getShops = (filter) => {
  return Shop.find(filter);
};