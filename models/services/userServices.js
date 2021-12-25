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
  //bên shop còn phải làm thêm 1 thứ nữa, nào làm xong hú Tùng nha Nguyên
  return user.save();
};
exports.unblockUser = async userId => {
  const user = await User.findById(userId);
  user.isLock = false;
  //bên shop còn phải làm thêm 1 thứ nữa, nào làm xong hú Tùng nha Nguyên
  return user.save();
};
