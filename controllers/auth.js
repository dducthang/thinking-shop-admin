const UserService = require('../models/services/userServices');
const ShopService = require('../models/services/shopService');
const ProductService = require('../models/services/productService');

exports.getLogin = async (req, res, next) => {
  res.render('auth/login');
};

exports.getSignup = async (req, res, next) => {
  res.render('auth/signup');
};

exports.getForgotPassword = async (req, res, next) => {
  res.render('auth/forgotPassword');
};

exports.blockUser = async (req, res, next) => {
  await UserService.blockUser(req.params._id);
  res.status(200).redirect('/users');
};

exports.unblockUser = async (req, res, next) => {
  await UserService.unblockUser(req.params._id);
  res.status(200).redirect('/users/locked');
};

exports.blockShop = async (req, res, next) => {
  await ShopService.blockShop(req.params._id);
  await ProductService.blockShopProducts(req.params._id);
  res.status(200).redirect('/shops');
};

exports.unblockShop = async (req, res, next) => {
  await ShopService.unblockShop(req.params._id);
  await ProductService.unblockShopProducts(req.params._id);
  res.status(200).redirect('/shops/locked');
};
