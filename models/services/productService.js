const Product = require('../product');

exports.countProducts = function countProducts(filters) {
  return Product.find(filters).countDocuments();
};

exports.getProducts = function getProducts(filters) {
  return Product.find(filters);
};

exports.getProductById = async function(productId){
  const product = await Product.findById(productId)
  return product;
}

exports.getProductByObId = async function(productObId){
  const product = await Product.findOne({_id:productObId});
  return product;
}

exports.getCategoriesQuantity = async function getCategoriesQuantity() {
  let catsQty = [];
  let cats = [];
  let sum = 0;
  cats = await Product.distinct('category');
  for (c of cats) {
    const quantity = await Product.count({ category: c });
    sum += quantity;
    catsQty.push({
      name: c,
      quantity,
    });
  }
  return { catsQty, sum };
};

exports.getAuthors = async function getAuthors() {
  return await Product.distinct('author');
};

exports.getPublisher= async function getPublisher() {
  return await Product.distinct('publisher');
};
