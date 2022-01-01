const Account = require("../account");
const bcrypt = require("bcrypt");

exports.updatePassword = async (AccountId, password) => {
  const account = await Account.findById(AccountId);
  account.password = await bcrypt.hash(password, 10);
  return account.save();
};
