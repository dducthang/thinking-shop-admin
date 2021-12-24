const User = require('../user');

exports.getUsers = filter => {
  return User.find(filter);
};

exports.getUser = userId => {
  return User.findById(userId);
};

exports.blockUser = async userId => {
  const user = await User.findById(userId);
  user.isLock = true;
  return user.save();
};
exports.unblockUser = async userId => {
  const user = await User.findById(userId);
  user.isLock = false;
  return user.save();
};
