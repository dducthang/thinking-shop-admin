const User = require("../user");

exports.getUser = (filter) => {
  return User.find(filter);
};
