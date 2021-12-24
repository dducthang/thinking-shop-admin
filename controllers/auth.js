const UserService = require('../models/services/userServices');

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
