const User = require("../user");

exports.getUsers = (filter) => {
  return User.find(filter);
};

exports.getUser = (userId) => {
  return User.findById(userId);
};
